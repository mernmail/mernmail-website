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

export default function PrivacyPolicyLayout({ children }) {
  return <>{children}</>;
}
