const state = {
  questionsData: null,
  rules: null,
  templates: null,
  questions: [],
  scoredQuestions: [],
  currentIndex: 0,
  answers: {},
  loadingStep: 0,
};

const sectionLabels = {
  basic: "基本情况",
  cognitive: "学习表现",
  affective: "学习感受",
  psychomotor: "执行习惯",
  mastery: "掌握条件",
  family: "家庭互动",
};

const transitionCopy = {
  cognitive: "已经了解孩子的大致情况，接下来看看他在学习任务中具体卡在哪里。",
  affective: "已经了解孩子的学习表现，接下来看看他面对学习时的感受。",
  psychomotor: "学习不只是会不会，也和愿不愿意、敢不敢尝试有关。接下来看看执行习惯。",
  mastery: "已经了解孩子的执行状态，接下来看看他是否获得了足够的学习支持。",
  family: "最后一部分，我们看看家庭反馈方式是否正在帮助孩子掌握。",
};

const views = {
  home: document.getElementById("homeView"),
  intro: document.getElementById("introView"),
  quiz: document.getElementById("quizView"),
  transition: document.getElementById("transitionView"),
  loading: document.getElementById("loadingView"),
  report: document.getElementById("reportView"),
};

const $ = (id) => document.getElementById(id);

async function init() {
  const bundled = window.APP_DATA;
  const [questionsData, rules, templates] = bundled
    ? [bundled.questionsData, bundled.rules, bundled.templates]
    : await Promise.all([
        fetch("./data/questions.v1.json").then((r) => r.json()),
        fetch("./data/diagnosis-rules.v1.json").then((r) => r.json()),
        fetch("./data/report-templates.v1.json").then((r) => r.json()),
      ]);

  state.questionsData = questionsData;
  state.rules = rules;
  state.templates = templates;
  state.questions = questionsData.questions;
  state.scoredQuestions = state.questions.filter((q) => q.scored !== false);

  $("startBtn").addEventListener("click", () => showView("intro"));
  $("beginQuizBtn").addEventListener("click", startQuiz);
  $("backQuestionBtn").addEventListener("click", previousQuestion);
  document.querySelectorAll("[data-action='home']").forEach((btn) => {
    btn.addEventListener("click", () => showView("home"));
  });
}

function showView(name) {
  Object.values(views).forEach((view) => view.classList.remove("active"));
  views[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function startQuiz() {
  state.currentIndex = 0;
  state.answers = {};
  renderQuestion();
  showView("quiz");
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  const scoredIndex = getScoredIndex(state.currentIndex);
  const total = state.scoredQuestions.length;
  const label = sectionLabels[question.section] || "测试";

  $("sectionLabel").textContent = label;
  $("progressText").textContent = question.scored === false
    ? `准备问题 ${state.currentIndex + 1} / 3`
    : `第 ${scoredIndex + 1} / ${total} 题`;
  $("progressBar").style.width = `${Math.max(3, ((state.currentIndex + 1) / state.questions.length) * 100)}%`;
  $("questionText").textContent = question.question;
  $("backQuestionBtn").style.visibility = state.currentIndex === 0 ? "hidden" : "visible";

  const optionsList = $("optionsList");
  optionsList.innerHTML = "";
  const saved = state.answers[question.id];
  const options = normalizeOptions(question.options);

  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.textContent = option.label;
    if (saved?.index === index) button.classList.add("selected");
    button.addEventListener("click", () => selectOption(question, option, index, button));
    optionsList.appendChild(button);
  });
}

function normalizeOptions(options) {
  return options.map((option, index) => {
    if (typeof option === "string") return { label: option, value: option, score: null, index };
    return { ...option, index };
  });
}

function selectOption(question, option, index, button) {
  document.querySelectorAll(".option-button").forEach((el) => el.classList.remove("selected"));
  button.classList.add("selected");
  state.answers[question.id] = {
    index,
    label: option.label,
    value: option.value ?? option.label,
    score: option.score ?? 0,
    section: question.section,
    dimensions: question.dimensions || [],
  };

  setTimeout(() => nextQuestion(), 180);
}

function nextQuestion() {
  const current = state.questions[state.currentIndex];
  if (state.currentIndex >= state.questions.length - 1) {
    showLoadingThenReport();
    return;
  }

  const next = state.questions[state.currentIndex + 1];
  state.currentIndex += 1;

  if (current.section !== next.section && transitionCopy[next.section]) {
    $("transitionText").textContent = transitionCopy[next.section];
    showView("transition");
    setTimeout(() => {
      renderQuestion();
      showView("quiz");
    }, 1300);
    return;
  }

  renderQuestion();
}

function previousQuestion() {
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  renderQuestion();
}

