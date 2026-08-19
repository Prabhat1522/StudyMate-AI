/*
  HomePage.jsx — The main marketing / landing page.
  
  This page assembles all 8 sections in order:
  ┌────────────────────────────────────────────────────────┐
  │ 1. Navbar           ← sticky top navigation            │
  │ 2. Hero             ← first impression, above the fold │
  │ 3. ProductShowcase  ← interactive product preview tabs │
  │ 4. Features         ← 6 core feature capability cards  │
  │ 5. HowItWorks       ← 4-step learning journey          │
  │ 6. TrustSection     ← honest product-proof & principles│
  │ 7. FinalCTA         ← conversion call-to-action        │
  │ 8. Footer           ← multi-column nav, legal, credit  │
  └────────────────────────────────────────────────────────┘
*/

import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import ProductShowcase from '@/sections/ProductShowcase'
import Features from '@/sections/Features'
import HowItWorks from '@/sections/HowItWorks'
import TrustSection from '@/sections/TrustSection'
import FinalCTA from '@/sections/FinalCTA'
import Footer from '@/sections/Footer'

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <HowItWorks />
        <TrustSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
