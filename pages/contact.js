import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/contact.module.css';
import {Imagecard_l, Imagecard_r} from '../components/imagecard';

const Contact = () => {

    const contactInfo = `\n\n\n<b>Email:</b> <a href="mailto:cphilips5509@gmail.com">cphilips5509@gmail.com</a>\n\n<b>Telephone:</b> +1 (843)-532-6327\n\n\n\n`;

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
                        <Imagecard_r className={`${styles.card}`} imagealt={"Charles Contact Photo"} width="500" height="330" imageurl={"/static/images/hsl_logo_name.jpg"} title={"Contact Charles F. Philips, Jr."} text={contactInfo} />
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