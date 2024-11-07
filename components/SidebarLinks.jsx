"use client";
import Logo from "@/components/Logo";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Header({ links }) {
  const pathname = usePathname();

  return (
    <ul className={`flex flex-col my-3 list-none`}>
      {links.map((link) => (
        <li className="block my-1" key={link.label}>
          <Link
            href={link.href}
            target={link.target || "_self"}
            className={`${link.sub ? "ml-4" : ""} block align-middle ${pathname == link.href ? "bg-accent" : ""} text-inherit px-2 py-1 mx-1 rounded-sm hover:bg-accent/60 transition-colors`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

export default Header;
