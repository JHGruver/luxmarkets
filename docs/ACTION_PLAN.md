# Lux Markets Website Redesign - Action Plan

**Document Version:** 1.0
**Created:** December 2024
**Status:** Awaiting Business Owner Input

---

## Overview

This action plan transforms the current Lux Markets website from a **4.8/10** to a **target 8.5+/10** by systematically addressing the critical failures identified in the expert review. The plan is organized into phases that build upon each other, with clear dependencies and success metrics.

---

## Phase 0: Discovery & Strategy (Week 1)

### Objective
Gather critical business intelligence to inform all subsequent decisions.

### Actions

| # | Task | Owner | Deliverable |
|---|------|-------|-------------|
| 0.1 | Complete Business Owner Questionnaire | Business Owner | Completed questionnaire |
| 0.2 | Review questionnaire responses | Development Team | Strategy brief |
| 0.3 | Conduct competitor analysis | Marketing | Competitor matrix |
| 0.4 | Audit existing analytics data | Analytics | Baseline metrics report |
| 0.5 | Interview 3-5 existing customers | Business Owner | Customer insights document |

### Success Criteria
- [ ] Questionnaire 100% completed
- [ ] Clear understanding of business goals, constraints, and priorities
- [ ] Baseline metrics established for comparison

### Dependencies
- None (this phase unlocks all others)

---

## Phase 1: Foundation & Quick Wins (Weeks 2-3)

### Objective
Implement high-impact, low-effort changes that immediately improve conversion potential.

### 1.1 Pricing Transparency
**Priority:** CRITICAL | **Impact:** High | **Effort:** Low

**Current State:** "$24.90/month + Per Event Fee" with no disclosure of event fees

**Actions:**
- [ ] Determine event fee structure from business owner
- [ ] Update pricing page with complete fee breakdown
- [ ] Add FAQ section addressing common pricing questions
- [ ] Create pricing comparison table if multiple tiers exist

**Copy Template:**
```
All-in-One Membership: $24.90/month
Event Fees: $X per event (or X% of sales, or tiered structure)
What's Included: [detailed breakdown]
```

---

### 1.2 Social Proof Enhancement
**Priority:** CRITICAL | **Impact:** High | **Effort:** Low-Medium

**Current State:** 3 brief testimonials, all Austin-based, no metrics

**Actions:**
- [ ] Contact existing customers for expanded testimonials
- [ ] Request permission to use real names, photos, company logos
- [ ] Gather specific metrics (sales increase %, time saved, events completed)
- [ ] Add customer count or key statistics to homepage

**Testimonial Template:**
```
"[Specific result achieved] since joining Lux Markets. [Quantified impact].
[Recommendation]."

— [Full Name], [Title], [Company Name]
[City, State] | [X] events completed | [Y]% sales increase
```

**Target Metrics to Display:**
- Total brands on platform
- Total events facilitated
- Total shopper contacts captured
- Average sales per event

---

### 1.3 Lead Capture Implementation
**Priority:** CRITICAL | **Impact:** High | **Effort:** Medium

**Current State:** Only demo booking and trial signup available

**Actions:**
- [ ] Create lead magnet #1: "The CPG Founder's Guide to Pop-Up Markets" (PDF)
- [ ] Implement exit-intent popup offering lead magnet
- [ ] Add inline email capture on blog/education page
- [ ] Set up email marketing platform (Mailchimp, ConvertKit, or HubSpot)
- [ ] Create 5-email welcome sequence

**Exit Intent Popup Copy:**
```
Heading: "Before you go..."
Subheading: "Get our free guide: 10 Secrets to Crushing Your First Pop-Up Market"
CTA: "Send Me the Guide"
```

---

### 1.4 Chat Widget Installation
**Priority:** HIGH | **Impact:** Medium | **Effort:** Low

**Actions:**
- [ ] Select chat platform (Intercom, Drift, Crisp, or Tidio)
- [ ] Install widget on all pages
- [ ] Create automated greeting messages
- [ ] Set up business hours and away messages
- [ ] Create FAQ bot responses for common questions

**Recommended Greeting:**
```
"Hey! 👋 Have questions about Lux Markets? I'm here to help.
Are you a CPG brand looking for market access, or an apartment community interested in hosting?"
```

---

### 1.5 Analytics Setup
**Priority:** HIGH | **Impact:** High (long-term) | **Effort:** Medium

