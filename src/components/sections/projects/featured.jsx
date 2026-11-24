import Link from 'next/link'

import FeaturedProject from '../../blocks/projects/featured'

import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title'

import css from '../../../styles/scss/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

{/* Featured Projects — Tier 1 */}
export default function FeaturedProjects({ limit, preTitle = 'Tier 1 — Featured', title = 'Featured Projects', subTitle = 'Five projects, ordered by proof: my own engine, enterprise scale, applied 3D product work, 3D breadth, then the product I am founding.' }) {

	const items = limit ? content.slice(0, limit) : content

	return (
		<Section classProp={css.hasBg}>
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle title={title} preTitle={preTitle} subTitle={subTitle} />
				<div className={css.projectsGrid}>
					{items.map((data, index) => (
						<FeaturedProject content={data} index={index} key={data.project} />
					))}
				</div>
				{limit && (
					<p className={css.moreLink}>
						<Link href="/projects">View all projects →</Link>
					</p>
				)}
			</Container>
		</Section>
	)
}
