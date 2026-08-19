/*
  CapabilityStrip.jsx — Horizontal product capability overview.

  Shows all six StudyMate AI capabilities in a grid of icon + label items.
  This is a PRODUCT feature overview — not a fake partner/logo strip.

  Layout:
  - Mobile (< sm): 3 columns × 2 rows
  - sm+:           6 columns in one row
*/
import {
  Bot,
  FileText,
  AlignLeft,
  Brain,
  Layers,
  TrendingUp,
} from 'lucide-react'
import CapabilityItem from './CapabilityItem'

const CAPABILITIES = [
  { id: 'tutor',      icon: Bot,        label: 'AI Tutor'      },
  { id: 'notes',      icon: FileText,   label: 'Smart Notes'   },
  { id: 'summary',    icon: AlignLeft,  label: 'AI Summaries'  },
  { id: 'quiz',       icon: Brain,      label: 'AI Quizzes'    },
  { id: 'flashcards', icon: Layers,     label: 'Flashcards'    },
  { id: 'progress',   icon: TrendingUp, label: 'Study Progress'},
]

function CapabilityStrip() {
  return (
    <div
      className="grid grid-cols-3 sm:grid-cols-6 gap-3"
      role="list"
      aria-label="StudyMate AI product capabilities"
    >
      {CAPABILITIES.map((cap) => (
        <div key={cap.id} role="listitem">
          <CapabilityItem icon={cap.icon} label={cap.label} />
        </div>
      ))}
    </div>
  )
}

export default CapabilityStrip
