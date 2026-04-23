import type { CollectionEntry } from "astro:content";
import { BLOG_PATH } from "@/content.config";
import {
  isBlogLocale,
  type BlogLocale,
} from "@/i18n/blog";
import { slugifyStr } from "./slugify";

type BlogPost = CollectionEntry<"blog">;
const DEFAULT_POST_LOCALE: BlogLocale = "zh";

function getBlogFileSegments(filePath?: string) {
  return (filePath ?? "")
    .replace(`${BLOG_PATH}/`, "")
    .split("/")
    .filter(Boolean)
    .filter(segment => !segment.startsWith("_"));
}

export function getPostSlug(id: string) {
  const segments = id.split("/").filter(Boolean);
  return slugifyStr(segments.at(-1) ?? "");
}

export function getPostLocaleFromFilePath(filePath?: string): BlogLocale {
  const [firstSegment] = getBlogFileSegments(filePath);
  return firstSegment && isBlogLocale(firstSegment)
    ? firstSegment
    : DEFAULT_POST_LOCALE;
}

export function getPostLocale(post: Pick<BlogPost, "filePath">): BlogLocale {
  return getPostLocaleFromFilePath(post.filePath);
}

export function getPostDirectorySegments(filePath?: string) {
  const segments = getBlogFileSegments(filePath);

  if (segments[0] && isBlogLocale(segments[0])) {
    segments.shift();
  }

  return segments.slice(0, -1).map(segment => slugifyStr(segment));
}

export function getPostTranslationKey(id: string, filePath?: string) {
  return [...getPostDirectorySegments(filePath), getPostSlug(id)].join("/");
}

export function filterPostsByLocale(posts: BlogPost[], locale: BlogLocale) {
  return posts.filter(post => getPostLocale(post) === locale);
}

export function findPostTranslation(
  posts: BlogPost[],
  post: BlogPost,
  locale: BlogLocale
) {
  const translationKey = getPostTranslationKey(post.id, post.filePath);

  return posts.find(
    candidate =>
      getPostLocale(candidate) === locale &&
      getPostTranslationKey(candidate.id, candidate.filePath) === translationKey
  );
}
