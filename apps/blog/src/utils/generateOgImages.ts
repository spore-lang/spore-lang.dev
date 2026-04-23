import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import { DEFAULT_BLOG_LOCALE, type BlogLocale } from "@/i18n/blog";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post);
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite(
  locale: BlogLocale = DEFAULT_BLOG_LOCALE
) {
  const svg = await siteOgImage(locale);
  return svgBufferToPngBuffer(svg);
}
