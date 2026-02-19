import portfolioEn from './projects/portfolio-en';

export default {
	nav: {
		home: "Home",
		about: "About",
		projects: "Projects",
		blog: "Blog",
		contact: "Contact",
		language: "Language:"
	},
	home: {
		title1st: "Hello!",
		title2nd: "I am Diego",
		subtitle: "Welcome to my website",
		description: "BSc in Electronics Engineering. Passionate about web development and technology. I am always looking to learn something new, improve my skills, and take on new challenges.",
		cvButton: "Download CV",
		cv: "/Diego-Gallegos-cv-1.4-en.pdf"
	},
	error: {
		404: {
			title: "Page not found",
			message: "Sorry, the page you're looking for doesn't exist.",
			goHome: "Go back home"
		}
	},
	underConstruction: {
		title: "Under Construction",
		message: "This section is under construction. Check back soon for content.",
		icon: "🚧"
	},
	footer: {
		rights: "MIT License."
	},
	contact: {
		title: "Contact",
		subtitle: "Let's connect! Feel free to reach out.",
		socialSection: "Connect With Me",
		infoSection: "Contact Information",
		github: {
			label: "GitHub",
			username: "diegogp95",
			description: "Check out my repositories and projects"
		},
		linkedin: {
			label: "LinkedIn",
			username: "diegogp95",
			description: "Let's connect professionally"
		},
		email: {
			label: "Email",
			address: "diego.gp95@hotmail.com",
			description: "Send me a message"
		},
		location: {
			label: "Location",
			city: "Santiago, Chile",
			description: "Currently based in Santiago"
		}
	},
	about: {
		title: "My Story",
		intro: "I’m a FullStack developer with two years of professional experience, passionate about building technology solutions that solve real problems. I enjoy combining programming, software architecture, and system administration to design efficient and scalable projects. Currently, I’m focusing on DevOps and cloud computing, exploring CI/CD and distributed systems, always looking to learn and improve with every project.",
		earlyLife: {
			title: "Early Life",
			period: "1995",
			description1: "I was born in Temuco, Chile, and from an early age I had a strong affinity for mathematics, logic, and numbers. As a child, I loved playing soccer, but soon my curiosity shifted toward video games and technology.\n\nWhen I started university, I moved to Valparaíso, initially planning to study pure mathematics. The first years were challenging, and that’s when I discovered my interest in electronics. During my studies, I first focused on automatic control and instrumentation, but over time my true passion became programming and computer systems. Since then, I have worked with a wide variety of technologies, from hardware like microcontrollers and FPGAs to languages such as C, C++, Java, and JavaScript, with Python becoming my primary tool. My background in mathematics, networking, algorithms, and data structures has shaped the way I approach problem-solving and software design.\n\nI currently live in Santiago, although I’m not exactly sure where life or work will take me in the future, and I enjoy continuing to explore new opportunities and challenges.",
			description2: "Outside of coding, I enjoy a good strategy game, biking, exploring new technologies, and hanging out with friends."
		},
		education: {
		  title: "Education",
		  period: "2014 - 2024",
		  degrees: [
		    {
		      title: "Electronic Civil Engineering",
		      institution: "Universidad Técnica Federico Santa María",
		      location: "Valparaíso, Chile",
		      period: "2014 - 2024",
		      description: "Solid foundation in exact sciences, engineering, and technology, with a focus on electronics, programming, and systems.",
		      badges: [
				{ name: "Electronics", variant: "primary" as const },
				{ name: "Mathematics", variant: "primary" as const },
				{ name: "Computer Science", variant: "secondary" as const },
				{ name: "Programming", variant: "secondary" as const },
				{ name: "Networking", variant: "secondary" as const },
				{ name: "Systems", variant: "secondary" as const }
			  ]
		    },
		  ]
		},
		experience: {
		  title: "Work Experience",
		  period: "2023 - Present",
		  jobs: [
		    {
		      title: "Professional Internship",
		      company: "Revergy SpA",
		      location: "Santiago, Chile",
		      period: "09/2023 - 02/2024",
		      description: "Proposed a project for the development of a photovoltaic plant monitoring platform, including architecture design, technology selection, and functional prototype development."
		    },
		    {
		      title: "Full Stack Developer",
		      company: "Revergy SpA",
		      location: "Santiago, Chile",
		      period: "05/2024 - Present",
		      description: "Development of a photovoltaic plant monitoring platform, including backend in Python with Django and frontend with Svelte, dockerization, and on-premises deployment."
		    }
		  ]
		},
		skills: {
			title: "Current Skills",
			period: "2026",
			description: "My core skills in practice.",
			legend: {
				title: "Skill Level:",
				basic: "Basic Knowledge",
				intermediate: "Intermediate",
				advanced: "Advanced"
			},
			categories: {
				languages: {
					title: "Programming Languages"
				},
				frontend: {
					title: "Frontend"
				},
				backend: {
					title: "Backend"
				},
				systems: {
					title: "Systems & Scripting"
				},
				orchestration: {
					title: "Orchestration & CI/CD"
				},
				versionControl: {
					title: "Version Control"
				},
				databases: {
					title: "Databases"
				},
				cloud: {
					title: "Cloud"
				},
				tools: {
					title: "Tools & Others"
				},
				concepts: {
					title: "Concepts & Architecture"
				}
			}
		}
	},
	projects: {
		title: "Projects",
		detailsButton: "View details",
		hero: {
			technologiesLabel: "Technologies",
			statusCompleted: "Completed",
			statusInProgress: "In progress"
		},
		entries: {
			portfolio: portfolioEn,
		}
	}
}