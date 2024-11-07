import ReactMarkdown from "react-markdown";
import { termsOfService } from "@/constants/guidelines";

export const metadata = {
  title: "Terms of Service - MERNMail",
  description:
    "Understand your rights and responsibilities when using MERNMail. Our Terms of Service page outlines the conditions for visiting our website, ensuring a fair experience for all users.",
  openGraph: {
    title: "Terms of Service - MERNMail",
    description:
      "Understand your rights and responsibilities when using MERNMail. Our Terms of Service page outlines the conditions for visiting our website, ensuring a fair experience for all users.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/tos`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`,
        width: 2560,
        height: 1440,
        alt: "Terms of Service - MERNMail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@MERNMail",
    title: "Terms of Service - MERNMail",
    description:
      "Understand your rights and responsibilities when using MERNMail. Our Terms of Service page outlines the conditions for visiting our website, ensuring a fair experience for all users.",
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
        Terms of Service
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        Effective date: November 7, 2024
      </p>
      <div className="prose prose-a:text-primary max-w-full md:prose-lg dark:prose-invert">
        <ReactMarkdown>{termsOfService}</ReactMarkdown>
      </div>
    </main>
  );
}

export default Contribute;
