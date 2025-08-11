

import React, { useState, MouseEvent, ReactNode, useEffect } from 'react';
import type { Project, TeamMember, Client, Testimonial } from './types';
import { PROJECTS, TEAM_MEMBERS, SOLUTIONS, CLIENTS, TESTIMONIALS } from './constants';

type Page = 'home' | 'about' | 'solutions' | 'projects' | 'clients' | 'contact';

// Logo as a Base64 URL to avoid needing an extra file
const LOGO_URL = 'LogoClean.png';


// Reusable Components

const PageWrapper: React.FC<{title: string, subtitle: string, children: ReactNode}> = ({ title, subtitle, children }) => (
    <div className="container mx-auto px-6 py-20 md:py-28 animate-fade-in-up">
        <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-100 leading-tight">
                {title}
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                {subtitle}
            </p>
        </div>
        {children}
    </div>
);

const ActionButton: React.FC<{onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void, children: ReactNode, className?: string, type?: "button" | "submit" | "reset", href?: string, target?: string, rel?: string, as?: 'button' | 'a', variant?: 'primary' | 'secondary'}> = ({ onClick, children, className = '', type = 'button', href, target, rel, as = 'button', variant = 'primary' }) => {
  const baseClasses = "action-button";
  const variantClasses = variant === 'primary' ? 'action-button-primary' : 'action-button-secondary';
  
  const commonProps = {
    onClick,
    className: `${baseClasses} ${variantClasses} ${className}`,
  };

  if (as === 'a') {
    return <a href={href} target={target} rel={rel} {...commonProps}>{children}</a>;
  }

  return (
    <button type={type} {...commonProps}>
      {children}
    </button>
  );
};

const Header: React.FC<{ currentPage: Page, setCurrentPage: (page: Page) => void }> = ({ currentPage, setCurrentPage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    const navLinks = [
      { name: 'Inicio', page: 'home' as Page },
      { name: 'Sobre Nosotros', page: 'about' as Page },
      { name: 'Soluciones', page: 'solutions' as Page },
      { name: 'Proyectos', page: 'projects' as Page },
      { name: 'Clientes', page: 'clients' as Page },
    ];
    
    const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, page: Page) => {
        e.preventDefault();
        setCurrentPage(page);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'header-glass mt-0' : 'bg-transparent mt-2'}`}>
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center">
                        <img src={LOGO_URL} alt="INCEITA Logo" className="h-12 w-auto"/>
                    </a>
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href="#"
                                onClick={(e) => handleNavClick(e, link.page)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${currentPage === link.page ? 'bg-brand-blue/10 text-brand-lightblue font-semibold' : 'text-gray-400 hover:bg-dark-700/80 hover:text-white'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                     <div className="hidden md:block">
                         <ActionButton onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}>
                            Habla con un experto
                        </ActionButton>
                     </div>
                     <div className="md:hidden">
                        <button 
                          onClick={() => setIsMobileMenuOpen(true)}
                          className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-dark-700"
                          aria-label="Abrir menú"
                        >
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                     </div>
                </nav>
            </header>
            
            <div className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
              <div className={`absolute top-0 right-0 bottom-0 flex flex-col w-full max-w-xs p-2 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="glass-card flex-grow flex flex-col p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                       <img src={LOGO_URL} alt="INCEITA Logo" className="h-6 w-auto"/>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 rounded-md" aria-label="Cerrar menú">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <nav className="flex-grow flex flex-col">
                        <ul className="flex-grow space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href="#"
                                        onClick={(e) => handleNavClick(e, link.page)}
                                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${currentPage === link.page ? 'bg-brand-blue/20 text-brand-lightblue' : 'text-gray-200 hover:bg-dark-700'}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                         <div className="border-t border-dark-700 pt-6 mt-6">
                            <ActionButton className="w-full text-center" onClick={(e) => handleNavClick(e as MouseEvent<HTMLAnchorElement>, 'contact')}>
                                Habla con un experto
                            </ActionButton>
                        </div>
                    </nav>
                </div>
              </div>
            </div>
        </>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-dark-800 m-2 md:m-4 lg:m-6 mt-auto rounded-2xl border border-dark-700">
        <div className="container mx-auto px-6 py-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} INCEITA. Todos los derechos reservados.</p>
            <p className="text-sm text-gray-500 mt-1">Soluciones tecnológicas avanzadas para el agro, la industria y la ciencia.</p>
        </div>
    </footer>
);

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto m-auto animate-scale-in-up" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
            <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-t-lg"/>
            <button onClick={onClose} className="absolute top-4 right-4 bg-black/40 rounded-full p-2 hover:bg-black/60 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">{project.title}</h2>
          {project.impact && <p className="text-lg text-sky-400 font-semibold mb-6">Impacto: {project.impact}</p>}
          <p className="text-lg text-gray-300 mb-8">{project.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h4 className="text-xl font-semibold text-gray-200 mb-3">Tecnologías Clave</h4>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => <span key={tech} className="bg-sky-500/20 text-sky-300 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>)}
                </div>
            </div>
            <div>
                <h4 className="text-xl font-semibold text-gray-200 mb-3">Sectores Beneficiados</h4>
                <div className="flex flex-wrap gap-2">
                    {project.sectors.map(sector => <span key={sector} className="bg-gray-500/20 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">{sector}</span>)}
                </div>
            </div>
          </div>

            <div className="mt-10 border-t border-dark-700 pt-8 flex flex-col sm:flex-row justify-center gap-4">
               <ActionButton
                  as="a"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Ver Demo
              </ActionButton>
               <ActionButton as="a" href="#" variant="secondary">
                  Descargar Ficha Técnica (PDF)
              </ActionButton>
            </div>
        </div>
      </div>
    </div>
  );
};

