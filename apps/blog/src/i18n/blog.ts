import { SITE } from "../config";

export const BLOG_LOCALES = ["en", "zh"] as const;
export type BlogLocale = (typeof BLOG_LOCALES)[number];

export const DEFAULT_BLOG_LOCALE: BlogLocale = "en";
export const BLOG_LOCALE_STORAGE_KEY = "spore-blog-locale";

type BlogCopy = {
  about: string;
  aboutIntro: string;
  aboutLinksLead: string;
  aboutTrackImplementation: string;
  aboutTrackRoadmap: string;
  aboutTrackVision: string;
  aboutTracksLead: string;
  allPosts: string;
  archives: string;
  archivesDescription: string;
  back: string;
  backHome: string;
  backToTop: string;
  browseChineseDrafts: string;
  by: string;
  closeMenu: string;
  copiedCode: string;
  copyCode: string;
  docsSite: string;
  editPost: string;
  englishEmptyHome: string;
  featuredPosts: string;
  home: string;
  htmlLang: string;
  languageRepo: string;
  languageSwitcher: string;
  latestPosts: string;
  localeLabels: Record<BlogLocale, string>;
  localeNames: Record<BlogLocale, string>;
  mainSite: string;
  nextPage: string;
  nextPost: string;
  noArchives: string;
  noPostsListing: string;
  noTags: string;
  notFound: string;
  openMenu: string;
  pagination: string;
  posts: string;
  postsDescription: string;
  previousPage: string;
  previousPost: string;
  relatedLinks: string;
  rightsReserved: string;
  rssSubscribe: string;
  search: string;
  searchDescription: string;
  searchDevMode: string;
  shareThisPost: string;
  siteDescription: string;
  siteRepo: string;
  skipToContent: string;
  tags: string;
  tagsDescription: string;
  tagPageDescription: (tagName: string) => string;
  tagPageTitle: string;
  themeToggle: string;
  updatedOn: string;
};

const BLOG_COPY: Record<BlogLocale, BlogCopy> = {
  en: {
    about: "About",
    aboutIntro:
      "This is the official Spore blog, where we document the language's vision, roadmap, and implementation tradeoffs.",
    aboutLinksLead: "You can continue exploring Spore from these entry points:",
    aboutTrackImplementation:
      "`implementation`: technical essays about implementation strategy and the path from prototype to real delivery",
    aboutTrackRoadmap:
      "`roadmap`: the map across the language contract layer, runtime boundary layer, and ecosystem tooling layer",
    aboutTrackVision:
      "`vision`: why Spore should exist, and which problem space it is trying to reorganize",
    aboutTracksLead: "The current writing plan follows three tracks:",
    allPosts: "View all posts",
    archives: "Archives",
    archivesDescription: "Browse posts by date.",
    back: "Back",
    backHome: "Back home",
    backToTop: "Back to top",
    browseChineseDrafts: "Browse the Chinese draft series",
    by: "by",
    closeMenu: "Close menu",
    copiedCode: "Copied",
    copyCode: "Copy",
    docsSite: "docs",
    editPost: "Suggest changes",
    englishEmptyHome:
      "English posts are still being prepared. The current draft series is already available in Chinese.",
    featuredPosts: "Featured posts",
    home: "Home",
    htmlLang: "en",
    languageRepo: "language repository",
    languageSwitcher: "Change language",
    latestPosts: "Latest posts",
    localeLabels: { en: "EN", zh: "中文" },
    localeNames: { en: "English", zh: "简体中文" },
    mainSite: "main site",
    nextPage: "Next",
    nextPost: "Next post",
    noArchives: "No published posts yet for this locale.",
    noPostsListing: "English posts are coming soon.",
    noTags: "No tags yet for this locale.",
    notFound: "Page not found",
    openMenu: "Open menu",
    pagination: "Pagination",
    posts: "Posts",
    postsDescription: "Browse all blog posts.",
    previousPage: "Previous",
    previousPost: "Previous post",
    relatedLinks: "Related links:",
    rightsReserved: "All rights reserved.",
    rssSubscribe: "RSS feed",
    search: "Search",
    searchDescription: "Search posts.",
    searchDevMode:
      "Dev mode note: run a build once to make the local search index available.",
    shareThisPost: "Share this post on:",
    siteDescription:
      "The official Spore blog, tracking the language's vision, roadmap, and implementation choices.",
    siteRepo: "site repository",
    skipToContent: "Skip to content",
    tags: "Tags",
    tagsDescription: "Browse post tags.",
    tagPageDescription: tagName => `Posts tagged "${tagName}".`,
    tagPageTitle: "Tag",
    themeToggle: "Toggle theme",
    updatedOn: "Updated",
  },
  zh: {
    about: "关于",
    aboutIntro: "这里是 Spore 的官方博客，用来持续整理语言的愿景、路线图与实现取舍。",
    aboutLinksLead: "你可以继续从这些入口了解 Spore：",
    aboutTrackImplementation: "`implementation`：从具体实现策略到中期落地路径的技术文章",
    aboutTrackRoadmap:
      "`roadmap`：语言契约层、运行时边界层与生态工具层的整体地图",
    aboutTrackVision: "`vision`：为什么需要 Spore，以及它试图重新组织的问题空间",
    aboutTracksLead: "当前内容会围绕三条主线逐步展开：",
    allPosts: "查看全部文章",
    archives: "归档",
    archivesDescription: "按时间查看文章。",
    back: "返回",
    backHome: "返回首页",
    backToTop: "回到顶部",
    browseChineseDrafts: "查看中文草稿系列",
    by: "作者",
    closeMenu: "关闭菜单",
    copiedCode: "已复制",
    copyCode: "复制",
    docsSite: "文档站",
    editPost: "建议修改",
    englishEmptyHome: "英文文章仍在准备中，当前草稿系列已经可以通过中文站点阅读。",
    featuredPosts: "置顶文章",
    home: "首页",
    htmlLang: "zh-CN",
    languageRepo: "语言仓库",
    languageSwitcher: "切换语言",
    latestPosts: "最新文章",
    localeLabels: { en: "EN", zh: "中文" },
    localeNames: { en: "English", zh: "简体中文" },
    mainSite: "主站",
    nextPage: "下一页",
    nextPost: "下一篇",
    noArchives: "这个语言下暂时还没有已发布文章。",
    noPostsListing: "这个语言下的文章正在整理中。",
    noTags: "这个语言下暂时还没有标签。",
    notFound: "页面未找到",
    openMenu: "打开菜单",
    pagination: "分页导航",
    posts: "文章",
    postsDescription: "这里收录博客文章。",
    previousPage: "上一页",
    previousPost: "上一篇",
    relatedLinks: "相关链接：",
    rightsReserved: "保留所有权利。",
    rssSubscribe: "RSS 订阅",
    search: "搜索",
    searchDescription: "搜索文章。",
    searchDevMode: "开发模式提示：要在本地看到搜索结果，至少先执行一次构建。",
    shareThisPost: "分享到：",
    siteDescription: "Spore 官方博客，记录愿景、路线图与实现思考。",
    siteRepo: "站点仓库",
    skipToContent: "跳到正文",
    tags: "标签",
    tagsDescription: "浏览文章标签。",
    tagPageDescription: tagName => `带有“${tagName}”标签的文章。`,
    tagPageTitle: "标签",
    themeToggle: "切换明暗模式",
    updatedOn: "更新于",
  },
};

