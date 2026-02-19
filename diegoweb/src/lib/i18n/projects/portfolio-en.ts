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
				"After completing my degree in Electronic Engineering and gaining experience as a Full Stack developer, I needed something solid to showcase my work professionally. Beyond just displaying projects, I wanted to demonstrate that I can learn and apply modern technologies in an organized and rational way.",
				"While this isn't a large-scale or high-impact project, I deliberately went beyond a simple static site. I implemented a complete AWS infrastructure with S3, CloudFront, and Route 53, set up CI/CD pipelines with GitHub Actions, and configured dual environments (staging and production) with separate infrastructure. These are technologies I'm actively learning and, although I don't have extensive professional experience with them yet, I wanted to prove I can apply them effectively.",
				"This project reflects my approach to learning: hands-on, practical, and always pushing myself to go one step further than the minimum required."
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
					"Merges to main trigger build + deployment to S3",
					"Automatic CloudFront cache invalidation after deployment",
					"Currently identical for staging and production (artifact promotion planned)"
				]
			},
			nextSteps: "Next improvements: implement artifact-based promotion from staging to production using S3 sync between buckets, avoiding redundant builds."
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
		gallery: {
			title: "Gallery",
			images: [
				{
					src: "/images/projects/portfolio.png",
					alt: "Home page",
					caption: "Home page with tech-inspired design"
				},
				{
					src: "/images/projects/portfolio.png",
					alt: "Projects section",
					caption: "Project list with interactive cards"
				},
				{
					src: "/images/projects/portfolio.png",
					alt: "About page",
					caption: "Experience and education timeline"
				},
				{
					src: "/images/projects/portfolio.png",
					alt: "Responsive design",
					caption: "Fully responsive design on mobile"
				}
			]
		}
	}
};
