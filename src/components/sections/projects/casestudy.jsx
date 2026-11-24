import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title'

import tiers from '../../../styles/scss/sections/projects/tiers.module.scss'

{/* UVP internal case study — capability-level summary only, no employer material */}
export default function CaseStudy() {
	return (
		<Section id="uvp-case-study" classProp={tiers.caseStudy}>
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Unified Volunteers Platform"
					preTitle="Case Study — Employer Work"
					subTitle="Employer work — summary only. Code and product are employer-owned; nothing proprietary is shown here."
				/>
				<div className={tiers.caseGrid}>
					<div className={tiers.caseBlock}>
						<h4>Context</h4>
						<p>The Unified Volunteers Platform is the UN Volunteers programme&apos;s system for volunteer registration, candidate profiles, host-organisation management, opportunity publishing, assignments and recruitment workflows — serving a global audience.</p>
					</div>
					<div className={tiers.caseBlock}>
						<h4>My Role</h4>
						<p>Full-stack software engineer at NTT DATA, shipping features across a React/TypeScript frontend and a .NET microservices backend: role-based access, multilingual interfaces, document handling, search, notifications, and integrations with external UNV systems.</p>
					</div>
					<div className={tiers.caseBlock}>
						<h4>Stack &amp; Patterns</h4>
						<p>.NET microservices on Azure and Kubernetes, with CQRS and Saga orchestration and event-driven communication over Service Bus. AI services built by a dedicated team are consumed through APIs where workflows need them.</p>
					</div>
					<div className={tiers.caseBlock}>
						<h4>Outcomes</h4>
						<p>Production features delivered to a live global platform. One measured result: a recruiter data export that took a colleague 2+ hours over ~400 records now runs in under 30 minutes after I rebuilt it as an automated batch process.</p>
					</div>
				</div>
			</Container>
		</Section>
	)
}
