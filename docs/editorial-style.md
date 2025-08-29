# Editorial Style Guide

## Overview

The Editorial is a content-first, typographically-driven magazine website that prioritizes reading experience, accessibility, and thoughtful design. This document outlines the design system, content model, and implementation guidelines.

## Typography System

### Font Pairing
- **Serif Headers**: Playfair Display - Used for headings, titles, and brand elements
- **Sans-serif Body**: Inter - Used for body text, UI elements, and navigation
- **Monospace Data**: JetBrains Mono - Used for code, timestamps, and numerical data

### Type Scale
```css
/* Headings */
.text-6xl { font-size: 3.75rem; line-height: 1; }      /* H1 - Hero titles */
.text-5xl { font-size: 3rem; line-height: 1; }        /* H1 - Page titles */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } /* H2 - Section titles */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* H3 - Subsections */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }   /* H4 - Card titles */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; } /* H5 - Component titles */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* H6 - Small titles */

/* Body Text */
.text-base { font-size: 1rem; line-height: 1.5rem; }   /* Standard body */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* Large body/lead */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* Small body/captions */
.text-xs { font-size: 0.75rem; line-height: 1rem; }    /* Micro text/labels */
```

### Reading Measures
- **Optimal**: 65-75 characters (72ch target)
- **Minimum**: 45 characters
- **Maximum**: 80 characters
- **Line Height**: 1.6 for body text, 1.2 for headings

### Font Weights
- **Regular (400)**: Body text, navigation
- **Medium (500)**: Emphasis, secondary headings  
- **Semibold (600)**: Card titles, component headings
- **Bold (700)**: Main headings, strong emphasis

## Color System

### Semantic Colors
```css
/* Light Mode */
--background: #FFFFFF;        /* Page background */
--foreground: #111827;        /* Primary text */
--muted: #F9FAFB;            /* Subtle backgrounds */
--muted-foreground: #6B7280;  /* Secondary text */
--border: #E5E7EB;           /* Borders and dividers */
--primary: #1E40AF;          /* Brand color, links */
--accent: #F59E0B;           /* Highlights, CTAs */

/* Dark Mode */
--background: #111827;
--foreground: #F9FAFB;
--muted: #374151;
--muted-foreground: #9CA3AF;
--border: #374151;
--primary: #3B82F6;
--accent: #F59E0B;
```

### Usage Guidelines
- **High contrast** for all text (WCAG AA minimum)
- **Consistent semantic meaning** across light/dark modes
- **Limited palette** - stick to defined colors only
- **Accessible focus states** with clear indicators

## Layout System

### Grid Structure
- **Max Width**: 1280px (7xl container)
- **Content Width**: 768px (3xl for articles)
- **Breakpoints**: sm(640px), md(768px), lg(1024px), xl(1280px)

### Spacing Scale
```css
/* Tailwind spacing scale */
.space-y-2  { margin-top: 0.5rem; }   /* 8px - Tight elements */
.space-y-4  { margin-top: 1rem; }     /* 16px - Related elements */
.space-y-6  { margin-top: 1.5rem; }   /* 24px - Section spacing */
.space-y-8  { margin-top: 2rem; }     /* 32px - Component spacing */
.space-y-12 { margin-top: 3rem; }     /* 48px - Section breaks */
.space-y-16 { margin-top: 4rem; }     /* 64px - Major sections */
```

### Page Layouts

#### Article Layout
- **Header**: Title, meta, tags, share buttons
- **Content**: 65-75ch measure, prose styling
- **Sidebar**: Newsletter, related articles, author bio
- **Footer**: Navigation, social links

#### Homepage Layout
- **Hero**: Brand statement, featured content
- **Featured**: Large article card with image
- **Latest**: List of recent articles
- **Sidebar**: Newsletter, trending, topics

#### Index Pages  
- **Header**: Page title, description
- **Filters**: Search, tags, sorting
- **Grid**: Article cards with metadata
- **Pagination**: Load more or numbered

## Component Library

### Article Card Variants

#### Default Card
```tsx
<ArticleCard article={article} variant="default" />
```
- Full metadata (author, date, reading time, tags)
- Excerpt preview (3 lines max)
- Hover states and accessibility
- Responsive image placeholder

#### Featured Card
```tsx
<ArticleCard article={article} variant="featured" />
```
- Large hero treatment
- Overlay text on background
- Minimal metadata
- Eye-catching design

#### Compact Card
```tsx
<ArticleCard article={article} variant="compact" />
```
- Sidebar/list usage
- Essential metadata only
- Smaller footprint
- Quick scanning

### Interactive Elements

