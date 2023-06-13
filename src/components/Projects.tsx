'use client'
// import Link from 'next/link'
import ProjectCard from './ProjectCard'
import { projectsData, projectsDataProps } from '../lib/projects'
import { useEffect, useState } from 'react'

export default function Projects() {
  const [list, setList] = useState<projectsDataProps[]>([])

  useEffect(() => {
    setList(projectsData)
  }, [])

  return (
    <div className="mt-14 flex flex-col">
      <h2 className="text-center text-2xl font-bold">Portfólio</h2>
      <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-2">
        {list &&
          list
            .slice(0, 4)
            .map((project, index) => (
              <ProjectCard key={index} title={project.title} />
            ))}
      </div>
      {/* <Link
        href="/portfolio"
        className="mt-7 self-center rounded-full bg-zinc-400 px-24 py-3 transition-colors hover:bg-zinc-500"
      >
        Ver mais
      </Link> */}
    </div>
  )
}
