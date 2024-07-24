import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	carrent,
	jobit,
	tripguide,
	threejs,
	micaniLabsLogo,
	iiinigenceLogo,
	voidLogo,
	voiceFirst,
	lootcoper,
	thesia,
	daperformers,
	sonata,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Full Stack Developer",
		company_name: "Voice First LLC",
		icon: voiceFirst,
		iconBg: "#fff",
		date: "March 2022 - April 2024",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Next.js Developer",
		company_name: "Micani Labs",
		icon: micaniLabsLogo,
		iconBg: "#383E56",
		date: "March 2022 - April 2024",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "IIINIGENCE",
		icon: iiinigenceLogo,
		iconBg: "#E6DEDD",
		date: "Dec 2020 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Void",
		icon: voidLogo,
		iconBg: "#383E56",
		date: "Jan 2018 - Nov 2020",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Lootcopter Studio",
		icon: lootcoper,
		iconBg: "#d64b3c",
		date: "Jan 2016 - Dec 2018",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Hardworking and professional at all times, Tahir is producing amazing work for us and moving us forward faster than we expected towards an MVP. High quality code and works efficiently",
		name: "Ryan Matovu",
		designation: "CEO",
		company: "Micani Labs",
	},
	{
		testimonial:
			"I appreciated the clear communication through the whole process and how efficient he was. Would definitely work with him again.",
		name: "Ashleigh Ryan",
		designation: "COO",
		company: "Evolve Virtually",
	},
	{
		testimonial:
			"Excellent work!! Tahir provided helpful, thoughtful guidance with my back-end issue.",
		name: "Timothy Ngo",
		designation: "CEO",
		company: "Kriss AI",
	},
];

const projects = [
	{
		name: "Thesia Character",
		description:
			"Thesia is an application for human-like interaction with a wide array of AI charactersThesia is an application for human-like interaction with a wide array of AI characters. Thesia Character boasts an extensive character library, and you have the power to create characters to your liking.",
		tags: [
			{
				name: "React JS",
				color: "blue-text-gradient",
			},
			{
				name: "Firebase",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "pink-text-gradient",
			},
		],
		image: thesia,
		source_code_link: "https://thesia.ai/character",
	},
	{
		name: "Daperformers ",
		description:
			"Da Performers is a cutting-edge digital collectibles platform featuring unique NFTs that represent various characters on the blockchain. Each NFT grants the owner exclusive intellectual property rights to their character.",
		tags: [
			{
				name: "next js",
				color: "blue-text-gradient",
			},
			{
				name: "django",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "pink-text-gradient",
			},
		],
		image: daperformers,
		source_code_link: "https://www.daperformers.com/",
	},
	{
		name: "Sonata Tips",
		description:
			"Developed a cutting-edge Web3 music sharing platform called Wrapcast. This innovative application leverages the capabilities of Next.js to provide a seamless user experience for music enthusiasts. ",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "Django",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "pink-text-gradient",
			},
		],
		image: sonata,
		source_code_link: "https://www.sonata.tips/",
	},
];

export { services, technologies, experiences, testimonials, projects };
