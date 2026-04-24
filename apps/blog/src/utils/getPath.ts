import { normalizePath } from "@/i18n/blog";
import { getPostDirectorySegments, getPostSlug } from "./blogContent";

/**
 * Get full path of a blog post
 * @param id - id of the blog post (aka slug)
 * @param filePath - the blog post full file location
 * @param includeBase - whether to include `/posts` in return value
 * @returns blog post path
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true
) {
  const basePath = includeBase ? "/posts" : "";
  const pathSegments = getPostDirectorySegments(filePath);
  const slug = getPostSlug(id);
  const relativePath = [basePath, ...pathSegments, slug]
    .filter(Boolean)
    .join("/");

  // If not inside the sub-dir, simply return the file path
  if (!pathSegments || pathSegments.length < 1) {
    return normalizePath([basePath, slug].filter(Boolean).join("/"));
  }

  return normalizePath(relativePath);
}
