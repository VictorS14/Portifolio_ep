const Habilidades = () => {
  const habilidades = [
    {
      nome: 'HTML5',
      descricao: 'Estruturação semântica e acessível de páginas web',
      cor: '#E34F26',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
    },
    {
      nome: 'CSS3',
      descricao: 'Estilização avançada: Flexbox, Grid, animações e responsividade',
      cor: '#1572B6',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
    },
    {
      nome: 'JavaScript',
      descricao: 'Domínio de JS moderno: async/await, destructuring, ES6 modules, arrow functions e manipulação de DOM',
      cor: '#F7DF1E',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
    },
    {
      nome: 'React',
      descricao: 'Criação de componentes reutilizáveis, hooks (useState, useEffect, custom hooks) e gerenciamento de estado',
      cor: '#61DAFB',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
        </svg>
      ),
    },
    {
      nome: 'TailwindCSS',
      descricao: 'Estilização utility-first para desenvolvimento ágil e interfaces consistentes',
      cor: '#06B6D4',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      ),
    },
    {
      nome: 'TanStack Query',
      descricao: 'Gerenciamento eficiente de estado de servidor, cache e sincronização de dados de API',
      cor: '#FF4154',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
          <circle cx="18.7" cy="8" r="1.3" fill="currentColor"/>
          <circle cx="13.6" cy="13.2" r="1.3" fill="currentColor"/>
          <circle cx="10.8" cy="10.5" r="1.3" fill="currentColor"/>
          <circle cx="7" cy="14.3" r="1.3" fill="currentColor"/>
        </svg>
      ),
    },
    {
      nome: 'Axios',
      descricao: 'Consumo de APIs REST com tratamento de requisições e respostas',
      cor: '#5A29E4',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      nome: 'APIs REST',
      descricao: 'Integração com endpoints, tratamento de erros e manipulação de dados JSON',
      cor: '#0096D6',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
    },
    {
      nome: 'Git & GitHub',
      descricao: 'Controle de versão, fluxos de trabalho com branches, pull requests e colaboração em repositórios',
      cor: '#F05032',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <circle cx="18" cy="18" r="3"/>
          <circle cx="6" cy="6" r="3"/>
          <path d="M6 21V9a9 9 0 0 0 9 9"/>
        </svg>
      ),
    },
    {
      nome: 'Node.js + Express',
      descricao: 'Criação de APIs simples e entendimento do ciclo back-end (básico)',
      cor: '#339933',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993c-1.745,0-2.604-0.95-2.604-2.743V7.786c0-0.143,0.115-0.255,0.256-0.255h1.116c0.14,0,0.255,0.112,0.255,0.255v3.411c0,0.56,0.252,0.855,0.898,0.542l0.065-0.031c0.094-0.044,0.205-0.034,0.288,0.028c0.773,0.579,1.309,0.981,1.309,1.799v0.231C20.677,13.256,19.97,13.993,19.099,13.993z"/>
        </svg>
      ),
    },
    {
      nome: 'PostgreSQL',
      descricao: 'Modelagem e consultas básicas em banco de dados relacional (básico)',
      cor: '#4169E1',
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.8369-.0065-.0126-.0132-.0255-.0199-.0383-.0288-.0563-.0629-.1087-.0987-.1624-.0317-.0478-.0633-.0967-.0998-.1432-.2029-.2578-.5055-.6431-.9718-.6431h-.0073c-.1666 0-.3369.0486-.5137.1415-.2853.1495-.5353.3869-.7253.6939-.2854.4606-.4653 1.0313-.5684 1.6687-.0762.4708-.1185.9809-.1547 1.4996-.0349.502-.067 1.0145-.1384 1.5143-.0744.5195-.1916 1.0194-.3886 1.4986-.2034.4915-.4956.9562-.9268 1.339-.3249.2883-.7188.5123-1.2109.6448-1.0147.2741-1.7082.0633-1.8915-.0081-.7668-1.177-1.3321-2.6021-1.6557-4.0072-.1648-.7202-.249-1.4619-.2811-2.1795-.0165-.3698-.0196-.7389-.0409-1.1042a8.899 8.899 0 0 0-.0737-.7737 2.9894 2.9894 0 0 0-.0849-.4665c-.0417-.1789-.0932-.3576-.1615-.5279-.0689-.1732-.1539-.338-.2593-.4883-.1048-.1492-.2291-.285-.3732-.4029-.1518-.1247-.325-.2309-.521-.3129-.1975-.0828-.4187-.1404-.664-.1675-.2479-.0273-.5209-.0263-.8188-.0029-.5906.0463-1.2302.1855-1.8618.4127-.6337.2282-1.2473.5406-1.8086.9293-.564.3912-1.0661.8585-1.4861 1.393-.8487 1.0823-1.4501 2.4235-1.7346 3.863-.0719.3648-.1255.742-.158 1.1239-.0325.3811-.045.7642-.0417 1.1429.0029.3266.0169.6532.0421.9767.0508.6528.1532 1.2965.3229 1.9208.259.9528.6399 1.8456 1.1634 2.6519.5208.8043 1.1844 1.5098 1.9824 2.0919.8029.5885 1.7355 1.0466 2.7611 1.3595.5189.158 1.0549.2756 1.6006.3553.2736.04.5499.0669.8261.0839.2757.0169.5517.0184.8256.005.2733-.0133.5449-.0369.8123-.0694.5391-.0654 1.0709-.1649 1.5889-.3017 1.0393-.274 2.0191-.6819 2.8994-1.2138.0027-.0017.0052-.0038.0078-.0058.8887-.5436 1.6551-1.2337 2.2723-2.0466.0241-.0317.0476-.0638.0706-.0961.1145-.1612.2236-.3273.3255-.4995.0579-.0978.1135-.1972.1671-.2983a10.5637 10.5637 0 0 0 .4035-.8672c.0622-.1449.1213-.2922.1775-.4418.0279-.0747.0552-.1499.0818-.2257.4574-1.3075.3655-2.3561.2699-2.7779z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="habilidades" className="section-container">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary-400">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className="text-sm font-medium text-primary-300">Stack Tecnológica</span>
        </div>
        <h2 className="section-title">
          Minhas <span className="gradient-text">Habilidades</span>
        </h2>
        <p className="section-subtitle">
          Ferramentas e tecnologias que utilizo no dia a dia para construir interfaces modernas, acessíveis e de alta performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {habilidades.map((habilidade, index) => (
          <div
            key={habilidade.nome}
            className="card card-hover group relative overflow-hidden"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
              style={{ background: `radial-gradient(circle at center, ${habilidade.cor}15, transparent 70%)` }}
            />

            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
                style={{
                  backgroundColor: `${habilidade.cor}15`,
                  color: habilidade.cor,
                }}
              >
                {habilidade.icone}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-primary-300 transition-colors duration-200">
                  {habilidade.nome}
                </h3>
                <p className="text-sm text-dark-muted leading-relaxed">
                  {habilidade.descricao}
                </p>
              </div>
            </div>

            <div
              className="absolute top-0 right-0 w-20 h-20 opacity-5 transition-transform duration-500 group-hover:scale-150 group-hover:rotate-45"
              style={{ color: habilidade.cor }}
            >
              {habilidade.icone}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
