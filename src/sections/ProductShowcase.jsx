/*
  ProductShowcase.jsx — "See the product" section.

  Purpose:
  Visitors should SEE what StudyMate AI does before reading any feature list.
  This section bridges the Hero claim and the Features detail.

  Structure:
  - Section heading
  - Tab selector (Overview / AI Tutor / Notes / Quiz)
  - Browser-like product window containing:
      Left: dark sidebar with navigation (desktop only)
      Right: tab content panel

  The tab state (activeTab) lives here and drives:
  1. Which sidebar item is highlighted
  2. Which preview component is rendered in the main panel

  Product journey reinforcement:
  Overview → UPLOAD/UNDERSTAND → AI Tutor → UNDERSTAND/PRACTICE → Notes → Quiz → IMPROVE
*/
import { useState } from 'react'
import {
  Brain,
  LayoutDashboard,
  Bot,
  FileText,
  ClipboardCheck,
  Layers,
  Calendar,
  TrendingUp,
} from 'lucide-react'
import SectionLabel from '@/components/common/SectionLabel'
import ProductTabs from '@/components/product-preview/ProductTabs'
import DashboardPreview from '@/components/product-preview/DashboardPreview'
import TutorPreview from '@/components/product-preview/TutorPreview'
import NotesPreview from '@/components/product-preview/NotesPreview'
import QuizPreview from '@/components/product-preview/QuizPreview'

/* Sidebar navigation items.
   `tabId` links each item to a product tab (null = decorative only). */
const SIDEBAR_ITEMS = [
  { label: 'Dashboard',  icon: LayoutDashboard, tabId: 'overview'   },
  { label: 'AI Tutor',   icon: Bot,              tabId: 'tutor'      },
  { label: 'My Notes',   icon: FileText,         tabId: 'notes'      },
  { label: 'Quizzes',    icon: ClipboardCheck,   tabId: 'quiz'       },
  { label: 'Flashcards', icon: Layers,           tabId: null         },
  { label: 'Study Plan', icon: Calendar,         tabId: null         },
  { label: 'Progress',   icon: TrendingUp,       tabId: null         },
]

function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <section
      id="product-preview"
      aria-label="Product overview"
      className="section"
      style={{ background: 'hsl(220 25% 97%)' }}
    >
      <div className="container">

        {/* ── Section header ── */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <SectionLabel className="mb-4">Product Overview</SectionLabel>
          <h2 className="text-display text-text mt-2 mb-4">
            Everything you need to study smarter.
          </h2>
          <p className="text-body-lg">
            One intelligent workspace for understanding, practicing, and improving.
          </p>
        </div>

        {/* ── Tab selector ── */}
        <div className="flex justify-center mb-6">
          <ProductTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* ── Product window ── */}
        <div
          className="rounded-2xl border border-border overflow-hidden w-full"
          style={{ boxShadow: 'var(--shadow-xl)' }}
        >
          {/* Window title bar */}
          <div
            className="flex items-center gap-1.5 px-4 py-3 border-b"
            style={{
              background: 'hsl(222 40% 9%)',
              borderColor: 'hsl(222 35% 16%)',
            }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(4 72% 60%)' }} aria-hidden="true" />
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(40 86% 57%)' }} aria-hidden="true" />
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(134 46% 50%)' }} aria-hidden="true" />
            <span className="text-[11px] ml-2" style={{ color: 'hsl(220 8% 50%)' }}>
              app.studymate.ai
            </span>
          </div>

          {/* App body: sidebar + main */}
          <div className="flex" style={{ minHeight: '500px' }}>

            {/* ── Sidebar (hidden on mobile) ── */}
            <aside
              className="hidden lg:flex flex-col w-48 flex-shrink-0 border-r"
              style={{
                background: 'hsl(222 40% 9%)',
                borderColor: 'hsl(222 35% 16%)',
              }}
              aria-label="Application navigation"
            >
              {/* Logo in sidebar */}
              <div
                className="flex items-center gap-2 px-4 py-3.5 border-b"
                style={{ borderColor: 'hsl(222 35% 16%)' }}
              >
                <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                  <Brain size={12} className="text-white" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-bold" style={{ color: 'hsl(220 10% 85%)' }}>
                  StudyMate AI
                </span>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col gap-0.5 p-2 flex-1">
                {SIDEBAR_ITEMS.map(({ label, icon: Icon, tabId }) => {
                  const isActive = tabId !== null && tabId === activeTab
                  return (
                    <button
                      key={label}
                      onClick={() => tabId && setActiveTab(tabId)}
                      className={[
                        'flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-left transition-colors text-[11px] font-medium',
                        tabId ? 'cursor-pointer' : 'cursor-default opacity-60',
                        isActive ? '' : 'hover:bg-white/5',
                      ].join(' ')}
                      style={{
                        background: isActive ? 'hsl(244 66% 57% / 0.18)' : '',
                        color: isActive
                          ? 'hsl(244 80% 82%)'
                          : 'hsl(220 8% 58%)',
                      }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon size={13} aria-hidden="true" />
                      {label}
                    </button>
                  )
                })}
              </nav>
            </aside>

            {/* ── Main content panel ── */}
            <main className="flex-1 bg-surface overflow-auto">
              {activeTab === 'overview' && <DashboardPreview />}
              {activeTab === 'tutor'    && <TutorPreview />}
              {activeTab === 'notes'    && <NotesPreview />}
              {activeTab === 'quiz'     && <QuizPreview />}
            </main>

          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductShowcase
