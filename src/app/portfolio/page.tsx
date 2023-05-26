import ProjectCard from '@/components/ProjectCard'

export default function Portfolio() {
  return (
    <>
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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  )
}