export function getBlogCopy(locale: BlogLocale) {
  return BLOG_COPY[locale];
}

export function isBlogLocale(value: string): value is BlogLocale {
  return BLOG_LOCALES.includes(value as BlogLocale);
}

export function getBlogLocaleFromPathname(pathname: string): BlogLocale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

export function normalizePath(path: string) {
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  const compactPath = withLeadingSlash.replace(/\/+/g, "/");
  const trimmedPath =
    compactPath === "/" ? compactPath : compactPath.replace(/\/+$/, "");

  if (trimmedPath === "/") {
    return "/";
  }

  const lastSegment = trimmedPath.split("/").at(-1) ?? "";
  return lastSegment.includes(".") ? trimmedPath : `${trimmedPath}/`;
}

export function stripLocaleFromPath(pathname: string) {
  const normalizedPath = normalizePath(pathname);

  if (normalizedPath === "/zh/") {
    return "/";
  }

  if (normalizedPath.startsWith("/zh/")) {
    return normalizePath(normalizedPath.slice(3));
  }

  return normalizedPath;
}

export function localizePath(path: string, locale: BlogLocale) {
  const normalizedPath = normalizePath(stripLocaleFromPath(path));

  if (locale === DEFAULT_BLOG_LOCALE) {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return `/${locale}/`;
  }

  return normalizePath(`/${locale}${normalizedPath}`);
}

export function switchLocalePath(pathname: string, targetLocale: BlogLocale) {
  return localizePath(stripLocaleFromPath(pathname), targetLocale);
}

export function getStaticLocaleAlternates(path: string) {
  return Object.fromEntries(
    BLOG_LOCALES.map(locale => [locale, localizePath(path, locale)])
  ) as Record<BlogLocale, string>;
}

export function getLocaleDisplayName(locale: BlogLocale) {
  return BLOG_COPY[locale].localeNames[locale];
}

export function getLocaleHrefLang(locale: BlogLocale) {
  return BLOG_COPY[locale].htmlLang;
}

export function getMonthLabel(locale: BlogLocale, month: number) {
  return new Intl.DateTimeFormat(getLocaleHrefLang(locale), {
    month: locale === "en" ? "short" : "long",
    timeZone: SITE.timezone,
  }).format(new Date(Date.UTC(2024, month - 1, 1)));
}
