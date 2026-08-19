/*
  NotesPreview.jsx — "Notes" tab content inside the product window.

  Shows a note viewer with tab switching between uploaded notes.
  The note content demonstrates what StudyMate AI generates from a PDF.

  Static demo — no real file parsing happens.
*/

const NOTES = [
  {
    id: 'bst',
    label: 'Binary Trees',
    title: '# Binary Search Trees',
    body: 'A BST is a tree where each node has at most two children, with a specific ordering property.',
    points: [
      'Left subtree values < root',
      'Right subtree values > root',
      'O(log n) average search time',
    ],
    source: '📎 Binary_Trees.pdf — 47 pages',
  },
  {
    id: 'sort',
    label: 'Sorting',
    title: '# Sorting Algorithms',
    body: 'Sorting algorithms arrange data in a specific order — crucial for efficient searching.',
    points: [
      'Merge sort: O(n log n)',
      'Quick sort: O(n log n) avg',
      'Bubble sort: O(n²)',
    ],
    source: '📎 Sorting_Notes.pdf — 23 pages',
  },
  {
    id: 'graph',
    label: 'Graph Theory',
    title: '# Graph Theory Basics',
    body: 'Graphs consist of vertices connected by edges, used to model real-world relationships.',
    points: [
      'Directed vs undirected',
      'BFS and DFS traversals',
      'Shortest path algorithms',
    ],
    source: '📎 Graphs.pdf — 31 pages',
  },
]

import { useState } from 'react'

function NotesPreview() {
  const [activeNote, setActiveNote] = useState('bst')
  const note = NOTES.find((n) => n.id === activeNote)

  return (
    <div
      id="panel-notes"
      role="tabpanel"
      aria-labelledby="tab-notes"
      className="p-5 lg:p-6 flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
        <p className="text-xs font-semibold text-text">My Notes</p>
        <span className="text-[10px] font-medium text-primary bg-primary-light px-2 py-0.5 rounded-full">
          3 notes
        </span>
      </div>

      {/* Note selector tabs */}
      <div className="flex gap-1.5 mb-4 overflow-x-auto pb-0.5">
        {NOTES.map((n) => (
          <button
            key={n.id}
            onClick={() => setActiveNote(n.id)}
            className={[
              'text-[10px] font-medium px-2.5 py-1 rounded-lg flex-shrink-0 transition-colors',
              activeNote === n.id
                ? 'bg-primary text-white'
                : 'bg-surface-alt text-text-muted hover:text-text border border-border',
            ].join(' ')}
          >
            {n.label}
          </button>
        ))}
      </div>

      {/* Note content */}
      <div className="flex-1 bg-surface-alt rounded-xl border border-border p-3 overflow-auto">
        <p className="text-xs font-bold text-text mb-1.5">{note.title}</p>
        <p className="text-[11px] text-text-muted leading-relaxed mb-3">{note.body}</p>
        <p className="text-[10px] font-semibold text-text mb-1.5">Key Properties:</p>
        <ul className="space-y-1 mb-3">
          {note.points.map((pt) => (
            <li key={pt} className="flex items-start gap-1.5 text-[10px] text-text-muted">
              <span className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
              {pt}
            </li>
          ))}
        </ul>
        <div className="pt-2 border-t border-border-subtle">
          <p className="text-[10px] text-text-subtle">{note.source}</p>
        </div>
      </div>
    </div>
  )
}

export default NotesPreview
