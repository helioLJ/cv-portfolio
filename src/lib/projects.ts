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
  {
    title: 'Portal Trilogia - Management System',
    description:
      "The inspiration for this personal project was my mom's business. She owns a Nurse Technical Course and needs to manage it using software that is not as efficient as Word, Excel, or even the old paper system. So, using my Fullstack Developer skills, I am developing an end-to-end CRUD to solve administrative problems and handle student data, such as names, documents, payments, grades, and more. This project is still under development, but you can see some gifs below: Obs: This repository is solely for the front-end, which consumes my own API created using Node.js.",
    github: 'https://github.com/helioLJ/portal-trilogia',
    live: '',
    stacks: [
      'ReactJS',
      'TypeScript',
      'TailwindCSS',
      'NextJS',
      'ESLint',
      'Prettier',
      'Axios',
      'Material UI',
      'Next Auth',
      'React Query',
      'Zod',
      'React Hook Form',
      'React Hot Toast',
      'Nookies',
    ],
    coverUrl: 'https://i.imgur.com/hiVgQt0.png',
    gallery: [
      'https://media3.giphy.com/media/YZXH8ZADixsqxhH8Mi/giphy.gif',
      'https://media.giphy.com/media/1d1eIoEEz1R4ZyHqj3/giphy.gif',
      'https://media.giphy.com/media/ofXxLbx6EADEz0qx6O/giphy.gif',
      'https://media.giphy.com/media/9Uh4jBPhq0Rka23m9H/giphy.gif',
    ],
    priority: 'high',
  },
  {
    title: 'Marvel Heroes (Fpass Challenge)',
    description:
      'Technical test carried out for the Frontend Developer vacancy at Fpass. This application consumes the Marvel API',
    github: 'https://github.com/helioLJ/marvel-fpass-challenge',
    live: 'https://marvel-fpass-challenge.vercel.app/',
    stacks: [
      'ReactJS',
      'TypeScript',
      'Styled Components',
      'Marvel API',
      'Vite',
      'ESLint',
      'Prettier',
    ],
    coverUrl: 'https://i.imgur.com/836P2Qf.png',
    gallery: [
      'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYms0NTZhNDltcHVsNWpnbjNlc21lbW9tdm8xbGIydXFqa25sbDBhciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VqBYuHQbzORNASOVOd/giphy.gif',
    ],
    priority: 'high',
  },
]
