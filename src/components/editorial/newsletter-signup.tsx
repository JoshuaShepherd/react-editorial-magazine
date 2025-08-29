"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { useState } from "react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    setIsSubscribed(true)
    setEmail("")
  }

  if (isSubscribed) {
    return (
      <Card className="bg-muted/30 border-dashed">
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Thanks for subscribing!
            </h3>
            <p className="text-sm text-muted-foreground">
              Check your inbox for a confirmation email.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-serif">Stay Updated</CardTitle>
        <p className="text-sm text-muted-foreground">
          Get our latest articles and insights delivered directly to your inbox. 
          No spam, just thoughtful content.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
