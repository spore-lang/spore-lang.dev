import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";
import type { BlogLocale } from "@/i18n/blog";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export function getSocials(locale: BlogLocale): Social[] {
  return [
    {
      name: "GitHub",
      href: "https://github.com/spore-lang",
      linkTitle:
        locale === "zh"
          ? `查看 ${SITE.title} 的 GitHub`
          : `View ${SITE.title} on GitHub`,
      icon: IconGitHub,
    },
  ] as const;
}

export function getShareLinks(locale: BlogLocale): Social[] {
  const mailSubject =
    locale === "zh"
      ? encodeURIComponent("看看这篇文章")
      : encodeURIComponent("See this post");

  return [
    {
      name: "WhatsApp",
      href: "https://wa.me/?text=",
      linkTitle:
        locale === "zh"
          ? "通过 WhatsApp 分享这篇文章"
          : "Share this post on WhatsApp",
      icon: IconWhatsapp,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/sharer.php?u=",
      linkTitle:
        locale === "zh" ? "分享到 Facebook" : "Share this post on Facebook",
      icon: IconFacebook,
    },
    {
      name: "X",
      href: "https://x.com/intent/post?url=",
      linkTitle: locale === "zh" ? "分享到 X" : "Share this post on X",
      icon: IconBrandX,
    },
    {
      name: "Telegram",
      href: "https://t.me/share/url?url=",
      linkTitle:
        locale === "zh"
          ? "通过 Telegram 分享这篇文章"
          : "Share this post on Telegram",
      icon: IconTelegram,
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/pin/create/button/?url=",
      linkTitle:
        locale === "zh" ? "分享到 Pinterest" : "Share this post on Pinterest",
      icon: IconPinterest,
    },
    {
      name: "Mail",
      href: `mailto:?subject=${mailSubject}&body=`,
      linkTitle:
        locale === "zh" ? "通过邮件分享这篇文章" : "Share this post by email",
      icon: IconMail,
    },
  ] as const;
}
