# GitHub Pages 发布说明

这个文件夹是“孩子学习状态诊断测试”的 GitHub Pages 发布包。

## 包含文件

- `index.html`
- `styles.css`
- `app.js`
- `data.bundle.js`
- `assets/`
- `.nojekyll`

## 发布方式一：放到仓库根目录

如果这个测试网页是一个独立仓库，可以把本文件夹里的所有内容放到仓库根目录。

GitHub Pages 设置：

1. 打开仓库 Settings。
2. 进入 Pages。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `main`。
5. Folder 选择 `/root`。
6. 保存。

访问地址通常是：

```text
https://你的用户名.github.io/仓库名/
```

## 发布方式二：放到 docs 目录

如果仓库里还有其他资料，可以把本文件夹里的所有内容放到仓库的 `docs` 目录。

GitHub Pages 设置：

1. 打开仓库 Settings。
2. 进入 Pages。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `main`。
5. Folder 选择 `/docs`。
6. 保存。

访问地址通常是：

```text
https://你的用户名.github.io/仓库名/
```

## 注意

1. 不要只上传外层文件夹，要上传里面的文件。
2. `index.html` 必须在 Pages 选择的根目录下。
3. `.nojekyll` 建议保留。
4. 发布成功后，GitHub Pages 可能需要等待 1-3 分钟生效。

