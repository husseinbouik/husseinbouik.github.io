import React from 'react';
import colors from '../src/content/index/_colors.json';
import TitleIndex from './title.index';

// Import your components with dynamic import
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('../src/components/sections/index/hero'));
const About = dynamic(() => import('../src/components/sections/index/home'));
const Career = dynamic(() => import('../src/components/sections/index/optional/career'));
const FeaturedProjects = dynamic(() => import('../src/components/sections/projects/featured'));
const Testimonials = dynamic(() => import('../src/components/sections/index/testimonials'));
const Technical = dynamic(() => import('../src/components/sections/index/technical'));
const Contact = dynamic(() => import('../src/components/sections/index/contact'));
const Color = dynamic(() => import('../src/components/utils/page.colors'));

export default function HomePage() {
	return (
		<div>
			<TitleIndex />
			<Color colors={colors} />
			<Hero />
			<About />
			<Career />
			<FeaturedProjects />
			<Testimonials />
			<Technical />
			<Contact />
		</div>
	);
}
