
import React from 'react';
import type { Project, TeamMember, Client, Testimonial } from './types';

// Icon Components - updated colors
const EyeIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>);
const CpuIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>);
const LeafIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 20A7 7 0 0 1 4 13q0-4.5 4-6.5C12 4.5 15 2 20 2c0 4.5-2.5 7.5-4.5 9.5A7 7 0 0 1 11 20z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>);
const BrainCircuitIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5a3 3 0 1 0-5.993.13a3 3 0 0 0-1.87 2.37"/><path d="M12 5a3 3 0 1 1 5.993.13a3 3 0 0 1 1.87 2.37"/><path d="M9 12a3 3 0 1 0-5.87 1.13a3 3 0 0 0-2.03.87"/><path d="M15 12a3 3 0 1 1 5.87 1.13a3 3 0 0 1 2.03.87"/><path d="M6.25 6.25A2.755 2.755 0 0 0 4.5 8.5c0 1.519 1.231 2.75 2.75 2.75"/><path d="M17.75 6.25A2.755 2.755 0 0 1 19.5 8.5c0 1.519-1.231 2.75-2.75 2.75"/><path d="M12 13a3 3 0 1 0-5.993.13a3 3 0 0 0-1.87 2.37"/><path d="M12 13a3 3 0 1 1 5.993.13a3 3 0 0 1 1.87 2.37"/><path d="M5.1 16.87A2.755 2.755 0 0 0 4.5 18.5c0 1.519 1.231 2.75 2.75 2.75"/><path d="M18.9 16.87A2.755 2.755 0 0 1 19.5 18.5c0 1.519-1.231 2.75-2.75 2.75"/><path d="M12 21a3 3 0 1 0-5.993-.13a3 3 0 0 0-1.87-2.37"/><path d="M12 21a3 3 0 1 1 5.993-.13a3 3 0 0 1 1.87-2.37"/></svg>);
const ThermometerIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>);
const NetworkIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>);
const ChartIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>);
const RobotIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>);
const FlaskConicalIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 2v7.31"/><path d="M14 9.31V2"/><path d="M3.5 12.69 5 9.31"/><path d="m20.5 12.69-1.5-3.38"/><path d="M8.5 22a7 7 0 0 1 7 0"/><path d="M6 16.31h12"/></svg>);
const BriefcaseIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>);

const ICON_CLASS = "w-8 h-8 text-sky-400";

