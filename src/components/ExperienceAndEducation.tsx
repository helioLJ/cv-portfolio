import Image from 'next/image'
import DevLaunchersLogo from '../assets/devlaunchers.jpg'
import Cruzeiro from '../assets/cruzeirodosul.png'
import Explorer from '../assets/explorer.png'
import Link from 'next/link'

export default function ExperienceAndEducation() {
  return (
    <div className="mt-20 flex flex-col justify-between gap-10 sm:flex-row">
      <div>
        <h2 className="text-2xl font-bold">Experiência profissional</h2>
        {/* Card de Experiência */}
        <div>
          <div className="mt-6 space-y-2">
            <span className="font-extralight text-zinc-500 dark:text-gray-200">
              Jun 2023 - Presente
            </span>
            <div className="mb-2 flex items-center gap-10">
              <h3 className="font-bold">Dev Launchers</h3>
              <Image className="w-12" src={DevLaunchersLogo} alt="Logo" />
            </div>
            <p className="mb-2">Austin, Texas</p>
            <p>
              Desenvolvimento e manutenção do site da ONG e implementação de
              novas funcionalidades utilizando tecnologias como TypeScript,
              React.js e Next.js. Além do uso da Metodologa Ágil.
            </p>
            <Link
              className="block text-blue-400 underline"
              target="_blank"
              href="https://devlaunchers.org/"
            >
              https://devlaunchers.org/
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-center text-2xl font-bold">Educação</h3>
        <div className="mt-6 flex max-w-[190px] flex-col items-center text-center">
          <Image src={Cruzeiro} alt="Logo Cruzeiro do Sul" />
          <h3 className="font-bold">Ciências da Computação</h3>
          <p>
            Cruzeiro do Sul,<br></br>2022 - Presente
          </p>
        </div>
        <div className="mt-6 flex max-w-[190px] flex-col items-center text-center">
          <Image src={Explorer} alt="Curso Explorer da Rocketseat" />
          <h3 className="font-bold">Curso Explorer</h3>
          <p>
            Rocketseat,<br></br>Jan 2023 - Jun 2023
          </p>
        </div>
      </div>
    </div>
  )
}
