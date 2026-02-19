export default {
	title: "Portafolio Personal (este sitio web)",
	description: "Un sitio web de portafolio personal construido con SvelteKit, con un diseño moderno de colores tech y animaciones. Muestra mis habilidades, proyectos y experiencia en desarrollo web.",
	image: "/images/projects/portfolio.png",
	date: "Febrero 2026",
	status: "in-progress" as const,
	technologies: [
		{ label: "SvelteKit", variant: "primary" as const },
		{ label: "TypeScript", variant: "primary" as const },
		{ label: "Tailwind CSS", variant: "primary" as const },
		{ label: "Docker", variant: "primary" as const },
		{ label: "AWS", variant: "primary" as const },
		{ label: "GitHub Actions", variant: "primary" as const }
	],
	links: [
		{ type: "github" as const, url: "https://github.com/Diegogp95/myown" }
	],
	sections: {
		motivation: {
			title: "¿Por qué este proyecto?",
			paragraphs: [
				"Después de completar mi carrera en Ingeniería Civil Electrónica y obtener experiencia como desarrollador Full Stack, necesitaba algo sólido que mostrar de mi trabajo de forma profesional. Más allá de simplemente mostrar proyectos, quería demostrar que soy capaz de aprender y aplicar tecnologías modernas de forma organizada y racional.",
				"Si bien este no es un proyecto de gran escala ni de alto impacto, decidí ir más allá de un simple sitio estático. Implementé una infraestructura completa en AWS con S3, CloudFront y Route 53, configuré pipelines de CI/CD con GitHub Actions, y monté ambientes duales (staging y production) con infraestructura separada. Son tecnologías que estoy aprendiendo activamente y, aunque no tengo amplia experiencia laboral con ellas, quise demostrar que puedo aplicarlas efectivamente.",
				"Este proyecto refleja mi forma de aprender: práctica, hands-on, y siempre buscando ir un paso más allá de lo mínimo necesario."
			]
		},
		infrastructure: {
			title: "Infraestructura & DevOps",
			intro: "La verdadera experiencia de aprendizaje vino de configurar un pipeline de deployment y una infraestructura cloud de nivel profesional:",
			aws: {
				title: "Arquitectura AWS",
				items: [
					"Amazon S3 - Buckets separados para staging y production con hosting estático",
					"CloudFront - Distribuciones CDN para ambos ambientes con soporte de dominio custom",
					"Route 53 - Gestión de DNS y enrutamiento",
					"Infraestructura completamente aislada entre ambientes"
				]
			},
			cicd: {
				title: "Pipeline CI/CD",
				items: [
					"Los Pull Requests disparan builds automáticos para validación",
					"Los merges a main disparan build + deployment a S3",
					"Invalidación automática del cache de CloudFront después del deployment",
					"Actualmente idéntico para staging y production (promoción de artefactos planificada)"
				]
			},
			nextSteps: "Próximas mejoras: implementar promoción basada en artefactos desde staging a production usando S3 sync entre buckets, evitando builds redundantes."
		},
		techStack: {
			title: "Stack Tecnológico",
			frontend: {
				title: "Frontend",
				items: [
					"Svelte 5.41.2",
					"SvelteKit 2.52.2 con TypeScript",
					"Tailwind CSS v4 para estilos",
				]
			},
			tools: {
				title: "Herramientas de Desarrollo",
				items: [
					"Docker para entorno de desarrollo local",
					"GitHub Actions para automatización CI/CD"
				]
			}
		},
		gallery: {
			title: "Galería",
			images: [
				{
					src: "/images/projects/portfolio.png",
					alt: "Página de inicio",
					caption: "Página de inicio con diseño tech-inspired"
				},
				{
					src: "/images/projects/portfolio.png",
					alt: "Sección de proyectos",
					caption: "Lista de proyectos con cards interactivas"
				},
				{
					src: "/images/projects/portfolio.png",
					alt: "Página about",
					caption: "Timeline de experiencia y educación"
				},
				{
					src: "/images/projects/portfolio.png",
					alt: "Diseño responsivo",
					caption: "Diseño totalmente responsivo en mobile"
				}
			]
		}
	}
};
