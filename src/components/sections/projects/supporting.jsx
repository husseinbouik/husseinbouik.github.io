import FeaturedProject from '../../blocks/projects/featured'

import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title'

import css from '../../../styles/scss/sections/projects/featured.module.scss'
import tiers from '../../../styles/scss/sections/projects/tiers.module.scss'
import content from '../../../content/projects/supporting.json'

{/* Supporting Projects — Tier 2 */}
export default function SupportingProjects() {
	return (
		<Section classProp={css.hasBg}>
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Supporting Projects"
					preTitle="Tier 2 — Supporting"
					subTitle="A hackathon win, a live client product, and deliberate breadth beyond my main stack."
				/>
				<div className={tiers.supportingGrid}>
					{content.map((data, index) => (
						<FeaturedProject content={data} index={index} key={data.project} small />
					))}
				</div>
			</Container>
		</Section>
	)
}
