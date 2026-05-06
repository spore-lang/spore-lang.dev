// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const docsLocaleStorageKey = 'spore-docs-locale';
const docsLocaleRedirectScript = `
(() => {
  if (window.location.pathname !== '/') return;
  if (window.localStorage.getItem(${JSON.stringify(docsLocaleStorageKey)}) === 'zh') {
    window.location.replace('/zh/');
  }
})();
`.trim();

export default defineConfig({
  site: 'https://docs.spore-lang.dev',
  integrations: [
    starlight({
      title: {
        en: 'Spore Docs',
        'zh-CN': 'Spore 文档',
      },
      description: 'Official documentation and learning material for the Spore programming language.',
      tagline: 'Reference, onboarding, and tutorials for Spore.',
      editLink: {
        baseUrl: 'https://github.com/spore-lang/spore-lang.dev/edit/main/apps/docs/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/spore-lang/spore-lang.dev',
        },
      ],
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      defaultLocale: 'root',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://cdn.jsdelivr.net',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'dns-prefetch',
            href: 'https://cdn.jsdelivr.net',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/@fontsource-variable/geist@5.2.8/wght.css',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/cn-fontsource-source-han-sans-sc-vf@1.0.10/font.css',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/maplemono-normal-nf-cn@1.0.0/regular.css',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/maplemono-normal-nf-cn@1.0.0/italic.css',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/@fontsource/iosevka@5.2.5/latin-400.css',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/@fontsource/iosevka@5.2.5/latin-400-italic.css',
          },
        },
        {
          tag: 'script',
          attrs: {
            'data-spore-locale-redirect': 'true',
          },
          content: docsLocaleRedirectScript,
        },
      ],
      customCss: ['./src/styles/fonts.css'],
      components: {
        LanguageSelect: './src/components/LanguageSelect.astro',
      },
      credits: false,
    }),
  ],
});
