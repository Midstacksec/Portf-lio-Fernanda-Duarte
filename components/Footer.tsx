import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} MIDSTACKSEC — BUILT WITH NEXT.JS. DEPLOYED WITH VERCEL.
    </footer>
  )
}
