'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
        <p className="text-2xl text-gray-200 mb-8">Page not found</p>
        <Link href="/" className="inline-block px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  )
}
