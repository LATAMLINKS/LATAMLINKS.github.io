import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from '@/components/Navbar/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LatamLinks',
  description: 'Simplifying your path to success in Mexico and Latin America',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-bs-theme="white">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
