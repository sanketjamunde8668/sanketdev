# Sanket Developer — Portfolio

A premium, animated, single-page portfolio for **Sanket Jamunde**, built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS (dark, gold-accented custom theme — not the default shadcn palette)
- Framer Motion for scroll-reveals, the animated hero background, and the mobile menu
- lucide-react for icons

This project follows the shadcn folder convention (`src/components/ui`) and a `cn()` helper in
`src/lib/utils.ts`, so any future shadcn component (`npx shadcn@latest add <component>`) will drop
straight in without changes.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Before you deploy

1. **Images** — drop real photos into `public/images/`:
   - `profile.jpg` (used if you add a profile image to the Hero section)
   - `project-1.jpg`, `project-2.jpg`, `project-3.jpg` — replace with real project screenshots.
   Placeholder gradient SVGs are included so the layout previews correctly without any images.

2. **Project links** — open `src/data/projects.ts` and swap the `liveUrl` / `githubUrl` values for
   your real project URLs.

3. **Contact form** — `src/components/Contact.tsx` currently opens the visitor's email client with
   the message pre-filled (no backend required). To collect submissions directly, wire the
   `handleSubmit` function to a service like Formspree, Resend, or EmailJS.

4. **Favicon** — replace `public/favicon.png` with your own mark.

## Structure

```
src/
├── components/
│   ├── ui/                # shadcn-style primitives (button, background-paths)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/                  # content — edit these instead of the components
│   ├── projects.ts
│   ├── skills.ts
│   └── services.ts
├── lib/utils.ts
├── App.tsx
├── main.tsx
└── index.css               # design tokens + global styles
```

## Design notes

- Palette: deep navy (`#0A0E1A`) with a muted gold accent (`#D4A24C`) — chosen to read as premium
  and technical without the generic near-black + neon-green look.
- Type: **Space Grotesk** for display/headings, **Inter** for body text, **JetBrains Mono** for
  labels and numbering.
- Motion is deliberate: one animated hero background, scroll-triggered reveals per section, and
  hover states — not stacked on every element.
- Respects `prefers-reduced-motion`.
