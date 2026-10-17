# 黄奇东 · 个人品牌静态网站

纯原生 HTML / CSS / JavaScript，无需安装任何开发环境。
所有网页和图片素材都在这个 `site` 文件夹内，可整体上传到 GitHub Pages。

## 文件结构

```
site/
├── index.html        网页本体
├── css/style.css     样式（暖白编辑风，移动端优先）
├── js/main.js        滚动淡入动效（可删，删了页面照常工作）
└── assets/
    └── avatar.jpg    ← 把你的个人照片命名为 avatar.jpg 放进来即可
```

## 一、在电脑上预览

**方法 A（最简单）**：直接双击 `index.html`，用浏览器打开即可。

**方法 B（更接近线上效果，可选）**：
如果装了 Python，在 `site` 文件夹里打开终端执行：

```
python -m http.server 8000
```

然后浏览器访问 `http://127.0.0.1:8000`。没装 Python 就用方法 A，效果一样。

## 二、发布到 GitHub Pages（免费）

1. 注册 / 登录 [github.com](https://github.com)
2. 右上角 **+** → **New repository**，名字随意（如 `my-homepage`），选 **Public**，创建
3. 页面上点 **uploading an existing file**，把 `site` 文件夹里的**所有内容**（index.html、css、js、assets，注意是文件夹里面的内容，不是 site 文件夹本身）拖进去
4. 点 **Commit changes** 上传
5. 进入仓库 **Settings** → 左侧 **Pages** → **Branch** 选 `main`、目录选 `/ (root)` → **Save**
6. 等 1–2 分钟，页面顶部会出现网址，形如
   `https://你的用户名.github.io/my-homepage/`
   这就是可以发给同事的正式链接

以后想改内容：改本地文件后，在仓库页面重新上传覆盖同名文件即可。

## 三、换照片

把你的照片处理成**正方形**（建议 400×400 以上），命名为 `avatar.jpg`，
放进 `assets/` 文件夹覆盖即可。没有照片时会自动显示「奇」字圆形占位。

## 四、上线前待确认清单（重要）

| 事项 | 状态 |
|---|---|
| 流水 2000万→2500万→3000万 对应年份 | 页面已标「待补充」，确认后替换 |
| 公司业务数据（流水）是否允许公开 | 上线前自行确认 |
| 帮同事定直播方向的案例 | **未放上页面**——涉及他人，需经对方同意后再加 |
| 他人评价版块 | 未添加——需要对方原话并经本人同意 |
| 个人照片 | 待提供，放入 assets/avatar.jpg |
| 页脚「仅限公司内部浏览」 | 如需限定访问范围，GitHub Pages 公开链接无法真正限权，请知悉 |
