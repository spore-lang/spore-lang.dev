import type { APIRoute } from "astro";
import type { BlogLocale } from "@/i18n/blog";
import { generateOgImageForSite } from "@/utils/generateOgImages";

const ROUTE_LOCALE: BlogLocale = "zh";

export const GET: APIRoute = async () => {
  const buffer = await generateOgImageForSite(ROUTE_LOCALE);
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
