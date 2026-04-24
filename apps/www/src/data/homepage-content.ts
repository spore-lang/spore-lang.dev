export type HomepageLocale = 'en' | 'zh-CN';

type HomepageCopy = {
  lang: HomepageLocale;
  pageTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  primaryAction: string;
  primaryHref: string;
  secondaryAction: string;
  secondaryHref: string;
  splitTitle: string;
  splitBody: string;
  livesTitle: string;
  livesBody: string;
  sisterTitle: string;
  sisterBody: string;
  docsLinkLabel: string;
  docsLinkHref: string;
};

export const homepagePathByLocale: Record<HomepageLocale, string> = {
  en: '/',
  'zh-CN': '/zh/',
};

export const homepageAlternateLinks = [
  { hreflang: 'en', href: 'https://spore-lang.dev/' },
  { hreflang: 'zh-CN', href: 'https://spore-lang.dev/zh/' },
  { hreflang: 'x-default', href: 'https://spore-lang.dev/' },
] as const;

export const browserLocaleRedirectScript = `
(() => {
  const preferredLanguages =
    Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  const prefersChinese = preferredLanguages.some((candidate) =>
    typeof candidate === 'string' && candidate.toLowerCase().startsWith('zh')
  );

  if (prefersChinese) {
    window.location.replace('/zh/');
  }
})();
`.trim();

export const homepageCopyByLocale: Record<HomepageLocale, HomepageCopy> = {
  en: {
    lang: 'en',
    pageTitle: 'Spore',
    metaDescription: 'The official website and learning home for the Spore programming language.',
    eyebrow: 'spore-lang.dev',
    title: 'Spore',
    lead: 'The official website and learning home for the Spore programming language.',
    primaryAction: 'Read the docs',
    primaryHref: 'https://docs.spore-lang.dev/',
    secondaryAction: 'Language repo',
    secondaryHref: 'https://github.com/spore-lang/spore',
    splitTitle: 'Split cleanly',
    splitBody:
      'The root site and the docs site now have separate homes, so the product narrative and the reference surface can evolve independently.',
    livesTitle: 'What lives here',
    livesBody:
      'This app will hold the homepage, product framing, and public entry points for learning Spore.',
    sisterTitle: 'Sister repos',
    sisterBody:
      'The compiler lives in the main language repo, while proposals and process documents live in spore-evolution.',
    docsLinkLabel: 'docs.spore-lang.dev/',
    docsLinkHref: 'https://docs.spore-lang.dev/',
  },
  'zh-CN': {
    lang: 'zh-CN',
    pageTitle: 'Spore',
    metaDescription: 'Spore 编程语言的官方网站与学习入口。',
    eyebrow: 'spore-lang.dev',
    title: 'Spore',
    lead: 'Spore 编程语言的官方网站与学习入口。',
    primaryAction: '阅读文档',
    primaryHref: 'https://docs.spore-lang.dev/',
    secondaryAction: '语言仓库',
    secondaryHref: 'https://github.com/spore-lang/spore',
    splitTitle: '站点边界更清晰',
    splitBody:
      '主站与文档站现在各自独立演进，产品叙事与参考内容不再绑在同一个应用里。',
    livesTitle: '这里承载什么',
    livesBody:
      '这个站点将承载首页、产品叙事，以及进入 Spore 学习体验的公共入口。',
    sisterTitle: '相关仓库',
    sisterBody:
      '编译器与实现位于主语言仓库，提案、路线图与流程文档位于 spore-evolution。',
    docsLinkLabel: 'docs.spore-lang.dev/',
    docsLinkHref: 'https://docs.spore-lang.dev/',
  },
};
