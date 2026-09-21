import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import * as React from "react";

export default function Education() {
  return React.createElement(
    "section",
    { id: "education", className: "section-y rule" },
    React.createElement(
      "div",
      { className: "container-px grid lg:grid-cols-[0.9fr_1.1fr] gap-16" },
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
        },
        React.createElement("p", { className: "num mb-4" }, "05 — Education"),
        React.createElement(
          "h2",
          { className: "text-4xl md:text-5xl tracking-tight max-w-lg" },
          "Studying computer science, building alongside it."
        )
      ),
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "flex gap-6 border-t border-line pt-10",
        },
        React.createElement(GraduationCap, {
          className: "text-gold shrink-0",
          size: 28,
          strokeWidth: 1.5,
        }),
        React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2" },
            React.createElement("h3", { className: "text-2xl text-paper" }, "B.Sc. Computer Science"),
            React.createElement("span", { className: "font-mono text-xs text-gold border border-gold/30 px-2 py-0.5" }, "In Progress")
          ),
          React.createElement("p", { className: "text-muted mb-1" }, "Deogiri College"),
          React.createElement("p", { className: "text-sm text-muted" }, "Expected Graduation — 2030")
        )
      )
    )
  );
}
