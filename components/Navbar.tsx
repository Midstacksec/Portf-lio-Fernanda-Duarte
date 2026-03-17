'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        MID<span>STACK</span>SEC
      </div>
      <ul className={styles.links}>
        <li><Link href="#about">_about</Link></li>
        <li><Link href="#projects">_projects</Link></li>
        <li><Link href="#contact">_contact</Link></li>
      </ul>
    </nav>
  )
}
