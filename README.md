# sleepomen.github.io

個人網站，使用 [Astro](https://astro.build) 建置，推到 `main` 後由 GitHub Actions 自動部署到 GitHub Pages。

## 開發

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 輸出到 dist/
```

## 改內容

| 要改什麼 | 檔案 |
|---|---|
| 文章 | `src/content/blog/*.md` |
| 名字、簡介、技能、聯絡方式、選單 | `src/data/site.ts` |
| 經歷 | `src/data/experience.ts` |
| 友站 | `src/data/links.ts` |
| 顏色、字體 | `src/styles/global.css` 最上面的 `:root` |

文章開頭格式：

```yaml
---
title: 文章標題
date: 2026-10-06
description: 一句話簡介
tags: [tag1, tag2]
draft: false
---
```
