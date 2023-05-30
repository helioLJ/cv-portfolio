'use client'
import Link from 'next/link'
import ProjectCard from './ProjectCard'
import { projectsData, projectsDataProps } from '../lib/projects'
import { useEffect, useState } from 'react'

export default function Projects() {
  const [list, setList] = useState<projectsDataProps[]>([])
  const [filter, setFilter] = useState('default')

  useEffect(() => {
    if (filter === 'default') {
      const filteredProjects = projectsData.filter((project) =>
        project.priority.includes('high'),
      )
      setList(filteredProjects)
    } else {
      const filteredProjects = projectsData.filter((project) =>
        project.stacks.includes(filter),
      )
      setList(filteredProjects)
    }
  }, [filter])

  return (
    <div className="mt-14 flex flex-col">
      <h2 className="text-center text-2xl font-bold">Portfólio</h2>
      <div className="mt-7 flex justify-center gap-7">
        <button
          onClick={() => setFilter('TypeScript')}
          className={`${
            filter === 'TypeScript' && 'text-orange-500'
          } relative transition-opacity hover:opacity-60`}
        >
          TypeScript
          <small className="absolute -right-3 -top-3">
            {
              projectsData.filter((project) =>
                project.stacks.includes('TypeScript'),
              ).length
            }
          </small>
        </button>
        <button
          onClick={() => setFilter('TypeScript')}
          className={`${
            filter === 'JavaScript' && 'text-orange-500'
          } relative transition-opacity hover:opacity-60`}
        >
          JavaScript
          <small className="absolute -right-3 -top-3">
            {
              projectsData.filter((project) =>
                project.stacks.includes('JavaScript'),
              ).length
            }
          </small>
        </button>
        <button
          onClick={() => setFilter('ReactJS')}
          className={`${
            filter === 'ReactJS' && 'text-orange-500'
          } relative transition-opacity hover:opacity-60`}
        >
          ReactJS
          <small className="absolute -right-3 -top-3">
            {
              projectsData.filter((project) =>
                project.stacks.includes('ReactJS'),
              ).length
            }
          </small>
        </button>
        <button
          onClick={() => setFilter('NextJS')}
          className={`${
            filter === 'NextJS' && 'text-orange-500'
          } relative transition-opacity hover:opacity-60`}
        >
          NextJS
          <small className="absolute -right-3 -top-3">
            {
              projectsData.filter((project) =>
                project.stacks.includes('NextJS'),
              ).length
            }
          </small>
        </button>
        <button
          onClick={() => setFilter('TypeScript')}
          className={`${
            filter === 'Node.js' && 'text-orange-500'
          } relative transition-opacity hover:opacity-60`}
        >
          Node.js
          <small className="absolute -right-3 -top-3">
            {
              projectsData.filter((project) =>
                project.stacks.includes('Node.js'),
              ).length
            }
          </small>
        </button>
      </div>
      <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-2">
        {list &&
          list
            .slice(0, 4)
            .map((project, index) => (
              <ProjectCard key={index} title={project.title} />
            ))}
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