#### Reading Progress
- Fixed progress bar at top
- Smooth animations
- Scroll-based calculation
- Non-intrusive design

#### Share Buttons
- Twitter, LinkedIn, Copy Link
- Accessible labels
- Keyboard navigation
- Native sharing when available

#### Newsletter Signup
- Prominent but not aggressive
- Success states
- Privacy messaging
- Email validation

### Editorial Components

#### Pull Quotes
```html
<blockquote class="border-l-4 border-primary bg-muted/30 py-4 px-6 italic text-lg">
  "The best design systems are living, breathing ecosystems."
</blockquote>
```

#### Code Blocks
```html
<pre class="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
  <code class="font-mono text-sm">...</code>
</pre>
```

#### Footnotes
- Numbered references in text
- Hover previews (future enhancement)
- Bottom section with full notes
- Bidirectional navigation

## Content Model

### Article Structure
```typescript
interface Article {
  slug: string;                    // URL identifier
  title: string;                   // Main headline
  subtitle?: string;               // Optional subhead
  excerpt: string;                 // Summary (160 chars max)
  content: string;                 // Full article body
  author: Author;                  // Author information
  publishedAt: Date;              // Publication date
  updatedAt?: Date;               // Last modified date
  readingTime: number;            // Estimated minutes
  tags: string[];                 // Topic categories
  featured?: boolean;             // Homepage feature
  draft?: boolean;                // Unpublished state
}

interface Author {
  name: string;                   // Display name
  bio: string;                    // Short biography
  avatar?: string;                // Profile image URL
  social?: {                      // Social media links
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}
```

### Content Guidelines

#### Titles
- **Length**: 40-60 characters ideal
- **Style**: Sentence case, descriptive
- **Voice**: Clear, compelling, no clickbait
- **SEO**: Include primary keyword naturally

#### Excerpts
- **Length**: 120-160 characters
- **Purpose**: Accurate summary, not teaser
- **Style**: Complete thoughts, proper grammar
- **Hook**: Engaging but informative

#### Body Content
- **Structure**: H2/H3 hierarchy, short paragraphs
- **Voice**: Professional but approachable
- **Length**: 1500-3000 words typical
- **Media**: Images with captions, code blocks

#### Tags
- **Count**: 3-5 tags per article
- **Consistency**: Use established taxonomy
- **Hierarchy**: Broad to specific topics
- **SEO**: Match user search terms

## Accessibility Standards

### WCAG Compliance
- **Level AA** minimum compliance
- **Keyboard navigation** for all interactive elements
- **Screen reader** compatible markup
- **Focus indicators** clearly visible
- **Alt text** for all meaningful images

### Semantic HTML
```html
<article role="article">
  <header>
    <h1>Article Title</h1>
    <div role="doc-subtitle">Subtitle</div>
  </header>
  <main>
    <p>Article content...</p>
  </main>
  <footer>
    <address>Author information</address>
  </footer>
</article>
```

### Navigation Landmarks
- `role="banner"` - Site header
- `role="navigation"` - Main navigation  
- `role="main"` - Primary content
- `role="complementary"` - Sidebar content
- `role="contentinfo"` - Site footer

## Performance Guidelines

### Core Web Vitals
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### Optimization Strategies
- **Fonts**: Self-host, preload, font-display: swap
- **Images**: WebP format, lazy loading, responsive sizes
- **Code**: Tree shaking, code splitting, minimal JavaScript
- **Caching**: Static generation, CDN, service workers

### CLS Prevention
- **Image dimensions** specified in markup
- **Font loading** strategies to prevent FOIT/FOUT
- **Ad spaces** reserved with placeholders
- **Dynamic content** loaded below fold initially

## Implementation Notes

### Framework Integration
- **Next.js** with App Router for routing
- **Tailwind CSS** for styling utilities
- **TypeScript** for type safety
- **MDX** for content authoring (future)

### Content Management
- **Static generation** for articles
- **Git-based** workflow for content
- **Markdown** source files with frontmatter
- **Build-time** validation and optimization

### Future Enhancements
- **Search** with full-text indexing
- **Comments** with moderation system  
- **Analytics** with privacy-focused tracking
- **Multilingual** support with i18n
- **RSS/JSON** feeds for syndication

## Maintenance Guidelines

### Content Reviews
- **Monthly** audit of outdated content
- **Quarterly** review of design system
- **Annually** accessibility audit
- **Ongoing** performance monitoring

### Style Evolution
- **Document changes** in this guide
- **Version control** for design tokens
- **Component testing** before deployment
- **User feedback** integration process

This style guide serves as the foundation for consistent, accessible, and performant editorial experiences. It should be updated as the design system evolves and new patterns are established.
