
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
							copy="My approach to development is rooted in a strong foundation of logical thinking and problem-solving, backed by my degree in mathematics and computer science. I'm adept at breaking down complex challenges into manageable components, finding creative solutions, and delivering efficient results. I'm always eager to learn new approaches and stay ahead of the curve in the ever-evolving tech landscape."
							iconClass={technical.icon}
							containerClass={technical.container}
						/>

						<BadgesBlock
							title="Software I love to work with"
							copy="I'm a software engineer who works across the entire development spectrum — from enterprise .NET backends to immersive 3D web experiences. I'm comfortable owning the full lifecycle, from architecture to delivery, and I'm always eager to learn new tools and technologies."
							list={software}
							block="software"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>

						<BadgesBlock
							title="Technologies I love to build with"
							copy="I'm a passionate problem-solver who thrives on using code to create solutions that make a tangible difference. My projects span demanding domains — from the UN Volunteers enterprise platform (.NET microservices on Azure) to real-time 3D product configurators (React Three Fiber) to AI-assisted automation running in production — always choosing the right tool for the problem."
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