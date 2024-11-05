import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

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
        alt: "MERNMail - a MERN stack webmail application",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MERNMail",
    title: "MERNMail - a MERN stack webmail application",
    description:
      "MERNMail: Open-source webmail app built with MERN stack. Send, receive, & manage emails easily. Explore and contribute today!",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@MERNMail",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${inter.className}`}>
        <ThemeProvider attribute="class" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
