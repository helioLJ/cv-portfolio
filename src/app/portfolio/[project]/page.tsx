import Image from 'next/image'
import Link from 'next/link'
import { Github, Globe } from 'lucide-react'
import { projectsData, projectsDataProps } from '@/lib/projects'
import Carousel from '@/components/Carousel'

interface PageProps {
  params: { project: string }
}

export default function Project({ params }: PageProps) {
  const decodedParam = decodeURIComponent(params.project)
  const project = projectsData.find(
    (project) => project.title === decodedParam,
  ) as projectsDataProps

  return (
    <>
      <div className="mt-7 flex flex-col items-center justify-between gap-16 md:flex-row">
        <div className="flex w-full flex-col gap-10">
          <h1 className="text-3xl font-bold sm:text-4xl">{project.title}</h1>
          <p>{project.description}</p>
          <div className="flex gap-4">
            {project.live !== '' && (
              <Link
                className="flex items-center gap-2 rounded bg-zinc-900 p-2 transition-all hover:-translate-y-0.5 hover:bg-zinc-700"
                href={project.live}
                target="_blank"
              >
                <p className="text-white">Veja ao vivo</p>
                <Globe className="text-zinc-50" />
              </Link>
            )}
            {project.github !== '' && (
              <Link
                className="flex items-center gap-2 rounded bg-zinc-900 p-2 transition-all hover:-translate-y-0.5 hover:bg-zinc-700"
                href={project.github}
                target="_blank"
              >
                <p className="text-white">GitHub Repo</p>
                <Github className="text-zinc-50" />
              </Link>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.stacks.map((stack, index) => (
              <span
                key={index}
                className="flex items-center rounded-full bg-zinc-900 px-2 font-bold text-zinc-50"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full">
          <Image
            className="w-full rounded-lg"
            src={project.coverUrl}
            width={10000}
            height={10000}
            alt={`Capa do projeto: ${project.title}`}
          />
        </div>
      </div>
      {project.gallery.length > 0 && (
        <div className="mt-16 space-y-4">
          <h1 className="text-center text-3xl font-bold sm:text-4xl">
            Demonstração
          </h1>
          <Carousel slides={project.gallery} />
        </div>
      )}
    </>
  )
}
