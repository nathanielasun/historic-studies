import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import TimelineContainer from '../components/ui/Timeline/TimelineContainer'
import styles from '../styles/about.module.css'
import { getAboutContent } from '../lib/content'

export async function getStaticProps() {
    const content = getAboutContent();
    return {
        props: {
            content
        }
    };
}

const About = ({ content }) => {
    // Format Charles's bio with education
    const charlesBio = `${content.charles.education.map(edu =>
        `${edu.degree} ${edu.institution} (${edu.year})`
    ).join(' \n')}\n\n${content.charles.bio}`;

    // Format company work description with vitae link
    const companyWork = `${content.company.description}\n\nDownload <a class="inlineLink" href="${content.charles.vitae.url}" download>${content.charles.vitae.text}</a>`;

    // Convert to timeline format
    const projects = [
        {
            id: 'charles-philips',
            title: content.charles.name,
            description: charlesBio,
            image: {
                src: content.charles.image.src,
                alt: content.charles.image.alt,
                width: content.charles.image.width,
                height: content.charles.image.height
            }
        },
        {
            id: 'hsl-work',
            title: content.company.title,
            description: companyWork,
            image: {
                src: content.company.image.src,
                alt: content.company.image.alt,
                width: content.company.image.width,
                height: content.company.image.height
            }
        }
    ];

    return (
        <>
        <Head>
            <title>About | Historic Studies Limited</title>
        </Head>
        <section className={`${styles.full_env}`}>
            <div className={`${styles.d_encompass}`}>
                <div className={`${styles.d_header}`}>
                    <Header />
                </div>
                <div className={styles.d_connect}>
                    <h1 className={styles.connect}>About Charles Philips and HSL</h1>
                </div>
                <TimelineContainer
                    projects={projects}
                    showClient={false}
                />
                <div className={`${styles.d_footer}`}>
                    <Footer />
                </div>
            </div>
        </section>
        </>
    )
}

export default About;
