import ReactMarkdown from "react-markdown";
import { contribute } from "@/constants/guidelines";

export const metadata = {
  title: "Contribute - MERNMail",
  description:
    "Contribute to MERNMail and be part of an exciting open-source project. Follow the guidelines to contribute to our code.",
  openGraph: {
    title: "Contribute - MERNMail",
    description:
      "Contribute to MERNMail and be part of an exciting open-source project. Follow the guidelines to contribute to our code.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`,
        width: 2560,
        height: 1440,
        alt: "Contribute - MERNMail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@MERNMail",
    title: "Contribute - MERNMail",
    description:
      "Contribute to MERNMail and be part of an exciting open-source project. Follow the guidelines to contribute to our code.",
    images: [
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`
    ],
    creator: "@MERNMail"
  }
};

function Contribute() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-6 md:py-28 gap-2 flex flex-col">
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold">
        Contributing to MERNMail
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        We welcome contributions from the community! Here&apos;s how you can
        help!
      </p>
      <div className="prose prose-a:text-primary max-w-full md:prose-lg dark:prose-invert">
        <ReactMarkdown>{contribute}</ReactMarkdown>
      </div>
    </main>
  );
}

export default Contribute;
