import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sleepomen.github.io',
  // 舊 Hexo 網址導向新位置
  redirects: {
    '/archives': '/blog',
    '/2026/08/21/hello-world': '/blog/hello-world',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },
});
