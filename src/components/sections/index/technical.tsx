
// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

// Section scss
import technical from '../../../styles/scss/sections/index/about.module.scss'


export default function Technical() {
	return (
		<Section classProp={`${technical.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hard Skills"
					subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
				/>
				<section className={`${technical.content} ${technical.container}`}>
					<div className={technical.copy}>
						<CopyBlock
							title="Logical Thinking"
							icon={['fas', 'chart-network']}
							copy="My approach to development is rooted in a strong foundation of logical thinking and problem-solving. I'm adept at breaking down complex challenges into manageable components, finding creative solutions, and delivering efficient results. My training in data analysis and visualization has further honed these skills, allowing me to analyze information, identify patterns, and make data-driven decisions. I'm always eager to learn new approaches and stay ahead of the curve in the ever-evolving tech landscape."
							iconClass={technical.icon}
							containerClass={technical.container}
						/>

						<BadgesBlock
							title="Software I love to work with"
							copy="I'm a self-taught programmer with a deep passion for building impactful projects. I'm comfortable working across the entire development spectrum, from front-end to back-end, and I'm always eager to learn new tools and technologies."
							list={software}
							block="software"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>

						<BadgesBlock
							title="Technologies I love to build with"
							copy="I'm a passionate problem-solver who thrives on using coding to create innovative solutions that make a tangible difference. My projects span diverse domains, from building educational platforms (Soli-LMS) to developing a water conservation solution (SoliHackathon), showcasing my ability to apply my skills to solve real-world problems. I'm always searching for new opportunities to leverage my expertise and make a positive contribution."
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>

					</div>
					<div className={`${technical.image} ${technical.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="data string background"   loading="eager" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}
{/*Badge Block*/}
const software = [
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'jetbrains', 	name: 'JetBrains', 			type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'docker', 		name: 'Docker', 			type: 'devicon' },
	{ key: 'github', 		name: 'GitHub', 			type: 'devicon' },
]


const tech = [
	{ key: 'csharp', name: 'C#', type: 'devicon' },
	{ key: 'dotnetcore', name: '.NET', type: 'devicon' },
	{ key: 'dotnetcore', name: 'ASP.NET Core', type: 'devicon' },
	{ key: 'microservices', name: 'Microservices', type: 'devicon' },
	{ key: 'restapi', name: 'REST APIs', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'threejs', name: 'Three.js', type: 'devicon' },
	{ key: 'threejs', name: 'React Three Fiber', type: 'devicon' },
	{ key: 'nextjs', name: 'Next.js', type: 'devicon' },
	{ key: 'nodejs', name: 'Node.js', type: 'devicon' },
	{ key: 'azure', name: 'Microsoft Azure', type: 'devicon' },
	{ key: 'docker', name: 'Docker', type: 'devicon' },
	{ key: 'kubernetes', name: 'Kubernetes', type: 'devicon' },
	{ key: 'microsoftsqlserver', name: 'SQL Server', type: 'devicon' },
	{ key: 'entityframework', name: 'Entity Framework', type: 'devicon' },
	{ key: 'tailwindcss', name: 'Tailwind CSS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
];