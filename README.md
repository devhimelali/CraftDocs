# 📄 CraftDocs

**CraftDocs** is a fast, lightweight, and modern documentation engine built with **Next.js**, **Tailwind CSS v4**. It automatically turns your local Markdown (`.md`) files into clean, responsive, and SEO-friendly documentation websites.

---

## ✨ Features

- **📁 File-Based Content:** Just drop your `.md` files into the `docs/` folder.
- **🏷️ Frontmatter Support:** Manage metadata like `title`, `author`, `category`, `tags`, and `date` with ease.
- **⚡ Next.js App Router:** High performance, server-side rendering, and sub-second page transitions.
- **🎨 Tailwind CSS v4 & Typography:** Elegant reading experience out of the box with `@tailwindcss/typography`.
- **🌙 Built-In Dark Mode:** Full support for system preferences and class-based theme switching.
- **📱 Fully Responsive:** Clean layout designed for desktop, tablet, and mobile viewing.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Markdown Parsing:** `gray-matter`, `remark`, `remark-html`
- **Language:** TypeScript

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/craftdocs.git](https://github.com/your-username/craftdocs.git)
cd craftdocs
```
---

## 📂 Project Structure

```text
craftdocs/
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
├── docs/                 # Your Markdown source files (.md)
├── lib/                  # Markdown & file reading utilities (fs, gray-matter)
├── public/               # Static assets (images, icons)
├── package.json
└── README.md
```
