'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './Projects.module.css'

interface Project {
  id: string
  name: string
  desc: string
  tags: string[]
  github: string
  demo?: string
}

const PROJECTS: Project[] = [
  {
    id: '001',
    name: 'Electron Password Generator',
    desc: 'App desktop para gerar senhas seguras sem depender de sites de terceiros. Interface com glassmorphism, cópia com um clique e feedback visual.',
    tags: ['Electron', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Midstacksec/electron-password-generator',
  },
  {
    id: '002',
    name: 'Obsidian Planner',
    desc: 'Template e sistema de planejamento pessoal construído para o Obsidian. Organização de tarefas, metas e rotinas de forma prática.',
    tags: ['Obsidian', 'Markdown', 'PKM'],
    github: 'https://github.com/Midstacksec/Obsidian-Planner',
  },
  {
    id: '003',
    name: 'OSINT AI Investigator',
    desc: 'Ferramenta que une técnicas de OSINT com IA para coletar e analisar informações públicas. Backend em Python, frontend web e integração com modelos de linguagem.',
    tags: ['Python', 'JavaScript', 'CSS', 'IA', 'OSINT'],
    github: 'https://github.com/Midstacksec/Osint-AI-Investigator',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className={`${styles.card} reveal ${visible ? 'visible' : ''}`}>
      <p className={styles.num}>// {project.id}</p>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.desc}>{project.desc}</p>
      <div className={styles.tags}>
        {project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <div className={styles.links}>
        <a href={project.github} target="_blank" rel="noreferrer">→ GitHub</a>
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">→ Demo</a>}
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref: r1, visible: v1 } = useReveal()
  const { ref: r2, visible: v2 } = useReveal()

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <p ref={r1} className={`${styles.label} reveal ${v1 ? 'visible' : ''}`}>// 02 — projetos</p>
        <h2 ref={r2} className={`${styles.title} reveal ${v2 ? 'visible' : ''}`}>O que eu construí</h2>
        <div className={styles.line} />
        <div className={styles.grid}>
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
