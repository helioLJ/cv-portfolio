import Link from 'next/link'
import { projectsData, projectsDataProps } from '@/lib/projects'

interface ProjectCardProps {
  title: string
}

export default function ProjectCard({ title }: ProjectCardProps) {
  const project = projectsData.find(
    (project) => project.title === title,
  ) as projectsDataProps

  return (
    <Link
      className="relative transition-transform hover:scale-105"
      href={`/portfolio/${title}`}
    >
      <div
        style={{
          background: `url(${project.coverUrl}) no-repeat center / cover`,
        }}
        className="relative h-[250px] rounded-lg text-white"
      >
        <div className="before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:rounded-lg before:bg-card-gradient before:transition-colors before:content-['']"></div>
      </div>
      <div className="absolute left-0 top-0 z-10 flex h-full flex-col justify-center space-y-4 px-5 py-5 text-white">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p>{project.description.substring(0, 115).concat('...')}</p>
      </div>
    </Link>
  )
}
