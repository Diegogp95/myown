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
				"Después de completar mi carrera en Ingeniería Electrónica y ganar experiencia como desarrollador Full Stack, quise construir un portafolio que fuera más allá de simplemente mostrar proyectos. Quería que reflejara cómo pienso el software: de manera estructurada, intencional y con enfoque en producción.",
				"Aunque el sitio es estático, lo diseñé deliberadamente con una arquitectura cloud de nivel productivo. En lugar de utilizar un hosting plug-and-play, implementé una infraestructura completa en AWS utilizando Amazon S3, Amazon CloudFront y Amazon Route 53, junto con pipelines de CI/CD automatizados mediante GitHub Actions. Además, configuré entornos de staging y producción completamente aislados.",
				"Mi objetivo no fue agregar complejidad innecesaria, sino demostrar comprensión práctica de infraestructura, flujos de despliegue, estrategias de caché y separación de entornos.",
				"El proyecto también refleja mi forma de abordar los problemas técnicos: investigando alternativas, evaluando decisiones arquitectónicas y buscando soluciones coherentes y bien fundamentadas, incluso en contextos aparentemente simples."
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
					"El pipeline genera un artefacto estático del sitio una sola vez",
					"El deployment a staging utiliza directamente el artefacto generado en el build",
					"Producción no recompila el proyecto: promueve el artefacto desde el bucket de staging",
					"Sincronización entre buckets S3 para promover versiones entre ambientes",
					"Invalidación automática del cache de CloudFront después del deployment"
				],
			},
			nextSteps: "Próximas mejoras: versionado de artefactos y promoción basada en releases o tags para controlar qué versión pasa a producción."
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
	}
};
