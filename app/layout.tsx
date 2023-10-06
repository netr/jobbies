import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Jobbies',
    description: 'Job search made easy',
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="flex min-h-screen flex-col justify-between mx-auto max-w-7xl  px-2 sm:px-4 lg:px-8 py-2">
                    {children}
                </main>
            </body>
        </html>
    )
}
