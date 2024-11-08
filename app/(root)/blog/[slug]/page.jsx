import { client, urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Rss } from "lucide-react";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import PrismLoader from "@/components/PrismLoader";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-php";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-json";
import "prismjs/components/prism-perl";
import "prismjs/components/prism-nginx";

import "./_styles/prism-twilight.css";
import "./_styles/prism.twilight.min.css";

async function getData(slug) {
  const query = `
    *[_type == "blog" && slug.current == '${slug.replace(/'/g, "\\'")}'] {
        "currentSlug": slug.current,
        title,
        content,
        smallDescription,
        titleImage,
        _createdAt
    }[0]`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

export const dynamic = "force-static";

export async function generateMetadata(props) {
  const params = await props.params;
  const data = await getData(params.slug);

  if (!data) {
    return {
      title: "404 Not Found - MERNMail",
      openGraph: {
        title: "404 Not Found - MERNMail"
      },
      twitter: {
        title: "404 Not Found - MERNMail"
      }
    };
  }

  return {
    title: `${data.title} - MERNMail`,
    description: data.smallDescription,
    openGraph: {
      title: `${data.title} - MERNMail`,
      description: data.smallDescription,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${data.currentSlug}`,
      type: "website",
      images: [
        {
          url: data.titleImage
            ? urlFor(data.titleImage).url()
            : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog-missing.png`,
          width: 2560,
          height: 1440,
          alt: `${data.title} - MERNMail`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@MERNMail",
      title: `${data.title} - MERNMail`,
      description: data.smallDescription,
      images: [
        data.titleImage
          ? urlFor(data.titleImage).url()
          : `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog-missing.png`
      ],
      creator: "@MERNMail"
    }
  };
}

const customPortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog Image"}
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    code: ({ value }) => {
      const language = value.language || "none";
      const grammar = Prism.languages[language];

      if (language != "none" && !grammar) {
        console.error(`No grammar found for language: "${language}"`);
      }

      return (
        <div className="relative my-8">
          <pre
            className={`language-${language} p-4 rounded-md overflow-x-auto text-sm`}
          >
            <code className={`language-${language}`}>{value.code}</code>
          </pre>
          {language == "none" ? "" : <PrismLoader />}
        </div>
      );
    }
  }
};

export default async function BlogSlugArticle(props) {
  const params = await props.params;
  const data = await getData(params.slug);

  if (!data) {
    notFound();
  }

  const formattedDate = format(new Date(data._createdAt), "MMMM d, yyyy");

  return (
    <>
      <section className="max-w-5xl container mx-auto py-8 md:py-28 flex flex-col items-center px-4">
        <div className="w-full mx-auto flex flex-row justify-between items-center">
          <Link
            href="/blog"
            className="group text-primary transition-all flex items-center justify-center mx-0 px-2 hover:bg-accent hover:text-accent-foreground h-11 rounded-lg"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-all align-top" />
            <span className="align-middle">Back</span>
          </Link>
          <Link
            href="/rss.xml"
            rel="alternate"
            type="application/rss+xml"
            className="shrink-0 mx-0 px-2 text-primary hover:underline"
          >
            <Rss className="mr-1 inline align-top" />
            <span className="align-middle">Subscribe to RSS</span>
          </Link>
        </div>
        <header className="text-start mb-8 w-full">
          <div className="mb-2">
            <h1 className="text-3xl md:text-5xl mb-8 py-4 font-bold">
              {data.title}
            </h1>
            <Image
              src={
                data.titleImage
                  ? urlFor(data.titleImage).url()
                  : "/blog-missing.png"
              }
              alt={data.title}
              width={1200}
              height={800}
              priority
              className="w-full h-auto object-cover rounded-md"
            />
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Published on: {formattedDate}
            </p>
          </div>
        </header>
        <div className="mb-6 w-full border-border border" />
        <article className="prose prose-a:text-primary w-full max-w-full md:prose-lg dark:prose-invert">
          <PortableText
            value={data.content}
            components={customPortableTextComponents}
          />
        </article>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const query = `*[_type == 'blog']{
    "slug": slug.current,
  }`;

  const slugsRaw = await client.fetch(query);

  return slugsRaw;
}
