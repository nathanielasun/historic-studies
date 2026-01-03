import styles from './ContactInfo.module.css';

export default function ContactInfo({ contact }) {
    if (!contact) {
        return null;
    }

    const { email, phone } = contact;

    return (
        <div className={styles.info}>
            <div className={styles.row}>
                <span className={styles.label}>Email</span>
                <a className={`${styles.value} inlineLink`} href={`mailto:${email}`}>
                    {email}
                </a>
            </div>
            <div className={styles.row}>
                <span className={styles.label}>Telephone</span>
                <a className={`${styles.value} inlineLink`} href={`tel:${phone}`}>
                    {phone}
                </a>
            </div>
        </div>
    );
}
