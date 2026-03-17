import type { Metadata } from 'next'
import { Orbitron, Rajdhani, Share_Tech_Mono } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '700', '900'],
})
const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '600', '700'],
})
const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Midstacksec — Dev Portfolio',
  description: 'Desenvolvedora Full-Stack. Front-end, Java, Python e Web Security.',
  openGraph: {
    title: 'Midstacksec — Dev Portfolio',
    description: 'Desenvolvedora Full-Stack. Front-end, Java, Python e Web Security.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${orbitron.variable} ${rajdhani.variable} ${shareTechMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
