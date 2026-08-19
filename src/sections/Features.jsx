/*
  Features.jsx — Core Features section.

  Presents six StudyMate AI features in a responsive grid.
  Each card uses FeatureCard with a dedicated visual demo from FeatureVisual.

  StudyMate AI product journey is represented in card order:
    Smart Notes   → UPLOAD
    AI Summaries  → UNDERSTAND
    AI Study Tutor → UNDERSTAND
    AI Flashcards → PRACTICE
    AI Quiz       → PRACTICE
    Study Progress → IMPROVE
  
  (Cards are reordered below to flow naturally on the page.)
*/
import {
  Bot,
  FileText,
  AlignLeft,
  Brain,
  Layers,
  TrendingUp,
} from 'lucide-react'
import SectionLabel from '@/components/common/SectionLabel'
import FeatureCard from '@/components/feature/FeatureCard'
import {
  TutorVisual,
  NotesVisual,
  SummaryVisual,
  QuizVisual,
  FlashcardVisual,
  ProgressVisual,
} from '@/components/feature/FeatureVisual'

/* Feature data — keeps the JSX below clean and easy to update. */
const FEATURES = [
  {
    id: 'tutor',
    icon: Bot,
    name: 'AI Study Tutor',
    description:
      "Get clear, personalized explanations whenever you're stuck — like having a patient tutor available 24/7.",
    Visual: TutorVisual,
  },
  {
    id: 'notes',
    icon: FileText,
    name: 'Smart Notes',
    description:
      'Upload your PDFs and study material and turn them into organized, useful knowledge.',
    Visual: NotesVisual,
  },
  {
    id: 'summary',
    icon: AlignLeft,
    name: 'AI Summaries',
    description:
      'Turn lengthy study material into concise summaries and key concepts in seconds.',
    Visual: SummaryVisual,
  },
  {
    id: 'quiz',
    icon: Brain,
    name: 'AI Quiz Generator',
    description:
      'Generate practice quizzes from your own study material and discover what you really know.',
    Visual: QuizVisual,
  },
  {
    id: 'flashcards',
    icon: Layers,
    name: 'AI Flashcards',
    description:
      'Turn important concepts into quick, reusable flashcards for faster revision.',
    Visual: FlashcardVisual,
  },
  {
    id: 'progress',
    icon: TrendingUp,
    name: 'Study Progress',
    description:
      'See your progress, identify weak areas, and know exactly what to revise next.',
    Visual: ProgressVisual,
  },
]

function Features() {
  return (
    <section id="features" aria-label="Core features" className="section">
      <div className="container">

        {/* ── Section header ── */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <SectionLabel className="mb-4">Features</SectionLabel>
          <h2 className="text-display text-text mt-2 mb-4">
            Meet your new study partner.
          </h2>
          <p className="text-body-lg max-w-xl mx-auto">
            From your first question to your final revision, StudyMate AI helps
            you learn at every step.
          </p>
        </div>

        {/* ── Feature grid ── */}
        {/* 1 column → 2 columns (sm) → 3 columns (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features
