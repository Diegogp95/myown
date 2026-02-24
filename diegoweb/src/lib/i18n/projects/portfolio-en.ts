export default {
	title: "Personal Portfolio (this website)",
	description: "A personal portfolio website built with SvelteKit, featuring a modern design with tech-inspired colors and animations. Showcases my skills, projects, and experience in web development.",
	image: "/images/projects/portfolio.png",
	date: "February 2026",
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
			title: "Why This Project?",
			paragraphs: [
				"After completing my degree in Electronic Engineering and working as a Full Stack developer, I wanted a portfolio that did more than showcase projects. I wanted it to reflect how I think about software: structured, intentional, and production-oriented.",
				"Although the site itself is static, I deliberately designed it with a production-grade cloud architecture. Instead of relying on plug-and-play hosting, I implemented a full AWS setup using Amazon S3, Amazon CloudFront, and Amazon Route 53, alongside automated CI/CD pipelines powered by GitHub Actions. I also configured fully isolated staging and production environments.",
				"My goal was not complexity for its own sake, but to demonstrate practical understanding of infrastructure, deployment workflows, caching strategies, and environment separation.",
				"The project also reflects how I approach technical problems: researching alternatives, evaluating architectural decisions, and aiming for coherent, well-reasoned solutions, even in seemingly simple contexts."
			]
		},
		infrastructure: {
			title: "Infrastructure & DevOps",
			intro: "The real learning experience came from setting up a professional-grade deployment pipeline and cloud infrastructure:",
			aws: {
				title: "AWS Architecture",
				items: [
					"Amazon S3 - Separate buckets for staging and production static hosting",
					"CloudFront - CDN distributions for both environments with custom domain support",
					"Route 53 - DNS management and routing",
					"Completely isolated infrastructure between environments"
				]
			},
			cicd: {
				title: "CI/CD Pipeline",
				items: [
					"Pull Requests trigger automated builds for validation",
					"The pipeline generates a static build artifact only once",
					"Staging deployment uses the artifact produced during the build stage",
					"Production does not rebuild the project; it promotes the artifact from the staging S3 bucket",
					"S3 bucket synchronization is used to promote versions between environments",
					"Automatic CloudFront cache invalidation after each deployment"
				]
			},
			nextSteps: "Next improvements: artifact versioning and release/tag-based promotion to control which version is deployed to production."
		},
		techStack: {
			title: "Tech Stack",
			frontend: {
				title: "Frontend",
				items: [
					"Svelte 5.41.2",
					"SvelteKit 2.52.2 with TypeScript",
					"Tailwind CSS v4 for styling",
				]
			},
			tools: {
				title: "Development Tools",
				items: [
					"Docker for local development environment",
					"GitHub Actions for CI/CD automation"
				]
			}
		},
	}
};
