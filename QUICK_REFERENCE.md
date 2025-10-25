# Digital Divide - Quick Reference Guide

A quick reference for common tasks and customization.

---

## 📝 Creating a New Blog Post

### 1. Create a new markdown file
Location: `src/content/posts/my-article-title.md`

### 2. Add frontmatter with metadata
```yaml
---
title: 'My Article Title'
description: 'A brief, compelling description of the article.'
pubDate: 2025-10-25
author: 'Your Name'
image:
  url: 'https://example.com/image.webp'
  alt: 'Descriptive alt text for accessibility'
category: 'Article'  # Choose from: Essay, Article, Review, Interview, Photo Essay
tags: ["tag1", "tag2", "tag3"]
featured: false  # Set to true to highlight on homepage
draft: false     # Set to true to hide from public
---
```

### 3. Write your content in Markdown
```markdown
Your article content goes here. Use standard Markdown syntax.

## Subheadings

Paragraphs, lists, code blocks, etc. all work as expected.

### Code example
\`\`\`javascript
console.log('Hello, Digital Divide!');
\`\`\`
```

### 4. Publish
Files automatically appear on:
- `/blog/` - Blog listing page (sorted newest first)
- `/categories/{category}/` - Category page
- `/tags/{tag}/` - All associated tag pages
- `/posts/{slug}/` - Direct post URL

---

## 🎨 Customizing Colors

### Light Mode Colors
File: `src/styles/design-system.css`

```css
:root {
  /* Primary colors - main brand color */
  --color-primary-600: #0052cc;  /* Change this */

  /* Accent colors for categories */
  --color-artsy: #b24ed1;        /* Arts/Culture */
  --color-tech: #00a8e8;         /* Technology */
  --color-opinion: #f77f00;      /* Opinion */
  --color-profile: #06d6a0;      /* Profiles */
  --color-review: #e63946;       /* Reviews */

  /* Neutral colors */
  --color-neutral-100: #f5f5f5;  /* Light background */
  --color-neutral-900: #171717;  /* Dark text */
}
```

### Dark Mode Colors
```css
[data-theme='dark'] {
  --color-primary-600: #79c0ff;  /* Lighter blue for dark mode */
  --color-bg: #0a0a0a;
  --color-fg: #fafafa;
  /* ... more dark colors */
}
```

---

## 🔤 Changing Fonts

File: `tailwind.config.ts`

```ts
fontFamily: {
  serif: ['Your Serif Font', 'serif'],      // Headlines
  sans: ['Your Sans Font', 'sans-serif'],   // Body text
  display: ['Your Display Font', 'serif'],  // Display headings
  mono: ['Courier New', 'monospace'],       // Code blocks
}
```

### Using Google Fonts
1. Add to `src/layouts/BaseLayout.astro`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.ts`:
```ts
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

---

## 🌙 Dark Mode Customization

### How It Works
- Click the sun/moon icon in the header
- Preference saves to `localStorage` as `theme: 'light'` or `theme: 'dark'`
- CSS variables automatically update
- Respects system `prefers-color-scheme` on first visit

### Theme Detection
User's preference is checked in this order:
1. localStorage (`theme` key)
2. System preference (`prefers-color-scheme`)
3. Default to light mode

### Disabling Dark Mode
Edit `src/components/ThemeToggle.astro` - remove the button:
```astro
<!-- Delete this file or remove from Header.astro import -->
```

---

## 🔍 Syntax Highlighting Configuration

File: `astro.config.mjs`

### Change Theme
```js
markdown: {
  syntaxHighlight: 'shiki',
  shikiConfig: {
    theme: 'github-dark',  // Options: github-light, github-dark, nord, one-dark-pro, etc.
  },
}
```

### Supported Languages
Add to the `langs` array:
```js
langs: [
  'js', 'ts', 'tsx', 'jsx',      // JavaScript family
  'py', 'python',                 // Python
  'html', 'css', 'json',          // Web
  'yaml', 'bash', 'sh',           // Config/Shell
  'astro', 'markdown', 'md',      // Special
  'rust', 'go', 'java', 'c',     // Add more as needed
]
```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 636px
- **Desktop:** ≥ 636px

### Mobile-First Approach
```css
/* Mobile styles first */
.container {
  font-size: 1rem;
}

/* Then add desktop styles */
@media (min-width: 636px) {
  .container {
    font-size: 1.25rem;
  }
}
```

---

## 🚀 Adding Navigation Links

File: `src/components/Navigation.astro`

```astro
<div class="nav-links">
    <a href="/">Home</a>
    <a href="/blog/">Blog</a>
    <a href="/your-new-page/">New Page</a>
    <a href="/about/">About</a>
</div>
```

The navigation automatically becomes a mobile menu below 636px.

---

## 🏷️ Content Categories

Available categories (from `src/content/config.ts`):

1. **Essay** - Long-form, thoughtful pieces (2000-5000 words)
2. **Article** - News, trends, updates (1000-2000 words)
3. **Review** - Cultural reviews (1500-3000 words)
4. **Interview** - Q&A, conversations (2000-4000 words)
5. **Photo Essay** - Visual storytelling (500-1500 words)

