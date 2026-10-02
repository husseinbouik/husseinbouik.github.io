import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';

import css from '../../../styles/scss/sections/index/testimonials.module.scss';

import testimonialsData from '../../../content/index/testimonials.json';

interface Testimonial {
	quote: string;
	name: string;
	role: string;
}

export default function Testimonials() {
	const items: Testimonial[] = Array.isArray(testimonialsData)
		? (testimonialsData as Testimonial[])
		: (((testimonialsData as { testimonials?: Testimonial[] }).testimonials ?? []) as Testimonial[]);

	// No quotes yet — render nothing instead of an empty section
	if (!items.length) return null;

	return (
		<Section classProp={css.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					preTitle="Testimonials"
					title="What people say"
					subTitle="Kind words from managers, colleagues, and clients I've worked with."
				/>
				<div className={css.grid}>
					{items.map(({ quote, name, role }, index) => (
						<figure key={index} className={css.card}>
							<blockquote className={css.quote}>&ldquo;{quote}&rdquo;</blockquote>
							<figcaption className={css.author}>
								<strong>{name}</strong>
								<span>{role}</span>
							</figcaption>
						</figure>
					))}
				</div>
			</Container>
		</Section>
	);
}
