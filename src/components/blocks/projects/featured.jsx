
import Image from 'next/image'

import {useEffect} from 'react'
import {m, useAnimation} from "framer-motion"
import {useInView} from 'react-intersection-observer'

import Badges from '../../utils/badge.list'
import Icon from '../../utils/icon'

import css from '../../../styles/scss/sections/projects/featured.module.scss'

export default function FeaturedProject({ content, index }) {

	const { project, url, repo, descriptionTitle, description, stack, images } = content

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.1,
		"triggerOnce": true
	})

	useEffect( () => {
		if ( inView ) { controls.start("visible") }
	}, [ controls, inView ] )

	const image = (images || [])[0]

	return (
		<m.article
			key={index}
			className={css.project}
			ref={ref}
			variants={item}
			initial="hidden"
			animate={controls} >

			{ image && (
				<a href={url} target="_blank" rel="noreferrer" className={css.cardImage} aria-label={project}>
					<Image src={image.url} alt={project} width={1280} height={720} loading="lazy" />
				</a>
			)}

			<div className={css.details}>
				<div className={css.header}>
					<h3 className="highlight">{project}</h3>
					<span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span>
				</div>
				<p className={css.description}><strong>{descriptionTitle}</strong> {description}</p>
				<div className={css.stackContainer}>
					<Badges list={stack} block="stack" fullContainer={false} color={false} />
				</div>
				<a href={url} target="_blank" rel="noreferrer" className={css.viewProject} aria-label={`Open ${project}`}>
					<Icon icon={[ 'fas', 'arrow-right-to-bracket' ]} />
				</a>
			</div>
		</m.article>
	)
}

const item = {
	hidden: {
		y: 40,
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: .3,
		},
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: .5,
		},
	},
}
