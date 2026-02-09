# EveryRozLife - Coming Soon Website PRD

## Original Problem Statement
Create a website for EveryRozLife business that sells Lucknowi chikankari kurtas. User wants a "coming soon" exclusive launch page to build anticipation without showing prices.

## Project Type
Pre-launch landing page / Coming soon website

## User Personas
1. **Fashion Enthusiasts** - Interested in traditional Indian craftsmanship
2. **Early Adopters** - Want exclusive access to new luxury brands
3. **Chikankari Lovers** - Appreciate authentic Lucknowi embroidery
4. **Conscious Shoppers** - Value artisan-made, handcrafted products

## Architecture & Tech Stack
- **Frontend**: React 19, React Router DOM, Tailwind CSS, shadcn/ui components
- **Design System**: Elegant RetroVibe Commerce guidelines
  - Colors: Warm Sage (#C4B5A0), Soft Taupe (#D4C4B0), Rich Chocolate (#6B4E37), Charcoal (#2C2C2C)
  - Typography: Playfair Display (serif for headings), Montserrat (sans-serif for body)
- **State Management**: React useState/useEffect hooks
- **Toast Notifications**: Sonner
- **Icons**: Lucide React
- **Images**: Curated high-quality chikankari images from Unsplash/Pexels

## Core Features Implemented ✅

### Completed (December 9, 2025)

#### 1. Hero Section
- Large hero image showcasing chikankari kurta
- "Coming Soon" headline with elegant typography
- Brand tagline and description
- "Launching Soon" badge with sparkle icon
- CTA button to join waitlist
- Decorative "Artisan Quality" badge overlay

#### 2. Countdown Timer
- Real-time countdown to launch date (March 1, 2025)
- Displays days, hours, minutes, seconds
- Clean, minimal design with individual time unit cards
- Auto-updates every second

#### 3. About Section
- Brand story explaining Lucknowi chikankari craftsmanship
- Three key features with heart icons:
  - Authentic Handwork
  - Premium Fabrics
  - Timeless Design
- Large image showcasing artisan craftsmanship

#### 4. Collection Preview Gallery
- 6 product preview cards in responsive grid (3 columns on desktop)
- Each card shows:
  - High-quality product image
  - Category label (Classic, Premium, Heritage, Signature Embroidery)
  - Product name
  - Description (NO PRICES as requested)
- Hover animations with scale effect on images
- Card shadows for depth

#### 5. Exclusive Waitlist Section
- Email capture form with validation
- Four compelling benefits with checkmark icons:
  - Exclusive early access
  - Launch discount for founding members
  - Behind-the-scenes artisan insights
  - Priority notification on limited editions
- Toast notification on successful signup
- Warm Sage CTA button with Mail icon

#### 6. Header Navigation
- Fixed header with backdrop blur effect
- EveryRozLife logo with circular "E" icon
- Navigation links: About, Collection, Join Waitlist
- Smooth scroll behavior

#### 7. Footer
- Brand name and tagline
- Social media icons (Instagram, Facebook) with hover effects
- Copyright notice
- Dark chocolate background (#2C2C2C)

#### 8. Design & UX Features
- Responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Micro-animations on hover states
- Custom fonts loaded from Google Fonts
- Generous white space for luxury feel
- High contrast for accessibility
- Custom selection color matching brand

## Current Implementation Status
**Status**: Frontend MVP Complete ✅  
**Data**: Mock data in `/app/frontend/src/data/mock.js`  
**No backend required** - This is a static coming soon page with client-side email form handling

## Files Created
```
/app/frontend/src/
├── pages/
│   └── ComingSoon.jsx          # Main coming soon page component
├── data/
│   └── mock.js                  # Mock data (brand info, products, content)
├── App.js                       # Updated routing
├── App.css                      # Custom animations
└── index.css                    # Typography, fonts
```

## Next Action Items (Phase 2 - When Ready to Launch)

### P0 - Essential for Launch
1. **Backend Email Collection**
   - Create MongoDB schema for waitlist emails
   - Build `/api/waitlist` POST endpoint
   - Email validation and duplicate prevention
   - Success/error handling

2. **Email Marketing Integration**
   - Connect to Mailchimp/SendGrid
   - Automated welcome email for waitlist signups
   - Admin dashboard to view waitlist

### P1 - Important Enhancements
3. **Social Sharing**
   - Share buttons for Facebook, Instagram, WhatsApp
   - Referral tracking for viral growth

4. **Mobile Hamburger Menu**
   - Implement mobile navigation drawer

5. **Analytics**
   - Google Analytics integration
   - Track button clicks, form submissions
   - Heatmap for user behavior

### P2 - Nice to Have
6. **Instagram Feed Integration**
   - Show latest Instagram posts
   - Embed Instagram stories

7. **Video Background Option**
   - Hero section with subtle video
   - Artisan craftsmanship showcase

8. **Notify Me Preference**
   - Select notification preferences (email, SMS)
   - Collect phone numbers (optional)

## Design Guidelines Followed
✅ Elegant RetroVibe Commerce aesthetic  
✅ NO AI emoji icons (used lucide-react)  
✅ Serif typography for elegance (Playfair Display)  
✅ Sans-serif for readability (Montserrat)  
✅ Warm, sophisticated color palette  
✅ NO prices shown (as requested)  
✅ Generous white space  
✅ Micro-animations and hover states  
✅ Responsive grid layouts  
✅ High-quality imagery  
✅ Professional, luxury positioning

## Success Metrics (When Backend Added)
- Waitlist signup conversion rate
- Social media clicks
- Page engagement time
- Mobile vs desktop traffic
- Email open rates (post-launch)
