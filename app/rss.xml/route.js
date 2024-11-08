import { NextResponse } from "next/server";
import RSS from "rss";
import { client, urlFor } from "@/sanity/lib/client";
import { toHTML } from "@portabletext/to-html";

export const dynamic = "force-static";

export async function GET() {
  const postsQuery = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    content,
    titleImage,
    _createdAt
  }`;

  const posts = await client.fetch(postsQuery);

  const feed = new RSS({
    title: "MERNMail Blog",
    description: "Explore the latest blog posts from MERNMail",
    feed_url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/rss.xml`,
    site_url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    image_url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`,
    language: "en-US",
    pubDate: new Date().toUTCString()
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: toHTML(post.content),
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${post.slug}`,
      date: new Date(post._createdAt).toUTCString(),
      enclosure: {
        url: post.titleImage
          ? urlFor(post.titleImage).url()
          : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog-missing.png`
      },
      author: "MERNMail"
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
