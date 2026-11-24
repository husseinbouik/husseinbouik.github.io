// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import about from '../../../styles/scss/sections/index/about.module.scss';
import React from "react";

const steps = [
	{
		year: '2022',
		title: 'Solicode — Tangier',
		copy: 'Two years of intensive, hands-on training in web and mobile development: PHP, JavaScript and full-stack project work in Agile teams, from fundamentals to shipping complete applications.',
	},
	{
		year: '2023',
		title: 'BSc — Université Abdelmalek Essaâdi',
		copy: 'Mathematics and Computer Science: algorithms, data structures and the software fundamentals everything since is built on.',
	},
	{
		year: '2024',
		title: 'WINS — WinBooks Maroc',
		copy: 'Full-stack .NET engineer on commercial and financial ERP modules. The same year, QATRA — built with Team Coding Commanders — took 1st place at SoliHackathon.',
	},
	{
		year: '2025',
		title: 'Tecnibo — 3D configurators',
		copy: 'Frontend developer specialising in the part most front-end developers avoid: the logic behind real-time 3D product configurators — zoning, dimensions, divisions — with React Three Fiber.',
	},
	{
		year: 'Now',
		title: 'NTT DATA — and my own products',
		copy: 'By day, .NET microservices for the UN Volunteers Platform. On the side, my own linear-division engine (Zoning Studio, playable above) and Ouiboo, a travel marketplace for Morocco.',
	},
];

export default function Home() {
	return (
		<Section id="about" classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Timeline"
					subTitle="Started in 2022, worked up from PHP to enterprise .NET — and specialised in the logic behind 3D product configurators, to the point of building my own engine for it."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/portrait.jpg" width={600} height={800} alt="Hussein Bouik in Tangier, Morocco" loading="lazy" />
					</div>
					<div className={about.copy}>
						{steps.map((step) => (
							<div key={step.year} className={about.container}>
								<h5>{step.year} — {step.title}</h5>
								<p>{step.copy}</p>
							</div>
						))}
					</div>
				</section>
			</Container>
		</Section>
	)
}
