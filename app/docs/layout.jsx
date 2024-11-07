import SidebarLinks from "@/components/SidebarLinks";
import Header from "@/components/Header";
import docLinks from "@/constants/docLinks";

export default function DocsLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header docLinks={docLinks} />
      <div className="flex-grow flex-1 overflow-x-hidden w-full max-w-screen-xl mx-auto">
        <aside className="hidden md:block md:fixed w-72 px-3 bottom-0 top-12 overflow-y-auto">
          <SidebarLinks links={docLinks} />
        </aside>
        <main className="flex-1 box-content ml-72 px-2 py-6">{children}</main>
      </div>
    </div>
  );
}
