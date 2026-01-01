import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header' // Import the new Header component

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Blog',
  description: 'A simple blog built with Next.js, MDX, and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Use the Header component here */}
        {children}
      </body>
    </html>
  )
}
