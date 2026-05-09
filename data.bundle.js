window.APP_DATA = {
  "questionsData": {
    "title": "孩子学习状态诊断测试",
    "version": "1.0",
    "description": "基于布鲁姆学习发展模型的手机网页版综合测试题库。",
    "scale": {
      "default": [
        {
          "label": "基本没有问题",
          "score": 0
        },
        {
          "label": "偶尔出现",
          "score": 1
        },
        {
          "label": "经常出现",
          "score": 2
        },
        {
          "label": "非常明显",
          "score": 3
        }
      ]
    },
    "dimensions": {
      "COG-MEM": "认知：记忆",
      "COG-UND": "认知：理解",
      "COG-APP": "认知：应用",
      "COG-ANA": "认知：分析",
      "COG-EVA": "认知：评价",
      "COG-CRE": "认知：创造",
      "AFF-REC": "情感：接收",
      "AFF-RES": "情感：反应",
      "AFF-VAL": "情感：价值感",
      "AFF-ORG": "情感：组织",
      "PSY-PRE": "动作技能：准备",
      "PSY-GUI": "动作技能：有指导反应",
      "PSY-MEC": "动作技能：机械化/稳定执行",
      "MAST-APT": "掌握学习：能力倾向/所需时间",
      "MAST-QUAL": "掌握学习：教学质量",
      "MAST-UNDER": "掌握学习：理解教学能力",
      "MAST-PER": "掌握学习：坚持性",
      "MAST-TIME": "掌握学习：允许学习时间",
      "FAM-FEED": "家庭互动：反馈方式",
      "FAM-PRESS": "家庭互动：压力与比较"
    },
    "questions": [
      {
        "id": "Q1",
        "section": "basic",
        "type": "single",
        "scored": false,
        "question": "孩子目前大致处在哪个阶段？",
        "options": [
          "幼儿园阶段",
          "小学低年级",
          "小学高年级",
          "初中阶段",
          "高中阶段"
        ]
      },
      {
        "id": "Q2",
        "section": "basic",
        "type": "single",
        "scored": false,
        "question": "你现在最想解决的问题是哪一类？",
        "options": [
          "作业拖拉、磨蹭",
          "会背但不会用",
          "听懂但做题总错",
          "阅读理解或写作困难",
          "数学应用题困难",
          "厌学、抗拒学习",
          "粗心、反复错",
          "害怕失败、不敢尝试",
          "我也说不清，想整体判断"
        ]
      },
      {
        "id": "Q3",
        "section": "basic",
        "type": "single",
        "scored": false,
        "question": "这个问题大概持续多久了？",
        "options": [
          "最近一两周才明显",
          "持续 1-3 个月",
          "持续半年以上",
          "一直都有，只是最近更明显"
        ]
      },
      {
        "id": "Q4",
        "section": "cognitive",
        "dimensions": [
          "COG-MEM"
        ],
        "question": "孩子能否记住基本概念、公式、词语或步骤？",
        "options": [
          {
            "label": "基本能记住",
            "score": 0
          },
          {
            "label": "偶尔会忘",
            "score": 1
          },
          {
            "label": "经常记混或记不住",
            "score": 2
          },
          {
            "label": "基础内容很难稳定记住",
            "score": 3
          }
        ]
      },
      {
        "id": "Q5",
        "section": "cognitive",
        "dimensions": [
          "COG-UND"
        ],
        "question": "孩子背过或学过后，能不能用自己的话讲出来？",
        "options": [
          {
            "label": "通常能讲清楚",
            "score": 0
          },
          {
            "label": "有时能讲清楚",
            "score": 1
          },
          {
            "label": "经常只能背，讲不明白",
            "score": 2
          },
          {
            "label": "基本讲不出自己的理解",
            "score": 3
          }
        ]
      },
      {
        "id": "Q6",
        "section": "cognitive",
        "dimensions": [
          "COG-APP"
        ],
        "question": "老师或家长讲完例题后，换一道类似题，孩子能独立完成吗？",
        "options": [
          {
            "label": "基本可以",
            "score": 0
          },
          {
            "label": "有时可以",
            "score": 1
          },
          {
            "label": "经常换题就不会",
            "score": 2
          },
          {
            "label": "几乎只能照着例题做",
            "score": 3
          }
        ]
      },
      {
        "id": "Q7",
        "section": "cognitive",
        "dimensions": [
          "COG-APP",
          "MAST-UNDER"
        ],
        "question": "孩子做题或完成任务时，能不能说出“第一步要做什么”？",
        "options": [
          {
            "label": "通常知道先做什么",
            "score": 0
          },
          {
            "label": "偶尔需要提醒",
            "score": 1
          },
          {
            "label": "经常不知道从哪里开始",
            "score": 2
          },
          {
            "label": "一看到任务就乱，不知道怎么进入",
            "score": 3
          }
        ]
      },
      {
        "id": "Q8",
        "section": "cognitive",
        "dimensions": [
          "COG-ANA"
        ],
        "question": "孩子做错后，能不能说出自己错在哪里？",
        "options": [
          {
            "label": "通常能说出错因",
            "score": 0
          },
          {
            "label": "有时能说出",
            "score": 1
          },
          {
            "label": "经常只知道错了，但不知道为什么",
            "score": 2
          },
          {
            "label": "基本说不出错因",
            "score": 3
          }
        ]
      },
      {
        "id": "Q9",
        "section": "cognitive",
        "dimensions": [
          "COG-EVA"
        ],
        "question": "遇到两种解法或两种答案时，孩子能不能判断哪一种更合理？",
        "options": [
          {
            "label": "通常能说明理由",
            "score": 0
          },
          {
            "label": "有时能判断",
            "score": 1
          },
          {
            "label": "经常只能猜",
            "score": 2
          },
          {
            "label": "基本不会判断",
            "score": 3
          }
        ]
      },
      {
        "id": "Q10",
        "section": "cognitive",
        "dimensions": [
          "COG-CRE"
        ],
        "question": "孩子能不能自己举例、出题、设计小方案或用学过的内容表达新想法？",
        "options": [
          {
            "label": "经常可以",
            "score": 0
          },
          {
            "label": "偶尔可以",
            "score": 1
          },
          {
            "label": "需要大人提示才可以",
            "score": 2
          },
          {
            "label": "几乎不会主动生成",
            "score": 3
          }
        ]
      },
      {
        "id": "Q11",
        "section": "cognitive",
        "dimensions": [
          "COG-APP",
          "COG-ANA"
        ],
        "question": "孩子遇到新情境时，能不能把学过的方法迁移过去？",
        "options": [
          {
            "label": "基本能迁移",
            "score": 0
          },
          {
            "label": "简单变化可以",
            "score": 1
          },
          {
            "label": "变化稍大就困难",
            "score": 2
          },
          {
            "label": "几乎只能做原题型",
            "score": 3
          }
        ]
      },
      {
        "id": "Q12",
        "section": "affective",
        "dimensions": [
          "AFF-REC"
        ],
        "question": "孩子看到某类学习任务时，会不会立刻烦躁、抗拒或逃避？",
        "options": [
          {
            "label": "基本不会",
            "score": 0
          },
          {
            "label": "偶尔会",
            "score": 1
          },
          {
            "label": "经常会",
            "score": 2
          },
          {
            "label": "非常明显，一看到就排斥",
            "score": 3
          }
        ]
      },
      {
        "id": "Q13",
        "section": "affective",
        "dimensions": [
          "AFF-RES"
        ],
        "question": "孩子在学习中愿不愿意提问、回答或尝试？",
        "options": [
          {
            "label": "比较愿意",
            "score": 0
          },
          {
            "label": "有时愿意",
            "score": 1
          },
          {
            "label": "经常不愿意",
            "score": 2
          },
          {
            "label": "几乎不愿意参与",
            "score": 3
          }
        ]
      },
      {
        "id": "Q14",
        "section": "affective",
        "dimensions": [
          "AFF-VAL",
          "MAST-PER"
        ],
        "question": "孩子是否常说“我就是不会”“我不行”“我学不好”？",
        "options": [
          {
            "label": "基本不说",
            "score": 0
          },
          {
            "label": "偶尔说",
            "score": 1
          },
          {
            "label": "经常说",
            "score": 2
          },
          {
            "label": "已经成了固定口头禅",
            "score": 3
          }
        ]
      },
      {
        "id": "Q15",
        "section": "affective",
        "dimensions": [
          "AFF-RES",
          "FAM-PRESS"
        ],
        "question": "孩子是否害怕出错，宁愿不做也不想尝试？",
        "options": [
          {
            "label": "基本不会",
            "score": 0
          },
          {
            "label": "偶尔会",
            "score": 1
          },
          {
            "label": "经常会",
            "score": 2
          },
          {
            "label": "很明显，错误让他非常紧张",
            "score": 3
          }
        ]
      },
      {
        "id": "Q16",
        "section": "affective",
        "dimensions": [
          "AFF-VAL",
          "MAST-PER"
        ],
        "question": "孩子是否能从学习中感到“我有进步”？",
        "options": [
          {
            "label": "经常能感到",
            "score": 0
          },
          {
            "label": "偶尔能感到",
            "score": 1
          },
          {
            "label": "很少感到",
            "score": 2
          },
          {
            "label": "几乎没有这种体验",
            "score": 3
          }
        ]
      },
      {
        "id": "Q17",
        "section": "affective",
        "dimensions": [
          "AFF-ORG"
        ],
        "question": "孩子能不能在学习和娱乐之间做一些基本安排？",
        "options": [
          {
            "label": "基本可以",
            "score": 0
          },
          {
            "label": "偶尔需要提醒",
            "score": 1
          },
          {
            "label": "经常需要大人盯着",
            "score": 2
          },
          {
            "label": "完全靠外部催促",
            "score": 3
          }
        ]
      },
      {
        "id": "Q18",
        "section": "psychomotor",
        "dimensions": [
          "PSY-PRE"
        ],
        "question": "开始学习前，孩子能否准备好文具、材料和学习环境？",
        "options": [
          {
            "label": "基本可以",
            "score": 0
          },
          {
            "label": "偶尔遗漏",
            "score": 1
          },
          {
            "label": "经常需要提醒",
            "score": 2
          },
          {
            "label": "几乎每次都混乱",
            "score": 3
          }
        ]
      },
      {
        "id": "Q19",
        "section": "psychomotor",
        "dimensions": [
          "PSY-GUI",
          "PSY-MEC"
        ],
        "question": "孩子能不能按步骤完成任务，而不是想到哪做到哪？",
        "options": [
          {
            "label": "基本能按步骤",
            "score": 0
          },
          {
            "label": "简单任务可以",
            "score": 1
          },
          {
            "label": "经常跳步或漏步",
            "score": 2
          },
          {
            "label": "很难形成步骤感",
            "score": 3
          }
        ]
      },
      {
        "id": "Q20",
        "section": "psychomotor",
        "dimensions": [
          "PSY-MEC",
          "COG-EVA"
        ],
        "question": "孩子完成作业或任务后，会不会主动检查？",
        "options": [
          {
            "label": "通常会",
            "score": 0
          },
          {
            "label": "偶尔会",
            "score": 1
          },
          {
            "label": "经常不检查",
            "score": 2
          },
          {
            "label": "几乎完全不检查",
            "score": 3
          }
        ]
      },
      {
        "id": "Q21",
        "section": "psychomotor",
        "dimensions": [
          "PSY-MEC"
        ],
        "question": "孩子对已经练过的流程，能不能逐渐变得稳定熟练？",
        "options": [
          {
            "label": "能明显变熟练",
            "score": 0
          },
          {
            "label": "有一点变熟练",
            "score": 1
          },
          {
            "label": "进步不稳定",
            "score": 2
          },
          {
            "label": "练过多次仍然很不稳定",
            "score": 3
          }
        ]
      },
      {
        "id": "Q22",
        "section": "psychomotor",
        "dimensions": [
          "PSY-MEC",
          "COG-APP"
        ],
        "question": "任务形式稍微变化时，孩子是否容易失去原有步骤？",
        "options": [
          {
            "label": "基本不会",
            "score": 0
          },
          {
            "label": "偶尔会",
            "score": 1
          },
          {
            "label": "经常会",
            "score": 2
          },
          {
            "label": "一变化就完全乱",
            "score": 3
          }
        ]
      },
      {
        "id": "Q23",
        "section": "mastery",
        "dimensions": [
          "MAST-APT",
          "MAST-TIME"
        ],
        "question": "对孩子来说，某些内容是否需要比别人更多时间才能掌握？",
        "options": [
          {
            "label": "基本不需要",
            "score": 0
          },
          {
            "label": "偶尔需要",
            "score": 1
          },
          {
            "label": "经常需要",
            "score": 2
          },
          {
            "label": "明显需要更多时间",
            "score": 3
          }
        ]
      },
      {
        "id": "Q24",
        "section": "mastery",
        "dimensions": [
          "MAST-QUAL"
        ],
        "question": "当一种讲法没听懂时，换一种例子、图示或操作方式，孩子是否会更容易理解？",
        "options": [
          {
            "label": "换不换差别不大",
            "score": 0
          },
          {
            "label": "有时有帮助",
            "score": 1
          },
          {
            "label": "经常明显有帮助",
            "score": 2
          },
          {
            "label": "换方式后差别非常大",
            "score": 3
          }
        ],
        "note": "此题高分不代表问题严重，而是提示教学方式适配度很重要。"
      },
      {
        "id": "Q25",
        "section": "mastery",
        "dimensions": [
          "MAST-UNDER"
        ],
        "question": "孩子是否常常不是不会知识，而是不明白题目或任务到底要求什么？",
        "options": [
          {
            "label": "基本不会",
            "score": 0
          },
          {
            "label": "偶尔会",
            "score": 1
          },
          {
            "label": "经常会",
            "score": 2
          },
          {
            "label": "非常明显",
            "score": 3
          }
        ]
      },
      {
        "id": "Q26",
        "section": "mastery",
        "dimensions": [
          "MAST-TIME",
          "FAM-FEED"
        ],
        "question": "孩子一次没学会后，家里是否有机会让他补救、再练、再证明自己会了？",
        "options": [
          {
            "label": "经常有",
            "score": 0
          },
          {
            "label": "有时有",
            "score": 1
          },
          {
            "label": "很少有",
            "score": 2
          },
          {
            "label": "基本没有，错了就被批评或跳过去",
            "score": 3
          }
        ]
      },
      {
        "id": "Q27",
        "section": "mastery",
        "dimensions": [
          "MAST-PER"
        ],
        "question": "孩子遇到困难时，是否很快放弃，不愿继续尝试？",
        "options": [
          {
            "label": "基本不会",
            "score": 0
          },
          {
            "label": "偶尔会",
            "score": 1
          },
          {
            "label": "经常会",
            "score": 2
          },
          {
            "label": "很明显，稍难就放弃",
            "score": 3
          }
        ]
      },
      {
        "id": "Q28",
        "section": "mastery",
        "dimensions": [
          "MAST-QUAL",
          "MAST-UNDER"
        ],
        "question": "孩子的学习问题是否在获得具体帮助后会明显改善？",
        "options": [
          {
            "label": "改善很明显",
            "score": 0
          },
          {
            "label": "有一定改善",
            "score": 1
          },
          {
            "label": "改善不稳定",
            "score": 2
          },
          {
            "label": "几乎没有改善",
            "score": 3
          }
        ]
      },
      {
        "id": "Q29",
        "section": "family",
        "dimensions": [
          "FAM-FEED"
        ],
        "question": "孩子做错时，家里通常更关注“错在哪里”，还是更容易直接批评？",
        "options": [
          {
            "label": "通常会一起分析错因",
            "score": 0
          },
          {
            "label": "有时会分析，有时会批评",
            "score": 1
          },
          {
            "label": "经常先批评",
            "score": 2
          },
          {
            "label": "基本就是批评、催促或责备",
            "score": 3
          }
        ]
      },
      {
        "id": "Q30",
        "section": "family",
        "dimensions": [
          "FAM-PRESS"
        ],
        "question": "家长是否经常把孩子和别人比较？",
        "options": [
          {
            "label": "基本不会",
            "score": 0
          },
          {
            "label": "偶尔会",
            "score": 1
          },
          {
            "label": "经常会",
            "score": 2
          },
          {
            "label": "几乎每次学习问题都会比较",
            "score": 3
          }
        ]
      },
      {
        "id": "Q31",
        "section": "family",
        "dimensions": [
          "FAM-PRESS",
          "AFF-VAL"
        ],
        "question": "家长在辅导时，是否会把孩子的错误说成“笨、懒、不认真、不争气”？",
        "options": [
          {
            "label": "基本不会",
            "score": 0
          },
          {
            "label": "偶尔会",
            "score": 1
          },
          {
            "label": "经常会",
            "score": 2
          },
          {
            "label": "情绪上来时很难控制，经常这样说",
            "score": 3
          }
        ]
      },
      {
        "id": "Q32",
        "section": "family",
        "dimensions": [
          "FAM-FEED"
        ],
        "question": "家长是否愿意把目标从“多做题、多花时间”调整为“找到卡点、具体补救、确认掌握”？",
        "options": [
          {
            "label": "很愿意",
            "score": 0
          },
          {
            "label": "可以尝试",
            "score": 1
          },
          {
            "label": "有点难，还是习惯催促",
            "score": 2
          },
          {
            "label": "很难改变，主要还是看分数和速度",
            "score": 3
          }
        ]
      }
    ]
  },
  "rules": {
    "version": "1.0",
    "riskLevels": [
      {
        "id": "stable",
        "label": "稳定",
        "min": 0,
        "max": 0.249
      },
      {
        "id": "light",
        "label": "轻度关注",
        "min": 0.25,
        "max": 0.499
      },
      {
        "id": "moderate",
        "label": "明显关注",
        "min": 0.5,
        "max": 0.749
      },
      {
        "id": "high",
        "label": "高度关注",
        "min": 0.75,
        "max": 1
      }
    ],
    "resultPriority": [
      "learning_defense",
      "family_pressure",
      "perseverance_damaged",
      "mastery_condition_gap",
      "application_transfer_gap",
      "analysis_error_gap",
      "understanding_gap",
      "evaluation_check_gap",
      "execution_habit_unstable",
      "memory_foundation_unstable",
      "creative_expression_gap"
    ],
    "maxPrimaryResults": 3,
    "resultTypes": {
      "memory_foundation_unstable": {
        "label": "记忆基础不稳型",
        "trigger": "COG-MEM >= 0.5",
        "summary": "孩子基础概念、公式、词语或步骤提取不稳定，后续理解和应用容易被拖住。",
        "parentMisread": "容易被误判为不认真或不用心，其实更可能是基础提取还不稳定。",
        "firstAction": "先减少难题和大题量，用卡片、口头复述、间隔复习巩固少量关键内容。"
      },
      "understanding_gap": {
        "label": "理解不足型",
        "trigger": "COG-UND >= 0.5",
        "summary": "孩子可能能背出内容，但还不能用自己的话解释，说明意义连接还不够。",
        "parentMisread": "容易把“讲不清”误判为背得不熟，实际需要检查是否真正理解。",
        "firstAction": "让孩子用自己的话讲、画图、举例，必要时让孩子教给家长。"
      },
      "application_transfer_gap": {
        "label": "应用迁移困难型",
        "trigger": "COG-APP >= 0.5",
        "summary": "孩子不是完全不会，而是从理解到应用之间断了，换题或换情境后容易卡住。",
        "parentMisread": "容易被误判为粗心或没举一反三，其实需要搭建从例题到变式的桥。",
        "firstAction": "做例题对比和少量变式练习，让孩子说出为什么这道题能用这个方法。"
      },
      "analysis_error_gap": {
        "label": "分析错因困难型",
        "trigger": "COG-ANA >= 0.5",
        "summary": "孩子知道自己错了，但不清楚错在哪里，错题难以转化为进步。",
        "parentMisread": "容易被误判为态度不好，其实孩子缺的是拆解和归因方法。",
        "firstAction": "建立错题分类：概念、审题、步骤、计算、表达、情绪，每次只处理一个错因。"
      },
      "evaluation_check_gap": {
        "label": "评价检查薄弱型",
        "trigger": "COG-EVA >= 0.5",
        "summary": "孩子不太会判断答案是否合理，也不擅长检查自己的过程。",
        "parentMisread": "容易被误判为粗心，其实孩子可能缺少明确检查标准。",
        "firstAction": "提供检查清单，让孩子比较两种解法，并说出判断依据。"
      },
      "creative_expression_gap": {
        "label": "创造表达不足型",
        "trigger": "COG-CRE >= 0.5",
        "summary": "孩子不太会主动举例、出题、设计方案或生成自己的表达。",
        "parentMisread": "容易被误判为没想象力，其实创造需要基础知识、模板和低压力尝试空间。",
        "firstAction": "先给模板，再逐步撤掉模板，鼓励改编题目、举例和表达新想法。"
      },
      "learning_defense": {
        "label": "学习防御型",
        "trigger": "average(AFF-REC,AFF-RES,AFF-VAL) >= 0.5 OR AFF-VAL >= 0.75",
        "summary": "孩子的问题不只是不会，可能已经把某类学习任务和压力、失败、羞耻绑定。",
        "parentMisread": "容易被误判为懒、态度差或故意逃避，但逃避可能是一种自我保护。",
        "firstAction": "先降低压力入口，不立刻加量，从最小可成功任务重建掌握感。"
      },
      "execution_habit_unstable": {
        "label": "执行习惯不稳型",
        "trigger": "average(PSY-PRE,PSY-GUI,PSY-MEC) >= 0.5",
        "summary": "孩子可能知道要学什么，但准备、步骤、检查和稳定执行不足。",
        "parentMisread": "容易被误判为拖拉或不自觉，其实需要流程支持和动作习惯训练。",
        "firstAction": "建立开始仪式、步骤卡和检查清单，先练流程，再追求速度。"
      },
      "mastery_condition_gap": {
        "label": "掌握条件不足型",
        "trigger": "count([MAST-APT,MAST-QUAL,MAST-UNDER,MAST-TIME] >= 0.5) >= 2",
        "summary": "孩子没掌握不一定是能力差，可能是时间、材料、讲法、任务理解或补救机会不足。",
        "parentMisread": "容易被误判为孩子学不会，其实更需要检查学习条件是否合适。",
        "firstAction": "换讲法、补任务理解、给再尝试机会，用形成性评价定位问题。"
      },
      "perseverance_damaged": {
        "label": "坚持性受损型",
        "trigger": "MAST-PER >= 0.5",
        "summary": "孩子可能因长期失败而减少投入，放弃不一定是懒，而可能是自我保护。",
        "parentMisread": "容易被误判为没有毅力，其实需要先恢复努力有效的体验。",
        "firstAction": "降低任务起点，让孩子快速获得小成功，并记录掌握证据。"
      },
      "family_pressure": {
        "label": "家庭反馈压力型",
        "trigger": "FAM-FEED >= 0.5 OR FAM-PRESS >= 0.5",
        "summary": "家庭反馈方式可能正在放大学习压力，使孩子更难进入学习。",
        "parentMisread": "家长可能以为自己是在督促，孩子感受到的却可能是比较、否定和压力。",
        "firstAction": "减少人格评价和比较，把催促换成具体步骤反馈。"
      }
    },
    "reportSections": [
      "总体判断",
      "主要问题解释",
      "布鲁姆认知层级定位",
      "情感状态判断",
      "掌握学习五变量分析",
      "家庭指导建议",
      "一周行动计划",
      "家长话术"
    ],
    "toneRules": {
      "avoid": [
        "孩子能力差",
        "智力不足",
        "没有天赋",
        "家长教育失败",
        "问题严重",
        "必须立刻纠正"
      ],
      "prefer": [
        "当前更需要关注",
        "可能卡在某个学习环节",
        "可以通过具体支持改善",
        "建议先从小目标开始",
        "这不是给孩子贴标签，而是帮助家长找到支持路径"
      ]
    }
  },
  "templates": {
    "version": "1.0",
    "title": "学习状态诊断报告",
    "subtitle": "基于你的回答，我们从学习表现、学习感受、执行习惯、掌握条件和家庭互动五个方面进行了整理。",
    "disclaimer": "本报告不是医学诊断，也不是智力测评，而是帮助家长找到更合适的学习支持路径。",
    "overallTemplates": {
      "learning_defense": "根据你的回答，孩子当前最需要关注的不是单纯“会不会”，而是他面对某些学习任务时已经出现了明显压力或回避。接下来不建议一开始就增加题量或提高要求，而是先降低学习入口，帮助孩子重新获得“我能学会一点”的掌握感。",
      "cognitive_main": "根据你的回答，孩子当前更像是卡在具体学习环节，而不是整体学习能力差。孩子可能已经掌握了一部分内容，但从“知道”到“会用”、从“做错”到“知道为什么错”之间还缺少稳定桥梁。",
      "execution_main": "根据你的回答，孩子目前的主要困难不一定是知识不会，而是准备、步骤、检查和稳定执行还不够。这类问题不适合只用催促解决，更适合用固定流程、步骤卡和检查清单来帮助孩子把学习过程稳定下来。",
      "family_pressure": "根据你的回答，家庭反馈方式可能正在影响孩子的学习状态。家长的出发点通常是希望孩子更好，但如果反馈中包含较多批评、比较或人格评价，孩子可能会更紧张、更回避，也更难进入真正思考。"
    },
    "resultCards": {
      "memory_foundation_unstable": {
        "name": "记忆基础不稳",
        "meaning": "孩子在基本概念、公式、词语或步骤的提取上还不稳定。后续理解、应用和分析都会建立在这些基础之上，如果基础提取不顺，孩子做题时会消耗大量注意力。",
        "misread": "容易被误判为“不认真”或“背得不够多”。但真正需要看的，是孩子能否稳定、准确、低负担地提取关键内容。",
        "firstAction": "先减少难题和大题量，把每天目标缩小到 3-5 个关键点，用口头复述、卡片、间隔复习来巩固。"
      },
      "understanding_gap": {
        "name": "会背但还没有真正理解",
        "meaning": "孩子可能能背出内容，但不能用自己的话讲清楚，也不能举例说明。这说明知识还停留在外部记忆，没有进入自己的理解系统。",
        "misread": "容易认为孩子只是背得不熟，于是继续要求多背。但如果没有理解，多背也未必能解决应用问题。",
        "firstAction": "每学完一个知识点，都让孩子用自己的话讲一遍，并要求举一个生活例子或画一张小图。"
      },
      "application_transfer_gap": {
        "name": "听懂了，但换题不会用",
        "meaning": "孩子可能能听懂讲解，也能照着例题做，但换一道类似题就卡住。这说明孩子从理解到应用之间还没有建立稳定桥梁。",
        "misread": "容易被误判为“粗心”或“不会举一反三”。实际上，孩子可能缺少从例题到变式题的过渡训练。",
        "firstAction": "不要立刻大量刷题。先做“例题对比”：让孩子说出两道题哪里一样、哪里不同、为什么可以用同一种方法。"
      },
      "analysis_error_gap": {
        "name": "知道错了，但不知道为什么错",
        "meaning": "孩子做错后，可能只知道答案不对，却说不出错在概念、审题、步骤、计算还是表达。这会导致错题无法转化为进步。",
        "misread": "容易被误判为态度不好，实际上孩子可能缺少分析错误的工具。",
        "firstAction": "建立错题分类表，每次错题只问一个问题：“这次错因属于哪一类？”"
      },
      "evaluation_check_gap": {
        "name": "不太会检查和判断答案",
        "meaning": "孩子可能做完题后不知道答案是否合理，也不清楚该检查什么。这类问题常被表面看成粗心。",
        "misread": "容易被误判为“你就是不检查”。但孩子可能不是不想检查，而是不知道检查标准。",
        "firstAction": "给孩子一张检查清单，例如：题目问什么、单位是否一致、步骤是否完整、答案是否合理。"
      },
      "creative_expression_gap": {
        "name": "不太会主动生成表达",
        "meaning": "孩子在自己举例、出题、设计方案、表达新想法时比较困难。这并不代表没有创造力，而是可能缺少素材、模板和低压力尝试机会。",
        "misread": "容易被误判为“没想象力”。但创造不是凭空产生，而是建立在记忆、理解、应用和评价基础上。",
        "firstAction": "先给模板，让孩子做小改编，再逐步过渡到自己生成。"
      },
      "learning_defense": {
        "name": "学习已经带来压力预期",
        "meaning": "孩子可能已经把某些学习任务和失败、批评、羞耻或无力感联系在一起。一看到类似任务，就先烦躁、逃避或否定自己。",
        "misread": "容易被误判为“懒”或“态度差”。但很多时候，逃避是孩子保护自尊的一种方式。",
        "firstAction": "先不要增加任务量。选择一个很小、孩子有可能成功的任务，让他重新体验“我能学会一点”。"
      },
      "execution_habit_unstable": {
        "name": "学习流程不够稳定",
        "meaning": "孩子可能知道要做什么，但在准备、按步骤完成、检查和保持稳定方面有困难。",
        "misread": "容易被误判为拖拉、不自觉。实际上，这类问题更需要流程支持，而不是单纯催促。",
        "firstAction": "建立固定学习流程：准备材料、看任务、说第一步、完成、检查、收尾。先把流程练稳定。"
      },
      "mastery_condition_gap": {
        "name": "还没有获得足够合适的掌握条件",
        "meaning": "孩子没学会，不一定是能力差，也可能是时间、讲法、材料、任务理解或补救机会不足。",
        "misread": "容易把“还没掌握”理解成“学不会”。布鲁姆的掌握学习提醒我们，大多数孩子需要的是更适配的条件。",
        "firstAction": "当一种讲法无效时，不要只提高音量或重复同样解释，可以换图示、例子、操作材料或小步骤。"
      },
      "perseverance_damaged": {
        "name": "遇到困难时容易放弃",
        "meaning": "孩子可能因为长期失败，逐渐不相信努力有用，所以遇到困难时很快退出来。",
        "misread": "容易被误判为没有毅力。但如果孩子长期体验不到进步，坚持性自然会下降。",
        "firstAction": "从最小可成功任务开始，让孩子在 10-15 分钟内看到具体进步。"
      },
      "family_pressure": {
        "name": "家庭反馈可能带来额外压力",
        "meaning": "家长的出发点通常是希望孩子变好，但如果反馈中包含比较、责备、人格评价，孩子可能更难进入学习。",
        "misread": "容易以为“我是在督促”，但孩子接收到的可能是“我又不行了”。",
        "firstAction": "把“你怎么又错”换成“我们先看看错在哪一步”。"
      }
    },
    "cognitiveLevels": {
      "COG-MEM": {
        "label": "记忆",
        "description": "能否记住基本内容"
      },
      "COG-UND": {
        "label": "理解",
        "description": "能否用自己的话讲出来"
      },
      "COG-APP": {
        "label": "应用",
        "description": "能否换题或换情境使用"
      },
      "COG-ANA": {
        "label": "分析",
        "description": "能否拆解问题和错因"
      },
      "COG-EVA": {
        "label": "评价",
        "description": "能否检查、判断、说明理由"
      },
      "COG-CRE": {
        "label": "创造",
        "description": "能否举例、出题、表达新想法"
      }
    },
    "levelCopy": {
      "stable": "目前不是主要卡点",
      "light": "有一些迹象，可以继续观察",
      "moderate": "当前需要重点支持",
      "high": "已经明显影响学习表现"
    },
    "actionPlans": {
      "general": [
        "第 1 天：找出最近 3-5 个典型问题，不批评，只分类。",
        "第 2 天：让孩子复述题意或知识点，判断是否理解。",
        "第 3 天：选择 1 个卡点，用图示、例子或小步骤补救。",
        "第 4 天：做 2 道同类变式，重点观察是否能迁移。",
        "第 5 天：让孩子讲一道题或一个知识点给家长听。",
        "第 6 天：用检查清单完成一次低压力练习。",
        "第 7 天：总结孩子已经掌握的部分，并确定下周一个小目标。"
      ],
      "learning_defense": [
        "第 1 天：暂停批评，和孩子一起选一个最小可完成任务。",
        "第 2 天：只做 10 分钟，完成后明确指出一个具体进步。",
        "第 3 天：让孩子自己选择练习顺序，增加掌控感。",
        "第 4 天：做一次“错了也没关系”的练习，只分析不批评。",
        "第 5 天：让孩子说出一个“我比前天更会的地方”。",
        "第 6 天：轻微提高难度，但仍保证能完成。",
        "第 7 天：复盘这一周孩子做到的事情，不谈排名。"
      ],
      "application_transfer_gap": [
        "第 1 天：选一道例题，让孩子说出每一步为什么这样做。",
        "第 2 天：找一道相似题，比较两题相同点。",
        "第 3 天：找一道小变式，比较不同点。",
        "第 4 天：让孩子先说方法，再动笔做。",
        "第 5 天：做错后只问“哪一步开始不一样”。",
        "第 6 天：让孩子自己改编一道题。",
        "第 7 天：总结这类题的共同结构。"
      ]
    },
    "parentScripts": {
      "general": [
        "你不是整章都不会，我们先看看是哪一步还没掌握。",
        "这次错题不是证明你不行，而是在提醒我们要补哪一块。",
        "今天不追求做很多题，只要把这一类题真正弄懂。",
        "你先说说第一步准备怎么做。",
        "我们一起把错因分出来，再决定怎么练。"
      ],
      "learning_defense": [
        "我看到你一遇到这类题就紧张，我们先把难度降下来。",
        "今天的目标不是全对，而是找到一个你能掌握的小地方。",
        "错了也没关系，这次我们只分析，不批评。"
      ],
      "family_pressure": [
        "刚才我有点急，我们重新看题，不评价人，只看步骤。",
        "我不拿你和别人比，我们只看你比上次清楚了什么。",
        "我想帮你找到方法，不是证明你不行。"
      ],
      "application_transfer_gap": [
        "你已经听懂例题了，现在我们练的是换题以后怎么用。",
        "先别急着做，先看看这道题和例题哪里一样。",
        "你说出方法，比直接写答案更重要。"
      ]
    },
    "footerReminder": "每个孩子的学习状态都会变化。一次测试只能帮助你看到当前阶段的主要线索，不能定义孩子。真正有效的家庭支持，来自持续观察、具体反馈和一点一点的掌握经验。"
  }
};
