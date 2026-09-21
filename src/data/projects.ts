export type Project = {
  id: string;
  index: string;
  name: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

// Replace image paths and links with your real project assets/URLs.
export const projects: Project[] = [
  {
    id: "project-one",
    index: "01",
    name: "Automated WhatsApp Support Flow",
    description:
      "An automation pipeline that routes incoming WhatsApp messages, tags intent, and replies through a connected workflow — cutting manual response time for a small business team.",
    tech: ["JavaScript", "WhatsApp API", "Workflow Automation", "Node.js"],
    image: "/images/project-1.svg",
    liveUrl: "#",
    githubUrl: "https://github.com/sanketjamunde8668",
  },
  {
    id: "project-two",
    index: "02",
    name: "Client Portfolio Platform",
    description:
      "A responsive, animated portfolio template built with React and Tailwind CSS, designed for freelance developers who need a fast, premium presence without the bloat.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/images/project-2.svg",
    liveUrl: "#",
    githubUrl: "https://github.com/sanketjamunde8668",
  },
  {
    id: "project-three",
    index: "03",
    name: "API-Driven Dashboard",
    description:
      "A lightweight dashboard that pulls data from multiple APIs into a single view, built to make everyday reporting less manual for a small operations team.",
    tech: ["Next.js", "REST APIs", "Tailwind CSS"],
    image: "/images/project-3.svg",
    liveUrl: "#",
    githubUrl: "https://github.com/sanketjamunde8668",
  },
];
