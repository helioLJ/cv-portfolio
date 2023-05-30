import { ReactNode } from 'react'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Hélio Portfólio',
  description: 'Meu portfólio pessoal estilo Curriculum Vitae.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} overflow-x-hidden bg-zinc-100 px-4 py-11 font-sans text-zinc-900 sm:px-12 lg:px-36`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
