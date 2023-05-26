import Link from 'next/link'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className="mt-14 flex flex-col">
      <h2 className="text-center text-2xl font-bold">Portfólio</h2>
      <div className="mt-7 flex justify-center gap-7">
        <button className="transition-colors hover:text-zinc-500">
          ReactJS
        </button>
        <button className="transition-colors hover:text-zinc-500">
          TypeScript
        </button>
        <button className="transition-colors hover:text-zinc-500">
          NextJS
        </button>
      </div>
      <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-2">
        <ProjectCard />
        <ProjectCard />
      </div>
      <Link
        href="/portfolio"
        className="mt-7 self-center rounded-full bg-zinc-400 px-24 py-3 transition-colors hover:bg-zinc-500"
      >
        Ver mais
      </Link>
    </div>
  )
}
