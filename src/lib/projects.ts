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
    title: 'Virtual Net Telecom',
    description: 'Site institucional para uma empresa provedora de internet.',
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
    title: 'NLW Spacetime Web',
    description:
      'Front-end usando ReactJS, NextJS, TypeScript e mais tecnologias. Criado durante o evento da Rocketseat NLW.',
    github: 'https://github.com/helioLJ/nlw-spacetime-web',
    live: '',
    stacks: [
      'ReactJS',
      'TypeScript',
      'TailwindCSS',
      'NextJS',
      'ESLint',
      'Prettier',
      'Axios',
      'JWT',
    ],
    coverUrl: 'https://i.imgur.com/3nByqxF.png',
    gallery: [
      'https://i.imgur.com/aS61oZp.png',
      'https://i.imgur.com/wZt0D47.png',
      'https://i.imgur.com/w3YGV5D.png',
      'https://i.imgur.com/EY8oiFw.png',
    ],
    priority: 'high',
  },
  {
    title: 'NLW Spacetime API',
    description:
      'Back-end usando Node.js, Fastify, Prisma, TypeScript e mais tecnologias. Criado durante o evento da Rocketseat NLW.',
    github: 'https://github.com/helioLJ/nlw-spacetime-api',
    live: '',
    stacks: [
      'Node.js',
      'Fastify',
      'Prisma',
      'TypeScript',
      'Zod',
      'ESLint',
      'OAuth',
      'JWT',
      'SQLite',
    ],
    coverUrl: 'https://i.imgur.com/I1IMcCF.png',
    gallery: [],
    priority: 'normal',
  },
  {
    title: 'NLW Spacetime Mobile',
    description:
      'Front-end Mobile usando React Native, Expo, TypeScript e mais tecnologias. Criado durante o evento da Rocketseat NLW.',
    github: 'https://github.com/helioLJ/nlw-spacetime-mobile',
    live: '',
    stacks: [
      'React Native',
      'TypeScript',
      'Expo',
      'Nativewind',
      'ESLint',
      'Prettier',
      'Axios',
      'Babel',
    ],
    coverUrl: 'https://i.imgur.com/4AuEHDo.png',
    gallery: [
      'https://i.imgur.com/RMJ3RpL.png',
      'https://i.imgur.com/vMCQwcA.png',
      'https://i.imgur.com/hkC4eba.png',
    ],
    priority: 'normal',
  },
  {
    title: 'Food Explorer V2',
    description:
      'É um aplicativo interativo de ponta a ponta com front-end e back-end. Para um restaurante fictício Food Explorer.',
    github: 'https://github.com/helioLJ/food-explorer-v2',
    live: 'https://food-explorer-v2.vercel.app/',
    stacks: ['ReactJS', 'JavaScript', 'Styled Components', 'Axios'],
    coverUrl:
      'https://github.com/helioLJ/food-explorer-v2/blob/main/src/assets/capa-food-explorer.png?raw=true',
    gallery: [
      'https://i.imgur.com/LjRWRe5.png',
      'https://i.imgur.com/IMahAmI.png',
      'https://i.imgur.com/53f9wOd.png',
      'https://i.imgur.com/xj4WqPu.png',
      'https://i.imgur.com/rJJgUu4.png',
      'https://i.imgur.com/knR8t6I.png',
      'https://i.imgur.com/blSAUfM.png',
      'https://i.imgur.com/IBJMxcn.png',
    ],
    priority: 'high',
  },
  {
    title: 'CodeLeap Network',
    description:
      'Teste técnico front-end de um CRUD usando Redux e localStorage.',
    github: 'https://github.com/helioLJ/codeleap-network',
    live: 'https://codeleap-network-43s5.vercel.app//',
    stacks: ['ReactJS', 'TypeScript', 'Redux', 'Redux Toolkit', 'CSS'],
    coverUrl: 'https://i.imgur.com/QWc06Fw.png',
    gallery: [
      'https://i.imgur.com/nuzDeos.png',
      'https://i.imgur.com/84EQMVt.png',
      'https://i.imgur.com/APdcOm7.png',
      'https://i.imgur.com/5igeGkt.png',
    ],
    priority: 'high',
  },
]
