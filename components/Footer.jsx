import Link from "next/link";
import React from "react";
import SocialIcons from "@/components/SocialIcons";
import { footerLinks } from "@/constants";
import Logo from "@/components/Logo";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col w-full transition-all border-border border-t">
      <div className="px-3 sm:px-12 md:px-24 lg:px-6 py-10 w-full mx-auto max-w-screen-xl">
        <div className="flex flex-col lg:flex-row justify-between max-lg:items-start max-sm:items-center items-center mb-6 ">
          <div className="flex items-center mb-6 md:mb-0">
            <Logo width={240} height={80} />
          </div>
          <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between w-full lg:w-auto space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-16">
            <div className="flex flex-col items-center sm:items-start">
              <div className="text-2xl font-light text-primary">
                Quick links
              </div>
              {footerLinks.otherPages.map((link) => (
                <span key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-light hover:text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="text-2xl font-light text-primary">Resources</div>
              {footerLinks.resources.map((link) => (
                <span key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-light hover:text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="text-2xl font-light text-primary">Social</div>
              <p className="text-base font-light">
                {footerLinks.social.supportText}
              </p>
              <div className="flex space-x-1 py-3">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mb-6 border-gray-300 dark:border-white/30"></div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
          <span className="text-sm font-light">
            Copyright © 2023-{currentYear}{" "}
            <Link
              href={footerLinks.footerBottom.rightsReserved.href}
              className="text-primary font-semibold"
            >
              {footerLinks.footerBottom.rightsReserved.label}
            </Link>
          </span>
          <span className="text-sm font-light">
            <Link
              href={footerLinks.footerBottom.termsofService.href}
              className="text-primary font-medium transition-all underline-offset-4 hover:underline"
            >
              {footerLinks.footerBottom.termsofService.label}{" "}
            </Link>
            |{" "}
            <Link
              href={footerLinks.footerBottom.privacyPolicy.href}
              className="text-primary font-medium transition-all underline-offset-4 hover:underline"
            >
              {footerLinks.footerBottom.privacyPolicy.label}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