**Actions:**
- [ ] Install Google Analytics 4
- [ ] Set up conversion tracking for:
  - Demo requests
  - Trial signups
  - Contact form submissions
  - Lead magnet downloads
  - Chat conversations started
- [ ] Install Hotjar or Microsoft Clarity for heatmaps
- [ ] Create baseline report dashboard

**Key Metrics to Track:**
| Metric | Current Baseline | Target |
|--------|-----------------|--------|
| Bounce Rate | TBD | <50% |
| Avg. Session Duration | TBD | >2 min |
| Pages per Session | TBD | >2.5 |
| Demo Request Rate | TBD | >3% |
| Trial Signup Rate | TBD | >2% |

---

## Phase 2: Visual & Brand Refresh (Weeks 4-6)

### Objective
Transform the visual identity to match the "luxury" brand promise.

### 2.1 Design System Development
**Priority:** CRITICAL | **Impact:** High | **Effort:** High

**New Color Palette:**
```css
/* Primary */
--luxury-navy: #1a1a2e;
--luxury-gold: #c9a227;
--luxury-cream: #faf8f5;

/* Secondary */
--deep-charcoal: #2d2d2d;
--warm-gray: #8a8a8a;
--soft-white: #ffffff;

/* Accent */
--success-green: #2d6a4f;
--action-coral: #e07a5f;
```

**Typography System:**
```css
/* Headlines */
font-family: 'Playfair Display', Georgia, serif;

/* Body */
font-family: 'Inter', -apple-system, sans-serif;

/* Accent/Labels */
font-family: 'Montserrat', sans-serif;
```

**Actions:**
- [ ] Create comprehensive style guide document
- [ ] Design component library (buttons, cards, forms, etc.)
- [ ] Create icon set matching brand aesthetic
- [ ] Define spacing and grid system
- [ ] Establish photography style guidelines

---

### 2.2 Hero Section Redesign
**Priority:** CRITICAL | **Impact:** High | **Effort:** Medium

**Current State:** Text-only hero with generic messaging

**New Hero Concept:**
```
Layout: Split screen
Left Side:
  - Refined headline with luxury typography
  - Compelling subheadline with specific value prop
  - Dual CTAs with clear hierarchy
  - Trust badges (customer count, partner logos mini)

Right Side:
  - Animated product demo or video
  - Or: High-quality lifestyle image of luxury market event
```

**New Hero Copy Options:**

**Option A (Results-Focused):**
```
Headline: "Where Premium Brands Meet Premium Customers"
Subheadline: "Join 150+ CPG brands using Lux Markets to book exclusive pop-up events
at Austin's most prestigious apartment communities."
Primary CTA: "Start Your Free Trial"
Secondary CTA: "Watch How It Works"
```

**Option B (Problem-Solution):**
```
Headline: "Stop Guessing. Start Growing."
Subheadline: "The all-in-one platform that handles your market bookings,
tracks your sales data, and connects you with high-value customers."
Primary CTA: "Get Started Free"
Secondary CTA: "See Pricing"
```

---

### 2.3 Photography & Visual Assets
**Priority:** HIGH | **Impact:** High | **Effort:** Medium-High

**Actions:**
- [ ] Schedule professional photoshoot at partner venue
- [ ] Capture:
  - Luxury apartment common areas/amenities
  - Active market events with vendors and shoppers
  - Happy customers/brand owners
  - Product displays and booth setups
- [ ] Create/update dashboard screenshots with real data
- [ ] Design custom illustrations for feature sections
- [ ] Obtain high-resolution partner logos

**Shot List:**
1. Wide shot of market event in luxury setting
2. Close-up of vendor-customer interaction
3. Product displays at booth
4. Resident enjoying market experience
5. Vendor using tablet/phone with Lux Markets app
6. Exterior of luxury apartment building
7. Team/founder headshots

---

### 2.4 Page-by-Page Redesign
**Priority:** HIGH | **Impact:** High | **Effort:** High

**Homepage Sections (New Order):**
1. Hero with video/demo
2. Trust bar (logos + "Trusted by X brands")
3. Problem/Solution statement
4. 3 Key benefits with icons
5. Product showcase (dashboard preview)
6. How it works (3 steps)
7. Feature deep-dives (alternating layout)
8. Case study highlight
9. Testimonials (carousel)
10. Partner network
11. Pricing preview
12. Final CTA
13. Footer