export const PROJECTS: Project[] = [
  { id: 1, title: 'Visión por Computador para Aforo Vehicular', summary: 'Sistema IA que usa cámaras para contar vehículos y peatones, optimizando la gestión del tráfico.', description: 'Mediante algoritmos avanzados de deep learning, nuestro sistema analiza flujos de video para identificar y clasificar objetos. Proporciona datos precisos sobre afluencia, patrones de movimiento y densidad.', technologies: ['Python', 'OpenCV', 'TensorFlow', 'YOLO'], sectors: ['Transporte', 'Gobierno'], imageUrl: 'https://images.unsplash.com/photo-1570122421335-b523e654f51e?q=80&w=800&auto=format&fit=crop', icon: <EyeIcon className={ICON_CLASS} />, demoUrl: '#', impact: '30% menos congestión' },
  { id: 2, title: 'Control de Calidad en Líneas de Producción', summary: 'Solución de visión artificial para detectar defectos en productos durante la manufactura, asegurando altos estándares.', description: 'Implementamos cámaras de alta velocidad y modelos de IA para inspeccionar productos. El sistema identifica anomalías y alerta a los operadores para evitar la distribución de productos defectuosos.', technologies: ['Visión Artificial', 'Machine Learning', 'C++'], sectors: ['Manufactura', 'Alimentos'], imageUrl: 'https://images.unsplash.com/photo-1622349372958-f9521349479b?q=80&w=800&auto=format&fit=crop', icon: <CpuIcon className={ICON_CLASS} />, demoUrl: '#', impact: '99% menos defectos' },
  { id: 3, title: 'Monitoreo de Cultivos con Sensores IoT', summary: 'Plataforma de agricultura de precisión que integra sensores en campo para monitorear la salud de los cultivos.', description: 'Desplegamos una red de sensores que miden variables clave como la humedad del suelo, la temperatura y la luz. Los datos se transmiten a una plataforma central para que los agricultores visualicen el estado de sus cultivos.', technologies: ['IoT', 'Sensores', 'LoRaWAN', 'React'], sectors: ['Agricultura', 'Agroindustria'], imageUrl: 'https://images.unsplash.com/photo-1594894334493-01773de90a88?q=80&w=800&auto=format&fit=crop', icon: <LeafIcon className={ICON_CLASS} />, demoUrl: '#', impact: '40% ahorro en agua' },
  { id: 4, title: 'Detección de Enfermedades en Plantas con IA', summary: 'Herramienta IA que analiza imágenes de plantas para un diagnóstico temprano de enfermedades.', description: 'Los agricultores pueden subir fotos de sus cultivos y nuestro modelo de IA identifica signos de enfermedades, proporcionando un diagnóstico y sugerencias de tratamiento para reducir la pérdida de cosechas.', technologies: ['IA', 'Computer Vision', 'Flutter', 'PyTorch'], sectors: ['Agricultura', 'Horticultura'], imageUrl: 'https://images.unsplash.com/photo-1627896152345-a756b54a22c5?q=80&w=800&auto=format&fit=crop', icon: <BrainCircuitIcon className={ICON_CLASS} />, demoUrl: '#', impact: '25% menos pérdidas' },
  { id: 8, title: 'Modelo Predictivo de Rendimiento Agrícola', summary: 'Modelo de machine learning que predice el rendimiento de los cultivos usando datos climáticos e históricos.', description: 'Analizamos grandes volúmenes de datos para construir modelos que estiman la producción de una cosecha. Esto ayuda a los productores a planificar sus finanzas y gestionar la logística.', technologies: ['Machine Learning', 'Big Data', 'Python'], sectors: ['Finanzas', 'Seguros'], imageUrl: 'https://images.unsplash.com/photo-1563023242-74b345869036?q=80&w=800&auto=format&fit=crop', icon: <ChartIcon className={ICON_CLASS} />, demoUrl: '#', impact: '92% de precisión' },
  { id: 7, title: 'Red de Sensores para Trazabilidad de Productos', summary: 'Sistema IoT para rastrear productos desde la granja hasta el consumidor, garantizando transparencia.', description: 'Utilizamos sensores y etiquetas inteligentes (NFC/RFID) para registrar cada etapa de la cadena de suministro. Los consumidores pueden escanear un código para ver el origen y la calidad del producto.', technologies: ['IoT', 'Blockchain', 'NFC'], sectors: ['Logística', 'Retail'], imageUrl: 'https://images.unsplash.com/photo-1634842792940-a1a3e617961f?q=80&w=800&auto=format&fit=crop', icon: <NetworkIcon className={ICON_CLASS} />, demoUrl: '#', impact: '15% más confianza' },
];

