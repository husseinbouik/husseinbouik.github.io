// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'


export default function Education() {
    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Education"
                    preTitle="Formal"
                    subTitle="My educational journey has equipped me with a strong foundation in computer science and web development."
                />
                <section className={career.area}>

                    <article className={career.company}>
                        <div className={career.companyContent}>
                            <span className={career.companyHeader}>
                                <h3>Université Abdelmalek Essaâdi</h3>
                                <h5>Tangier, Morocco · 2020 — 2023</h5>
                            </span>
                            <p>BSc in Mathematics and Computer Science — a strong foundation in algorithms, data structures, and software fundamentals.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                    <article className={career.company}>
                        <div className={career.companyContent}>
                            <span className={career.companyHeader}>
                                <h3>Solicode Training Center</h3>
                                <h5>Tangier, Morocco · 2022 — 2024</h5>
                            </span>
                            <p>Certificate in Web and Mobile Development — two years of intensive hands-on training building real-world full-stack and mobile applications in Agile teams.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                    <article className={career.company}>
                        <div className={career.companyContent}>
                            <span className={career.companyHeader}>
                                <h3>Simplon Grand Ouest</h3>
                                <h5>2022 — 2023</h5>
                            </span>
                            <p>Professional certificate in Web Development, completed through the hands-on training program at Solicode Tanger.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}

