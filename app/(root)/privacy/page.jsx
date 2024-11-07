import ReactMarkdown from "react-markdown";
import { privacyPolicy } from "@/constants/guidelines";

export const metadata = {
  title: "Privacy Policy - MERNMail",
  description:
    "Learn how we collect, use, and protect your data. Our Privacy Policy outlines our commitment to your privacy and the measures we take to safeguard your information when visiting our website.",
  openGraph: {
    title: "Privacy Policy - MERNMail",
    description:
      "Learn how we collect, use, and protect your data. Our Privacy Policy outlines our commitment to your privacy and the measures we take to safeguard your information when visiting our website.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/privacy`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`,
        width: 2560,
        height: 1440,
        alt: "Privacy Policy - MERNMail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@MERNMail",
    title: "Privacy Policy - MERNMail",
    description:
      "Learn how we collect, use, and protect your data. Our Privacy Policy outlines our commitment to your privacy and the measures we take to safeguard your information when visiting our website.",
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
        Privacy Policy
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        Effective date: November 7, 2024
      </p>
      <div className="prose prose-a:text-primary max-w-full md:prose-lg dark:prose-invert">
        <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
      </div>
    </main>
  );
}

export default Contribute;
