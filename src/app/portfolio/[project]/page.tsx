import Image from 'next/image'
import CoverExample from '../../../assets/spacetimeweb.png'
import Link from 'next/link'
import { Github, Globe } from 'lucide-react'

interface PageProps {
  params: { project: string }
}

export default function Project({ params }: PageProps) {
  return (
    <div className="mt-7 flex flex-col items-center justify-between gap-16 sm:flex-row">
      <div className="flex w-full flex-col gap-10 sm:w-1/2">
        <h1 className="text-3xl font-bold sm:text-4xl">Spacetime Web</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          eligendi iure provident ea aut similique earum illum ipsa omnis
          distinctio totam saepe ipsam consequatur quas magnam, voluptates
          quaerat assumenda. Nobis!
        </p>
        <div className="flex gap-4">
          <Link
            className="rounded bg-zinc-900 p-1 transition-all hover:-translate-y-0.5 hover:bg-zinc-700"
            href="https://www.linkedin.com/in/heliolj/"
            target="_blank"
          >
            <Globe className="text-zinc-50" />
          </Link>
          <Link
            className="rounded bg-zinc-900 p-1 transition-all hover:-translate-y-0.5 hover:bg-zinc-700"
            href="https://github.com/helioLJ"
            target="_blank"
          >
            <Github className="text-zinc-50" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="flex items-center rounded-full bg-zinc-900 px-2 font-bold text-zinc-50">
            Reactjs
          </span>
          <span className="flex items-center rounded-full bg-zinc-900 px-2 font-bold text-zinc-50">
            Reactjs
          </span>
          <span className="flex items-center rounded-full bg-zinc-900 px-2 font-bold text-zinc-50">
            Reactjs
          </span>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <Image
          className="aspect-video w-full rounded-lg object-cover"
          src={CoverExample}
          alt=""
        />
      </div>
    </div>
  )
}
