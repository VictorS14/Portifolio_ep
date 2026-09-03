import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre mim', href: '#sobre' },
    { name: 'Minhas Habilidades', href: '#habilidades' },
    { name: 'Projetos', href: '#projetos' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/90 backdrop-blur-lg border-b border-dark-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#inicio"
            className="flex items-center gap-2 font-bold text-white text-sm sm:text-lg hover:opacity-90 transition-opacity"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
              VM
            </span>
            <span className="hidden sm:inline">
              Victor Moura - <span className="gradient-text">Desenvolvedor Front-End</span>
            </span>
            <span className="sm:hidden gradient-text">VM</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-dark-muted hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-dark-muted hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${
                  isOpen ? 'rotate-45 translate-x-[1px]' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 translate-x-4' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${
                  isOpen ? '-rotate-45 translate-x-[1px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-bg/95 backdrop-blur-lg border-b border-dark-border">
          <div className="px-4 sm:px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="block px-4 py-3 text-base font-medium text-dark-muted hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
