import Image from 'next/image'
import ProfilePicture from '../assets/avatar-profile.png'
import Link from 'next/link'

export default function Header() {
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
          className="font-bold transition-colors hover:text-zinc-600"
        >
          currículo
        </Link>
        <Link
          href="/portfolio"
          className="font-bold transition-colors hover:text-zinc-600"
        >
          portfólio
        </Link>
      </nav>
    </header>
  )
}
