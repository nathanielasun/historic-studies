import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/contact.module.css';
import ImageCard from '../components/ui/ImageCard/ImageCard';

const Contact = () => {

    const contactInfo = `\n\n\n<b>Email:</b> <a class="inlineLink" href="mailto:cphilips5509@gmail.com">cphilips5509@gmail.com</a>\n\n<b>Telephone:</b> +1 (843)-532-6327\n\n\n\n`;

    return (
        <>
        <Head>
            <title>Contact | Historic Studies Limited</title>
        </Head>
        <section className={`${styles.full_env}`}>
            <div className={`${styles.d_encompass}`}>
                <div className={`${styles.d_header}`}>
                    <Header />
                </div>
                <div className={styles.d_connect}>
                        <h1 className={styles.connect}>Connect with Historic Studies Limited</h1>
                    </div>
                <div className={styles.d_bodycards}>
                    <div className={`${styles.d_card}`}>
                        <ImageCard
                            variant="image-right"
                            image={{
                                src: "/static/images/hsl_logo_name.jpg",
                                alt: "Charles Contact Photo",
                                width: 500,
                                height: 330
                            }}
                            title="Contact Charles F. Philips, Jr."
                            text={contactInfo}
                        />
                    </div>
                </div>
                <div className={`${styles.d_footer}`}>
                    <Footer />
                </div>
            </div>
        </section>
        </>
    );
};

export default Contact;
