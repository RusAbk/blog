# Blog Agent Instructions

This repository is a Quartz-powered personal blog. Write public-facing content in English.

## Source of Style

Use `writing-style.md` as the primary style guide. It is an internal agent document and must not be linked from public content. Before drafting or editing a post, read that file and at least two existing posts from `content/posts/` to match the blog's voice.

The target voice is human, plain, and specific. Prefer clear thinking over polish. Avoid generic advice, marketing language, fake urgency, and overly formal phrasing.

## Content Rules

- Put blog posts in `content/posts/`.
- Use Markdown with Quartz wikilinks when connecting related notes.
- Include frontmatter with `title`, `description`, `published`, and `tags`.
- Keep titles simple and literal.
- Write in first person when it makes the idea more accountable.
- Keep notes useful even when they are short.
- Keep the blog compact: these are notes, not landing pages.
- Do not publish internal agent documents, process notes, prompts, or drafts.
- Do not link to `writing-style.md`, `agents.md`, or `AGENTS.md` from public pages.

## Site Structure

- `content/index.md` is the blog home page.
- `content/about.md` is a short public note about Ruslan and the blog.
- `content/posts/` contains public posts.
- `quartz.config.ts` holds Quartz configuration, including ignore patterns for internal files.

## Build

- Run `npm run build` to generate the static site in `public/`.
- Use `npm run dev` only when a local preview server is needed.
