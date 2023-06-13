'use client'
import ProjectCard from '@/components/ProjectCard'
import { projectsData, projectsDataProps } from '../../lib/projects'
import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [list, setList] = useState<projectsDataProps[]>([])

  useEffect(() => {
    setList(projectsData)
  }, [])

  return (
    <div className="mt-10 flex flex-col">
      <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-2">
        {list &&
          list.map((project, index) => (
            <ProjectCard key={index} title={project.title} />
          ))}
      </div>
    </div>
  )
}
