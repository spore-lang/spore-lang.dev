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
          tag: 'script',
          attrs: {
            'data-spore-locale-redirect': 'true',
          },
          content: docsLocaleRedirectScript,
        },
      ],
      components: {
        LanguageSelect: './src/components/LanguageSelect.astro',
      },
      credits: false,
    }),
  ],
});
