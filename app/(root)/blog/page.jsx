import { Rss } from "lucide-react";
import Link from "next/link";
import BlogCards from "@/components/BlogCards";

export const dynamic = "force-static";

export const metadata = {
  title: "Blog - MERNMail",
  description:
    "Welcome to the MERNMail Blog! Explore our latest blog posts featuring email tips. Stay tuned for the latest MERNMail updates.",
  openGraph: {
    title: "Blog - MERNMail",
    description:
      "Welcome to the MERNMail Blog! Explore our latest blog posts featuring email tips. Stay tuned for the latest MERNMail updates.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`,
        width: 2560,
        height: 1440,
        alt: "Blog - MERNMail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@MERNMail",
    title: "Blog - MERNMail",
    description:
      "Welcome to the MERNMail Blog! Explore our latest blog posts featuring email tips. Stay tuned for the latest MERNMail updates.",
    images: [
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`
    ],
    creator: "@MERNMail"
  }
};

async function Blog() {
  return (
    <section
      id="blog"
      className="max-w-screen-xl mx-auto px-4 py-6 md:py-28 flex items-center justify-center flex-col"
    >
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold">
        MERNMail Blog
      </h1>
      <p className="text-muted-foreground flex items-center justify-center my-2">
        Our blog has email-related tips and updates about MERNMail.
        <Link
          href="/rss.xml"
          rel="alternate"
          type="application/rss+xml"
          className="shrink-0 mx-0 px-2 text-primary hover:underline"
        >
          <Rss className="mr-1 inline align-top" />
          <span className="align-middle">RSS feed</span>
        </Link>
      </p>
      <BlogCards page={1} />
    </section>
  );
}

export default Blog;
