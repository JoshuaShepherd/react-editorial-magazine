"use client"

import { ArticleCard } from "@/components/editorial/article-card"
import { TagPill } from "@/components/editorial/tag-pill"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { useState } from "react"

// Demo articles data
const allArticles = [
  {
    slug: "the-future-of-design-systems",
    title: "The Future of Design Systems: Beyond Components",
    excerpt: "As digital products evolve, design systems must transform from static component libraries into dynamic, intelligent frameworks that adapt to user needs and business goals.",
    author: { name: "Sarah Chen" },
    publishedAt: new Date(2025, 0, 15),
    readingTime: 12,
    tags: ["Design Systems", "UX", "Technology"]
  },
  {
    slug: "artificial-intelligence-ethics",
    title: "The Ethics of Artificial Intelligence in Creative Work",
    excerpt: "Exploring the moral implications of AI tools in creative industries and how we can maintain human agency in an automated world.",
    author: { name: "Marcus Johnson" },
    publishedAt: new Date(2025, 0, 12),
    readingTime: 8,
    tags: ["AI", "Ethics", "Creativity"]
  },
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
    slug: "remote-work-culture",
    title: "Cultivating Connection in Remote-First Organizations",
    excerpt: "How distributed teams can build meaningful relationships and maintain company culture without sharing physical spaces.",
    author: { name: "David Park" },
    publishedAt: new Date(2025, 0, 8),
    readingTime: 6,
    tags: ["Remote Work", "Culture", "Management"]
  },
  {
    slug: "web-accessibility-2025",
    title: "Web Accessibility in 2025: New Standards and Best Practices",
    excerpt: "An updated guide to making web applications accessible to all users, including emerging technologies and legal requirements.",
    author: { name: "Alex Thompson" },
    publishedAt: new Date(2025, 0, 5),
    readingTime: 15,
    tags: ["Accessibility", "Web Development", "Standards"]
  },
  {
    slug: "mindful-productivity",
    title: "Mindful Productivity: Quality Over Quantity",
    excerpt: "Rethinking productivity metrics and focusing on meaningful work rather than endless optimization and hustle culture.",
    author: { name: "Lisa Wang" },
    publishedAt: new Date(2025, 0, 3),
    readingTime: 7,
    tags: ["Productivity", "Mindfulness", "Work-Life Balance"]
  }
]

const allTags = [
  "Technology", "Design Systems", "UX", "AI", "Ethics", "Creativity",
  "Sustainability", "Development", "Environment", "Remote Work", "Culture",
  "Management", "Accessibility", "Web Development", "Standards", 
  "Productivity", "Mindfulness", "Work-Life Balance"
]

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "oldest">("latest")

  const filteredArticles = allArticles
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.author.name.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => article.tags.includes(tag))
      
      return matchesSearch && matchesTags
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "latest":
          return b.publishedAt.getTime() - a.publishedAt.getTime()
        case "oldest":
          return a.publishedAt.getTime() - b.publishedAt.getTime()
        case "popular":
          return b.readingTime - a.readingTime // Using reading time as proxy for popularity
        default:
          return 0
      }
    })

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold font-serif tracking-tight text-foreground sm:text-5xl">
              All Articles
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Explore our complete collection of thoughtful writing on technology, design, and culture.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 bg-muted/50 border-0 focus-visible:ring-1"
                />
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
              <div className="flex gap-2">
                <Button
                  variant={sortBy === "latest" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSortBy("latest")}
                >
                  Latest
                </Button>
                <Button
                  variant={sortBy === "popular" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSortBy("popular")}
                >
                  Popular
                </Button>
                <Button
                  variant={sortBy === "oldest" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSortBy("oldest")}
                >
                  Oldest
                </Button>
              </div>
            </div>
          </div>

          {/* Tag Filters */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by topic:</span>
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTags([])}
                  className="text-xs p-1 h-auto"
                >
                  Clear all
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <TagPill
                  key={tag}
                  tag={tag}
                  size="sm"
                  variant={selectedTags.includes(tag) ? "default" : "secondary"}
                  className={`cursor-pointer ${selectedTags.includes(tag) ? "ring-2 ring-primary/20" : ""}`}
                  onClick={() => toggleTag(tag)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
                    {selectedTags.length > 0 && (
                      <span> in {selectedTags.join(', ')}</span>
                    )}
                  </p>
                </div>
                <div className="space-y-16 divide-y divide-border">
                  {filteredArticles.map((article, index) => (
                    <div key={article.slug} className={index === 0 ? "" : "pt-16"}>
                      <ArticleCard article={article} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
