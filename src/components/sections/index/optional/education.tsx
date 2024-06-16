
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
                                <h5>Tangier, Morocco</h5>
                            </span>
                            <p>I earned my Bachelor&apos;s degree in Computer Science (Sciences Mathématiques et Informatique) from Université Abdelmalek Essaâdi. This program provided me with a strong foundation in computer science fundamentals, including data structures, algorithms, networks, and computer architecture.  It also emphasized programming expertise in languages like C, HTML, CSS, PHP, and Java, and I gained in-depth knowledge of Linux and UML for system design and modeling.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                    <article className={career.company}>
                        <div className={career.companyContent}>
                            <span className={career.companyHeader}>
                                <h3>Solicode Training Center</h3>
                                <h5>Tangier, Morocco</h5>
                            </span>
                            <p>I completed a comprehensive training program at Solicode Training Center, earning  an OFPPT Certificate, as well as a certificate from Simplon. This rigorous program enhanced my skills in data analysis, data visualization, and the fundamentals of machine learning. The practical applications we covered during the program solidified my understanding of data-driven insights and analysis, equipping me with valuable tools for data-informed decision-making.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                    <article className={career.company}>
                        <div className={career.companyContent}>
                            <span className={career.companyHeader}>
                                <h3>Mohamed Arsalane High School</h3>
                                <h5>Tangier, Morocco</h5>
                            </span>
                            <p>I earned my Baccalaureate in Mathematics Science B from Mohamed Arsalane High School, demonstrating my strong foundation in mathematical principles and analytical thinking.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}

