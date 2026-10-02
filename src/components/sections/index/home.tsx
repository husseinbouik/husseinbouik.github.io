
// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

import about from '../../../styles/scss/sections/index/about.module.scss';
import React from "react";

export default function Home() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I'm a software engineer working where enterprise backends, real-time 3D, and applied AI meet — currently building the Unified Volunteers Platform at NTT DATA on .NET microservices and Azure."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="https://raw.githubusercontent.com/husseinbouik/images/main/hussein-bouik-kasbah.jpg" width={600} height={800} alt="Hussein Bouik"   loading="eager" />
					</div>
					<div className={about.copy}>
						<CopyBlock
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'user' ]}
							copy="I collaborate with international teams across time zones — engineers, designers, and clients. I take ownership of complex work, communicate clearly, and keep delivery moving: from architecture decisions and code reviews to shipping reliably in Agile teams."
						/>
						<CopyBlock
							title="Development and Projects"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'code']}
							copy="My core craft is .NET microservices — clean architecture, CQRS, and event-driven systems on Azure — paired with immersive real-time 3D on the web using React Three Fiber and Three.js, plus AI-assisted automation already running in production."
						/>
					</div>
				</section>
				<section className={about.content}>
					<div className={about.copy}>
						<CopyBlock
							title="Security and Privacy"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'shield-alt']}
							copy="Security-first by default: role-based access, careful handling of user data, and industry best practices baked into every system I ship."
						/>
						<CopyBlock
							title="Constant Learning and Improvements"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'book']}
							copy="I learn continuously and work AI-fluent — currently progressing through the Claude certification track and applying LLM-assisted workflows to real production systems."
						/>



						<BadgesBlock
							title="Research and planning"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="fingerprint"
							copy="The research and planning phase is an essential and exhilarating part of my creative process. I delve deep into every aspect of a project, from design systems to brand strategy, to craft exceptional user experiences. My dedication to ongoing learning and research keeps me abreast of industry trends. By strategically planning and executing projects, I aim to deliver measurable results and create digital experiences that exceed expectations."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`} invertedColor={undefined}						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}
const methods = [
	{ key: 'machinelearning', name: 'AI-powered solutions', type: 'fas', icon: 'devicon' },
	{ key: 'artificialintelligence', name: 'Data insights', type: 'fas', icon: 'devicon' },
	{ key: 'deeplearning', name: 'AI-driven innovation', type: 'fas', icon: 'devicon' },
	{ key: 'neuralnetworks', name: 'Smart tech', type: 'fas', icon: 'devicon' },

];
