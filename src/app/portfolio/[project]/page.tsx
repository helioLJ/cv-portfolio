import Image from 'next/image'
import Link from 'next/link'
import { Github, Globe } from 'lucide-react'
import { projectsData, projectsDataProps } from '@/lib/projects'
// import Carousel from '@/components/Carousel'

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
      <div className="mt-7 flex flex-col items-center justify-between gap-16">
        <div className="flex w-full flex-col gap-10">
          <h1 className="text-3xl font-bold sm:text-4xl">{project.title}</h1>
          <p>{project.description}</p>
          <div className="flex gap-4">
            {project.live !== '' && (
              <Link
                className="rounded bg-zinc-900 p-1 transition-all hover:-translate-y-0.5 hover:bg-zinc-700"
                href={project.live}
                target="_blank"
              >
                <Globe className="text-zinc-50" />
              </Link>
            )}
            {project.github !== '' && (
              <Link
                className="rounded bg-zinc-900 p-1 transition-all hover:-translate-y-0.5 hover:bg-zinc-700"
                href={project.github}
                target="_blank"
              >
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
      {/* {project.gallery.length > 0 && <Carousel slides={project.gallery} />} */}
    </>
  )
}
