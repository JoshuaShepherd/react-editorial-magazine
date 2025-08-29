"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TagPill } from "@/components/editorial/tag-pill"
import { NewsletterSignup } from "@/components/editorial/newsletter-signup"
import { ArticleCard } from "@/components/editorial/article-card"
import { 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// Demo article data
const article = {
  slug: "the-future-of-design-systems",
  title: "The Future of Design Systems: Beyond Components",
  subtitle: "How design systems are evolving from static libraries into intelligent, adaptive frameworks",
  author: { 
    name: "Sarah Chen", 
    bio: "Senior Design Systems Engineer at TechCorp with 8 years of experience building scalable design solutions.",
    avatar: "/avatars/sarah-chen.jpg"
  },
  publishedAt: new Date(2025, 0, 15),
  readingTime: 12,
  tags: ["Design Systems", "UX", "Technology"],
  content: `
# Introduction

Design systems have fundamentally changed how we build digital products. What started as simple style guides and component libraries has evolved into sophisticated ecosystems that power entire product families. But as our digital landscape becomes more complex, design systems must evolve too.

The future of design systems lies not just in providing consistent visual elements, but in creating intelligent, adaptive frameworks that respond to user needs, business goals, and technological constraints in real-time.

## The Current State of Design Systems

Today's design systems typically consist of:

- **Component libraries** with reusable UI elements
- **Design tokens** for consistent styling
- **Documentation** explaining usage patterns
- **Tooling** for development and design workflows

While these elements have served us well, they represent a relatively static approach to design at scale. Components are built once and used everywhere, with limited ability to adapt to different contexts or user needs.

> "The best design systems are not just collections of components—they are living, breathing ecosystems that evolve with their products and users." — Sarah Chen

## Beyond Static Components

The next generation of design systems will be characterized by several key innovations:

### 1. Contextual Intelligence

Future design systems will understand the context in which components are being used and adapt accordingly. This means:

- Components that change based on user preferences
- Layouts that respond to content volume and type
- Interactive elements that adapt to user behavior patterns

### 2. Automated Optimization

Machine learning will play a crucial role in optimizing design systems:

\`\`\`javascript
// Example: ML-driven component optimization
const OptimizedButton = ({ variant, context, userSegment }) => {
  const optimizedProps = useMLOptimization({
    variant,
    context,
    userSegment,
    performanceData: useAnalytics()
  });
  
  return <Button {...optimizedProps} />;
};
\`\`\`

### 3. Cross-Platform Intelligence

Modern design systems need to work seamlessly across platforms while respecting platform conventions.

## Implementation Strategies

Building these next-generation design systems requires a thoughtful approach:

### Start with Data

Before building intelligent components, you need data about how your current system performs:

1. **Usage analytics** - Which components are used most frequently?
2. **Performance metrics** - How do different variations perform?
3. **User feedback** - What pain points do users experience?

### Build in Flexibility

Design your component APIs to support future intelligence:

\`\`\`typescript
interface IntelligentComponentProps {
  // Traditional props
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  
  // Intelligence props
  context?: ComponentContext;
  optimization?: OptimizationConfig;
  adaptiveProps?: AdaptivePropsConfig;
}
\`\`\`

### Foster Collaboration

The future of design systems is inherently collaborative:

- **Designers** define the visual language and interaction patterns
- **Engineers** implement the technical infrastructure
- **Product managers** provide business context and requirements
- **Researchers** contribute user insights and validation

## Challenges and Considerations

This evolution is not without challenges:

### Complexity Management

As design systems become more intelligent, they also become more complex. Teams need to balance sophistication with maintainability.

### Performance Impact

Intelligent features can impact performance. It's crucial to:

- Implement progressive enhancement
- Use efficient algorithms for real-time optimization
- Consider the performance impact of data collection

### Privacy and Ethics

Intelligent design systems often rely on user data. Teams must:

- Respect user privacy
- Be transparent about data usage
- Provide opt-out mechanisms where appropriate

## The Road Ahead

The future of design systems is exciting and full of potential. As we move forward, we can expect to see:

- **AI-powered design assistants** that help teams make better design decisions
- **Self-optimizing interfaces** that improve over time
- **Predictive design patterns** that anticipate user needs

But perhaps most importantly, we'll see design systems that truly serve their users—not just the teams building products, but the people using those products every day.

## Conclusion

The evolution from static component libraries to intelligent, adaptive design systems represents a fundamental shift in how we think about design at scale. It's not just about consistency anymore—it's about creating experiences that are truly responsive to human needs.

As we build these next-generation systems, we must remember that technology should serve humanity, not the other way around. The most successful design systems of the future will be those that make both building and using digital products more human, more intuitive, and more delightful.

The future is bright for design systems, and it's a future we're building together, one component at a time.
  `
}

const relatedArticles = [
  {
    slug: "sustainable-technology",
    title: "Building Sustainable Technology: A Developer's Guide",
    excerpt: "Practical strategies for reducing the environmental impact of software development and promoting eco-friendly coding practices.",
    author: { name: "Elena Rodriguez" },
    publishedAt: new Date(2025, 0, 10),
    readingTime: 10,
    tags: ["Sustainability", "Development", "Environment"]
  },
  {
    slug: "web-accessibility-2025",
    title: "Web Accessibility in 2025: New Standards and Best Practices",
    excerpt: "An updated guide to making web applications accessible to all users, including emerging technologies and legal requirements.",
    author: { name: "Alex Thompson" },
    publishedAt: new Date(2025, 0, 5),
    readingTime: 15,
    tags: ["Accessibility", "Web Development", "Standards"]
  }
]

export default function ArticlePage() {
  const [readingProgress, setReadingProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const updateReadingProgress = () => {
      const article = document.querySelector('#article-content') as HTMLElement
      if (!article) return
      
      const articleTop = article.offsetTop
      const articleHeight = article.offsetHeight
      const windowHeight = window.innerHeight
      const scrollTop = window.scrollY
      
      const progress = Math.min(
        Math.max((scrollTop - articleTop + windowHeight) / articleHeight, 0),
        1
      )
      
      setReadingProgress(progress * 100)
    }

    window.addEventListener('scroll', updateReadingProgress)
    updateReadingProgress()
    
    return () => window.removeEventListener('scroll', updateReadingProgress)
  }, [])

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = article.title

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  }

  if (!isClient) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-background">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back Navigation */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-4 lg:px-8">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/articles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {article.tags.map(tag => (
                <TagPill key={tag} tag={tag} size="sm" href={`/topics/${tag.toLowerCase()}`} />
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold font-serif tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            {/* Subtitle */}
            {article.subtitle && (
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                {article.subtitle}
              </p>
            )}

            {/* Article Meta */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-x-2">
                <User className="h-4 w-4" />
                <span>By {article.author.name}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.publishedAt.toISOString()}>
                  {article.publishedAt.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-x-2">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <span className="text-sm text-muted-foreground">Share:</span>
              <div className="flex gap-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a 
                    href={shareLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a 
                    href={shareLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Copy link"
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div 
              id="article-content"
              className="prose prose-lg prose-slate dark:prose-invert max-w-none
                         prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
                         prose-p:text-foreground prose-p:leading-relaxed prose-p:text-base
                         prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg
                         prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                         prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg
                         prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                         prose-strong:text-foreground prose-strong:font-semibold
                         prose-img:rounded-lg prose-img:border prose-img:border-border"
            >
              {/* Content would be rendered here, for demo using the content string */}
              <div dangerouslySetInnerHTML={{ __html: article.content.split('\n').map(line => {
                if (line.startsWith('# ')) {
                  return `<h1>${line.substring(2)}</h1>`
                }
                if (line.startsWith('## ')) {
                  return `<h2>${line.substring(3)}</h2>`
                }
                if (line.startsWith('### ')) {
                  return `<h3>${line.substring(4)}</h3>`
                }
                if (line.startsWith('> ')) {
                  return `<blockquote><p>${line.substring(2)}</p></blockquote>`
                }
                if (line.startsWith('```')) {
                  const nextCloseIndex = article.content.indexOf('```', article.content.indexOf(line) + line.length)
                  if (nextCloseIndex > -1) {
                    const codeContent = article.content.substring(
                      article.content.indexOf(line) + line.length + 1,
                      nextCloseIndex
                    )
                    return `<pre><code>${codeContent}</code></pre>`
                  }
                }
                if (line.startsWith('- ')) {
                  return `<li>${line.substring(2)}</li>`
                }
                if (line.trim() === '') {
                  return '<br>'
                }
                return `<p>${line}</p>`
              }).join('') }} />
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-x-6 p-6 bg-muted/30 rounded-2xl">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{article.author.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{article.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-2xl font-bold font-serif tracking-tight text-foreground sm:text-3xl">
              Related Articles
            </h2>
            <p className="mt-2 text-lg leading-8 text-muted-foreground">
              More insights on similar topics
            </p>
          </div>
          <div className="mt-12 space-y-16 lg:space-y-20">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  )
}
