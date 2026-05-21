# Founder → Co-founder Corrections for shedov.com

## Summary

All mentions of Sergey Shedov as "founder" across the shedov.com repository, categorized by whether they should be changed to "co-founder" or kept as-is.

---

## Category 1: Sergey as founder — FACTUAL (keep or change depending on context)

These describe Sergey as founder of the school/company. If he is now a co-founder, these should change.

| # | File | Line/Context | Current Text | Proposed Change |
|---|------|-------------|-------------|-----------------|
| 1 | `src/components/Founder.tsx` | Section heading (L39) | `Founder & Team` | `Co-founder & Team` |
| 2 | `src/components/Founder.tsx` | Badge on card (L64, L78) | `Founder` | `Co-founder` |
| 3 | `src/components/Hero.tsx` | Subtitle (L12) | `Founder & CEO · SIT Programming School` | `Co-founder & CEO · SIT Programming School` |
| 4 | `src/components/Hero.tsx` | Bio line (L20) | `Founder & CEO of` | `Co-founder & CEO of` |
| 5 | `src/components/About.tsx` | Bio text (L16) | `I am the Founder & CEO of SIT Programming School` | `I am the Co-founder & CEO of SIT Programming School` |
| 6 | `src/components/About.tsx` | Bio text (L16) | `I founded a programming school in Moscow in 2001` | Keep as-is if he was sole founder then; change to `co-founded` if applicable |
| 7 | `src/components/ProjectHistory.tsx` | Role field (L21) | `Founder & CEO` | `Co-founder & CEO` |
| 8 | `src/components/ProjectHistory.tsx` | Role field (L34) | `Founder` | `Co-founder` |
| 9 | `src/components/Footer.tsx` | Signature (L13) | `Founder & CEO of SIT Programming School` | `Co-founder & CEO of SIT Programming School` |
| 10 | `src/pages/IndexNew.tsx` | Bio line (L48) | `Founder & CEO` | `Co-founder & CEO` |
| 11 | `src/pages/IndexNew.tsx` | Bio line (L59) | `Founder` | `Co-founder` |
| 12 | `src/pages/IndexNew.tsx` | Heading (L100) | `Founder and educator` | `Co-founder and educator` |
| 13 | `src/pages/IndexNew.tsx` | Bio text (L107) | `Founder & CEO of SIT Programming School` | `Co-founder & CEO of SIT Programming School` |
| 14 | `src/pages/IndexNew.tsx` | Bio text (L187) | `Social entrepreneur and founder of SIT Programming School` | `Social entrepreneur and co-founder of SIT Programming School` |
| 15 | `index.html` | Title (L6) | `EdTech Founder, SIT Programming School, CS Education` | `EdTech Co-founder, SIT Programming School, CS Education` |
| 16 | `index.html` | Meta description (L9) | `Founder & CEO of SIT Programming School` | `Co-founder & CEO of SIT Programming School` |
| 17 | `index.html` | Meta keywords (L10) | `EdTech founder` | `EdTech co-founder` |
| 18 | `index.html` | OG title (L15) | `Founder & CEO, SIT Programming School` | `Co-founder & CEO, SIT Programming School` |
| 19 | `index.html` | Twitter title (L24) | `Founder & CEO, SIT Programming School` | `Co-founder & CEO, SIT Programming School` |
| 20 | `index.html` | Schema.org jobTitle (L47) | `Founder & CEO` | `Co-founder & CEO` |
| 21 | `index.html` | Schema.org description (L48) | `Founder & CEO of SIT Programming School... Founded a programming school` | `Co-founder & CEO of SIT Programming School... Co-founded a programming school` |
| 22 | `index.html` | Schema.org occupation (L93) | `Founder & CEO` | `Co-founder & CEO` |
| 23 | `index.html` | Schema.org name alias (L110) | `Sergey Shedov - EdTech Founder` | `Sergey Shedov - EdTech Co-founder` |
| 24 | `index-new.html` | Title (L6) | `Founder and Educator` | `Co-founder and Educator` |
| 25 | `index-new.html` | Meta description (L8) | `founder of SIT Programming School` | `co-founder of SIT Programming School` |
| 26 | `index-new.html` | OG title (L11) | `Founder and Educator` | `Co-founder and Educator` |
| 27 | `index-new.html` | OG description (L12) | `Founder of SIT Programming School` | `Co-founder of SIT Programming School` |
| 28 | `index-new.html` | Twitter title (L18) | `Founder and Educator` | `Co-founder and Educator` |
| 29 | `index-new.html` | Twitter description (L19) | `Founder of SIT Programming School` | `Co-founder of SIT Programming School` |
| 30 | `sergey-shedov.html` | Title (L6) | `Founder - programming.school` | `Co-founder - programming.school` |
| 31 | `sergey-shedov.html` | Meta description (L7) | `founder of programming.school` | `co-founder of programming.school` |
| 32 | `src/pages/FAQ.tsx` | Answer text (L89) | `programming.school founder Sergey Shedov` | `programming.school co-founder Sergey Shedov` |
| 33 | `src/pages/FAQ.tsx` | Answer text (L34) | `Our founder and teachers bring` | `Our co-founder and teachers bring` |
| 34 | `scripts/blog-article-template.html` | Footer (L231) | `Founder & CEO of SIT Programming School` | `Co-founder & CEO of SIT Programming School` |
| 35 | `scripts/blog-index-template.html` | Title (L6) | `Blog | Sergey Shedov - EdTech Founder` | `Blog | Sergey Shedov - EdTech Co-founder` |
| 36 | `scripts/blog-index-template.html` | Footer (L115) | `Founder & CEO of SIT Programming School` | `Co-founder & CEO of SIT Programming School` |