function getScoredIndex(index) {
  return state.questions.slice(0, index + 1).filter((q) => q.scored !== false).length - 1;
}

function showLoadingThenReport() {
  showView("loading");
  const steps = Array.from(document.querySelectorAll("#loadingSteps li"));
  steps.forEach((step) => step.classList.remove("active"));
  let i = 0;
  const timer = setInterval(() => {
    steps.forEach((step) => step.classList.remove("active"));
    steps[Math.min(i, steps.length - 1)].classList.add("active");
    i += 1;
    if (i > steps.length) {
      clearInterval(timer);
      renderReport();
      showView("report");
    }
  }, 650);
}

function calculateScores() {
  const raw = {};
  const max = {};

  state.questions.forEach((q) => {
    if (q.scored === false || !q.dimensions) return;
    const answer = state.answers[q.id];
    if (!answer) return;
    q.dimensions.forEach((dim) => {
      raw[dim] = (raw[dim] || 0) + answer.score;
      max[dim] = (max[dim] || 0) + 3;
    });
  });

  const normalized = {};
  Object.keys(max).forEach((dim) => {
    normalized[dim] = max[dim] ? raw[dim] / max[dim] : 0;
  });

  return { raw, max, normalized };
}

function avg(scores, keys) {
  const values = keys.map((key) => scores[key] || 0);
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function countAbove(scores, keys, threshold) {
  return keys.filter((key) => (scores[key] || 0) >= threshold).length;
}

function pickResultTypes(scores) {
  const candidates = new Set();

  if (avg(scores, ["AFF-REC", "AFF-RES", "AFF-VAL"]) >= 0.5 || (scores["AFF-VAL"] || 0) >= 0.75) candidates.add("learning_defense");
  if ((scores["FAM-FEED"] || 0) >= 0.5 || (scores["FAM-PRESS"] || 0) >= 0.5) candidates.add("family_pressure");
  if ((scores["MAST-PER"] || 0) >= 0.5) candidates.add("perseverance_damaged");
  if (countAbove(scores, ["MAST-APT", "MAST-QUAL", "MAST-UNDER", "MAST-TIME"], 0.5) >= 2) candidates.add("mastery_condition_gap");
  if ((scores["COG-APP"] || 0) >= 0.5) candidates.add("application_transfer_gap");
  if ((scores["COG-ANA"] || 0) >= 0.5) candidates.add("analysis_error_gap");
  if ((scores["COG-UND"] || 0) >= 0.5) candidates.add("understanding_gap");
  if ((scores["COG-EVA"] || 0) >= 0.5) candidates.add("evaluation_check_gap");
  if (avg(scores, ["PSY-PRE", "PSY-GUI", "PSY-MEC"]) >= 0.5) candidates.add("execution_habit_unstable");
  if ((scores["COG-MEM"] || 0) >= 0.5) candidates.add("memory_foundation_unstable");
  if ((scores["COG-CRE"] || 0) >= 0.5) candidates.add("creative_expression_gap");

  const ordered = state.rules.resultPriority.filter((type) => candidates.has(type));
  return ordered.slice(0, state.rules.maxPrimaryResults || 3);
}

function getLevel(score = 0) {
  const levels = state.rules.riskLevels;
  return levels.find((level) => score >= level.min && score <= level.max) || levels[0];
}

function pickOverallTemplate(types) {
  if (types.includes("learning_defense")) return state.templates.overallTemplates.learning_defense;
  if (types.includes("family_pressure")) return state.templates.overallTemplates.family_pressure;
  if (types.includes("execution_habit_unstable")) return state.templates.overallTemplates.execution_main;
  return state.templates.overallTemplates.cognitive_main;
}

function renderReport() {
  const { normalized } = calculateScores();
  const types = pickResultTypes(normalized);
  const primaryTypes = types.length ? types : ["mastery_condition_gap"];
  const content = $("reportContent");
  const answers = getBasicAnswers();

  content.innerHTML = `
    <section class="report-card">
      <span class="eyebrow">学习状态诊断报告</span>
      <h2>你家孩子当前最需要关注的是</h2>
      <p>${pickOverallTemplate(primaryTypes)}</p>
      <p class="tiny-note">主要场景：${answers.scene || "整体学习状态"}；持续时间：${answers.duration || "未填写"}。</p>
    </section>

    <section class="report-card">
      <h3>主要学习卡点</h3>
      ${primaryTypes.map((type) => renderResultCard(type)).join("")}
    </section>

    <section class="report-card">
      <h3>布鲁姆认知层级定位</h3>
      <p>这里不是评价孩子高低，而是看孩子学习时可能卡在哪一步。</p>
      ${renderCognitiveMetrics(normalized)}
    </section>

    <section class="report-card">
      <h3>学习感受与动机状态</h3>
      ${renderMetric("接收学习任务", normalized["AFF-REC"])}
      ${renderMetric("参与和尝试", normalized["AFF-RES"])}
      ${renderMetric("价值感与能力感", normalized["AFF-VAL"])}
      ${renderMetric("学习与娱乐组织", normalized["AFF-ORG"])}
    </section>

    <section class="report-card">
      <h3>掌握学习五变量分析</h3>
      <p>孩子没学会，不一定是能力差。还要看时间、讲法、任务理解、坚持性和补救机会。</p>
      ${renderMetric("能力倾向/所需时间", normalized["MAST-APT"])}
      ${renderMetric("教学质量适配", normalized["MAST-QUAL"])}
      ${renderMetric("理解教学能力", normalized["MAST-UNDER"])}
      ${renderMetric("坚持性", normalized["MAST-PER"])}
      ${renderMetric("允许学习时间", normalized["MAST-TIME"])}
    </section>

    <section class="report-card">
      <h3>家长容易误判的地方</h3>
      <ul class="plan-list">
        ${primaryTypes.map((type) => `<li>${state.templates.resultCards[type]?.misread || ""}</li>`).join("")}
      </ul>
    </section>

    <section class="report-card">
      <h3>接下来 7 天，可以这样做</h3>
      <ol class="plan-list">
        ${pickActionPlan(primaryTypes).map((item) => `<li>${stripDayPrefix(item)}</li>`).join("")}
      </ol>
    </section>

    <section class="report-card">
      <h3>可以这样和孩子说</h3>
      <ul class="script-list">
        ${pickScripts(primaryTypes).map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="report-card">
      <h3>温和提醒</h3>
      <p>${state.templates.footerReminder}</p>
      <div class="report-actions">
        <button class="secondary-button" id="restartBtn">重新测试</button>
        <button class="secondary-button" id="copyBtn">复制报告</button>
        <button class="primary-button full-width" id="homeAgainBtn">回到首页</button>
      </div>
    </section>
  `;

  $("restartBtn").addEventListener("click", startQuiz);
  $("homeAgainBtn").addEventListener("click", () => showView("home"));
  $("copyBtn").addEventListener("click", copyReportText);
}

function renderResultCard(type) {
  const card = state.templates.resultCards[type] || state.rules.resultTypes[type];
  return `
    <article class="result-card">
      <strong>${card.name || card.label}</strong>
      <p>${card.meaning || card.summary}</p>
      <p><b>第一建议：</b>${card.firstAction}</p>
    </article>
  `;
}

function renderCognitiveMetrics(scores) {
  return Object.entries(state.templates.cognitiveLevels)
    .map(([key, item]) => renderMetric(`${item.label}：${item.description}`, scores[key]))
    .join("");
}

function renderMetric(name, score = 0) {
  const level = getLevel(score || 0);
  const percent = Math.round((score || 0) * 100);
  return `
    <div class="metric-row">
      <div class="metric-head">
        <span class="metric-name">${name}</span>
        <span>${level.label}</span>
      </div>
      <div class="metric-track">
        <div class="metric-fill ${level.id}" style="width:${Math.max(4, percent)}%"></div>
      </div>
    </div>
  `;
}

function pickActionPlan(types) {
  if (types.includes("learning_defense")) return state.templates.actionPlans.learning_defense;
  if (types.includes("application_transfer_gap")) return state.templates.actionPlans.application_transfer_gap;
  return state.templates.actionPlans.general;
}

function pickScripts(types) {
  if (types.includes("family_pressure")) return state.templates.parentScripts.family_pressure;
  if (types.includes("learning_defense")) return state.templates.parentScripts.learning_defense;
  if (types.includes("application_transfer_gap")) return state.templates.parentScripts.application_transfer_gap;
  return state.templates.parentScripts.general;
}

function stripDayPrefix(item) {
  return item.replace(/^第\s*\d+\s*天[:：]\s*/, "");
}

function getBasicAnswers() {
  return {
    stage: state.answers.Q1?.label,
    scene: state.answers.Q2?.label,
    duration: state.answers.Q3?.label,
  };
}

async function copyReportText() {
  const text = $("reportContent").innerText;
  try {
    await navigator.clipboard.writeText(text);
    $("copyBtn").textContent = "已复制";
    setTimeout(() => ($("copyBtn").textContent = "复制报告"), 1500);
  } catch {
    alert("当前浏览器暂不支持复制，你可以手动选择报告文字。");
  }
}

init().catch((error) => {
  console.error(error);
  document.body.innerHTML = `
    <main class="app-shell padded-view">
      <section class="intro-card">
        <h1>加载失败</h1>
        <p>题库或诊断规则没有加载成功，请确认 data 文件夹完整。</p>
      </section>
    </main>
  `;
});
