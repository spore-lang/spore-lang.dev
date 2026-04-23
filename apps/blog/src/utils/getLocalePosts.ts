import { getCollection } from "astro:content";
import type { BlogLocale } from "@/i18n/blog";
import { filterPostsByLocale } from "./blogContent";
import getSortedPosts from "./getSortedPosts";
import postFilter from "./postFilter";

export async function getPublishedPostsForLocale(locale: BlogLocale) {
  const posts = await getCollection("blog", postFilter);
  return getSortedPosts(filterPostsByLocale(posts, locale));
}

export async function getAllPostsForLocale(locale: BlogLocale) {
  const posts = await getCollection("blog");
  return getSortedPosts(filterPostsByLocale(posts, locale));
}
