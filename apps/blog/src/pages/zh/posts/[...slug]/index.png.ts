import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import type { BlogLocale } from "@/i18n/blog";
import { filterPostsByLocale } from "@/utils/blogContent";
import { getPath } from "@/utils/getPath";
import { generateOgImageForPost } from "@/utils/generateOgImages";
import postFilter from "@/utils/postFilter";
import { SITE } from "@/config";

const ROUTE_LOCALE: BlogLocale = "zh";

export async function getStaticPaths() {
  if (!SITE.dynamicOgImage) {
    return [];
  }

  const posts = filterPostsByLocale(
    await getCollection("blog", postFilter),
    ROUTE_LOCALE
  ).filter(post => !post.data.ogImage);

  return posts.map(post => ({
    params: { slug: getPath(post.id, post.filePath, false) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) => {
  if (!SITE.dynamicOgImage) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const buffer = await generateOgImageForPost(props as CollectionEntry<"blog">);
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
