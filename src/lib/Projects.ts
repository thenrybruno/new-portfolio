interface ProjectData {
    id: number
    projectName: string
    description: string
    image: string
    url: string
}

export const ProjectData: ProjectData[] = [
    {
        id: 1,
        projectName: 'Trattoria Fedeli',
        description: 'Projeto desenvolvido como desafio de um Hackathon onde temos um menu de restaurante italiano.',
        image: '/projects/trattoria.png',
        url:'https://trattoria-fedeli-bruno.vercel.app/'
    },
    {
        id: 2,
        projectName: 'Wits!',
        description: 'Projeto desenvolvido como desafio de um Hackathon onde temos um game com perguntas de raciocínio lógico.',
        image: '/projects/wits.png',
        url:'https://wits-site-webapp.vercel.app/'
    },
    {
        id: 3,
        projectName: 'BCode',
        description: 'Primeiro portfólio desenvolvido no inicio de minha jornada como desenvolvedor front-end.',
        image: '/projects/portfolio.png',
        url:'https://thenrybruno.github.io/portifolio/'
    },
    {
        id: 4,
        projectName: 'SpaceX',
        description: 'Clone da famosa página da SpaceX, realizada para aprimorar e treinar minhas habilidades.',
        image: '/projects/spaceX.png',
        url:'https://thenrybruno.github.io/clone-spacex/'
    },
]