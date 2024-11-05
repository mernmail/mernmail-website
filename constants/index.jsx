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
