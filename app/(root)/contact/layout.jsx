export const metadata = {
  title: "Contact Us - MERNMail",
  description:
    "Have questions about MERNMail? Need technical support? Visit our Contact Us page to find various ways to get in touch with our team, including email, and our official support channel.",
  openGraph: {
    title: "Contact Us - MERNMail",
    description:
      "Have questions about MERNMail? Need technical support? Visit our Contact Us page to find various ways to get in touch with our team, including email, and our official support channel.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`,
        width: 2560,
        height: 1440,
        alt: "Contact Us - MERNMail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@MERNMail",
    title: "Contact Us - MERNMail",
    description:
      "Have questions about MERNMail? Need technical support? Visit our Contact Us page to find various ways to get in touch with our team, including email, and our official support channel.",
    images: [
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`
    ],
    creator: "@MERNMail"
  }
};

const ContactLayout = ({ children }) => {
  return <>{children}</>;
};

export default ContactLayout;
