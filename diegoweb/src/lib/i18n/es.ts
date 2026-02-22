import portfolioEs from './projects/portfolio-es';
import smartsheetEs from './projects/svelte-smartsheet-es';

export default {
	nav: {
		home: "Inicio",
		about: "Acerca de",
		projects: "Proyectos",
		blog: "Blog",
		contact: "Contacto",
		language: "Idioma:"
	},
    home: {
        title1st: '¡Hola! Me llamo',
        title2nd: 'Diego Gallegos',
        subtitle: 'Ingeniero Civil Electrónico y desarrollador web',
        description: 'Siempre buscando aprender algo nuevo,\nmejorar mis habilidades y asumir nuevos desafíos\nen el mundo del desarrollo de software.',
        cvButton: 'Descargar CV',
        cvSubtext: 'Ve mi experiencia completa',
        cv: '/Diego-Gallegos-cv-1.4-es.pdf',
        skillsTitle: 'Habilidades Principales',
        skills: {
			technologies: [
	            { name: 'Python' , level: 'advanced' as const },
	            { name: 'JavaScript / TypeScript' , level: 'advanced' as const  },
	            { name: 'Svelte' , level: 'advanced' as const  },
	            { name: 'Django' , level: 'advanced' as const  },
	            { name: 'Docker' , level: 'advanced' as const  },
	            { name: 'Linux' , level: 'advanced' as const  },
	            { name: 'Bash' , level: 'advanced' as const  },
	            { name: 'Git' , level: 'advanced' as const  },
			],
			fields: [
	            { name: 'Backend Development' , variant: 'primary' as const },
	            { name: 'Full Stack' , variant: 'primary' as const },
	            { name: 'DevOps' , variant: 'primary' as const },
	            { name: 'CI/CD' , variant: 'primary' as const },
	            { name: 'Administración de Sistemas' , variant: 'secondary' as const }
			]
		},
        aboutButton: 'Más sobre mí',
        projectsButton: 'Ver mis proyectos',
        contactButton: 'Contáctame',
    },
	error: {
		404: {
			title: "Página no encontrada",
			message: "Lo sentimos, la página que buscas no existe.",
			goHome: "Volver al inicio"
		}
	},
	underConstruction: {
		title: "En construcción",
		message: "Esta sección está en construcción. Vuelve pronto para ver el contenido.",
		icon: "🚧"
	},
	footer: {
		rights: "MIT License."
	},
	contact: {
		title: "Contacto",
		subtitle: "¡Conectemos! No dudes en comunicarte.",
		socialSection: "Conecta Conmigo",
		infoSection: "Información de Contacto",
		github: {
			label: "GitHub",
			username: "diegogp95",
			description: "Revisa mis repositorios y proyectos"
		},
		linkedin: {
			label: "LinkedIn",
			username: "diegogp95",
			description: "Conectemos profesionalmente"
		},
		email: {
			label: "Correo",
			address: "diego.gp95@hotmail.com",
			description: "Envíame un mensaje"
		},
		location: {
			label: "Ubicación",
			city: "Santiago, Chile",
			description: "Actualmente en Santiago"
		}
	},
	about: {
		title: "Mi Historia",
		intro: "Soy desarrollador FullStack con dos años de experiencia profesional, apasionado por crear soluciones tecnológicas que resuelvan problemas reales. Me gusta combinar programación, arquitectura de software y administración de sistemas para diseñar proyectos eficientes y escalables. Actualmente me estoy enfocando en DevOps y cloud computing, explorando CI/CD y sistemas distribuidos, siempre buscando aprender y mejorar en cada proyecto.",
earlyLife: {
	title: "Vida Temprana",
	period: "1995",
	description1: "Nací en Temuco, Chile, y desde niño sentí una fuerte afinidad por las matemáticas, la lógica y los números. En mi infancia fui un gran fan del fútbol, aunque pronto mi curiosidad se volcó hacia los videojuegos y la tecnología.\n\nAl ingresar a la universidad me mudé a Valparaíso, inicialmente con la idea de estudiar matemáticas puras, pero los primeros años resultaron desafiantes y descubrí mi interés por la electrónica. Durante la carrera exploré primero el control automático y la instrumentación, aunque con el tiempo mi verdadera pasión se centró en la programación y los computadores. Desde entonces he trabajado con una gran variedad de tecnologías, tanto de hardware como de software, incluyendo microcontroladores, FPGAs y lenguajes como C, C++, Java y JavaScript, aunque Python se convirtió en mi principal herramienta. Mi formación en matemáticas, redes, algoritmos y estructuras de datos ha marcado la manera en que abordo la resolución de problemas y el diseño de software.\n\nActualmente me radico en Santiago, aunque no sé exactamente hacia dónde me llevará la vida o el trabajo en el futuro, y disfruto seguir explorando oportunidades y nuevos desafíos.",
			description2: "Fuera del código, disfruto de un buen juego de estrategia, el ciclismo, explorar nuevas tecnologías y pasar el rato con amigos."
		},
		education: {
			title: "Educación",
			period: "2014 - 2024",
			degrees: [
				{
					title: "Ingeniería Civil Electrónica",
					institution: "Universidad Técnica Federico Santa María",
					location: "Valparaíso, Chile",
					period: "2014 - 2024",
					description: "Sólida formación en ciencias exactas, ingeniería y tecnología, con un enfoque en electrónica, programación y sistemas.",
					badges: [
						{ name: "Electrónica", variant: "primary" as const },
						{ name: "Matemáticas", variant: "primary" as const },
						{ name: "Informática", variant: "secondary" as const },
						{ name: "Programación", variant: "secondary" as const },
						{ name: "Redes", variant: "secondary" as const },
						{ name: "Sistemas", variant: "secondary" as const }
					]
				},
			]
		},
		experience: {
			title: "Experiencia Laboral",
			period: "2023 - Presente",
			jobs: [
				{
					title: "Práctica Profesional",
					company: "Revergy SpA",
					location: "Santiago, Chile",
					period: "09/2023 - 02/2024",
					description: "Propuesta de proyecto para desarrollo de plataforma de monitoreo de plantas fotovoltaicas, incluyendo diseño de arquitectura, selección de tecnologías y desarrollo de prototipo funcional."
				},
				{
					title: "Desarrollador Full Stack",
					company: "Revergy SpA",
					location: "Santiago, Chile",
					period: "05/2024 - Presente",
					description: "Desarrollo de plataforma de monitoreo de plantas fotovoltaicas, incluyendo backend en Python con Django y frontend con Svelte, dockerización y despliegue on-premises."
				}
			]
		},
		skills: {
			title: "Habilidades Actuales",
			period: "2026",
			description: "Mis habilidades principales en la práctica.",
			legend: {
				title: "Nivel de Habilidad:",
				basic: "Conocimiento Básico",
				intermediate: "Intermedio",
				advanced: "Avanzado"
			},
			categories: {
				languages: {
					title: "Lenguajes de Programación"
				},
				frontend: {
					title: "Frontend"
				},
				backend: {
					title: "Backend"
				},
				systems: {
					title: "Sistemas & Scripting"
				},
				orchestration: {
					title: "Orquestación & CI/CD"
				},
				versionControl: {
					title: "Control de Versiones"
				},
				databases: {
					title: "Bases de Datos"
				},
				cloud: {
					title: "Cloud"
				},
				tools: {
					title: "Herramientas & Otros"
				},
				concepts: {
					title: "Conceptos & Arquitectura"
				}
			}
		}
	},
	projects: {
		title: "Proyectos",
		detailsButton: "Ver detalles",
		hero: {
			technologiesLabel: "Tecnologías",
			statusCompleted: "Completado",
			statusInProgress: "En desarrollo"
		},
		entries: {
			portfolio: portfolioEs,
			'svelte-smartsheet': smartsheetEs,
		}
	}
}