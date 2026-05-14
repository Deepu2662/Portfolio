# Portfolio — Alex Kumar

A dark minimal portfolio built with **Next.js 14 + TypeScript**.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Google Fonts (Syne, JetBrains Mono, DM Sans)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All content lives in `src/data/` — just update the files there:

| File | What to edit |
|------|-------------|
| `src/data/projects.ts` | Your projects |
| `src/data/skills.ts` | Skills + certifications |
| `src/data/experience.ts` | Work experience |
| `src/data/blog.ts` | Blog posts |

- Replace `"Alex Kumar"` with your name in `Navbar.tsx`, `Hero.tsx`, and `Footer.tsx`
- Update contact info in `Contact.tsx`
- Add your `resume.pdf` to the `public/` folder
- Update social links in `Hero.tsx`

## Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel
```
