import Image from 'next/image'
import VirtualNetLogo from '../assets/virtual-net-logo-icon.png'
import Cruzeiro from '../assets/cruzeirodosul.png'
import Explorer from '../assets/explorer.png'

export default function ExperienceAndEducation() {
  return (
    <div className="mt-20 flex flex-col justify-between gap-10 sm:flex-row">
      <div>
        <h2 className="text-2xl font-bold">Experiência profissional</h2>
        {/* Card de Experiência */}
        <div>
          <div className="mt-6">
            <span className="font-extralight text-zinc-500">Maio 2023</span>
            <div className="mb-2 flex items-center gap-10">
              <h3 className="font-bold">Virtual Net - Freelance</h3>
              <Image className="w-12" src={VirtualNetLogo} alt="Logo" />
            </div>
            <p className="mb-2">São Francisco, Pará</p>
            <p>Site institucional para uma empresa provedora de internet.</p>
            <a className="text-blue-400 underline" href="#">
              www.virtualnet.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-center text-2xl font-bold">Educação</h3>
        <div className="mt-6 flex max-w-[190px] flex-col items-center text-center">
          <Image src={Cruzeiro} alt="Logo Cruzeiro do Sul" />
          <h3 className="font-bold">Ciências da Computação</h3>
          <p>
            Cruzeiro do Sul,<br></br>2022 - 2025
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
