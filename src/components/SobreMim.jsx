const SobreMim = () => {
  const contatos = [
    {
      nome: 'E-mail',
      link: 'mailto:seuemail@exemplo.com',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      texto: 'seuemail@exemplo.com',
    },
    {
      nome: 'LinkedIn',
      link: 'https://linkedin.com/in/seuusuario',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      texto: 'linkedin.com/in/seuusuario',
    },
    {
      nome: 'GitHub',
      link: 'https://github.com/seuusuario',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      texto: 'github.com/seuusuario',
    },
  ];

  return (
    <section id="sobre" className="section-container pt-32">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-primary-300">
              Disponível para oportunidades
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Olá, eu sou{' '}
            <span className="gradient-text">Victor Moura</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark-muted">
              Desenvolvedor Front-End Júnior
            </span>
          </h1>

          <div className="space-y-4 text-dark-muted text-base sm:text-lg leading-relaxed mb-8">
            <p>
              So  u desenvolvedor Front-End focado em criar{' '}
              <span className="text-white font-medium">experiências web envolventes</span> e{' '}
              <span className="text-white font-medium">interfaces de usuário intuitivas e acessíveis</span>.
            </p>
            <p>
              Sou apaixonado por tecnologia e mantenho rotina de estudos contínuos para me atualizar com as últimas tendências e boas práticas do ecossistema Front-End.
            </p>
            <p>
              Tenho experiência prática com{' '}
              <strong className="text-primary-300 font-semibold">
                HTML5, CSS3, JavaScript ES6+, React, TailwindCSS, TanStack Query, Axios, consumo de APIs REST e Git/GitHub
              </strong>
              . Também possuo conhecimento básico de Back-End com{' '}
              <strong className="text-primary-300 font-semibold">
                Express/Node.js e PostgreSQL
              </strong>
              , o que me permite entender e colaborar em todo o ciclo de desenvolvimento de uma aplicação.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary-400">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Entre em contato
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {contatos.map((contato) => (
                <a
                  key={contato.nome}
                  href={contato.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl bg-dark-card border border-dark-border hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 text-primary-400 flex items-center justify-center group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    {contato.icone}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {contato.nome}
                    </p>
                    <p className="text-xs text-dark-muted truncate group-hover:text-primary-300 transition-colors">
                      {contato.texto}
                    </p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-dark-muted ml-auto opacity-0 group-hover:opacity-100 group-hover:text-primary-400 transition-all duration-300">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#projetos" className="btn-primary">
              Ver Projetos
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              Meu GitHub
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-primary-700/30 rounded-3xl blur-3xl animate-pulse" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 border border-primary-500/30 p-1">
              <div className="w-full h-full rounded-[1.4rem] bg-dark-card border border-dark-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center text-5xl sm:text-6xl font-bold text-white shadow-lg animate-float">
                    VM
                  </div>
                  <p className="text-sm text-dark-muted font-medium">
                    Front-End Developer
                  </p>
                  <div className="flex justify-center gap-1 mt-3">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    <span className="w-2 h-2 rounded-full bg-primary-600" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-dark-card border border-dark-border shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <circle cx="12" cy="12" r="2" />
                <path d="M12 2a10 10 0 1 0 10 10" />
                <path d="M12 2a10 10 0 1 1 10 10" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-dark-card border border-dark-border shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#38BDF8" className="w-8 h-8">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
