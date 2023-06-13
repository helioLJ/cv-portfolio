export interface projectsDataProps {
  title: string
  description: string
  github: string
  live: string
  stacks: string[]
  coverUrl: string
  gallery: string[]
  priority: string
}

export const projectsData: projectsDataProps[] = [
  {
    title: 'Virtual Net',
    description:
      'Eu tive o privilégio de trabalhar como freelancer na criação de um site institucional para a Virtual Net, uma empresa provedora de internet. Meu objetivo principal era ajudar a empresa a ter uma presença digital mais robusta, fornecendo uma plataforma online profissional e informativa. Nesse projeto, fui responsável por desenvolver um site moderno e responsivo, adaptado às necessidades da Virtual Net e ao seu público-alvo. Colaborando estreitamente com a equipe da empresa, trabalhei para entender seus valores, serviços e objetivos para garantir que o site refletisse com precisão a identidade da marca. Por meio de uma abordagem centrada no usuário, projetei e implementei uma estrutura de navegação intuitiva que facilita a exploração dos serviços oferecidos pela Virtual Net Telecom. Além disso, criei uma seção de informações detalhadas sobre os planos de internet, velocidades, preços e outras especificações importantes',
    github: '',
    live: 'https://virtualnet.net.br/',
    stacks: [
      'ReactJS',
      'TypeScript',
      'TailwindCSS',
      'NextJS',
      'EmailJS',
      'ESLint',
      'Prettier',
    ],
    coverUrl: 'https://i.imgur.com/tJOAfek.png',
    gallery: [
      'https://i.imgur.com/ZAZrChr.png',
      'https://i.imgur.com/JqskxDc.png',
      'https://i.imgur.com/AFXgUIm.png',
      'https://i.imgur.com/WX0qNK8.png',
      'https://i.imgur.com/uqnedwf.png',
      'https://i.imgur.com/fXN3BeI.png',
    ],
    priority: 'high',
  },
]