## Category 2: Blog post HTML footers — SAME PATTERN (27+ files)

Every blog post HTML file has the same footer signature. All need the same change:

**Current:** `Founder & CEO of SIT Programming School. Computer science education systems for emerging markets.`

**Proposed:** `Co-founder & CEO of SIT Programming School. Computer science education systems for emerging markets.`

Affected files:
- `blog.html`
- `blog/2016-11-08-harbor-space.html`
- `blog/2016-11-29-environment-shapes-thinking.html`
- `blog/2017-02-17-south-africa-leap-and-why-we-dont-give-up-on-students.html`
- `blog/2017-04-13-volvo-china-lean.html`
- `blog/2018-03-06-oxford-latin-and-why-hype-needs-a-pinch-of-canning.html`
- `blog/2018-11-16-mit-and-why-coding-alone-is-not-enough.html`
- `blog/2019-09-25-ai-oxford-debate-edtech-misses.html`
- `blog/2019-11-11-wro.html`
- `blog/2020-01-25-computer-science-new-latin.html`
- `blog/2020-02-07-acronis-foundation-education-at-scale.html`
- `blog/2020-02-07-acronis-foundation-education-at-scale-copy.html`
- `blog/2021-11-05-dave-waiser-scale-quality-lesson.html`
- `blog/2021-11-05-dave-waiser-scale-quality-lesson-copy.html`
- `blog/2021-11-06-web-summit.html`
- `blog/2022-10-16-launching-sit-programming-school-serbia.html`
- `blog/2022-12-26-vietnam-taught-me-not-to-rush.html`
- `blog/2023-05-10-web-summit-rio-2023.html`
- `blog/2023-08-06-learning-center-hcmc.html`
- `blog/2024-03-04-online-stream-sergey-shedov-principles-vs-tools.html`
- `blog/2025-01-14-sit-ps-hcmc-campus.html`
- `blog/2025-01-14-swiss-coding-academy-hcmc-campus.html`
- `blog/2025-05-08-web-summit-rio-2025.html`
- `blog/2025-05-08-web-summit-rio-2025-the-death-of-ai-hype.html`
- `blog/2026-02-01-sit-programming-school-vietnam-3-years-in.html`
- `blog/2026-02-06-sit-programming-school-vietnam-3-years-in.html`
- `blog/2026-02-09-sit-programming-school-vietnam-3-years-in.html`
- `blog/ai-in-education.html`
- `blog/ai-oxford-debate-edtech-misses.html`
- `blog/ai-oxford-debate-edtech-misses2.html`
- `blog/computer-science-new-latin.html`
- `blog/test-article.html`

## Category 3: Contextual mentions in blog post CONTENT — REVIEW NEEDED

These use "founder" as a concept within article text. Need case-by-case decision.

