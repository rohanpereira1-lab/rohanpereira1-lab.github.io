# PRD — Peterson Pereira Portfolio

## Original Problem Statement
Build a modern, single-page personal portfolio website from Peterson Pereira's résumé: hero (name, headline, tagline), About (2–3 sentences), Experience timeline (role, company, dates, 1–2 bullets each), Skills grouped by category, Projects/Highlights, Contact (email + LinkedIn + GitHub). Clean, professional design, calm palette, sticky nav, smooth scrolling, subtle entrance animations, fully responsive, clearly-marked placeholders for missing résumé data.

## User Choices
- Palette: Slate & teal (deep navy text, soft teal accents, off-white background)
- Typography: designer-picked pairing — Cormorant Garamond (serif headings) + Outfit (sans body)
- Static single page, no backend functionality
- Art direction: award-worthy, editorial brutalism, kinetic hero with masked line-by-line reveal, numbered chapters, editorial marquee, lenis smooth scrolling, framer-motion reveals, hero parallax

## Architecture
- Frontend only (React 19 + Tailwind + framer-motion + lenis + react-fast-marquee). Backend untouched (default FastAPI health check still running, not used by UI).
- Components: Navbar, Hero, MarqueeBand, About, Experience, Skills, Highlights, Contact, Reveal, SectionHeader, lib/scroll.js
- Design tokens: /app/design_guidelines.json (paper #F4F4F0, ink #0B1325, teal #4A827E)

## User Personas
- Recruiters/executives evaluating Peterson for leadership roles
- Professional network contacts (LinkedIn-driven traffic)

## Implemented (2026-08-29)
- Hero: masked line-by-line kinetic reveal, real professional headshot (peterson-pereira.png, added 2026-08-29 from user Drive) in parallax frame, CTAs (View Experience, Get in Touch, Download Résumé), location meta
- Résumé PDF download (2026-08-29): uploaded "Peterson Pereira - Resume May 2026.pdf" served at /Peterson-Pereira-Resume.pdf, hero button with download attribute
- Slow editorial marquee band (Talent Acquisition / Leadership / Culture / ...)
- About chapter 01 with 2–3 sentence summary + 4 impact stats (55→35 days TTF, 78.5% fulfillment, −25% CPH, 80% QoH)
- Experience timeline chapter 02: 5 roles (Relevance Lab AVP → Interactive Manpower 2005) with dates + 1–2 highlight bullets
- Skills chapter 03: 4 categories (Talent Leadership, Platforms & Systems, Sourcing & Talent Intelligence, Analytics & Reporting)
- Education & Certifications chapter 04 (2026-08-29): S.S.C. 70% (2000) & H.S.C. 74% (2001) St. Xavier's High School Gujarat Board, B.Com Grade II (2004) & Diploma in Financial Banking & Derivatives A+ (2006), both Gujarat University, Certified Recruitment Professional — Ma Foi Management Ltd. Chapters renumbered: Highlights 05, Contact 06; Education added to nav
- Highlights chapter 05: 6 cards incl. featured Recruitment Transformation metric card
- Contact chapter 06 (dark): massive mailto email, phone, location, LinkedIn /in/pereirapeterson, [PLACEHOLDER: GitHub URL]
- Sticky glass navbar with animated underlines + mobile hamburger menu; lenis momentum scrolling; staggered framer-motion scroll reveals; grain overlay; responsive verified at 390px

## Verified
- curl: frontend 200, backend /api healthy
- Screenshots desktop (hero, about, experience, highlights, contact) + mobile (hero, menu open, nav scroll) — no console errors

## Backlog
- P0: (done) Professional headshot added; remaining: add GitHub URL if desired
- P1: (done) Education & Certifications section
- P2: (done) Downloadable résumé PDF button; remaining: contact form with email delivery; dark mode toggle; SEO/OpenGraph share image
