"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface Article {
  slug: string
  title: string
  excerpt: string
  author: {
    name: string
    avatar?: string
  }
  publishedAt: Date
  readingTime: number
  tags: string[]
  featured?: boolean
}

interface ArticleCardProps {
  article: Article
  variant?: "default" | "featured" | "compact"
}

export function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm text-white/80">
          <time dateTime={article.publishedAt.toISOString()} className="mr-8">
            {formatDistanceToNow(article.publishedAt, { addSuffix: true })}
          </time>
          <div className="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="flex gap-x-2.5">
              <span>{article.author.name}</span>
            </div>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-semibold font-serif text-white">
          <Link href={`/articles/${article.slug}`}>
            <span className="absolute inset-0" />
            {article.title}
          </Link>
        </h3>
      </article>
    )
  }

  if (variant === "compact") {
    return (
      <article className="group relative flex items-start space-x-3 py-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-x-2 text-xs text-muted-foreground mb-1">
            <time dateTime={article.publishedAt.toISOString()}>
              {formatDistanceToNow(article.publishedAt, { addSuffix: true })}
            </time>
            <span>•</span>
            <span className="flex items-center gap-x-1">
              <Clock className="h-3 w-3" />
              {article.readingTime} min read
            </span>
          </div>
          <h3 className="text-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors">
            <Link href={`/articles/${article.slug}`} className="hover:underline">
              {article.title}
            </Link>
          </h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </article>
    )
  }

  return (
    <article className="group relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <div className="absolute inset-0 rounded-2xl bg-gray-50 group-hover:opacity-75 transition-opacity" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={article.publishedAt.toISOString()} className="text-muted-foreground">
            {formatDistanceToNow(article.publishedAt, { addSuffix: true })}
          </time>
          <div className="flex items-center gap-x-2">
            {article.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold font-serif text-foreground group-hover:text-foreground/80 transition-colors">
            <Link href={`/articles/${article.slug}`}>
              <span className="absolute inset-0" />
              {article.title}
            </Link>
          </h3>
          <p className="mt-5 text-sm text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
        </div>
        <div className="mt-6 flex border-t border-border pt-6">
          <div className="relative flex items-center gap-x-4">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <User className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">{article.author.name}</p>
              <div className="flex items-center gap-x-2 text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
