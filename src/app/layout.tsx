import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../assets/scss/_custom_colors.scss'
import { Navbar } from '@/components/sections/Navbar/Navbar'
import { BootstrapClient } from '@/components/Bootstrap/BootstrapClient'
import { Footer } from '@/components/sections/Footer/Footer'
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
        <BootstrapClient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
