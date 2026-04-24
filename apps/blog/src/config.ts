export const SITE = {
  website: "https://blog.spore-lang.dev/",
  author: "Spore Team",
  profile: "https://spore-lang.dev/",
  desc: "The official Spore blog, tracking the language's vision, roadmap, and implementation choices.",
  title: "Spore Blog",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    url: "https://github.com/spore-lang/spore-lang.dev/edit/main/apps/blog/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
