# Migration Checklist: Jekyll to Astro

This document summarizes the migration process and highlights any remaining manual steps or considerations.

## ✅ Completed Automatically

- [x] **Content Migration**: All Jekyll posts moved from `_posts/` to `src/content/blog/`.
- [x] **Filename Normalization**: Removed `YYYY-MM-DD-` prefixes from filenames for cleaner slugs while preserving the `date` in frontmatter.
- [x] **Frontmatter Normalization**:
    - `categories` (string or array) converted to a unified array.
    - `image` paths updated to point to `public/` or relative assets.
- [x] **Permalinks**: Preserved hierarchical structure `/blog/[category]/[slug]/`.
- [x] **LaTeX Support**: Integrated `remark-math` and `rehype-katex`.
- [x] **CSS Migration**: Replaced Jekyll's SCSS with TailwindCSS 4 and `@tailwindcss/typography`.
- [x] **RSS Feed**: Regenerated at `/rss.xml`.
- [x] **Sitemap**: Regenerated at `/sitemap-index.xml`.
- [x] **Syntax Highlighting**: Preserved via Astro's default Shiki integration.

## ⚠️ Manual Review Recommended

1. **Feature Images**:
   - I moved images from `images/` to `public/images/`.
   - The migration script updated frontmatter `image` paths to prepends `/images/` if they were relative.
   - **Action**: Check `src/content/blog/` posts to ensure images render correctly in your local preview.

2. **Internal Links**:
   - Jekyll often uses `{% post_url %}` or relative Liquid links.
   - **Action**: Search for any remaining `{%` tags in the Markdown files and replace them with standard Markdown links using the new URL structure.

3. **Complex Liquid Tags**:
   - Basic includes were converted to Astro components.
   - **Action**: If you had complex custom Liquid plugins, they may need to be manually re-implemented as Astro components or integration hooks.

4. **Interactive Embeds**:
   - Prepared the architecture for future embeds (WebGL, Godot) by using MDX.
   - **Action**: To add a WebGL demo, create an Astro component and import it directly into your `.mdx` file.

## 🚀 Development & Deployment

### Local Development
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev` to start the development server.

### GitHub Pages Deployment
The site is optimized for GitHub Pages.

1. Ensure `site` in `astro.config.mjs` is `https://<username>.github.io`.
2. Create a file at `.github/workflows/deploy.yml` with the following content (standard Astro deploy):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install, build, and upload
        uses: withastro/action@v3
```

3. Enable GitHub Actions deployment in your repository settings.
