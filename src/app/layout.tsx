import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Visconti Pizzeria Kebab - Authentic Italian Pizza & Halal Kebabs in Pavia',
  description: 'Authentic Italian Pizza & Halal Kebabs in Pavia. Fresh, traditional flavors with modern quality. Order online via JustEat & Deliveroo. Open daily 10:00-01:00.',
  authors: [{ name: 'Visconti Pizzeria Kebab' }],
  keywords: ['pizza', 'kebab', 'pavia', 'italian restaurant', 'halal food', 'delivery', 'justeat', 'deliveroo'],
  openGraph: {
    title: 'Visconti Pizzeria Kebab - Authentic Italian Pizza & Halal Kebabs',
    description: 'Fresh, authentic Italian pizza and halal kebabs in Pavia. Order online now!',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visconti Pizzeria Kebab',
    description: 'Authentic Italian Pizza & Halal Kebabs in Pavia',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}