// Core packages
import Badges from '../../../utils/badge.list'

// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'
import Education from "./education";


export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="Software Engineer building enterprise-grade systems and immersive 3D web experiences — from .NET microservices on Azure to real-time 3D configurators on the web."
				/>
				<section className={career.area}>

					<div className={career.position}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Software Engineer</h3>
								<h4>NTT DATA, Inc. · Full-time · Mar 2026 — Present</h4>
							</span>
							<p>
								Developing the Unified Volunteers Platform for the United Nations Volunteers — full-stack features across a React/TypeScript frontend and .NET microservices backend: role-based access, multilingual interfaces, document handling, search, notifications, and external UNV integrations, on cloud-native Azure/Kubernetes with CQRS, Sagas, and event-driven communication.
							</p>
						</div>
						<div className={career.companyAlt}></div>
						<Badges list={nttStack} block="stack" fullContainer="fullContainer" color={undefined}/>
					</div>

					<div className={career.position}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Frontend React Developer</h3>
								<h4>Tecnibo · Full-time · Aug 2025 — Mar 2026</h4>
							</span>
							<p>
								Built advanced 3D configurator systems for Oaksome with React, React Three Fiber, Three.js, and Drei — modular UI systems for doors, partitions, walls, and zoning, an IMOS-like spatial planning environment, reusable performance-optimized 3D components, and long-term frontend architecture decisions.
							</p>
						</div>
						<div className={career.companyAlt}></div>
						<Badges list={tecniboStack} block="stack" fullContainer="fullContainer" color={undefined}/>
					</div>

					<div className={career.position}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Full-Stack Engineer</h3>
								<h4>WINS · WinBooks Maroc · Full-time · Nov 2024 — Jul 2025</h4>
							</span>
							<p>
								Developed commercial and financial ERP modules (WinHub) in .NET/C# — plus an AI-powered bank-statement importer using LlamaIndex Cloud that automates reading, classifying, and inserting transactions.
							</p>
						</div>
						<div className={career.companyAlt}></div>
						<Badges list={winsStack} block="stack" fullContainer="fullContainer" color={undefined}/>
					</div>

					<div className={career.position}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Full-Stack Developer</h3>
								<h4>Solicode Tanger · Sep 2022 — Jul 2024</h4>
							</span>
							<p>
								Two years of intensive hands-on training in web and mobile development — real-world full-stack projects in Agile teams, from fundamentals to shipping complete applications.
							</p>
						</div>
						<div className={career.companyAlt}></div>
						<Badges list={solicodeStack} block="stack" fullContainer="fullContainer" color={undefined}/>
					</div>

				</section>
			</Container>
			<Education/>

		</Section>

	)
}

const nttStack = [
	{ key: 'csharp', name: 'C#', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
];

const tecniboStack = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'tailwindcss', name: 'Tailwind CSS', type: 'devicon' },
];

const winsStack = [
	{ key: 'csharp', name: 'C#', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
];

const solicodeStack = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'android', name: 'Android', type: 'devicon' },
];
