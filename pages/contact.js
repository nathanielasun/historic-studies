import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/contact.module.css';
import ImageCard from '../components/ui/ImageCard/ImageCard';
import ContactForm from '../components/ui/ContactForm/ContactForm';
import ContactInfo from '../components/ui/ContactInfo/ContactInfo';
import { getSiteConfig } from '../lib/content';

export async function getStaticProps() {
    const siteConfig = getSiteConfig();
    return {
        props: {
            contact: siteConfig.contact
        }
    };
}

const Contact = ({ contact }) => {

    return (
        <>
        <Head>
            <title>Contact | Historic Studies Limited</title>
            <meta name="description" content="Contact Charles Philips for historical research, oral history, and cultural resource management inquiries." />
        </Head>
        <section className={`${styles.full_env}`}>
            <div className={`${styles.d_encompass}`}>
                <div className={`${styles.d_header}`}>
                    <Header />
                </div>
                <div className={styles.d_connect}>
                        <h1 className={styles.connect}>Connect with Historic Studies Limited</h1>
                    </div>
                <div className={styles.d_content}>
                    {/* Contact Form Section */}
                    <div className={styles.d_formSection}>
                        <div className={styles.formIntro}>
                            <h2 className={styles.formTitle}>Send a Message</h2>
                            <p className={styles.formDescription}>
                                Have a research project or question? Fill out the form below and
                                Charles will respond soon.
                            </p>
                        </div>
                        <ContactForm />
                    </div>

                    <div className={styles.d_bodycards}>
                        <div className={styles.d_card}>
                            <ImageCard
                                className={styles.contactCard}
                                variant="image-right"
                                title="Contact Charles F. Philips, Jr."
                                text={<ContactInfo contact={contact} />}
                            />
                        </div>
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
