import dynamic from "next/dynamic";

const FeaturedProjects = dynamic(import('../../src/components/sections/projects/featured'));
const CaseStudy = dynamic(import('../../src/components/sections/projects/casestudy'));
const SupportingProjects = dynamic(import('../../src/components/sections/projects/supporting'));
const Archive = dynamic(import('../../src/components/sections/projects/archive'));

import Color from '../../src/components/utils/page.colors'
import colors from '../../src/content/projects/_colors.json'
import TitleProjects from "./title.projects";

// Projects page — fully curated static content (no live GitHub feed).
export default function Projects() {
	return (
		<>
			<TitleProjects />
			<Color colors={colors} />
			<FeaturedProjects />
			<CaseStudy />
			<SupportingProjects />
			<Archive />
		</>
	)
}
