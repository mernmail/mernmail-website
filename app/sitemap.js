import { client } from "@/sanity/lib/client";
import docLinks from "@/constants/docLinks";

async function getAllBlogPostSlugs() {
  const query = `*[_type == 'blog'] { "slug": slug.current }`;
  const slugs = await client.fetch(query, {}, { cache: "no-store" });

  return slugs;
}

export default async function sitemap() {
  const blogPostSlugs = await getAllBlogPostSlugs();

  const baseRoutes = [
    "/",
    "/blog",
    "/contact",
    "/contribute",
    "/privacy",
    "/tos"
  ].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  const docsRoutes = docLinks.map((docLink) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}${docLink.href}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  const blogRoutes = blogPostSlugs.map((slug) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${slug.slug}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  return [...baseRoutes, ...docsRoutes, ...blogRoutes];
}
