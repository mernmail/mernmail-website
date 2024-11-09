import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row mx-auto max-w-screen-xl px-3 py-12">
      <div className="md:w-1/2 self-center text-center md:text-start">
        <h1 className="font-bold text-5xl md:text-6xl leading-tight md:leading-tight md:text-start">
          Streamline your <span className="text-primary">inbox</span> with{" "}
          <span className="relative whitespace-nowrap">
            <span className="absolute top-0 -left-1 -right-1 bottom-0 -rotate-1 bg-primary"></span>
            <span className="relative text-primary-foreground">MERNMail</span>
          </span>
        </h1>
        <p className="text-muted-foreground text-lg my-4 md:w-10/12">
          Experience the future of email with MERNMail. Built with the MERN
          stack for performance and security. Join and take control of your
          inbox today!
        </p>
        <div className="flex flex-row gap-2 justify-center md:justify-start">
          <Link
            href="/docs/getting-started"
            target={"_self"}
            className="bg-primary text-primary-foreground rounded-md px-5 py-2 text-lg hover:bg-primary/75 transition-colors"
          >
            Get started
          </Link>
          <Link
            href="/docs/demo"
            target={"_self"}
            className="bg-accent text-accent-foreground rounded-md px-5 py-2 text-lg hover:bg-accent/75 transition-colors"
          >
            View demo
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 sm:px-5 py-8 md:py-16 self-center">
        <div className="bg-border p-2 rounded-xl">
          <Image
            src="/screenshot.png"
            alt="MERNMail screenshot"
            width={1200}
            height={900}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
