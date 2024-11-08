import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "404 Not Found - MERNMail",
  openGraph: {
    title: "404 Not Found - MERNMail"
  },
  twitter: {
    title: "404 Not Found - MERNMail"
  }
};

function NotFound() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <section className="flex flex-col max-w-screen-xl mx-auto items-center justify-center px-3 flex-1 flex-grow">
          <h1 className="text-3xl md:text-5xl text-center">
            <span className="text-red-500">404</span> Page not Found
          </h1>
          <p className="text-lg mt-3 text-muted-foreground">
            Please return back to{" "}
            <Link href="/" className="underline font-bold">
              Home
            </Link>
          </p>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default NotFound;
