"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { emails } from "@/constants";
import { isEmail } from "validator";
import SocialIcons from "@/components/SocialIcons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [hCaptchaToken, setHCaptchaToken] = useState(null);
  const captchaRef = useRef();

  return (
    <main className="max-w-screen-lg mx-auto px-4 py-6 gap-2 flex flex-col">
      <h1 className="text-center text-4xl md:text-6xl py-12 md:py-16 font-bold">
        Contact us
      </h1>
      <div className="flex flex-col md:flex-row mb-6">
        <form
          className="border-border border bg-card text-card-foreground rounded-lg mx-2 md:mx-4 max-md:mb-8 p-6 w-full self-center"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                  captchaToken: hCaptchaToken,
                  name: name,
                  email: email,
                  message: message
                }),
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                }
              });

              if (res.status == 200) {
                setStatus("Your message has been sent.");
              } else {
                setStatus("Uh oh! Something went wrong.");
              }
            } catch (error) {
              console.error(error);
              setStatus("Uh oh! Something went wrong.");
            }
            setHCaptchaToken(null);
            captchaRef.current.resetCaptcha();
            setName("");
            setEmail("");
            setMessage("");
          }}
        >
          <label htmlFor="contact-name" className="block mb-2">
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            id="contact-name"
            className="block mb-4 bg-accent text-accent-foreground w-full rounded-md px-2 py-1 focus:outline focus:outline-2 focus:outline-primary"
          />
          <label htmlFor="contact-email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            id="contact-email"
            className="block mb-4 bg-accent text-accent-foreground w-full rounded-md px-2 py-1 focus:outline focus:outline-2 focus:outline-primary"
          />
          <label htmlFor="contact-message" className="block mb-2">
            Message
          </label>
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            id="contact-message"
            className="block h-44 bg-accent text-accent-foreground w-full rounded-md px-2 py-1 focus:outline focus:outline-2 focus:outline-primary"
          />
          <div className="my-5">
            <HCaptcha
              ref={captchaRef}
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
              onVerify={(token) => {
                setHCaptchaToken(token);
              }}
            />
          </div>
          {status ? <p className="my-5">{status}</p> : ""}
          <button
            type="submit"
            className="bg-primary text-primary-foreground p-2 rounded-md text-center w-full hover:bg-primary/75 disabled:bg-primary/50 transition-colors"
            disabled={!name || !email || !isEmail(email) || !message}
          >
            <Send className="inline align-top mr-2" />
            <span className="align-middle">Send</span>
          </button>
        </form>
        <div className="border-border border bg-card text-card-foreground rounded-lg mx-2 md:mx-4 px-9 py-6 w-full md:max-w-96 self-center">
          <ul className="mb-6">
            {emails.map((email, index) => (
              <li key={index} className="flex items-center my-4">
                <email.icon className="mr-2 shrink-0" size={24} />
                <span>
                  <a
                    href={email.url}
                    title={`Send an email to ${email.email}`}
                    className="text-muted-foreground hover:text-accent-foreground transition-colors duration-200"
                  >
                    {email.email}
                  </a>
                </span>
              </li>
            ))}
          </ul>
          <div className="text-center space-x-3 py-4 border-border border-t border-b">
            <SocialIcons />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
