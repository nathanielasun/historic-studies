import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import ImageCard from '../components/ui/ImageCard/ImageCard'
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
    const companyWork = `${content.company.description}\n\nDownload <a class="footer_link" href="${content.charles.vitae.url}" download>${content.charles.vitae.text}</a>`;

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
                        <h1 className={styles.connect} style={{textAlign: "center", position: 'relative', top:"2px"}}>About Charles Philips and HSL</h1>
                </div>
                <div className={`${styles.d_cards}`}>
                    <div className={`${styles.d_card}`}>
                        <ImageCard
                            variant="image-left"
                            image={{
                                src: content.charles.image.src,
                                alt: content.charles.image.alt,
                                width: content.charles.image.width,
                                height: content.charles.image.height
                            }}
                            title={content.charles.name}
                            text={charlesBio}
                        />
                    </div>
                    <div className={`${styles.d_card}`}>
                        <ImageCard
                            variant="image-right"
                            image={{
                                src: content.company.image.src,
                                alt: content.company.image.alt,
                                width: content.company.image.width,
                                height: content.company.image.height
                            }}
                            title={content.company.title}
                            text={companyWork}
                        />
                    </div>
                </div>
                <div className={`${styles.d_footer}`}>
                    <Footer />
                </div>
            </div>
        </section>
        </>
    )
}

export default About;