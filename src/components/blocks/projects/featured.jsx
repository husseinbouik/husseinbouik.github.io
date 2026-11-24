import Image from 'next/image'
import Link from 'next/link'

import {useEffect} from 'react'
import {m, useAnimation} from "framer-motion"
import {useInView} from 'react-intersection-observer'

import css from '../../../styles/scss/sections/projects/featured.module.scss'

export default function FeaturedProject({ content, index, small }) {

	const { project, tag, year, descriptionTitle, description, stack, image, actions = [], badge, credit, engine, muted } = content

	const controls = useAnimation();
	const { ref, inView } = useInView({ "threshold": 0.1, "triggerOnce": true })

	useEffect(() => {
		if (inView) { controls.start("visible") }
	}, [controls, inView])

	const primary = actions.find((a) => a.primary) || actions[0]
	const imageLink = primary && !muted && !primary.url.startsWith('/') ? primary.url : null

	return (
		<m.article
			key={index}
			className={`${css.project} ${muted ? css.projectMuted : ''} ${small ? css.projectSmall : ''}`}
			ref={ref}
			variants={item}
			initial="hidden"
			animate={controls}>

			{image && (
				imageLink ? (
					<a href={imageLink} target="_blank" rel="noreferrer" className={css.cardImage} aria-label={project}>
						<Image src={image} alt={project} width={1200} height={750} loading="lazy" />
					</a>
				) : (
					<div className={css.cardImage}>
						<Image src={image} alt={project} width={1200} height={750} loading="lazy" />
					</div>
				)
			)}

			<div className={css.details}>
				<div className={css.metaRow}>
					<span className={css.tag}>{tag}</span>
					<span className={css.year}>{year}</span>
				</div>
				<h3>{project}</h3>
				<p className={css.description}><strong>{descriptionTitle}</strong> {description}</p>
				{credit && <p className={css.credit}>{credit}</p>}
				{badge && <p className={css.badgeNote}>{badge}</p>}
				<p className={css.stackLine}>{(stack || []).join(' · ').toUpperCase()}</p>
				{actions.length > 0 && (
					<div className={css.actions}>
						{actions.map((a) => (
							a.url.startsWith('/') ? (
								<Link key={a.label} href={a.url} className={a.primary ? css.actionPrimary : css.actionLink}>{a.label}</Link>
							) : (
								<a key={a.label} href={a.url} target="_blank" rel="noreferrer" className={a.primary ? css.actionPrimary : css.actionLink}>{a.label}</a>
							)
						))}
					</div>
				)}
				{engine && (
					<div className={css.engine}>
						<span className={css.engineLabel}>{engine.label}</span>
						<p>{engine.text}</p>
						<a href={engine.url} target="_blank" rel="noreferrer" className={css.actionLink}>View engine repository ↗</a>
					</div>
				)}
			</div>
		</m.article>
	)
}

const item = {
	hidden: { y: 40, opacity: 0, transition: { type: "tween", ease: "easeIn", duration: .3 } },
	visible: { y: 0, opacity: 1, transition: { type: "tween", ease: "easeOut", duration: .5 } },
}