**Actions:**
- [ ] Create wireframes for all pages
- [ ] Design high-fidelity mockups
- [ ] Get stakeholder approval
- [ ] Implement designs in code
- [ ] Mobile optimization pass
- [ ] Cross-browser testing

---

## Phase 3: Content & SEO (Weeks 6-10)

### Objective
Build content engine that drives organic traffic and establishes thought leadership.

### 3.1 Case Study Development
**Priority:** CRITICAL | **Impact:** High | **Effort:** Medium

**Target:** 3 detailed case studies

**Case Study Template:**
```
1. Company Overview
   - Brand name, product category, founding date
   - Team size, location

2. The Challenge
   - What problems were they facing?
   - What solutions had they tried?
   - What was at stake?

3. The Solution
   - How did they discover Lux Markets?
   - What features did they implement?
   - What was the onboarding like?

4. The Results (QUANTIFIED)
   - Revenue impact (% increase)
   - Events completed
   - Customer contacts captured
   - Time saved
   - ROI calculation

5. Customer Quote
   - Pull quote for marketing use

6. What's Next
   - Future plans with Lux Markets
```

**Actions:**
- [ ] Identify 3 best customer success stories
- [ ] Conduct 30-minute interviews
- [ ] Write case study drafts
- [ ] Get customer approval
- [ ] Design case study pages
- [ ] Create PDF versions for download

---

### 3.2 FAQ Development
**Priority:** HIGH | **Impact:** Medium | **Effort:** Low

**Actions:**
- [ ] Compile questions from sales calls, chat, emails
- [ ] Create FAQ sections for:
  - Homepage (general)
  - Pricing page (cost-related)
  - Our Markets (event-related)
  - For vendors (market rules)
- [ ] Implement FAQ schema markup for SEO

**Essential FAQs:**
```
General:
- What is Lux Markets?
- Who is Lux Markets for?
- What areas do you serve?
- How do I get started?

Pricing:
- How much does it cost?
- What's included in the monthly fee?
- How are event fees calculated?
- Is there a free trial?
- Can I cancel anytime?

Events:
- How do I book an event?
- How far in advance should I book?
- What do I need to bring?
- What if I need to cancel?

Platform:
- What data can I track?
- Does it integrate with Shopify?
- Can I have multiple team members?
- How does the QR code feature work?
```

---

### 3.3 Blog Revitalization
**Priority:** HIGH | **Impact:** High (long-term) | **Effort:** Ongoing

**Content Calendar (First 8 Weeks):**

| Week | Article Title | Category | Target Keyword |
|------|--------------|----------|----------------|
| 1 | "The Complete Guide to Pop-Up Market Success in 2025" | Guide | pop-up market tips |
| 2 | "How [Customer] Increased Sales 200% with Brand Activations" | Case Study | brand activation ROI |
| 3 | "Austin's Best Venues for CPG Brand Activations" | Local | Austin brand activations |
| 4 | "The True Cost of Manual Market Management (And How to Fix It)" | Problem/Solution | market management software |
| 5 | "5 Data Points Every CPG Founder Should Track" | Educational | CPG analytics |
| 6 | "Luxury Apartment Events: The Untapped Channel for Premium Brands" | Thought Leadership | luxury apartment marketing |
| 7 | "From Spreadsheets to Success: A Founder's Digital Transformation" | Case Study | CPG tools |
| 8 | "How to Capture and Convert Shopper Data at Events" | How-To | event lead capture |

**Actions:**
- [ ] Develop content calendar for 6 months
- [ ] Establish author guidelines and voice
- [ ] Create blog post template
- [ ] Set up editorial workflow
- [ ] Plan content promotion strategy

---

### 3.4 SEO Technical Implementation
**Priority:** HIGH | **Impact:** High | **Effort:** Medium

**Actions:**
- [ ] Conduct keyword research and mapping
- [ ] Optimize all page titles and meta descriptions
- [ ] Implement schema markup:
  - Organization
  - LocalBusiness
  - SoftwareApplication
  - FAQPage
  - Article (for blog)
  - Review (for testimonials)
- [ ] Create and submit XML sitemap
- [ ] Set up Google Search Console
- [ ] Implement proper heading hierarchy
- [ ] Add internal linking strategy
- [ ] Optimize images (alt text, compression, WebP)

