import styles from '../components/component_styles.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
        <div className={styles.d_footer}>
            <div className={styles.d_footer_contact}>
                <p className={styles.footer_contact}>Contact Charles at <Link href="mailto:cphilips@gmail.com" className={styles.footer_link}>cphilips5509@gmail.com</Link> or 843-881-3128</p>
            </div>
            <div className={styles.d_footer_links}>
                <p className={styles.footer_links}>
                    <Link className={styles.footer_link} href="../">Home</Link>&nbsp;|&nbsp;
                    <Link className={styles.footer_link} href="../about">About</Link>&nbsp;|&nbsp;
                    <Link className={styles.footer_link} href="../projects">Projects</Link>&nbsp;|&nbsp;
                    <Link className={styles.footer_link} href="../contact">Contact</Link>
                </p>
            </div>
            <div className={styles.d_footer_copyright}>
                <p className={styles.footer_copyright}>
                    Charles Philips | Historic Studies Limited © 2023
                </p>
            </div>
        </div>
        </>
    )
}

export default Footer;