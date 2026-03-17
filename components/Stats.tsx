'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const STATS = [
  { label: 'PROJETOS',    target: 12 },
  { label: 'STACKS',      target: 3  },
  { label: '% COMMIT',    target: 100 },
  { label: 'BUGS ACEITOS',target: null },
]

function Counter({ target }: { target: number | null }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const ran = useRef(false)

  useEffect(() => {
    if (target === null) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !ran.current) {
        ran.current = true
        let c = 0
        const step = Math.ceil(target / 40)
        const t = setInterval(() => {
          c = Math.min(c + step, target)
          setCount(c)
          if (c >= target) clearInterval(t)
        }, 40)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <div ref={ref} className={styles.num}>
      {target === null ? '∞' : count}
    </div>
  )
}

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {STATS.map(s => (
          <div key={s.label} className={styles.stat}>
            <Counter target={s.target} />
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
