import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';

import button from '../../../styles/scss/blocks/button.module.scss';
import css from '../../../styles/scss/sections/index/contact.module.scss';

export default function Contact() {
	return (
		<Section classProp={css.section}>
			<Container spacing={['verticalXXXLrg']}>
				<div className={css.centered}>
					<SectionTitle
						preTitle="Contact"
						title="Have a project in mind?"
						subTitle="I'm open to freelance projects and full-time opportunities with teams building ambitious products. The fastest way to reach me is email — I usually reply within a day."
					/>
					<div className={css.ctaRow}>
						<button
							className={`${button.btn} ${button.btnPrimary}`}
							onClick={() => (window.location.href = 'mailto:husseinbouik5@gmail.com')}
						>
							Hire Me
						</button>
						<button
							className={`${button.btn} ${button.btnSecondary} leaveSite`}
							onClick={() => window.open('https://www.linkedin.com/in/hussein-bouik/', '_blank')}
						>
							LinkedIn
						</button>
						<a
							className={`${button.btn} ${button.btnSecondary}`}
							href="/Hussein_Bouik_CV.pdf"
							download="Hussein_Bouik_CV.pdf"
						>
							Download CV
						</a>
					</div>
				</div>
			</Container>
		</Section>
	);
}
