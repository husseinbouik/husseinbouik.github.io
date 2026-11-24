import React from 'react';
import colors from '../src/content/index/_colors.json';
import TitleIndex from './title.index';

// Import your components with dynamic import
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('../src/components/sections/index/hero'));
const FeaturedProjects = dynamic(() => import('../src/components/sections/projects/featured'));
const Career = dynamic(() => import('../src/components/sections/index/optional/career'));
const Technical = dynamic(() => import('../src/components/sections/index/technical'));
const About = dynamic(() => import('../src/components/sections/index/home'));
const Contact = dynamic(() => import('../src/components/sections/index/contact'));
const Color = dynamic(() => import('../src/components/utils/page.colors'));

export default function HomePage() {
	return (
		<div>
			<TitleIndex />
			<Color colors={colors} />
			<Hero />
			<FeaturedProjects
				limit={3}
				preTitle="Proof First"
				title="Featured Projects"
				subTitle="The strongest proof first: my own 3D engine, enterprise scale at the UN, and applied configurator product work."
			/>
			<Career />
			<Technical />
			<About />
			<Contact />
		</div>
	);
}
