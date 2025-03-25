"use client";
import ReactMarkdown from "react-markdown";
import { privacyPolicy } from "@/constants/guidelines";
import { useEffect } from "react";

function Contribute() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-6 md:py-28 gap-2 flex flex-col">
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold">
        Privacy Policy
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        Effective date: March 25, 2025
      </p>
      <div className="prose prose-a:text-primary max-w-full md:prose-lg dark:prose-invert">
        <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
      </div>
    </main>
  );
}

export default Contribute;
