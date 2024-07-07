
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
					subTitle="My passion for creating new things ignited early on. I was drawn to the world of design and coding, where I could blend my creative vision with technical prowess. I love the process of crafting innovative solutions that are not only functional but also visually stunning. My goal is to create experiences that resonate with users and leave a lasting impression. I'm meticulous about detail and strive to deliver high-quality work that exceeds expectations. My journey as a web developer is fueled by this desire to make a difference, and I'm excited to continue pushing the boundaries of what's possible in the digital world."
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
							copy="My foundation in design and technology has equipped me with the skills to excel as a developer. I am adept at delivering high-quality solutions that meet and exceed expectations. Beyond my technical proficiency, I'm also a strong leader, capable of managing complex projects, prioritizing tasks effectively, and juggling multiple responsibilities. I am committed to continuous learning, constantly seeking new knowledge and staying current with industry trends. My passion for creating innovative and efficient applications drives me to bring value and success to every project I undertake."
						/>
						<CopyBlock
							title="Development and Projects"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'code']}
							copy="My passion lies in the process of development and project execution. I thrive on the challenge of transforming ideas into functional, robust solutions. From meticulous planning and efficient workflows to a keen eye for detail, I'm committed to ensuring successful project delivery, consistently exceeding expectations and achieving project objectives. I'm eager to leverage my skills and experience to build innovative applications that solve real problems and make a tangible difference in the world."
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
							copy="Security and privacy are fundamental principles in my approach to web development. I prioritize the protection of user data and employ robust security measures to safeguard sensitive information. I adhere to industry best practices, stay vigilant about emerging threats, and continuously enhance my knowledge to ensure the highest level of security for users. Building trust and confidentiality is paramount in my work, creating secure and private experiences for everyone."
						/>
						<CopyBlock
							title="Constant Learning and Improvements"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'book']}
							copy="I have an unquenchable thirst for knowledge and a passion for continuous learning and development. Staying ahead of the curve is crucial in the ever-evolving tech landscape. I actively seek new challenges and expand my skillset to ensure I'm delivering cutting-edge solutions and providing valuable insights to clients. My commitment to lifelong learning fuels my dedication to creating innovative and impactful projects."
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
	{ key: 'machinelearning', name: 'AI-powered solutions', type: 'fad', icon: 'devicon' },
	{ key: 'artificialintelligence', name: 'Data insights', type: 'fad', icon: 'devicon' },
	{ key: 'deeplearning', name: 'AI-driven innovation', type: 'fad', icon: 'devicon' },
	{ key: 'neuralnetworks', name: 'Smart tech', type: 'fad', icon: 'devicon' },

];
