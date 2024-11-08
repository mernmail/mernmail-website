import React from "react";
import docLinks from "@/constants/docLinks";
import { globby } from "globby";
import fs from "fs/promises";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import rehypePrism from "rehype-prism";

import "./_styles/prism-twilight.css";
import "./_styles/prism.twilight.min.css";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-php";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-json";
import "prismjs/components/prism-perl";
import "prismjs/components/prism-nginx";

export async function generateMetadata({ params }) {
  const obtainedParams = await params;
  const foundDocLink = docLinks.find(
    (docLink) =>
      docLink.href ==
      `/docs${obtainedParams.slug ? "/" + obtainedParams.slug.join("/") : ""}`
  );
  try {
    await fs.readFile(
      `${process.cwd()}/docs/${obtainedParams.slug ? obtainedParams.slug.join("/") : ""}.md`
    );
    // eslint-disable-next-line no-unused-vars
  } catch (err) {
    try {
      await fs.readFile(
        `${process.cwd()}/docs/${obtainedParams.slug ? obtainedParams.slug.join("/") : ""}/index.md`
      );
    } catch (err) {
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
  }
  return {
    title: `${foundDocLink ? foundDocLink.label : obtainedParams.slug && obtainedParams.slug.length > 0 ? obtainedParams.slug[obtainedParams.slug.length - 1] : "Documentation"} - MERNMail`,
    description:
      "The MERNMail documentation provides comprehensive information and instructions on how to use and configure the MERNMail webmail application.",
    openGraph: {
      title: `${foundDocLink ? foundDocLink.label : obtainedParams.slug && obtainedParams.slug.length > 0 ? obtainedParams.slug[obtainedParams.slug.length - 1] : "Documentation"} - MERNMail`,
      description:
        "The MERNMail documentation provides comprehensive information and instructions on how to use and configure the MERNMail webmail application.",
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/docs${obtainedParams.slug ? "/" + obtainedParams.slug.join("/") : ""}`,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`,
          width: 2560,
          height: 1440,
          alt: `${foundDocLink ? foundDocLink.label : obtainedParams.slug && obtainedParams.slug.length > 0 ? obtainedParams.slug[obtainedParams.slug.length - 1] : "Documentation"} - MERNMail`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@MERNMail",
      title: `${foundDocLink ? foundDocLink.label : obtainedParams.slug && obtainedParams.slug.length > 0 ? obtainedParams.slug[obtainedParams.slug.length - 1] : "Documentation"} - MERNMail`,
      description:
        "The MERNMail documentation provides comprehensive information and instructions on how to use and configure the MERNMail webmail application.",
      images: [
        `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`
      ],
      creator: "@MERNMail"
    }
  };
}

export async function generateStaticParams() {
  const markdownFiles = await globby("**/*.md", {
    cwd: process.cwd() + "/docs"
  });
  return markdownFiles.map((filePath) => {
    const splitPath = filePath.split("/");
    if (splitPath[splitPath.length - 1] == "index.md") splitPath.pop();
    else {
      splitPath[splitPath.length - 1] = splitPath[splitPath.length - 1].replace(
        /\.md$/,
        ""
      );
    }
    return {
      slug: splitPath.length == 0 ? undefined : splitPath
    };
  });
}

async function page({ params }) {
  const { slug } = await params;
  let markdownData = "";
  try {
    markdownData = await fs.readFile(
      `${process.cwd()}/docs/${slug ? slug.join("/") : ""}.md`
    );
    // eslint-disable-next-line no-unused-vars
  } catch (err) {
    try {
      markdownData = await fs.readFile(
        `${process.cwd()}/docs/${slug ? slug.join("/") : ""}/index.md`
      );
    } catch (err) {
      notFound();
      return;
    }
  }
  markdownData = markdownData.toString();
  return (
    <div className="prose prose-a:text-primary prose-h1:font-bold max-w-full md:prose-lg dark:prose-invert">
      <Markdown rehypePlugins={[rehypePrism]}>{markdownData}</Markdown>
    </div>
  );
}

export default page;
