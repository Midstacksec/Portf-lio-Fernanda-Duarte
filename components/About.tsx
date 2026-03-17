'use client'

import { useReveal } from '@/hooks/useReveal'
import Image from 'next/image'
import styles from './About.module.css'

const SKILLS = [
  'JavaScript / TS', 'React / Next.js',
  'HTML & CSS3', 'Java / Spring',
  'Python', 'REST APIs',
  'Git / GitHub', 'Web Security',
]

export default function About() {
  const { ref: r1, visible: v1 } = useReveal()
  const { ref: r2, visible: v2 } = useReveal()
  const { ref: r3, visible: v3 } = useReveal()

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>

        <div ref={r1} className={`${styles.text} reveal ${v1 ? 'visible' : ''}`}>
          <p className={styles.label}>// 01 — sobre</p>
          <h2 className={styles.title}>Quem sou eu</h2>
          <div className={styles.line} />
          <p>Sou <span>Fernanda Duarte</span>, desenvolvedora Full-Stack com foco em front-end e construção de aplicações web seguras.</p>
          <p>Desenvolvo interfaces com foco em <span>experiência do usuário</span> e aplicações com atenção à organização de código, performance e estabilidade.</p>
          <p>Trabalho com <span>JavaScript / TypeScript</span> no front, <span>Java</span> e <span>Python</span> no back, incluindo construção de APIs e integração entre sistemas.</p>
          <p>Busco evoluir constantemente equilibrando <span>usabilidade</span>, <span>código limpo</span> e práticas básicas de segurança.</p>
          <p>Atualmente desenvolvendo projeto
            s práticos com foco em <span>aplicações web</span> e integração de sistemas.</p>
        </div>

        <div ref={r2} className={`${styles.skills} reveal ${v2 ? 'visible' : ''}`}>
          {SKILLS.map(skill => (
            <div key={skill} className={styles.skillItem}>
              <span className={styles.dot} />
              {skill}
            </div>
          ))}
        </div>

        <div ref={r3} className={`${styles.photoWrap} reveal ${v3 ? 'visible' : ''}`}>
          <div className={styles.photoFrame}>
            <Image
              src="/assets/profile.jpg"
              alt="Fernanda Duarte"
              width={360}
              height={480}
              className={styles.photo}
              priority
            />
            <div className={styles.photoOverlay} />
            <span className={styles.badge}>MIDSTACKSEC</span>
          </div>
        </div>

      </div>
    </section>
  )
}
