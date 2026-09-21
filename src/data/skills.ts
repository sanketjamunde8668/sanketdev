export type SkillGroup = {
  id: string;
  index: string;
  title: string;
  note: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend",
    note: "Interfaces that feel fast and considered",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "automation",
    index: "02",
    title: "AI & Automation",
    note: "Systems that keep working after I close the laptop",
    items: ["AI Automation", "WhatsApp Automation", "Workflow Automation", "APIs"],
  },
  {
    id: "tools",
    index: "03",
    title: "Tools",
    note: "The everyday stack behind the work",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];
