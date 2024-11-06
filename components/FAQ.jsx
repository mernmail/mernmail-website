"use client";

import { questions } from "@/constants";
import { Plus, X } from "lucide-react";
import { useRef, useState } from "react";

function FAQ() {
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const ref = useRef({});

  return (
    <div className="mx-auto px-3 py-24 max-w-screen-xl">
      <h2 className="text-center font-bold text-4xl md:text-5xl hyphens-auto mb-4">
        Frequently Asked Questions
      </h2>
      {questions.map((question) => (
        <div className="border-b-2 border-border px-3" key={question.key}>
          <h3>
            <button
              className="py-3 w-full flex flex-row bg-inherit text-xl text-inherit"
              onClick={(e) => {
                e.preventDefault();
                setSelectedAccordion(
                  selectedAccordion == question.key ? null : question.key
                );
              }}
            >
              <div className="grow w-full text-start">{question.question}</div>
              <Plus
                className={`${selectedAccordion == question.key ? "rotate-45" : ""} duration-300 transition-transform`}
              />
            </button>
          </h3>
          <div
            className="transition-[height] duration-300 overflow-hidden"
            style={{
              height:
                selectedAccordion == question.key
                  ? ref.current[question.key]
                    ? ref.current[question.key].offsetHeight || 0
                    : 0
                  : 0
            }}
          >
            <div
              className="pb-3 text-muted-foreground"
              ref={(el) => (ref.current[question.key] = el)}
            >
              {question.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
