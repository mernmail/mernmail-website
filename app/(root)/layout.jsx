import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/*<Header
        docLinks={[
          {
            href: "/",
            target: "_self",
            label: "Home"
          },
          {
            href: "/docs",
            target: "_self",
            label: "Docs",
            sub: true
          },
          {
            href: "/blog",
            target: "_self",
            label: "Blog",
            sub: true
          }
        ]}
      />*/}
      <div className="flex-grow flex-1 overflow-x-hidden">{children}</div>
    </div>
  );
}
