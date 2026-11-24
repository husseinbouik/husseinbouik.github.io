import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title'

import tiers from '../../../styles/scss/sections/projects/tiers.module.scss'
import groups from '../../../content/projects/archive.json'

{/* Complete archive — Tier 3, collapsed by default, #archive permalink */}
export default function Archive() {
	return (
		<Section id="archive">
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Complete Archive"
					preTitle="Tier 3 — Archive"
					subTitle="Every project, 2024–present — nothing cut, just ordered by prominence."
				/>
				<details className={tiers.archive}>
					<summary className={tiers.archiveSummary}>Complete archive — every project, 2024–present</summary>
					{groups.map((group) => (
						<div key={group.year} className={tiers.archiveGroup}>
							<h4 className={tiers.archiveYear}>{group.year}</h4>
							<div>
								{group.items.map((item) => (
									<div key={item.name} className={tiers.archiveRow}>
										<span className={tiers.archiveName}>{item.name}</span>
										<span className={tiers.archiveWhat}>{item.what}</span>
										<span className={tiers.archiveStack}>{item.stack}</span>
										<span className={tiers.archiveLink}>
											{item.url ? (
												item.url.startsWith('/') ? (
													<a href={item.url}>Open →</a>
												) : (
													<a href={item.url} target="_blank" rel="noreferrer">Open ↗</a>
												)
											) : '—'}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</details>
			</Container>
		</Section>
	)
}
