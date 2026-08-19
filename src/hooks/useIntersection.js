/*
  useIntersection.js — Custom hook for scroll-based reveal animations.

  Returns [ref, isVisible]:
  - ref:       attach to the element you want to observe
  - isVisible: becomes true once the element scrolls into the viewport

  Reduced-motion support:
  If the user has enabled "prefers-reduced-motion" in their OS settings,
  isVisible initialises as true immediately — no flash, no delay,
  no animation plays at all. This is the correct accessible behaviour.

  The observer disconnects after first trigger so the animation plays
  only once (like a reveal, not a toggle).
*/
import { useEffect, useRef, useState } from 'react'

export function useIntersection({ threshold = 0.15, rootMargin = '0px 0px -32px 0px' } = {}) {
  // Read media query synchronously so the initial state is already correct.
  // Avoids a one-frame flash of invisible content on reduced-motion devices.
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return // already visible — nothing to do

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // reveal once and stop observing
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [prefersReducedMotion, threshold, rootMargin])

  return [ref, isVisible]
}