export const TEAM_MEMBERS: TeamMember[] = [
    { name: 'Daniel Ricardo Delgado', title: 'COO', description: 'Doctor en Ciencias Farmacéuticas, experto en investigación científica aplicada a la disolución y termodinámica de fármacos. Alta capacidad en diseño experimental, control de calidad y procesos técnicos complejos.', imageUrl: 'https://media.licdn.com/dms/image/v2/C4E03AQF3HFgqLytmWw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1629727817838?e=2147483647&v=beta&t=ZpoLeGsiwL8fronAvF0g48OXtUBO8hPt_x4WWBg13xM' },
    { name: 'Wilson Alfredo Riveros Lozano', title: 'CEO', description: 'Magíster en Administración de Negocios, especialista en gerencia logística, ingeniería industrial y dirección estratégica. Experiencia en gestión de proyectos tecnológicos y de innovación.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBuLCxD2MSHiEhe2I6_m7raFKEC-M1lOFfA&s' },
    { name: 'Rossember Eden Cardenas Torres', title: 'CTO', description: 'Magíster en Ciencias Matemáticas, especialista en inteligencia artificial, automatización y agentes inteligentes. Sólida formación en matemáticas, física y modelado computacional.', imageUrl: 'https://media.licdn.com/dms/image/v2/C5603AQGh6_1qoXLfBQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1652795849925?e=2147483647&v=beta&t=gOd-p687YDVnXWP4uWZlCxop7mLjreFQHZp__zXwqjY' },
    { name: 'Mateo Vergara Roa', title: 'Lead Data & AI Engineer', description: 'Ingeniero de Sistemas con formación técnica en Data Science, Machine Learning y experiencia en diseño de arquitecturas de datos, integración de sistemas y optimización de procesos.', imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFiVJBhoNNBGA/profile-displayphoto-crop_800_800/B56ZhuA_QTH0AQ-/0/1754192413025?e=1756944000&v=beta&t=E7tvA59VIUZbZc_i6TwdhF5uroTpEmL4ON2G3Ozoa8I' },
    { name: 'Karol Sofia Pulido Talero', title: 'Head of Innovation & R&D Coordination', description: 'Ingeniera química e Industrial con experiencia en bioplásticos, análisis de alimentos y aguas, biotecnología y energías renovables. Experiencia en IA, diseño y optimización de procesos sostenibles.', imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQG8CvNBUev_Hg/profile-displayphoto-shrink_800_800/B4EZVxCD7HGgAg-/0/1741358122050?e=1756944000&v=beta&t=SqfRseuqOT363Vj_n_x3n0H9gUBKsxLh-NCfb1GWSe4' },
];

export const SOLUTIONS = [
  {
    title: 'Inteligencia Artificial',
    description: 'Modelos predictivos, visión por computador y automatización inteligente para optimizar decisiones y procesos.',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'IoT y Robótica',
    description: 'Diseño y despliegue de redes de sensores y dispositivos a medida para la captura de datos en tiempo real.',
    imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1948&auto=format&fit=crop',
  },
  {
    title: 'Investigación Aplicada',
    description: 'Proyectos de I+D+i para resolver desafíos complejos, validando nuevas tecnologías con rigor científico.',
    imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Consultoría y Formación',
    description: 'Asesoría experta para la transformación digital y capacitación técnica para empoderar a equipos.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
  }
];

export const CLIENTS: Client[] = [
  { name: 'Agrocol', logoUrl: 'https://via.placeholder.com/150x60/f0f9ff/0ea5e9?text=Agrocol', width: 130, height: 50 },
  { name: 'Industrias SAS', logoUrl: 'https://via.placeholder.com/150x60/f0f9ff/0ea5e9?text=Industrias+SAS', width: 150, height: 50 },
  { name: 'Logística Total', logoUrl: 'https://via.placeholder.com/150x60/f0f9ff/0ea5e9?text=Logística+Total', width: 160, height: 50 },
  { name: 'Universidad Nacional', logoUrl: 'https://via.placeholder.com/150x60/f0f9ff/0ea5e9?text=U.+Nacional', width: 140, height: 50 },
  { name: 'Fedepapa', logoUrl: 'https://via.placeholder.com/150x60/f0f9ff/0ea5e9?text=Fedepapa', width: 120, height: 50 },
  { name: 'Agrosavia', logoUrl: 'https://via.placeholder.com/150x60/f0f9ff/0ea5e9?text=Agrosavia', width: 130, height: 50 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "La implementación del sistema de monitoreo de CEITECH transformó nuestra operación. Ahora tenemos datos precisos que nos han permitido reducir costos en un 20%.",
    author: "Ana García",
    role: "Gerente de Operaciones",
    company: "Agrocol"
  },
  {
    quote: "El equipo de CEITECH no solo entregó una solución tecnológica de punta, sino que nos acompañó en todo el proceso de adopción. Su profesionalismo es excepcional.",
    author: "Carlos Pérez",
    role: "Jefe de Producción",
    company: "Industrias SAS"
  },
  {
    quote: "Gracias a su modelo predictivo, hemos mejorado la planificación de nuestra logística de distribución, optimizando rutas y tiempos de entrega de manera significativa.",
    author: "Lucía Méndez",
    role: "Directora de Logística",
    company: "Logística Total"
  }
];