Use in frontmatter:
```yaml
category: 'Essay'  # Exactly as shown above
```

---

## 🏷️ Adding Tags

Tags are freeform. Add any tags you want:

```yaml
tags: ["technology", "culture", "personal", "review"]
```

Tags automatically:
- Create pages at `/tags/{tag}/`
- Link to tag pages from articles
- Appear in tag index at `/tags/`

---

## 📊 Reading Time Calculation

Automatically calculated and displayed in article headers.

**Formula:** Word count ÷ 200 = Minutes (rounded)

Displays as: "5 min read"

Implemented in: `src/layouts/PostLayout.astro` (lines 6-8)

To customize the reading speed:
```ts
const readingSpeed = 150;  // Change from 200
const readingTime = Math.ceil(post.body.split(/\s+/).length / readingSpeed);
```

---

## 🖼️ Image Optimization

### Using Images in Posts

```markdown
![Descriptive alt text](https://example.com/image.webp)
```

### Featured Images (Frontmatter)
```yaml
image:
  url: 'https://example.com/image.webp'
  alt: 'Detailed alt text for accessibility'
```

### Image Recommendations
- Format: WebP preferred (auto-generated)
- Size: ~1200px wide for featured images
- Aspect Ratio: 16:9 or 3:2
- Alt text: Always descriptive

---

## 🔗 Internal Links

### Link to Posts
```markdown
[Read my article](/posts/my-article-title/)
```

### Link to Categories
```markdown
[See all essays](/categories/essay/)
```

### Link to Tags
```markdown
[See more #technology posts](/tags/technology/)
```

---

## 📋 Draft Posts

To hide a post from public:

```yaml
draft: true
```

Draft posts:
- Don't appear on `/blog/`
- Don't appear in category pages
- Don't appear in tag pages
- Are excluded from RSS feed
- Can still be viewed via direct URL during development

---

## ⭐ Featured Articles

To highlight an article:

```yaml
featured: true
```

Use in homepage (to be implemented):
```astro
const featured = await getCollection('posts', ({ data }) => data.featured);
```

---

## 🔧 Build & Deploy

### Local Development
```bash
npm run dev        # Start at http://localhost:3000
```

### Production Build
```bash
npm run build      # Creates dist/ folder
npm run preview    # Preview the build locally
```

### Deploy Commands
**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Vercel:**
```bash
npm install -g vercel
vercel
```

---

## 🐛 Troubleshooting

### Content Collections Error
**Problem:** "Failed to sync content"
**Solution:** Check YAML frontmatter formatting (indentation, quotes)

### Build Fails
**Problem:** Build error with dynamic routes
**Solution:** Ensure all `getStaticPaths()` return valid data

### Dark Mode Not Working
**Problem:** Theme toggle doesn't switch
**Solution:** Check browser localStorage is enabled

### Images Not Loading
**Problem:** Images show broken link icon
**Solution:** Verify URL is correct and publicly accessible

---

## 📚 File Structure Reference

```
src/
├── components/              # Reusable components
│   ├── Header.astro
│   ├── Navigation.astro
│   ├── Footer.astro
│   ├── ThemeToggle.astro   # Dark mode toggle
│   └── ...
├── content/                 # Content Collections
│   ├── config.ts           # Content schema
│   └── posts/              # Blog posts
├── layouts/                # Page layouts
│   ├── BaseLayout.astro    # Main layout
│   └── PostLayout.astro    # Article layout
├── pages/                  # Routes (file-based)
│   ├── index.astro         # Home
│   ├── blog.astro          # Blog listing
│   ├── posts/              # Articles
│   ├── categories/         # Category pages
│   ├── tags/               # Tag pages
│   └── ...
├── styles/                 # CSS
│   ├── global.css          # Global styles
│   ├── design-system.css   # Design tokens
│   └── code.css            # Syntax highlighting
└── scripts/                # Client JavaScript
```

---

## 🎯 Common Customizations

### Add Author Page
Create: `src/pages/authors/[author].astro`

### Add Archive by Date
Create: `src/pages/archive/[year]/[month].astro`

### Add Search
Install: `npm install fuse.js`
Create: `src/pages/search.astro`

### Add Newsletter
Add form to `src/components/NewsletterSignup.astro`
Integrate with: Mailchimp, Substack, etc.

---

## 🔒 Environment Variables

### Create `.env` file:
```
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Use in code:
```ts
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
```

---

## 📖 Next Steps

1. **Write Content** - Create 5-10 sample posts
2. **Test Locally** - Run `npm run dev` and browse
3. **Customize Colors** - Update design-system.css
4. **Deploy** - Choose a hosting platform
5. **Monitor** - Set up analytics
6. **Iterate** - Gather feedback and improve

---

## 📞 Getting Help

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Markdown Guide](https://www.markdownguide.org)
- [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) - Detailed guide

---

**Happy blogging!** 🚀
