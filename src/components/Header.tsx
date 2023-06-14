'use client'
import Image from 'next/image'
import ProfilePicture from '../assets/avatar-profile.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function handleThemeSwitch() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <Image
          className="w-[100px] sm:w-[136px]"
          src={ProfilePicture}
          alt="Meu avatar cartoonizado"
        />
      </Link>
      <nav className="flex items-center gap-10">
        <button
          className={`${
            theme === 'light' ? 'bg-zinc-800' : 'bg-white'
          } relative h-8 w-16 rounded-full p-0.5 transition-colors`}
          onClick={handleThemeSwitch}
        >
          <div
            className={`${
              theme === 'light' ? 'translate-x-[1px] ' : 'translate-x-[31.5px]'
            } absolute bottom-0.5 z-10 h-7 w-7 rounded-full bg-orange-500 transition-transform`}
          ></div>
          <Moon className="absolute bottom-1 left-1 z-0 text-zinc-800" />
          <Sun className="absolute bottom-1 right-1 z-0 text-zinc-100" />
        </button>
        <Link
          href="/"
          className={`${
            pathname === '/' && 'text-orange-500'
          } font-bold transition-opacity hover:opacity-60`}
        >
          currículo
        </Link>
        {/* <Link
          href="/portfolio"
          className={`${
            pathname === '/portfolio' && 'text-orange-500'
          } font-bold transition-opacity hover:opacity-60`}
        >
          portfólio
        </Link> */}
      </nav>
    </header>
  )
}
