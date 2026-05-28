# bonvari.ir

Personal site for Mehdi Bonvari (author and translator), built with [Hugo](https://gohugo.io).
Persian (RTL) by default, with an English bio page.

## Run locally

Install Hugo (extended), then start the dev server from the project directory:

```bash
brew install hugo          # macOS; see gohugo.io/installation for others
cd bonvari-ir
hugo server
```

Open http://localhost:1313. Edits reload automatically.

To produce the final files (output goes to `public/`):

```bash
hugo --gc --minify
```

## Where things live

```
content/fa/        Persian pages and books
  about.md           "About" page (bio + activity timeline in front matter)
  works/             Authored works page
  translations/      Translations page
  gallery/           Gallery (images listed in front matter)
  notes/             Blog posts (one .md per post)
  books/             One .md per book — this is the book database
content/en/        English bio page
static/img/covers/   Book cover images
static/img/gallery/  Gallery artwork
assets/css/main.css  Styles
layouts/             HTML templates
hugo.toml            Site config: languages, menu, taxonomies
```

## Add a book

Create a file in `content/fa/books/`, e.g. `content/fa/books/my-book.md`:

```yaml
---
title: "عنوان فارسی"
slug: "my-book"
book_type: ["translation"]   # translation | authored | short-story | translated-story
status: "published"          # published | in-progress | editing
order: 9                     # sort order within its section (lower = first)
original_title: "Original Title"
original_author: "نویسندهٔ اصلی"
publisher: "ناشر"
year: "۱۴۰۳"
genre: "علمی‌تخیلی"
notes: "یادداشت کوتاه"
cover: "/img/covers/my-book.jpg"   # optional; omit for a text placeholder
---
```

`book_type` and `status` decide which section the book shows up in (works vs.
translations, published vs. in-progress). Drop the cover image in
`static/img/covers/` and point `cover` at it. Skip `cover` and the card shows a
styled title placeholder instead.

A book with no cover just uses the placeholder — that is intentional, not a bug.

## Add a blog post

Create `content/fa/notes/my-post.md`:

```yaml
---
title: "عنوان یادداشت"
slug: "my-post"
date: 2026-06-01
---

متن یادداشت اینجا.
```

## Add a gallery image

Put the image in `static/img/gallery/`, then add an entry under `items:` in
`content/fa/gallery/_index.md`. `category` must match one of the `slug`s listed
under `categories:` in the same file.

## Publish

The site auto-deploys on every push to `main` via GitHub Actions
(`.github/workflows/deploy.yml`). Enable it once in the repo:
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

```bash
git add -A
git commit -m "add: new book"
git push
```

Wait ~1 minute for the Actions run to finish, then refresh the site.
The deploy sets `baseURL` automatically, so it works on both the
`github.io` preview URL and a custom domain without code changes.
