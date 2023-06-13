'use client'
import Image from 'next/image'
import ProfilePicture from '../assets/avatar-profile.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between">
      <Image
        className="w-[100px] sm:w-[136px]"
        src={ProfilePicture}
        alt="Meu avatar cartoonizado"
      />
      <nav className="flex gap-10">
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