// Page Components

const HomePage: React.FC<{setCurrentPage: (page: Page) => void}> = ({setCurrentPage}) => {
    const bentoClasses = [
        "md:col-span-2 md:row-span-2", // IA
        "md:col-span-2", // IoT
        "", // Investigación
        "", // Consultoría
    ];
    
    return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white animate-fade-in-up">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop" alt="Campo tecnológico" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-glow">
                Soluciones tecnológicas avanzadas para el agro, la industria y la ciencia
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 text-shadow-sm">
                Integramos Software, IA, IoT y Robótica con investigación de punta para impulsar un futuro más eficiente y sostenible.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <ActionButton onClick={() => setCurrentPage('solutions')}>
                    Conoce nuestras soluciones
                </ActionButton>
                <ActionButton onClick={() => setCurrentPage('contact')} variant="secondary">
                    Habla con un experto
                </ActionButton>
            </div>
        </div>
      </section>
      
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-100 leading-tight">
                Nuestras Especialidades
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                Transformamos ideas en realidad con tecnología de vanguardia, desde el concepto hasta la implementación.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {SOLUTIONS.map((solution, index) => (
                <div 
                    key={solution.title}
                    onClick={() => setCurrentPage('solutions')}
                    className={`glass-card group relative cursor-pointer overflow-hidden flex flex-col justify-end min-h-[400px] transition-all duration-500 hover:shadow-neon-blue hover:-translate-y-2 animate-fade-in-up ${bentoClasses[index]}`} 
                    style={{animationDelay: `${index * 100}ms`}}
                >
                    <img src={solution.imageUrl} alt={solution.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-transparent z-10"></div>
                    <div className="relative z-20 p-6 md:p-8 text-white">
                        <h3 className="text-3xl font-extrabold text-glow tracking-tight">{solution.title}</h3>
                        <p className="text-gray-300 mt-3 text-shadow-sm text-sm max-w-sm">{solution.description}</p>
                        <div className="font-semibold text-sky-400 mt-6 self-start text-left flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                           Explorar Soluciones
                           <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                         </div>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
);
}

const AboutPage: React.FC = () => (
    <PageWrapper
        title="Innovación con Propósito"
        subtitle="Somos un equipo de científicos e ingenieros apasionados por resolver problemas complejos a través de la tecnología."
    >
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="glass-card p-8 md:p-10 text-center">
                <h3 className="text-2xl font-bold text-gray-100">Nuestra Historia</h3>
                <p className="text-gray-400 mt-4">
                    INCEITA nació de la convergencia entre la academia y la industria, con el objetivo de cerrar la brecha entre la investigación científica y las aplicaciones comerciales. Fundada por expertos con décadas de experiencia, nuestra misión es aplicar el conocimiento de vanguardia para generar un impacto tangible y positivo en la sociedad y el medio ambiente.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-8">
                    <h3 className="text-2xl font-bold text-gray-100">Misión</h3>
                    <p className="text-gray-400 mt-3">Desarrollar e implementar soluciones tecnológicas innovadoras y a medida que optimicen los procesos, aumenten la eficiencia y promuevan la sostenibilidad en sectores clave.</p>
                </div>
                <div className="glass-card p-8">
                    <h3 className="text-2xl font-bold text-gray-100">Visión</h3>
                    <p className="text-gray-400 mt-3">Ser líderes en la transformación digital de la industria y la agricultura en Latinoamérica, reconocidos por nuestro rigor científico y nuestro compromiso con el éxito de nuestros clientes.</p>
                </div>
            </div>
        </div>

        <div className="mt-24">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-100 mb-16">Un Equipo Multidisciplinario</h2>
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-20 gap-x-8">
               {TEAM_MEMBERS.map((member, index) => (
                  <div key={member.name} style={{ animationDelay: `${index * 100}ms` }} className="glass-card text-center transition-all duration-300 hover:scale-105 hover:shadow-neon-blue pt-16 p-6 flex flex-col h-full relative animate-fade-in-up opacity-0">
                    <img src={member.imageUrl} alt={member.name} className="w-28 h-28 rounded-full mx-auto absolute -top-14 left-1/2 -translate-x-1/2 border-4 border-dark-800/80 shadow-xl object-cover bg-dark-700" />
                    <div className="flex-grow flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-gray-100 mt-4">{member.name}</h3>
                        <p className="text-sky-400 font-semibold text-sm mt-1">{member.title}</p>
                        <p className="text-gray-400 text-sm mt-4 flex-grow">{member.description}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </PageWrapper>
);


const SolutionsPage: React.FC<{setCurrentPage: (page: Page) => void}> = ({setCurrentPage}) => {
    const solutionsData = [{
      title: 'AgroTech',
      description: 'Digitalizamos el campo con sensores IoT y drones para una agricultura de precisión.',
      imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop',
      link: 'projects'
    },{
      title: 'IA Aplicada',
      description: 'Modelos de Machine Learning y Visión por Computador para predecir, detectar y automatizar.',
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-aebc69232d61?q=80&w=2070&auto=format&fit=crop',
      link: 'projects'
    },{
      title: 'Robótica e IoT',
      description: 'Diseño y fabricación de dispositivos a medida, integrando hardware y software.',
      imageUrl: 'https://images.unsplash.com/photo-1581092921447-4a0b3d9d7b0a?q=80&w=2070&auto=format&fit=crop',
      link: 'projects'
    },{
      title: 'I+D+i',
      description: 'Colaboramos en proyectos científicos para resolver los desafíos del futuro.',
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop',
      link: 'about'
    }, {
      title: 'Capacitación',
      description: 'Empoderamos a su equipo con formación técnica y asesoría estratégica.',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      link: 'contact'
    }];
    
    const solutionGridClasses = [
      'md:col-span-2 md:row-span-2', // AgroTech (Bigger)
      'md:col-span-3', // IA (Rectangle)
      'md:col-span-3', // Robótica (Rectangle)
      'md:col-span-2 md:row-span-2', // I+D+i (Bigger)
      'md:col-span-5', // Capacitación (Full Width)
    ];

    return (
        <PageWrapper
            title="Nuestras Áreas de Especialización"
            subtitle="Ofrecemos un portafolio integral de soluciones que abarcan desde el hardware hasta el software y la consultoría estratégica."
        >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {solutionsData.map((sol, index) => (
                    <div 
                        key={sol.title} 
                        onClick={() => setCurrentPage(sol.link as Page)}
                        className={`glass-card group relative cursor-pointer overflow-hidden flex flex-col justify-end min-h-[450px] transition-all duration-500 hover:shadow-neon-blue hover:-translate-y-2 animate-fade-in-up ${solutionGridClasses[index]}`} 
                        style={{animationDelay: `${index * 100}ms`}}
                    >
                       <img src={sol.imageUrl} alt={sol.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0" />
                       <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-transparent z-10"></div>
                       <div className="relative z-20 p-8 text-white">
                         <h3 className="text-4xl lg:text-5xl font-extrabold text-glow tracking-tight">{sol.title}</h3>
                         <p className="text-gray-300 mt-4 text-shadow-sm max-w-md">{sol.description}</p>
                         <div className="font-semibold text-sky-400 mt-6 self-start text-left flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                           Ver casos de éxito
                           <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                         </div>
                       </div>
                    </div>
                ))}
            </div>
        </PageWrapper>
    );
}

const ProjectsPage: React.FC<{handleProjectClick: (project: Project) => void}> = ({handleProjectClick}) => {
    const projectGridClasses = [
      'lg:col-span-2', 
      '', 
      '', 
      'lg:col-span-2',
      '', 
      'lg:col-span-2', 
    ];

    return (
    <PageWrapper
        title="Proyectos Destacados"
        subtitle="Casos de éxito que demuestran cómo nuestra tecnología genera valor real y tangible para nuestros clientes en diversos sectores."
    >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 6).map((project, index) => (
                <div key={project.id} onClick={() => handleProjectClick(project)} className={`glass-card cursor-pointer overflow-hidden group flex flex-col h-full transition-all duration-500 hover:shadow-neon-blue hover:-translate-y-2 animate-fade-in-up opacity-0 ${projectGridClasses[index] || ''}`} style={{animationDelay: `${index * 100}ms`}}>
                    <div className="relative overflow-hidden">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        {project.impact && <span className="absolute top-3 right-3 bg-brand-blue/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">{project.impact}</span>}
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold text-gray-100">{project.title}</h3>
                        <p className="text-gray-400 mt-2 mb-4 flex-grow text-sm">{project.summary}</p>
                        <span className="text-sky-400 font-semibold self-start group-hover:underline">Ver detalles &rarr;</span>
                    </div>
                </div>
            ))}
        </div>
    </PageWrapper>
);
}

const ClientsPage: React.FC = () => (
    <PageWrapper
        title="Nuestros Clientes y Aliados"
        subtitle="Construimos relaciones de confianza y colaboración, trabajando de la mano con líderes de la industria e instituciones académicas."
    >
        <div className="glass-card p-8 md:p-12">
            <h3 className="text-center text-2xl font-bold text-gray-100 mb-8">Con la confianza de:</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {CLIENTS.map(client => (
                    <img key={client.name} src={client.logoUrl} alt={client.name} style={{width: client.width, height: client.height}} className="opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                ))}
            </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="glass-card p-8 flex flex-col h-full animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                    <p className="text-gray-300 flex-grow">"{testimonial.quote}"</p>
                    <div className="mt-6 border-t border-dark-700 pt-4">
                        <p className="font-bold text-gray-100">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                </div>
            ))}
        </div>
    </PageWrapper>
);

const ContactPage: React.FC = () => (
    <PageWrapper
        title="Hablemos de su Próximo Proyecto"
        subtitle="Estamos listos para transformar sus ideas en soluciones tecnológicas de alto impacto. Contáctenos para agendar una reunión."
    >
        <div className="glass-card max-w-6xl mx-auto p-8 md:p-12 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-gray-100">Información de Contacto</h3>
                <div className="mt-6 space-y-4 text-gray-300">
                    <p className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg><span>contacto@inceita.com</span></p>
                    <p className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3a1 1 0 011 1v1.586l3.293-3.293a1 1 0 111.414 1.414L12.414 7H14a1 1 0 110 2h-4a1 1 0 01-1-1V4a1 1 0 011-1z" /><path d="M10 8a2 2 0 100 4 2 2 0 000-4z" /><path d="M3.293 9.293a1 1 0 011.414 0L7 11.586V10a1 1 0 112 0v4a1 1 0 01-1 1H4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 010-1.414z" /></svg><span>+57 310 123 4567</span></p>
                    <p className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400 shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg><span>Bogotá, Colombia</span></p>
                </div>
                <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-md border border-dark-700">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.3928096996!2d-74.2726255018449!3d4.64828354024228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1!5e0!3m2!1sen!2sco!4v1689283758362!5m2!1sen!2sco" 
                      width="100%" 
                      height="100%" 
                      style={{border: 0}}
                      className="filter invert(1) hue-rotate(180deg)"
                      allowFullScreen={true}
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación en Bogotá">
                    </iframe>
                </div>
            </div>
            <div className="lg:col-span-3 animate-fade-in-up" style={{animationDelay: '150ms'}}>
               <form onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-300">Nombre completo</label>
                            <input type="text" id="name" name="name" placeholder="Su nombre" required className="glass-input text-gray-200 mt-1 block w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-300">Correo electrónico</label>
                            <input type="email" id="email" name="email" placeholder="su@email.com" required className="glass-input text-gray-200 mt-1 block w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-300">Mensaje</label>
                            <textarea id="message" name="message" rows={5} placeholder="¿En qué podemos ayudarle?" required className="glass-input text-gray-200 mt-1 block w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50"></textarea>
                        </div>
                        <ActionButton type="submit" className="w-full">
                            Enviar Mensaje
                        </ActionButton>
                    </div>
               </form>
            </div>
        </div>
    </PageWrapper>
);

// Main App Component

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Add a slight delay to the initial page load animation
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsReady(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage setCurrentPage={setCurrentPage} />;
            case 'about':
                return <AboutPage />;
            case 'solutions':
                return <SolutionsPage setCurrentPage={setCurrentPage} />;
            case 'projects':
                return <ProjectsPage handleProjectClick={handleProjectClick} />;
            case 'clients':
                return <ClientsPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className={`flex-grow ${currentPage !== 'home' ? 'pt-[60px]' : ''}`}>
                {renderPage()}
            </main>
            <Footer />
            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </div>
    );
};

export default App;