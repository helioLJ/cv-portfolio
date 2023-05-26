import Image from 'next/image'
import CoverExample from '../assets/spacetimeweb.png'
import Link from 'next/link'

export default function ProjectCard() {
  return (
    <Link href="/portfolio/spacetimeweb">
      <div className="relative h-[220px] overflow-hidden rounded-lg bg-zinc-500 transition-transform hover:-translate-y-2">
        <div className="absolute z-20 flex h-full flex-col justify-center gap-10 p-4">
          <h3 className="text-2xl font-bold text-zinc-50">Projeto</h3>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center rounded-full bg-zinc-50 px-2 font-bold">
              Reactjs
            </span>
            <span className="flex items-center rounded-full bg-zinc-50 px-2 font-bold">
              Reactjs
            </span>
            <span className="flex items-center rounded-full bg-zinc-50 px-2 font-bold">
              Reactjs
            </span>
          </div>
        </div>
        <div className="absolute z-10 h-full w-full bg-zinc-900 opacity-60"></div>
        <Image
          className="absolute aspect-video w-full rounded-lg object-cover"
          src={CoverExample}
          alt=""
        />
      </div>
    </Link>
  )
}
