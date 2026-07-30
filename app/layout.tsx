import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat, Maitree } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const maitree = Maitree({ 
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Yocheved Shapiro, M.Ed. | Educational Consulting & Advocacy',
  description: 'Expert educational consulting and advocacy services for parents and educators. Specializing in neurodivergent learners with 20+ years of experience.',
  generator: 'v0.app',
  icons: {
    icon: '/logo-removebg.png',
    apple: '/logo-removebg.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${maitree.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