| # | File | Context | Current Text | Proposed Action |
|---|------|---------|-------------|-----------------|
| 37 | `blog/posts/2018-03-06-oxford-latin-and-why-hype-needs-a-pinch-of-canning.md` | Personal reflection | `rewired my "operating system" as a founder` | Change to `as a co-founder` or keep as generic concept |
| 38 | `blog/posts/2022-10-16-launching-sit-programming-school-serbia.md` | Excerpt + body | `more than founder presence or announcements` / `tied to the founder's physical presence` | These are generic "founder" concept, not about Sergey specifically — can keep or change to "co-founder" for consistency |
| 39 | `blog/posts/2022-10-16-launching-sit-programming-school-serbia.md` | Excerpt | `Launching in Belgrade proved that methodology and team readiness matter more than founder presence` | Same as above — generic concept |
| 40 | `blog/2018-03-06-oxford-latin-and-why-hype-needs-a-pinch-of-canning.html` | HTML version of #37 | `as a founder` | Same as #37 |
| 41 | `blog/2022-10-16-launching-sit-programming-school-serbia.html` | HTML version of #38 | `founder presence` / `founder's physical presence` | Same as #38 |

## Category 4: Other people's founder mentions — DO NOT CHANGE

| # | File | Context | Text | Action |
|---|------|---------|------|--------|
| 42 | `blog/posts/2021-11-05-dave-waiser-scale-quality-lesson.md` | About Dave Waiser | `Dave Waiser, the founder of Gett` | KEEP — different person |
| 43 | `blog/2021-11-05-dave-waiser-scale-quality-lesson.html` | HTML version | `founder of Gett` | KEEP |
| 44 | `blog/posts/2023-05-10-web-summit-rio-2023.md` | About other founders | `These founders are responding to local constraints` | KEEP — generic reference |
| 45 | `blog/2023-05-10-web-summit-rio-2023.html` | HTML version | `These founders` | KEEP |

## Category 5: 01. Личность.md — Canonical bios — ALL NEED UPDATE

This file contains canonical biography formulations used across the site. All "Founder" references should become "Co-founder":

| # | Line | Current | Proposed |
|---|------|---------|----------|
| 46 | L9 | `EdTech Founder` (Option A) | `EdTech Co-founder` |
| 47 | L10 | `EdTech Founder` (Option B ✅) | `EdTech Co-founder` |
| 48 | L11 | `EdTech Founder` (Option C) | `EdTech Co-founder` |
| 49 | L12 | `Founder of SIT Programming School` (One-liner 1) | `Co-founder of SIT Programming School` |
| 50 | L13 | `Founder & CEO of SIT Programming School` (One-liner 2 ✅) | `Co-founder & CEO of SIT Programming School` |
| 51 | L35 | `beyond founder involvement since 2001` | `beyond co-founder involvement since 2001` |
| 52 | L42 | `Unlike typical EdTech founders focused on Western markets` | KEEP — generic reference to other founders |
| 53 | L52 | `Founder of SIT Programming School` | `Co-founder of SIT Programming School` |
| 54 | L62 | `Social entrepreneur and founder of SIT Programming School` | `Social entrepreneur and co-founder of SIT Programming School` |
| 55 | L72 | `the founder of SIT Programming School` | `the co-founder of SIT Programming School` |
| 56 | L72 | `founded a programming school for children` | Keep or change to `co-founded` depending on facts |
| 57 | L78 | `founder of SIT Programming School` | `co-founder of SIT Programming School` |
| 58 | L78 | `founding a programming school for children` | Keep or change to `co-founding` |

## Category 6: 02. Домены.md — Generic references — KEEP

| # | File | Context | Action |
|---|------|---------|--------|
| 59 | `02. Домены.md` L43 | `few founders have real emerging markets traction` | KEEP — generic, not about Sergey |
| 60 | `02. Домены.md` L61 | `vs "EdTech founder"` | KEEP — refers to category/perception, not Sergey specifically |

---

## Notes

- The blog HTML posts (Category 2) are likely auto-generated from the Markdown posts + template. If the template (`scripts/blog-article-template.html`) is updated, regenerated HTML will pick up the change automatically.
- The same applies to `blog-index-template.html` and `blog.html`.
- Some blog posts have duplicate versions (e.g., `-copy.html`, multiple dates for same post). All versions need updating.
- The contextual mentions in Category 3 are the trickiest — they use "founder" as a general concept, not necessarily as Sergey's title. Decision needed: change for consistency, or keep as generic language.
