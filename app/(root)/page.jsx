import Features from "@/components/Features";
import Hero from "@/components/Hero";

export const metadata = {
  title: "MERNMail - a MERN stack webmail application",
  description:
    "MERNMail: Open-source webmail app built with MERN stack. Send, receive, & manage emails easily. Explore and contribute today!",
  openGraph: {
    title: "MERNMail - a MERN stack webmail application",
    description:
      "MERNMail: Open-source webmail app built with MERN stack. Send, receive, & manage emails easily. Explore and contribute today!",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`,
        width: 2560,
        height: 1440,
        alt: "MERNMail - a MERN stack webmail application"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@MERNMail",
    title: "MERNMail - a MERN stack webmail application",
    description:
      "MERNMail: Open-source webmail app built with MERN stack. Send, receive, & manage emails easily. Explore and contribute today!",
    images: [
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/mernmail-cover.png`
    ],
    creator: "@MERNMail"
  }
};

function Home() {
  return (
    <>
      <Hero />
      <Features />
      Some other sections, of course!
    </>
  );
}

export default Home;
