
// Section structure scss
import sections from '../../styles/scss/structure/section.module.scss';
import React from "react";

/**
 * Structural Component
 *
 * Section / Container / Componenents / Blocks / Utils
 * returns Section structure
 */
interface SectionProps {
	classProp?: string;
	id?: string;
	children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ classProp, id, children }) => {
	const _class = classProp ? classProp : '';

	return (
		<div id={id} className={`${sections.default} ${_class}`}>
			{children}
		</div>
	);
};

export default Section;
