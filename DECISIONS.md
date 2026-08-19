# StudyMate AI — Engineering Decisions

## 1. Product & Design Direction
StudyMate AI addresses the friction students face when moving between passive reading and active recall. Rather than presenting generic AI hype, the homepage is designed as a **modern, focused AI workspace** that communicates calm intelligence. The above-the-fold 3-second experience immediately clarifies the core value proposition:
1. **Product & Audience**: An AI-powered study companion built specifically for students.
2. **Problem Solved**: Turns raw course materials (PDFs, notes) into structured understanding, active practice quizzes, and mastery tracking.
3. **Immediate Action**: Direct, prominent primary CTA (*"Start Learning — It's Free"*) paired with a realistic above-the-fold UI dashboard preview.

## 2. Why This Approach
- **React + Vite & Tailwind CSS v4**: Selected for lightning-fast build iterations, native CSS variable tokens via `@theme`, and zero-runtime overhead.
- **Product-First Visual Storytelling over Marketing Copy**: Visitors understand software faster by seeing real UI affordances (interactive tabs, quiz interactions, topic mastery bars) rather than reading abstract claims.
- **Light-First Premium Palette & Restrained Motion**: Avoided excessive dark-mode glassmorphism, neon glows, and heavy animations. Used clean HSL color tokens (`hsl(244 66% 57%)` primary, `hsl(220 25% 98%)` background) and purpose-driven micro-interactions that strictly respect `prefers-reduced-motion`.
- **Modular Component Architecture**: Decoupled presentation from data (`src/data/`, `src/components/`, `src/sections/`), enabling seamless updates and maintainability.

## 3. Trade-offs & Future Roadmap
- **The Trade-off**: Under the challenge time limit, priority was placed on **deep frontend craft, visual hierarchy, responsive fidelity, and interactive state mockups** rather than wiring half-baked backend APIs, database persistence, or real LLM calls.
- **With a Full Week**:
  - Integrate real document ingestion (PDF parser with vector embeddings / RAG).
  - Connect live streaming LLM responses for the AI Study Tutor via edge workers.
  - Implement full Supabase/Auth0 authentication, persistent quiz progress, and spaced repetition (Anki-style SM-2) scheduling.

## 4. AI Tool Usage & Verification
- **AI Assistance**: Used for initial project scaffolding, rapid boilerplate component generation, and layout drafting.
- **Manual Engineering & Verification**:
  - Audited and refined responsive behavior across **390px (mobile), 768px (tablet), 1024px, and 1440px (desktop)** to eliminate horizontal overflow.
  - Hand-crafted design token consistency in `src/index.css` and keyboard accessibility (`:focus-visible`, ARIA roles, tablist attributes).
  - Replaced cold-start HMR bundling issues and verified clean production builds (`vite build` passing in <1s with 0 errors/warnings).
  - Conducted a strict content audit to ensure zero fabricated claims or fake data exist.

## 5. Honesty & Credibility
Because StudyMate AI is a challenge product concept, the site intentionally contains **no fabricated testimonials, fake user numbers, or fake partner logos**. Trust is built purely through product transparency, capability demonstrations, and honest positioning principles.

## 6. Technical Stack & Verification
- **Frontend**: React 19, Vite 8
- **Styling**: Tailwind CSS v4 (native `@theme` tokens)
- **Icons & Motion**: Lucide React, Framer Motion
- **Deployment Target**: Vercel
- **Responsive QA**: Verified at 390px, 768px, 1024px, and 1440px with zero horizontal scroll.
