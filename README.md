# Allanino's Blog (Astro Migration)

This is a migration of the original Jekyll blog to [Astro v6](https://astro.build).

## 🚀 Project Structure

- `src/content/blog/`: Markdown posts migrated from Jekyll.
- `src/components/`: Reusable Astro components (Navigation, Footer, Math, etc.).
- `src/layouts/`: Page layouts (BaseLayout, BlogPost).
- `src/pages/`: File-based routing, including dynamic routes for blog posts.
- `src/utils/`: Helper functions for URL generation and content processing.
- `public/`: Static assets (images, favicon).

## 🛠 Features

- **Astro Content Collections**: Type-safe content management with Zod schemas.
- **MDX Support**: Enhanced Markdown with components.
- **LaTeX Rendering**: Powered by `remark-math` and `rehype-katex`.
- **TailwindCSS 4**: Modern styling with `@tailwindcss/typography` for beautiful long-form content.
- **Dark Mode**: Persistent dark mode using `localStorage`.
- **SEO Ready**: Automatic RSS feed and Sitemap generation.
- **Responsive Design**: Mobile-first minimalist aesthetic.

## 🧞 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally |

## 🚀 Deployment (GitHub Pages)

The site is configured to be deployed to GitHub Pages.

1.  **Repository Settings**: Go to Settings > Pages and set "Build and deployment" source to "GitHub Actions".
2.  **Workflow**: Use the standard Astro deployment workflow (see `.github/workflows/deploy.yml` if created, or use the Astro recommendation).

*Note: The `site` property in `astro.config.mjs` is set to `https://allanino.github.io`. Ensure this matches your domain.*
