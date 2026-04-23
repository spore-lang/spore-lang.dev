import rss from "@astrojs/rss";
import { SITE } from "@/config";
import { getBlogCopy, localizePath, type BlogLocale } from "@/i18n/blog";
import { getPath } from "@/utils/getPath";
import { getPublishedPostsForLocale } from "@/utils/getLocalePosts";

const ROUTE_LOCALE: BlogLocale = "zh";

export async function GET() {
  const copy = getBlogCopy(ROUTE_LOCALE);
  const posts = await getPublishedPostsForLocale(ROUTE_LOCALE);

  return rss({
    title: SITE.title,
    description: copy.siteDescription,
    site: SITE.website,
    items: posts.map(({ data, id, filePath }) => ({
      link: localizePath(getPath(id, filePath), ROUTE_LOCALE),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
