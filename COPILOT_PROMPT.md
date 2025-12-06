# AI Car Recommendation System - Website Prompt for Copilot

You are an expert Next.js developer. Create a modern, beautiful, single-page website showcasing the "Local LLM Car Recommendation System" project. 

## Project Overview

**Project Name:** Local LLM Car Recommendation System

**Description:** A sophisticated, conversational car recommendation platform powered by a local LLM (phi3:mini via Ollama). The system intelligently extracts user preferences through natural conversation and provides personalized car recommendations from a database of 9,000+ vehicles.

## Website Requirements

### 1. **Header/Navigation Section**
- Clean, modern navbar with project logo/name
- Navigation links: Home, Features, Tech Stack, How It Works, Screenshots, Demo
- Call-to-action button (e.g., "View on GitHub")
- Sticky navbar that stays on top while scrolling

### 2. **Hero Section**
- Eye-catching headline: "Find Your Perfect Car with AI-Powered Recommendations"
- Compelling subheading about intelligent preference extraction and personalized matching
- Hero image: Screenshot of the chat interface or an attractive car/tech themed image
- Primary CTA button with smooth scroll animation
- Background: Gradient or modern design pattern (dark/light theme toggle recommended)

### 3. **Features Section**
Showcase 6 key features with icons and descriptions:

**Feature 1: Intelligent Conversation**
- Extract preferences through natural dialogue
- Understand budget ranges, fuel types, transmission, use case
- Support for budget formats (lac, million, PKR)

**Feature 2: Hybrid Extraction**
- LLM-powered AI extraction (phi3:mini)
- Rule-based fallback for accuracy
- Handles multiple languages

**Feature 3: Smart Filtering**
- Real-time database filtering
- Support 9,179+ vehicle listings
- Price-based, fuel-type, transmission filtering

**Feature 4: Deterministic Scoring**
- 6-factor scoring system: price fit, age, mileage, fuel match, transmission match, features
- Weighted scoring for accurate ranking
- Transparent scoring breakdown

**Feature 5: Dynamic Responses**
- LLM-generated personalized conversations
- Context-aware follow-up questions
- Pakistani car market expertise

**Feature 6: Conversation Management**
- Save and load conversations
- Chat history management
- Session persistence

### 4. **How It Works Section**
Create a visual flow (cards or timeline) showing the process:

1. **User Input** → User describes desired car in natural language
2. **Smart Extraction** → System extracts preferences (budget, fuel, transmission, use case, etc.)
3. **Profile Building** → Preferences accumulate with each conversation
4. **Database Search** → Filtered search from 9,179+ cars
5. **Intelligent Scoring** → 6-factor deterministic scoring
6. **Recommendations** → Top 3 personalized recommendations with explanations
7. **Refinement** → User can adjust preferences and get new recommendations

### 5. **Tech Stack Section**
Display technologies in an attractive grid/card layout:

**Frontend:**
- Streamlit (Python web framework)
- Modern CSS with custom styling
- Responsive design for mobile/tablet/desktop

**Backend:**
- Python 3.13
- LLM Integration: Ollama + phi3:mini (3.8B parameters)
- SQLite database (9,179 cars)

**Core Components:**
- ProfileExtractor (LLM + rule-based hybrid)
- CarSearcher (SQL-based deterministic search)
- CarScorer (6-factor scoring algorithm)
- RecommendationEngine (orchestrator)

**Infrastructure:**
- Local LLM deployment
- Lightweight, privacy-first
- No cloud dependencies

### 6. **Screenshots/Features Gallery Section**
Display 3-4 key screenshots in a carousel or grid:

1. **Chat Interface Screenshot** - Show the conversation UI where user inputs preferences
2. **Recommendation Cards Screenshot** - Display the car recommendation cards with ratings
3. **Profile Panel Screenshot** - Show extracted preferences and current profile
4. **Conversation History Screenshot** - Display saved conversations feature

Each screenshot should have:
- Descriptive caption
- Small badge indicating what feature it showcases

### 7. **Key Metrics/Statistics Section**
Display impressive numbers in a stats grid:

- **9,179+** Cars in Database
- **6** Factor Scoring System
- **3.8B** Parameters (Phi3:mini)
- **100%** Privacy (Local LLM)
- **2+** Languages Supported
- **<2s** Average Response Time

### 8. **Demo/Call-to-Action Section**
- "Ready to Find Your Perfect Car?"
- Live demo embed OR link to deployed instance
- Alternative: Code snippet showing easy setup
- Multiple CTA buttons: Try Demo, View Code, Documentation

### 9. **Footer Section**
- Project links (GitHub, LinkedIn, etc.)
- Tech credits
- Copyright
- Back-to-top button

## Design Requirements

### Visual Design:
- **Color Scheme:** Modern dark theme with accent colors (cyan/electric blue for highlights)
- **Typography:** Clean, modern fonts (e.g., Inter, Geist, or similar)
- **Spacing:** Generous padding, well-organized sections with clear visual hierarchy
- **Icons:** Use modern icon library (e.g., lucide-react, heroicons)
- **Animations:** Smooth scroll effects, fade-in animations, hover effects on cards
- **Responsiveness:** Mobile-first design, works seamlessly on all devices

### User Experience:
- Smooth scrolling between sections
- Readable content with good contrast
- Fast loading and performance
- Clear CTAs and navigation
- Professional yet approachable tone

## Technical Specifications

**Framework:** Next.js 14+ (App Router)
**Styling:** Tailwind CSS (preferred) or CSS Modules
**Components:** React functional components with hooks
**Performance:** Optimize for Core Web Vitals
**Deployment:** Ready for Vercel deployment

## Content Tone

- Professional but approachable
- Emphasize innovation and intelligent design
- Highlight privacy and local-first approach
- Technical depth with accessible explanations
- Focus on user benefits and practical use cases

## Additional Features (Optional Enhancements)

- Dark/Light mode toggle
- Animated section counters
- Smooth parallax effects
- Interactive feature cards
- Video demo embed
- Testimonials section (if applicable)
- FAQ section
- Newsletter signup

## Deliverables

Create a complete, production-ready single-page website with:
1. All sections mentioned above
2. Responsive design
3. Smooth animations and interactions
4. Professional aesthetic
5. Easy to customize and extend
6. Optimized performance
7. SEO-friendly structure

---

## Additional Context

**Project Repository:** [If available, provide link]
**Live Demo:** [If available, provide link]
**Created By:** AI-Powered Development Team
**Purpose:** Showcase an intelligent, privacy-first car recommendation system built with local LLM technology

---

Generate complete, production-ready code. Include all necessary components, styling, and ensure the website is beautiful, professional, and effectively showcases the project's features and innovation.