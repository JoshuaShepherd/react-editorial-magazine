# The Editorial - React Magazine

A modern editorial magazine built with Next.js 15, React 19, and Tailwind CSS. Features a clean, typography-focused design with dark/light mode support.

## Features

- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Editorial Design**: Typography-first approach with serif headlines and clean layouts
- **Dark/Light Mode**: Theme switching with system preference detection
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Built with accessibility best practices
- **Component Library**: Reusable UI components with shadcn/ui

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, or pnpm

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-editorial-magazine
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

See `.env.example` for all available environment variables:

- `NEXT_PUBLIC_SITE_URL` - Your site's public URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)
- `NEWSLETTER_API_KEY` - Newsletter service API key (optional)
- `DATABASE_URL` - Database connection string (optional)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (site)/            # Site route group
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── editorial/         # Editorial-specific components
│   └── ui/               # Reusable UI components
└── docs/                 # Documentation
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Fonts**: Playfair Display (serif), Inter (sans-serif), JetBrains Mono
- **Theme**: next-themes for dark/light mode
- **UI Components**: Radix UI primitives

## Deployment

The app is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any Node.js hosting platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

MIT License - see LICENSE file for details
