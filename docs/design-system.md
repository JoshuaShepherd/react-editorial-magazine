# Bold Minimalist Design System

## Overview

This design system implements a Bold Minimalist approach for our CRM application, emphasizing clarity, confidence, and modern professionalism.

## Color Palette

### Primary Colors
- **Primary**: `#1E40AF` (indigo-800) - Used for primary actions, active states, and brand elements
- **Accent**: `#F59E0B` (amber-500) - Used for highlights, secondary actions, and attention-grabbing elements

### Surface Colors
- **Background (Light)**: `#FFFFFF` - Main background color
- **Background (Dark)**: `#111827` - Dark mode background
- **Card**: `#FFFFFF` (light) / `#1F2937` (dark) - Card and elevated surface backgrounds

### Neutral Colors
- **Foreground**: `#111827` (light) / `#F9FAFB` (dark) - Primary text color
- **Muted Foreground**: `#6B7280` (light) / `#9CA3AF` (dark) - Secondary text color
- **Border**: `#E5E7EB` (light) / `#374151` (dark) - Border and divider colors

## Typography

### Font Families
- **Sans-serif**: Inter - Used for headings, body text, and UI elements
- **Monospace**: JetBrains Mono - Used for data emphasis, numbers, and KPIs

### Font Weights
- **Regular**: 400 - Body text
- **Medium**: 500 - Secondary headings, button text
- **Semibold**: 600 - Primary headings
- **Bold**: 700 - Emphasis, large numbers

### Text Styles
- **Page Title**: `text-3xl font-bold tracking-tight` - Main page headings
- **Card Title**: `text-lg font-semibold tracking-tight` - Card and section headings
- **KPI Numbers**: `text-3xl font-bold font-mono tracking-tight` - Important metrics
- **Body Text**: `text-sm` or `text-base` - Regular content
- **Muted Text**: `text-sm text-muted-foreground` - Secondary information

## Layout Patterns

### Navigation
- **Sidebar**: Fixed left sidebar (256px width) with main navigation
- **Top Bar**: Horizontal navigation with search and user actions
- **Mobile**: Collapsible sidebar for smaller screens

### Spacing
- **Container Padding**: `p-6` or `p-8` for main content areas
- **Card Padding**: `p-4` or `p-6` for card interiors
- **Element Spacing**: `space-y-4`, `space-y-6`, `space-y-8` for vertical rhythm

### Grid System
- **Dashboard Grid**: CSS Grid with responsive columns
- **Card Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for KPI cards
- **Content Grid**: `grid-cols-1 lg:grid-cols-3` for main content and sidebar

## Components

### Buttons
- **Primary**: `bg-primary text-primary-foreground` - Main actions
- **Secondary**: `bg-accent text-accent-foreground` - Secondary actions
- **Ghost**: `variant="ghost"` - Subtle actions
- **Outline**: `variant="outline"` - Alternative actions

### Cards
- **Default**: `bg-card border-border shadow-sm` - Standard content containers
- **KPI Cards**: Enhanced with large numbers and trend indicators
- **Activity Cards**: Timeline-style cards with avatars and metadata

### Forms
- **Input Fields**: `bg-input border-border` - Form inputs
- **Search**: Special styling with search icon
- **Validation**: Inline validation with error states

## Interaction States

### Hover States
- **Buttons**: Slight opacity change or background tint
- **Cards**: Subtle shadow elevation
- **Interactive Elements**: `hover:` classes for feedback

### Focus States
- **Form Elements**: `focus-visible:ring-1` with primary color
- **Navigation**: Clear active state indication
- **Keyboard Navigation**: Accessible focus indicators

## Iconography

### Icon Library
- **Lucide React** - Clean, outline-style icons
- **Size**: Consistent 16px (h-4 w-4) and 20px (h-5 w-5) sizes
- **Usage**: Icons only for navigation and actions, never decorative

### Icon Usage
- **Navigation**: Each nav item has a relevant icon
- **Actions**: Buttons include icons for clarity
- **Status**: Trend indicators and status badges
- **Data**: Activity type indicators

## Responsive Design

### Breakpoints
- **Mobile**: Base styles, full-width cards
- **Tablet**: `md:` prefix, 2-column grids
- **Desktop**: `lg:` prefix, full layout with sidebar

### Mobile-First Approach
- Touch targets minimum 44px
- Collapsible navigation
- Full-width forms and cards
- Optimized typography scaling

## Dark Mode Support

All color variables are defined to support automatic dark mode switching:
- CSS custom properties for dynamic color switching
- Semantic color names (foreground, background, muted, etc.)
- Consistent contrast ratios in both modes

## Usage Guidelines

### Do's
- Use ample whitespace for breathing room
- Stick to the defined color palette
- Maintain consistent spacing patterns
- Use semantic HTML elements
- Follow accessibility guidelines

### Don'ts
- Don't use colors outside the defined palette
- Avoid cluttered layouts
- Don't mix different spacing scales
- Avoid decorative elements that don't serve a function
- Don't compromise accessibility for aesthetics

## Implementation Notes

### Tailwind Configuration
- Colors defined as CSS custom properties
- Font families configured in theme
- Consistent spacing scale
- Component variants for different states

### Component Structure
- All components use TypeScript
- Props interfaces for reusability
- Consistent naming conventions
- Semantic HTML structure

### Performance Considerations
- Font optimization with Next.js
- Efficient CSS with Tailwind
- Minimal JavaScript for interactions
- Optimized images and assets