**Target Keywords by Page:**

| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Home | CPG brand activation platform | pop-up market software, vendor management |
| Our Markets | luxury apartment events Austin | brand activation venues, pop-up markets Austin |
| Pricing | CPG analytics pricing | market management cost, vendor software pricing |
| Education | CPG marketing tips | brand activation strategies, market vendor guides |

---

## Phase 4: Conversion Optimization (Weeks 10-14)

### Objective
Maximize conversion rate through systematic testing and optimization.

### 4.1 Landing Page Variants
**Priority:** HIGH | **Impact:** High | **Effort:** Medium

**Actions:**
- [ ] Create dedicated landing pages:
  - `/for-cpg-brands` - Brand-focused messaging
  - `/for-communities` - Apartment community messaging
  - `/austin` - Local SEO landing page
  - `/free-trial` - Trial-focused conversion page
- [ ] Set up A/B testing infrastructure
- [ ] Test headline variants
- [ ] Test CTA copy and colors
- [ ] Test social proof placement

---

### 4.2 Form Optimization
**Priority:** HIGH | **Impact:** Medium | **Effort:** Low

**Contact Form Upgrade:**
```
Current: Name, Email, Message
Proposed:
  - Name
  - Email
  - Company Name
  - Monthly Revenue Range (dropdown)
  - Primary Interest (Market Access / Analytics Platform / Both)
  - Message
  - Preferred Contact Method (Email / Phone / Either)
```

**Actions:**
- [ ] Implement progressive form fields
- [ ] Add inline validation
- [ ] Create conditional logic (show different fields based on interest)
- [ ] Add form analytics tracking
- [ ] Test multi-step form vs. single form

---

### 4.3 CTA Optimization
**Priority:** HIGH | **Impact:** High | **Effort:** Low

**CTA Button Tests:**
```
Current: "Get a Demo" / "Get Started Free"

Test Variants:
A: "Book Your Free Strategy Call"
B: "Start My Free Trial"
C: "Apply for Market Access"
D: "See If You Qualify"
E: "Join 150+ Growing Brands"
```

**Actions:**
- [ ] Implement A/B testing tool (Google Optimize, VWO, or Optimizely)
- [ ] Create test variants
- [ ] Run tests for statistical significance
- [ ] Implement winners
- [ ] Document learnings

---

### 4.4 Trust Element Placement
**Priority:** MEDIUM | **Impact:** Medium | **Effort:** Low

**Actions:**
- [ ] Add trust badges throughout (not just one section)
- [ ] Implement real-time social proof notifications
- [ ] Add security/privacy badges near forms
- [ ] Display partner logos at key decision points
- [ ] Add "As seen at [Partner]" badges

---

## Phase 5: Advanced Features (Weeks 14-20)

### Objective
Implement differentiating features that increase engagement and conversion.

### 5.1 ROI Calculator
**Priority:** MEDIUM | **Impact:** High | **Effort:** High

**Calculator Inputs:**
- Current number of events per month
- Average revenue per event
- Hours spent on event management
- Current customer capture rate

**Calculator Outputs:**
- Projected time savings
- Projected revenue increase
- Projected customer database growth
- Monthly ROI with Lux Markets

**Actions:**
- [ ] Design calculator UI
- [ ] Develop calculation logic
- [ ] Create results display
- [ ] Add lead capture to results
- [ ] Test with real user data

---

### 5.2 Video Content
**Priority:** MEDIUM | **Impact:** High | **Effort:** High

**Videos to Create:**
1. Product demo walkthrough (2-3 min)
2. Customer testimonial compilation (1-2 min)
3. "How It Works" explainer (60-90 sec)
4. Founder story/company mission (2 min)

**Actions:**
- [ ] Develop video scripts
- [ ] Plan shoot logistics
- [ ] Record videos
- [ ] Edit and produce
- [ ] Implement on website
- [ ] Create YouTube channel

---

### 5.3 Interactive Product Tour
**Priority:** LOW | **Impact:** Medium | **Effort:** High

**Actions:**
- [ ] Select tour platform (Storylane, Navattic, or Walnut)
- [ ] Create interactive demo environment
- [ ] Build guided tour flow
- [ ] Embed on website
- [ ] Track engagement metrics

---

## Phase 6: Launch & Iteration (Weeks 20+)

