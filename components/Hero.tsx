'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const PHRASES = [
  'whoami → midstacksec',
  'skills --list → [JS, Java, Python]',
  'status → open to opportunities',
  'git log --oneline → building things...',
]

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let pi = 0, ci = 0, deleting = false
    let timer: ReturnType<typeof setTimeout>

    function type() {
      const el = typedRef.current
      if (!el) return
      const phrase = PHRASES[pi]
      if (!deleting) {
        el.textContent = phrase.substring(0, ci++)
        if (ci > phrase.length) { deleting = true; timer = setTimeout(type, 1800); return }
      } else {
        el.textContent = phrase.substring(0, ci--)
        if (ci < 0) { deleting = false; pi = (pi + 1) % PHRASES.length; ci = 0; timer = setTimeout(type, 400); return }
      }
      timer = setTimeout(type, deleting ? 40 : 60)
    }
    timer = setTimeout(type, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <p className={styles.tag}>// full-stack developer &amp; security enthusiast</p>

      <h1 className={styles.name}>
        <span className={styles.glitch} data-text="MIDSTACK">MIDSTACK</span>
        <br />
        <span className={styles.accent}>SEC</span>
      </h1>

      <p className={styles.sub}>
        Front-end · <span>Java</span> · Python · Web Security
      </p>

      <div className={styles.terminal}>
        <span className={styles.prompt}>~/midstacksec $</span>{' '}
        <span ref={typedRef} />
        <span className={styles.blink} />
      </div>

      <div className={styles.cta}>
        <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>VER PROJETOS</a>
        <a href="#contact" className={`${styles.btn} ${styles.btnOutline}`}>CONTATO</a>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        SCROLL
      </div>
    </section>
  )
}
