// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges'

// Section scss
import technical from '../../../styles/scss/sections/index/about.module.scss'


export default function Technical() {
	return (
		<Section id="skills" classProp={`${technical.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Skills"
					preTitle="Technical"
					subTitle="Three clusters, ordered by depth: the enterprise backend I ship daily, the frontend I build it with, and the 3D specialisation that sets my work apart."
				/>
				<section className={`${technical.content} ${technical.container}`}>
					<div className={technical.copy}>
						<BadgesBlock
							title="Backend & Cloud"
							copy="Enterprise .NET microservices — clean architecture, CQRS and Sagas, event-driven messaging — deployed on Azure and Kubernetes."
							list={backend}
							block="tech"
							fullContainer="fullContainer"
							icon="server"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined} />

						<BadgesBlock
							title="Frontend"
							copy="React and TypeScript interfaces for enterprise platforms and product tools — design systems, multilingual UI, role-based experiences."
							list={frontend}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined} />

						<BadgesBlock
							title="3D & Real-time"
							copy="Real-time 3D product configurators on the web: procedural geometry, division and zoning logic, and my own linear-division engine."
							list={threeD}
							block="tech"
							fullContainer="fullContainer"
							icon="cube"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined} />
					</div>
				</section>
			</Container>
		</Section>
	)
}

const backend = [
	{ key: 'csharp', name: 'C#', type: 'devicon' },
	{ key: 'dotnetcore', name: '.NET', type: 'devicon' },
	{ key: 'dotnetcore', name: 'ASP.NET Core', type: 'devicon' },
	{ key: 'azure', name: 'Microsoft Azure', type: 'devicon' },
	{ key: 'kubernetes', name: 'Kubernetes', type: 'devicon' },
	{ key: 'microsoftsqlserver', name: 'SQL Server', type: 'devicon' },
	{ key: 'docker', name: 'Docker', type: 'devicon' },
];

const frontend = [
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'nextjs', name: 'Next.js', type: 'devicon' },
	{ key: 'nodejs', name: 'Node.js', type: 'devicon' },
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
];

const threeD = [
	{ key: 'threejs', name: 'Three.js', type: 'devicon' },
	{ key: 'threejs', name: 'React Three Fiber', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
];