### 6.1 Pre-Launch Checklist
- [ ] All pages tested on mobile devices
- [ ] Cross-browser testing complete
- [ ] Page speed optimized (<3s load time)
- [ ] Forms tested and working
- [ ] Analytics tracking verified
- [ ] 301 redirects set up (if URLs changing)
- [ ] Backup of old site created
- [ ] Team trained on new features

### 6.2 Launch Activities
- [ ] Deploy new website
- [ ] Monitor for errors
- [ ] Announce to existing customers
- [ ] Social media announcement
- [ ] Email to subscriber list
- [ ] Press release (if applicable)

### 6.3 Post-Launch Optimization
- [ ] Weekly analytics review
- [ ] Monthly A/B test cycles
- [ ] Quarterly content audit
- [ ] Ongoing blog publishing
- [ ] Customer feedback collection
- [ ] Continuous improvement based on data

---

## Resource Requirements

### Team Needs

| Role | Responsibility | Hours/Week | Duration |
|------|---------------|------------|----------|
| Project Manager | Coordination, timeline | 10-15 | All phases |
| UI/UX Designer | Design system, mockups | 20-30 | Phases 2-4 |
| Frontend Developer | Implementation | 30-40 | Phases 1-5 |
| Copywriter | Content creation | 15-20 | Phases 1-4 |
| SEO Specialist | Technical SEO, content strategy | 10-15 | Phases 3-4 |
| Photographer/Videographer | Visual content | Project-based | Phase 2 |

### Tool Stack (Recommended)

| Category | Recommended Tool | Monthly Cost |
|----------|-----------------|--------------|
| Analytics | Google Analytics 4 | Free |
| Heatmaps | Hotjar | $32/mo |
| A/B Testing | Google Optimize | Free |
| Email Marketing | ConvertKit | $29/mo |
| Chat | Crisp | $25/mo |
| SEO | Ahrefs or SEMrush | $99/mo |
| Form Builder | Typeform | $25/mo |

### Budget Estimate

| Phase | Low Estimate | High Estimate |
|-------|-------------|---------------|
| Phase 1 (Foundation) | $2,000 | $5,000 |
| Phase 2 (Design) | $8,000 | $20,000 |
| Phase 3 (Content) | $3,000 | $8,000 |
| Phase 4 (CRO) | $2,000 | $5,000 |
| Phase 5 (Advanced) | $5,000 | $15,000 |
| **Total** | **$20,000** | **$53,000** |

*Note: Estimates vary significantly based on whether work is done in-house, freelance, or agency.*

---

## Success Metrics

### Key Performance Indicators (KPIs)

| Metric | Current | 3-Month Target | 6-Month Target |
|--------|---------|----------------|----------------|
| Monthly Visitors | TBD | +50% | +150% |
| Bounce Rate | TBD | -20% | -35% |
| Demo Requests/Month | TBD | +100% | +250% |
| Trial Signups/Month | TBD | +100% | +300% |
| Email Subscribers | TBD | +500 | +2,000 |
| Avg. Session Duration | TBD | +30% | +60% |
| Organic Traffic | TBD | +25% | +100% |

### Milestone Checkpoints

| Week | Milestone | Success Criteria |
|------|-----------|-----------------|
| 2 | Phase 0 Complete | Questionnaire done, strategy defined |
| 4 | Quick Wins Live | Pricing visible, chat active, analytics running |
| 8 | Design Approved | All mockups signed off |
| 12 | New Site Live | Full redesign launched |
| 16 | Content Engine Running | Blog active, case studies published |
| 20 | Optimization Underway | A/B tests running, data being collected |

---

## Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Scope creep | High | Medium | Strict phase boundaries, change control process |
| Customer testimonial delays | Medium | High | Start outreach immediately, have backups |
| Photography scheduling | Medium | Medium | Book 4+ weeks in advance, have stock backup |
| Developer availability | Medium | High | Clear timeline, milestone payments |
| Analytics data gaps | Low | Medium | Set up tracking first, establish baseline |

---

## Next Steps

1. **Immediate:** Complete Business Owner Questionnaire
2. **This Week:** Review questionnaire, finalize strategy
3. **Next Week:** Begin Phase 1 implementation
4. **Ongoing:** Weekly check-ins, progress tracking

---

*Document maintained by: Project Team*
*Last updated: December 2024*
