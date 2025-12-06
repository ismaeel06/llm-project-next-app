import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Local LLM Car Recommendation System',
  description: 'A sophisticated, conversational car recommendation platform powered by a local LLM (phi3:mini via Ollama). Find your perfect car with AI-powered recommendations.',
  keywords: ['car recommendation', 'AI', 'LLM', 'phi3', 'Ollama', 'local AI', 'car search'],
  authors: [{ name: 'AI-Powered Development Team' }],
  openGraph: {
    title: 'Local LLM Car Recommendation System',
    description: 'Find your perfect car with AI-powered recommendations',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
