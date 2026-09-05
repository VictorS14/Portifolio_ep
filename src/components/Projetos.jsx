import manage_landing_page from '../assets/manage_landing_page.jpg'

const Projetos = () => {
  const projetos = [
    {
      id: 1,
      titulo: 'Projeto 1 - iGlic',
      descricao:
        'iGlic é uma aplicação web de gerenciamento de glicose para ajudar diábeticos a controlar suas glicemias.',
      // imagem:
      deploy: 'https://i-glic.vercel.app/',
      github: 'https://github.com/VictorS14/iGlic.git',
      techs: ['React', 'JavaScript', 'TailwindCSS', 'Vite', 'TanStack Query', 'Express', 'Axios', 'APIs REST', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 2,
      titulo: 'Projeto 2 - manage-landing-page',
      descricao:
        'Esse é um landing page básico, criado com o intuito de praticar os conhecimentos em React e TailwindCSS e responsividade',
      imagem: manage_landing_page,
      deploy: 'https://manage-landing-page-7zmo.vercel.app/',
      github: 'https://github.com/VictorS14/manage-landing-page.git',
      techs: ['React', 'JavaScript', 'TailwindCSS'],
    },
    {
      id: 3,
      titulo: 'Projeto 3 - Simulador de Investimentos',
      descricao:
        'Uma aplicação para simulação de investimentos em ativos Brasileiro como Tesouro Direto, Tesouro Selic, LCI/LCA, CDB',
      // imagem:
      deploy: 'https://simulador-de-investimentos-jo1n-cs18x3od8.vercel.app/',
      github: 'https://github.com/VictorS14/simulador_de_investimentos.git',
      techs: ['React', 'JavaScript', 'TailwindCSS'],
    },
  ];

  const VercelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 22.525H0l12-21.05 12 21.05z"/>
    </svg>
  );

  const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );

  const getTechColor = (tech) => {
    const colors = {
      React: '#61DAFB',
      TypeScript: '#3178C6',
      TailwindCSS: '#06B6D4',
      Vite: '#646CFF',
      'TanStack Query': '#FF4154',
      Axios: '#5A29E4',
      'APIs REST': '#0096D6',
      'Node.js': '#339933',
      Express: '#000000',
      PostgreSQL: '#4169E1',
      JavaScript: '#F7DF1E',
      HTML5: '#E34F26',
      CSS3: '#1572B6',
      'Git & GitHub': '#F05032',
    };
    return colors[tech] || '#8b5cf6';
  };

  return (
    <section id="projetos" className="section-container">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary-400">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <span className="text-sm font-medium text-primary-300">Trabalhos Recentes</span>
        </div>
        <h2 className="section-title">
          Meus <span className="gradient-text">Projetos</span>
        </h2>
        <p className="section-subtitle">
          Uma seleção de projetos que desenvolvi para aplicar meus conhecimentos e construir soluções práticas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projetos.map((projeto) => (
          <article
            key={projeto.id}
            className="group card card-hover overflow-hidden p-0 flex flex-col"
          >
            <div className="relative overflow-hidden aspect-video border-b border-dark-border">
              <img
                src={projeto.imagem}
                alt={`Screenshot do ${projeto.titulo}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />

              <div className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                <a
                  href={projeto.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                  aria-label={`Acessar deploy do ${projeto.titulo}`}
                >
                  <VercelIcon />
                  Ver Deploy
                </a>
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                  aria-label={`Acessar repositório do ${projeto.titulo}`}
                >
                  <GithubIcon />
                  Código
                </a>
              </div>
            </div>

            <div className="flex-1 p-5 sm:p-6 flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-200">
                {projeto.titulo}
              </h3>

              <p className="text-sm sm:text-base text-dark-muted leading-relaxed mb-4 flex-1">
                {projeto.descricao}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {projeto.techs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border"
                    style={{
                      backgroundColor: `${getTechColor(tech)}12`,
                      color: getTechColor(tech),
                      borderColor: `${getTechColor(tech)}30`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                <a
                  href={projeto.deploy}
                  target="_blank"React
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-dark-muted hover:text-white transition-colors duration-200 group/link"
                  aria-label={`Deploy do ${projeto.titulo}`}
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 border border-dark-border flex items-center justify-center group-hover/link:bg-primary-500/10 group-hover/link:border-primary-500/30 transition-all duration-200">
                    <VercelIcon />
                  </span>
                  <span className="hidden sm:inline">Deploy</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200 sm:hidden">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>

                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-dark-muted hover:text-white transition-colors duration-200 group/link"
                  aria-label={`Repositório do ${projeto.titulo}`}
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 border border-dark-border flex items-center justify-center group-hover/link:bg-primary-500/10 group-hover/link:border-primary-500/30 transition-all duration-200">
                    <GithubIcon />
                  </span>
                  <span className="hidden sm:inline">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200 sm:hidden">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <GithubIcon />
          Ver mais projetos no GitHub
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Projetos;
