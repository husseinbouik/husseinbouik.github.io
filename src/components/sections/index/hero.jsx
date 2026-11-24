import React from 'react';
import Link from 'next/link';

import Section from '../../structure/section';
import Container from '../../structure/container';

import space from '../../utils/spacing';

import HeroBg from '../../blocks/hero.bg/section-bg-color';

import hero from '../../../styles/scss/sections/index/hero.module.scss';
import button from '../../../styles/scss/blocks/button.module.scss';

import content from '../../../content/index/hero.json';

export default function Hero() {
	return (
		<Section classProp={`${hero.section}`}>
			<Container spacing={'VerticalXXXL'}>
				<p className={hero.availability}>
					<span className={hero.availabilityDot} aria-hidden="true" />
					{content.status}
				</p>
				<section>
					<h1 className={hero.header}>{content.header.name}</h1>
					<p className={`${hero.header} ${hero.primaryDim}`}>{content.header.usp}</p>
				</section>
				<section>
					<p className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
						{content.paragraph}
					</p>
				</section>
				<section className={hero.ctaRow}>
					<Link href={content.buttons.primary.url} className={`${button.btn} ${button.btnPrimary}`}>
						{content.buttons.primary.title}
					</Link>
					<a
						href={content.buttons.secondary.url}
						download="Hussein_Bouik_CV.pdf"
						className={`${button.btn} ${button.btnSecondary}`}
					>
						{content.buttons.secondary.title}
					</a>
				</section>
				<section className={hero.stats} aria-label="Key facts">
					{content.stats.map(({ value, label }) => (
						<div key={label} className={hero.stat}>
							<span className={hero.statValue}>{value}</span>
							<span className={hero.statLabel}>{label}</span>
						</div>
					))}
				</section>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	);
}
