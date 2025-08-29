"use client"

import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/editorial/newsletter-signup"
import { Mail, Twitter, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold font-serif tracking-tight text-foreground sm:text-6xl">
              About The Editorial
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We write about the intersection of technology, design, and human experience. 
              Our mission is to explore ideas that shape our digital future.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Our Story */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold font-serif tracking-tight text-foreground sm:text-4xl mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                <p>
                  The Editorial began as a simple idea: to create thoughtful, long-form content 
                  about the technologies and design principles that shape our world. In an age 
                  of rapid technological change, we believe there's value in taking time to 
                  reflect, analyze, and understand the deeper implications of our digital tools.
                </p>
                <p>
                  Founded in 2024, we've grown from a single writer's blog into a platform 
                  that features diverse voices from across the technology and design industries. 
                  Our contributors include seasoned professionals, emerging talent, and academic 
                  researchers who share our passion for thoughtful discourse.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold font-serif tracking-tight text-foreground sm:text-4xl mb-6">
                Our Mission
              </h2>
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                <p>
                  We believe that technology should serve humanity, not the other way around. 
                  Our articles explore how we can build more thoughtful, inclusive, and 
                  sustainable digital experiences. We focus on:
                </p>
                <ul>
                  <li><strong>Design Systems</strong> - How consistent, scalable design shapes user experience</li>
                  <li><strong>Accessibility</strong> - Making technology work for everyone</li>
                  <li><strong>Sustainability</strong> - Building environmentally conscious digital products</li>
                  <li><strong>Ethics</strong> - The moral implications of our technological choices</li>
                  <li><strong>Culture</strong> - How technology shapes society and vice versa</li>
                </ul>
              </div>
            </div>

            {/* Writing Standards */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold font-serif tracking-tight text-foreground sm:text-4xl mb-6">
                Editorial Standards
              </h2>
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                <p>
                  Every piece published on The Editorial is held to high standards of 
                  quality, accuracy, and thoughtfulness. Our editorial process includes:
                </p>
                <ul>
                  <li><strong>Research-based</strong> - All claims are backed by credible sources</li>
                  <li><strong>Peer-reviewed</strong> - Articles are reviewed by industry experts</li>
                  <li><strong>Inclusive</strong> - We prioritize diverse perspectives and voices</li>
                  <li><strong>Accessible</strong> - Content is written for broad audiences</li>
                  <li><strong>Actionable</strong> - Readers should learn something they can apply</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold font-serif tracking-tight text-foreground sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              The people behind The Editorial
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-6">
                <span className="text-2xl font-serif font-bold text-muted-foreground">SC</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Sarah Chen</h3>
              <p className="text-sm text-muted-foreground mb-2">Founder & Editor-in-Chief</p>
              <p className="text-sm text-muted-foreground mb-4">
                Former Design Systems lead at TechCorp, passionate about scalable design and inclusive experiences.
              </p>
              <div className="flex justify-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" aria-label="Sarah's Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" aria-label="Sarah's LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-6">
                <span className="text-2xl font-serif font-bold text-muted-foreground">MJ</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Marcus Johnson</h3>
              <p className="text-sm text-muted-foreground mb-2">Senior Writer</p>
              <p className="text-sm text-muted-foreground mb-4">
                Ethics researcher and former philosophy professor, specializing in AI and technology ethics.
              </p>
              <div className="flex justify-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" aria-label="Marcus's Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" aria-label="Marcus's LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-6">
                <span className="text-2xl font-serif font-bold text-muted-foreground">ER</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Elena Rodriguez</h3>
              <p className="text-sm text-muted-foreground mb-2">Contributing Editor</p>
              <p className="text-sm text-muted-foreground mb-4">
                Sustainable technology advocate and full-stack developer with expertise in green computing.
              </p>
              <div className="flex justify-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" aria-label="Elena's Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" aria-label="Elena's GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-serif tracking-tight text-foreground sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Have a story idea? Want to contribute? We'd love to hear from you.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">General Inquiries</h3>
                    <p className="text-sm text-muted-foreground">hello@theeditorial.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Editorial Submissions</h3>
                    <p className="text-sm text-muted-foreground">submissions@theeditorial.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Partnerships</h3>
                    <p className="text-sm text-muted-foreground">partnerships@theeditorial.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" aria-label="Follow us on Twitter">
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" aria-label="Follow us on LinkedIn">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
