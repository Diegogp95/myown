export default {
	title: "SmartSheet",
	description: "Una librería de componente tipo hoja de cálculo para Svelte — construida para grillas grandes con virtualización DOM, navegación por teclado, selección múltiple de celdas, edición inline, 5 temas integrados y una API pública completa para estilos, imputación y extracción de datos.",
	image: "/images/projects/svelte-smartsheet.png",
	date: "Octubre 2025",
	status: "in-progress" as const,
	technologies: [
		{ label: "SvelteKit", variant: "primary" as const },
		{ label: "TypeScript", variant: "primary" as const },
		{ label: "CSS", variant: "primary" as const },
		{ label: "Vercel", variant: "primary" as const }
	],
	links: [
		{ type: "github" as const, url: "https://github.com/Diegogp95/svelte-smartsheet" },
		{ type: "demo" as const, url: "https://svelte-smartsheet.vercel.app/" }
	],
	sections: {
		overview: {
			title: "¿Qué es SmartSheet?",
			paragraphs: [
				"SmartSheet es una librería tipo motor de hoja de cálculo para Svelte — una opción performante para cuando necesitas mostrar e interactuar con grandes grillas de datos dentro de tu app Svelte. Ofrece navegación intuitiva por teclado, selección múltiple de celdas, edición inline, APIs de estilos por celda y un motor de renderizado completamente virtualizado.",
				"El proyecto comenzó como un componente Svelte acoplado, pero la visión a largo plazo es refactorizarlo en un motor framework-agnostic con adaptadores separados para Svelte, React y otros. El adaptador de Svelte es la primera implementación y eventualmente se publicará como svelte-smartsheet en npm.",
				"Aún no publicado en npm — puedes seguir el desarrollo en GitHub o explorar el sitio de documentación construido con SvelteKit y desplegado en Vercel."
			]
		},
		features: {
			title: "Funcionalidades Clave",
			performance: {
				title: "Rendimiento",
				items: [
					"Virtualización DOM — solo se renderizan las filas y columnas visibles, manteniendo grillas grandes fluidas",
					"Ctrl + scroll para hacer zoom, con control más preciso planificado para versiones futuras"
				]
			},
			interaction: {
				title: "Interacción",
				items: [
					"Navegación por teclado — movimiento completo con flechas, Ctrl+Flecha para saltar, soporte de Page Up/Down",
					"Selección múltiple — click, arrastre y selección completa de fila/columna por header con highlights derivados",
					"Edición inline — doble click, Enter, o simplemente escribir para comenzar a editar una celda",
					"Soporte de copiar/pegar — integración con portapapeles para mover datos hacia y desde hojas de cálculo externas",
					"Historial — soporte completo de deshacer/rehacer con feedback visual en las celdas afectadas"
				]
			},
			api: {
				title: "API Programática",
				items: [
					"API de estilos en celdas y headers — colores de fondo programáticos para construir heatmaps y formato condicional",
					"Capa de imputación de datos — overlay rayado visual para valores computados o imputados",
					"APIs de exportación — extrae datos de la grilla, celdas editadas o filas/columnas seleccionadas bajo demanda",
					"Generics de TypeScript — extraProps completamente tipados por celda para acceso seguro y asistido por IDE en callbacks de API",
					"API de overlay de procesamiento — muestra estados de carga impulsados por computaciones externas"
				]
			}
		},
		themes: {
			title: "Temas Integrados",
			intro: "Aplica un tema mediante la prop theme. Todos los tokens visuales son CSS custom properties (--ss-*), por lo que cualquiera puede sobreescribirse desde tu propia hoja de estilos.",
			items: [
				{ name: "light", description: "Blanco limpio — predeterminado" },
				{ name: "dark", description: "Grises oscuros, acentos azul suaves" },
				{ name: "tech", description: "Inspirado en GitHub-dark, headers azules" },
				{ name: "glow", description: "Espacio profundo / aurora, cyan y violeta" },
				{ name: "neon", description: "Neón de alto contraste sobre negro" }
			]
		},
		techStack: {
			title: "Stack Tecnológico",
			core: {
				title: "Core",
				items: [
					"Svelte 5 con SvelteKit",
					"TypeScript — generics completamente tipados para metadatos por celda"
				]
			},
			styling: {
				title: "Estilos",
				items: [
					"CSS puro con custom properties (--ss-*) para todos los tokens de tema",
					"Sin framework CSS externo — liviano y autocontenido"
				]
			},
			hosting: {
				title: "Hosting & Documentación",
				items: [
					"Vercel para el despliegue del sitio de documentación",
					"GitHub para código fuente y seguimiento de issues"
				]
			}
		},
		roadmap: {
			title: "Estado & Roadmap",
			statusNote: "La librería está en desarrollo temprano activo (v0.0.1-unstable). El conjunto de funcionalidades principales es funcional, pero el código base aún no está suficientemente desacoplado ni testeado para una publicación en npm.",
			items: [
				{ text: "Página de demo en vivo / playground", done: true },
				{ text: "Desacoplar motor y refactorizar en un core framework-agnostic", done: false },
				{ text: "Configurar entorno de testing y CI con tests unitarios e de integración", done: false },
				{ text: "Publicación en npm (versión estable 1.0.0)", done: false },
				{ text: "Redimensionamiento de columnas y filas por arrastre", done: false },
				{ text: "Hooks de integración para ordenar/filtrar", done: false },
				{ text: "Adaptador para React", done: false }
			]
		}
	}
};
