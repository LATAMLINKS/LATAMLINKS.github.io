import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from '@/components/Navbar/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LatamLinks',
  description: 'An new app for use',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-bs-theme="dark">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
