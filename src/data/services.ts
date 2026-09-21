import type { LucideIcon } from "lucide-react";
import { Code2, Smartphone, Bot, MessageCircle, Wrench, Sparkles } from "lucide-react";

export type Service = {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Web Development",
    description:
      "Full websites and web apps built from the ground up with React, Next.js, and clean, maintainable code.",
    icon: Code2,
  },
  {
    index: "02",
    title: "Responsive Website Development",
    description:
      "Layouts that hold up on any screen — phone, tablet, or desktop — without losing polish or performance.",
    icon: Smartphone,
  },
  {
    index: "03",
    title: "AI Automation",
    description:
      "Custom automations that handle repetitive tasks, connect tools, and free up hours in your week.",
    icon: Bot,
  },
  {
    index: "04",
    title: "WhatsApp Automation",
    description:
      "Automated messaging flows for customer replies, order updates, and lead follow-ups on WhatsApp.",
    icon: MessageCircle,
  },
  {
    index: "05",
    title: "Website Maintenance",
    description:
      "Ongoing updates, fixes, and performance checks so your site keeps running the way it should.",
    icon: Wrench,
  },
  {
    index: "06",
    title: "Custom Digital Solutions",
    description:
      "Tailored builds for problems that don't fit a template — scoped, designed, and shipped end to end.",
    icon: Sparkles,
  },
];
