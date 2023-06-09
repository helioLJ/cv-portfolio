import { Linkedin, Github, Download } from 'lucide-react'
import Link from 'next/link'
import CopyButton from './CopyButton'

export default function AboutMe() {
  return (
    <div className="mt-11 flex flex-col justify-between gap-16 sm:flex-row">
      {/* Left */}
      <div>
        <h1 className="flex-1 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
          Hélio Lúcio,<br></br>
          Desenvolvedor Fullstack
        </h1>
        <div className="mt-6 flex items-center gap-2">
          <div className="relative h-3 w-7 cursor-pointer rounded-full bg-orange-200">
            <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white drop-shadow-md"></div>
          </div>
          Disponível
        </div>
        <p className="mt-2">
          Dedico meu tempo livre a projetos pessoais que geram valor, usando
          tecnologias no Front como ReactJS, Next.js, TypeScript e TailwindCSS.
          Além de também ter experiência no Backend com Node.js, Express,
          Fastify e Prisma. Atualmente, estagio como desenvolvedor frontend na
          Devlaunchers, buscando adquirir experiência para entrar no mercado de
          trabalho. Já realizei trabalhos como freelancer, desenvolvendo
          soluções personalizadas para atender às necessidades dos clientes. Meu
          objetivo é crescer profissionalmente como desenvolvedor, contribuindo
          com meu conhecimento e habilidades em um ambiente desafiador e
          inovador. Entre em contato comigo para oportunidades de colaboração e
          networking:
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-3">
        <CopyButton content="helio.lucio.jr@hotmail.com" />
        <CopyButton content="+55 (91) 98445-9458" />
        <p className="text-right">Igarapé-Açu, Pará, Brasil</p>
        <div className="flex justify-end gap-2">
          <Link
            className="rounded bg-zinc-900 p-1 transition-opacity hover:opacity-40"
            href="https://www.linkedin.com/in/heliolj/"
            target="_blank"
          >
            <Linkedin className="text-zinc-50" />
          </Link>
          <Link
            className="rounded bg-zinc-900 p-1 transition-opacity hover:opacity-40"
            href="https://github.com/helioLJ"
            target="_blank"
          >
            <Github className="text-zinc-50" />
          </Link>
        </div>
        <Link
          href="https://drive.google.com/file/d/1wyVUyO-AkGWXfLXYDW_fnMgW4SNtkwTa/view?usp=sharing"
          target="_blank"
          className="flex justify-end gap-2.5 text-left font-bold transition-opacity hover:opacity-40"
        >
          Curriculum Vitae
          <Download className="stroke-1 text-zinc-900 transition-transform dark:text-gray-200" />
        </Link>
      </div>
    </div>
  )
}
