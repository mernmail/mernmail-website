import { Bird, MonitorSmartphone, Server, Sparkles } from "lucide-react";

export const headerLinks = {
  nav: [
    {
      href: "/",
      target: "_self",
      label: "Home"
    },
    {
      href: "/docs",
      target: "_self",
      label: "Docs"
    },
    {
      href: "/blog",
      target: "_self",
      label: "Blog"
    }
  ],
  git: {
    href: "https://git.svrjs.org",
    target: "_blank"
  }
};

export const features = [
  {
    icon: <Bird className="w-10 h-10 text-primary" />,
    title: "Free as in freedom",
    description:
      "With MERNMail being open-source and licensed under MIT, you're protected from potential risks like backdoors often associated with proprietary software. You can also contribute to its development through the Git repository."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "Simple and clean",
    description:
      "MERNMail offers an intuitive, clutter-free interface for effortless email management. Built on the MERN stack, our design ensures a seamless and responsive user experience. Focus on what matters – your emails."
  },
  {
    icon: <Server className="w-10 h-10 text-primary" />,
    title: "Self-hosted",
    description:
      "Take control of your emails with MERNMail's self-hosted feature. Easily host your data on your own servers. Enjoy enhanced privacy and security, with a simple setup process. Say goodbye to third-party data centers and hello to email independence."
  },
  {
    icon: <MonitorSmartphone className="w-10 h-10 text-primary" />,
    title: "Mobile-friendly",
    description:
      "Access your emails seamlessly on any device with MERNMail. Our responsive design ensures a smooth experience on smartphones and tablets, making it easy to read, compose, and organize emails on the go."
  }
];

export const questions = [
  {
    key: "item-1",
    question: "What is a webmail application?",
    answer:
      "A webmail application is a type of email client that allows users to access and manage their email accounts through a web browser. It provides a user interface to send, receive, and manage emails, as well as other features, for example contact management, all within a web-based interface."
  },
  {
    key: "item-2",
    question: "What is MERNMail?",
    answer:
      "MERNMail is an open-source webmail application that is built on MERN stack. MERNMail also has an address book functionality. MERNMail is licensed under a permissive MIT license."
  },
  {
    key: "item-3",
    question: "How did MERNMail get its name?",
    answer:
      'MERNMail got its name from the MERN stack that the application is built on ("MERN") and the purpose of the application - a webmail application ("Mail").'
  },
  {
    key: "item-4",
    question: "How can I set up MERNMail?",
    answer: "You can read the documentation to learn how to set up MERNMail."
  },
  {
    key: "item-5",
    question: "How can I use MERNMail?",
    answer: "You can read the documentation to learn how to use MERNMail."
  }
];
