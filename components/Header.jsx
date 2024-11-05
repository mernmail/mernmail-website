"use client";
import Logo from "@/components/Logo";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Header({ docLinks }) {
  const pathname = usePathname();
  const [menuShown, setMenuShown] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (menuShown) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = null;
    }
  }, [menuShown]);

  return (
    <header className="w-full border-b border-b-border sticky top-0 bg-background z-40 block h-12">
      <div className="flex flex-row h-full px-2 py-2 mx-auto max-w-screen-xl">
        <Link href="/" className="mx-1.5">
          <span className="sr-only">MERNMail logo</span>
          <Logo width={160} height={35} className="inline h-8 w-auto" />
        </Link>
        <nav className="grow">
          <ul className="hidden md:inline mx-2.5 list-none">
            {headerLinks.nav.map((navLink) => (
              <li className="inline" key={navLink.label}>
                <Link
                  href={navLink.href}
                  target={navLink.target}
                  className={`inline-block align-middle ${pathname == navLink.href ? "bg-accent" : ""} text-inherit px-2 py-1 h-8 mx-1 rounded-sm hover:bg-accent/60 transition-colors`}
                >
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <span className="self-center whitespace-nowrap">
          <Link
            href={headerLinks.git.href}
            target={headerLinks.git.target}
            className="hidden md:inline-block align-middle h-8 w-8 mx-0.5 p-1 bg-inherit text-inherit hover:bg-accent/60 rounded-md transition-colors"
          >
            <span className="sr-only">Git</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 123 123"
              fill="none"
              className="align-top"
            >
              <path
                fill="currentColor"
                d="M120.208 55.953 66.715 2.463a7.885 7.885 0 0 0-11.158 0l-11.109 11.11 14.088 14.088a9.373 9.373 0 0 1 11.87 11.948l13.578 13.579a9.368 9.368 0 0 1 9.704 2.23 9.386 9.386 0 0 1-6.64 16.025 9.393 9.393 0 0 1-9.21-7.547 9.384 9.384 0 0 1 .526-5.416L65.697 45.817v33.33a9.385 9.385 0 0 1 2.48 15.053 9.386 9.386 0 0 1-15.311-3.046A9.388 9.388 0 0 1 54.9 80.923a9.378 9.378 0 0 1 3.078-2.052V45.235a9.336 9.336 0 0 1-3.078-2.047A9.4 9.4 0 0 1 52.88 32.92l-13.89-13.89L2.311 55.703a7.89 7.89 0 0 0 0 11.16l53.495 53.497a7.895 7.895 0 0 0 11.157 0l53.244-53.245a7.9 7.9 0 0 0 0-11.162Z"
              />
            </svg>
          </Link>
          <button
            className="inline-block align-middle h-8 w-8 mx-0.5 p-1 bg-inherit text-inherit hover:bg-accent/60 rounded-md transition-colors"
            onClick={(e) => {
              e.preventDefault();
              if (resolvedTheme == "light") {
                setTheme("dark");
              } else {
                setTheme("light");
              }
            }}
          >
            <span className="sr-only">Toggle theme</span>
            <Moon
              width={25}
              height={25}
              className="hidden dark:inline align-top"
            />
            <Sun
              width={25}
              height={25}
              className="inline dark:hidden align-top"
            />
          </button>
          <button
            className="inline-block md:hidden align-middle h-8 w-8 mx-0.5 p-1 bg-inherit text-inherit hover:bg-accent/60 rounded-md transition-colors"
            onClick={(e) => {
              e.preventDefault();
              setMenuShown(true);
            }}
          >
            <span className="sr-only">Toggle menu</span>
            <Menu width={25} height={25} />
          </button>
        </span>
      </div>
      <nav
        className={`block md:hidden bg-background w-full h-full p-2 overflow-auto z-50 fixed top-0 ${menuShown ? "left-0" : "left-full"} transition-[left] shrink-0 duration-1000`}
      >
        <div className="flex flex-row">
          <div className="grow mx-1.5">
            <Logo
              width={160}
              height={35}
              className="inline h-8 w-auto self-center"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMenuShown(false);
            }}
            className="inline-block md:hidden self-center"
          >
            <X className="inline-block w-8 h-8 py-1 rounded-sm bg-background text-foreground hover:bg-accent/60 hover:text-accent-foreground transition-colors" />
          </button>
        </div>
        <ul
          className={`flex ${docLinks ? "flex-row overflow-x-auto" : "flex-col"} my-3 list-none`}
        >
          {headerLinks.nav.map((navLink) => (
            <li
              className={`${docLinks ? "inline" : "block my-1 text-center"}`}
              key={navLink.label}
            >
              <Link
                href={navLink.href}
                target={navLink.target}
                className={`inline-block align-middle ${pathname == navLink.href ? "bg-accent" : ""} text-inherit px-2 py-1 h-8 mx-1 rounded-sm hover:bg-accent/60 transition-colors`}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
          <li className={`${docLinks ? "inline" : "block my-1 text-center"}`}>
            <Link
              href={headerLinks.git.href}
              target={headerLinks.git.target}
              className="whitespace-nowrap inline-block align-middle text-inherit px-2 py-1 h-8 mx-1 rounded-sm hover:bg-accent/60 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 123 123"
                fill="none"
                className="inline mr-2 align-top"
              >
                <path
                  fill="currentColor"
                  d="M120.208 55.953 66.715 2.463a7.885 7.885 0 0 0-11.158 0l-11.109 11.11 14.088 14.088a9.373 9.373 0 0 1 11.87 11.948l13.578 13.579a9.368 9.368 0 0 1 9.704 2.23 9.386 9.386 0 0 1-6.64 16.025 9.393 9.393 0 0 1-9.21-7.547 9.384 9.384 0 0 1 .526-5.416L65.697 45.817v33.33a9.385 9.385 0 0 1 2.48 15.053 9.386 9.386 0 0 1-15.311-3.046A9.388 9.388 0 0 1 54.9 80.923a9.378 9.378 0 0 1 3.078-2.052V45.235a9.336 9.336 0 0 1-3.078-2.047A9.4 9.4 0 0 1 52.88 32.92l-13.89-13.89L2.311 55.703a7.89 7.89 0 0 0 0 11.16l53.495 53.497a7.895 7.895 0 0 0 11.157 0l53.244-53.245a7.9 7.9 0 0 0 0-11.162Z"
                />
              </svg>
              <span className="align-middle">Git</span>
            </Link>
          </li>
        </ul>
        {docLinks ? (
          <ul className={`flex flex-col my-3 list-none`}>
            {docLinks.map((docLink) => (
              <li className="block my-1" key={docLink.label}>
                <Link
                  href={docLink.href}
                  target={docLink.target || "_self"}
                  className={`${docLink.sub ? "ml-4" : ""} block align-middle ${pathname == docLink.href ? "bg-accent" : ""} text-inherit px-2 py-1 h-8 mx-1 rounded-sm hover:bg-accent/60 transition-colors`}
                >
                  {docLink.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}

Header.propTypes = {
  docLinks: PropTypes.arrayOf(PropTypes.object)
};

export default Header;
