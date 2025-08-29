"use client"

import { ArticleCard } from "@/components/editorial/article-card"
import { NewsletterSignup } from "@/components/editorial/newsletter-signup"
import { TagPill } from "@/components/editorial/tag-pill"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import { EditorialHeader } from "@/components/editorial/editorial-header"
import { EditorialFooter } from "@/components/editorial/editorial-footer"

// Demo articles data
const featuredArticle = {
  slug: "the-future-of-design-systems",
  title: "The Future of Design Systems: Beyond Components",
  excerpt: "As digital products evolve, design systems must transform from static component libraries into dynamic, intelligent frameworks that adapt to user needs and business goals.",
  author: { name: "Sarah Chen", avatar: "/avatars/sarah-chen.jpg" },
  publishedAt: new Date(2025, 0, 15),
  readingTime: 12,
  tags: ["Design Systems", "UX", "Technology"],
  featured: true
}

const latestArticles = [
  {
    slug: "artificial-intelligence-ethics",
    title: "The Ethics of Artificial Intelligence in Creative Work",
    excerpt: "Exploring the moral implications of AI tools in creative industries and how we can maintain human agency in an automated world.",
    author: { name: "Marcus Johnson", avatar: "/avatars/marcus-johnson.jpg" },
    publishedAt: new Date(2025, 0, 12),
    readingTime: 8,
    tags: ["AI", "Ethics", "Creativity"]
  },
  {
    slug: "sustainable-technology",
    title: "Building Sustainable Technology: A Developer's Guide",
    excerpt: "Practical strategies for reducing the environmental impact of software development and promoting eco-friendly coding practices.",
    author: { name: "Elena Rodriguez", avatar: "/avatars/elena-rodriguez.jpg" },
    publishedAt: new Date(2025, 0, 10),
    readingTime: 10,
    tags: ["Sustainability", "Development", "Environment"]
  },
  {
    slug: "remote-work-culture",
    title: "Cultivating Connection in Remote-First Organizations",
    excerpt: "How distributed teams can build meaningful relationships and maintain company culture without sharing physical spaces.",
    author: { name: "David Park", avatar: "/avatars/david-park.jpg" },
    publishedAt: new Date(2025, 0, 8),
    readingTime: 6,
    tags: ["Remote Work", "Culture", "Management"]
  }
]

const trendingArticles = [
  {
    slug: "web-accessibility-2025",
    title: "Web Accessibility in 2025: New Standards and Best Practices",
    excerpt: "An updated guide to making web applications accessible to all users, including emerging technologies and legal requirements.",
    author: { name: "Alex Thompson", avatar: "/avatars/alex-thompson.jpg" },
    publishedAt: new Date(2025, 0, 5),
    readingTime: 15,
    tags: ["Accessibility", "Web Development", "Standards"]
  },
  {
    slug: "mindful-productivity",
    title: "Mindful Productivity: Quality Over Quantity",
    excerpt: "Rethinking productivity metrics and focusing on meaningful work rather than endless optimization and hustle culture.",
    author: { name: "Lisa Wang", avatar: "/avatars/lisa-wang.jpg" },
    publishedAt: new Date(2025, 0, 3),
    readingTime: 7,
    tags: ["Productivity", "Mindfulness", "Work-Life Balance"]
  }
]

const popularTags = [
  { tag: "Technology", count: 24 },
  { tag: "Design", count: 18 },
  { tag: "AI", count: 15 },
  { tag: "UX", count: 12 },
  { tag: "Development", count: 11 },
  { tag: "Culture", count: 9 },
  { tag: "Sustainability", count: 8 },
  { tag: "Remote Work", count: 7 }
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <EditorialHeader />
      <main className="flex-1">
        <div className="bg-background">
          {/* Hero Section */}
          <section className="relative bg-background">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold font-serif tracking-tight text-foreground sm:text-6xl">
                  Thoughtful writing for curious minds
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-prose mx-auto">
                  Explore ideas at the intersection of technology, design, and human experience. 
                  In-depth articles that challenge conventional thinking and inspire meaningful change.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button asChild size="lg" className="px-8">
                    <Link href="/articles">
                      Read Latest Articles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Article */}
          <section className="py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                <h2 className="text-3xl font-bold font-serif tracking-tight text-foreground sm:text-4xl">
                  Featured Story
                </h2>
                <p className="mt-2 text-lg leading-8 text-muted-foreground">
                  Our editors' pick for this week's most compelling read.
                </p>
              </div>
              <div className="mt-12 max-w-4xl mx-auto">
                <ArticleCard article={featuredArticle} variant="featured" />
              </div>
            </div>
          </section>

          {/* Latest Articles */}
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold font-serif tracking-tight text-foreground sm:text-4xl">
                  Latest Articles
                </h2>
                <p className="mt-2 text-lg leading-8 text-muted-foreground">
                  Fresh perspectives on the topics that matter most.
                </p>
                <div className="mt-10 space-y-16 border-t border-border pt-10 sm:mt-16 sm:pt-16">
                  {latestArticles.map((article, index) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <Button asChild variant="outline" size="lg">
                    <Link href="/articles">
                      View All Articles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar Content */}
          <section className="py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                
                {/* Trending */}
                <div>
                  <h3 className="text-lg font-semibold font-serif text-foreground mb-6 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    Trending
                  </h3>
                  <div className="space-y-6">
                    {trendingArticles.map((article) => (
                      <ArticleCard key={article.slug} article={article} variant="compact" />
                    ))}
                  </div>
                </div>

                {/* Popular Topics */}
                <div>
                  <h3 className="text-lg font-semibold font-serif text-foreground mb-6">
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map(({ tag, count }) => (
                      <TagPill 
                        key={tag} 
                        tag={tag} 
                        count={count}
                        href={`/topics/${tag.toLowerCase()}`}
                        size="sm"
                      />
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="ghost" asChild className="text-sm p-0">
                      <Link href="/topics">
                        View all topics
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Newsletter */}
                <div>
                  <NewsletterSignup />
                </div>
              </div>
            </div>
          </section>

          {/* Recent Activity Stats */}
          <section className="py-16 border-t border-border">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="text-center">
                  <h2 className="text-3xl font-bold font-serif tracking-tight text-foreground sm:text-4xl">
                    A Growing Community
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    Join thousands of readers exploring ideas that shape our digital future.
                  </p>
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col bg-muted/50 p-8">
                    <dt className="text-sm font-semibold text-muted-foreground">Articles Published</dt>
                    <dd className="order-first text-3xl font-bold font-mono tracking-tight text-foreground">124</dd>
                  </div>
                  <div className="flex flex-col bg-muted/30 p-8">
                    <dt className="text-sm font-semibold text-muted-foreground">Monthly Readers</dt>
                    <dd className="order-first text-3xl font-bold font-mono tracking-tight text-foreground">12.4K</dd>
                  </div>
                  <div className="flex flex-col bg-muted/50 p-8">
                    <dt className="text-sm font-semibold text-muted-foreground">Newsletter Subscribers</dt>
                    <dd className="order-first text-3xl font-bold font-mono tracking-tight text-foreground">3.2K</dd>
                  </div>
                  <div className="flex flex-col bg-muted/30 p-8">
                    <dt className="text-sm font-semibool text-muted-foreground">Countries Reached</dt>
                    <dd className="order-first text-3xl font-bold font-mono tracking-tight text-foreground">67</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </main>
      <EditorialFooter />
    </div>
  )
}
