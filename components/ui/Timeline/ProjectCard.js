import Link from 'next/link';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard - Text-only card component for timeline
 *
 * Displays project information including title, description, year, and metadata.
 * Maintains consistent rounded styling with borders and shadows.
 *
 * @param {Object} props
 * @param {string|React.ReactNode} props.title - Project title (can be string or JSX)
 * @param {string} props.titleLink - Optional URL to make title a link
 * @param {string} props.text - Project description/content
 * @param {number} props.year - Project year (optional)
 * @param {Array} props.awards - Array of award objects (optional)
 * @param {Array} props.recognition - Array of recognition strings (optional)
 */
export default function ProjectCard({
    title,
    titleLink,
    text,
    year,
    awards,
    recognition
}) {
    // Render text content
    const renderText = () => {
        if (!text) return null;

        if (typeof text === 'string') {
            return (
                <div
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            );
        }

        return <div className={styles.text}>{text}</div>;
    };

    // Render title (with optional link)
    const renderTitle = () => {
        if (titleLink) {
            return (
                <h2 className={styles.title}>
                    <Link className={styles.titleLink} target="_blank" href={titleLink}>
                        {title}
                    </Link>
                </h2>
            );
        }

        return <h2 className={styles.title}>{title}</h2>;
    };

    // Render metadata (awards, recognition)
    const renderMetadata = () => {
        const hasMetadata = (awards && awards.length > 0) || (recognition && recognition.length > 0);

        if (!hasMetadata) return null;

        return (
            <div className={styles.metadata}>
                {awards && awards.length > 0 && (
                    <div className={styles.metadataSection}>
                        <strong className={styles.metadataLabel}>Awards:</strong>
                        <ul className={styles.metadataList}>
                            {awards.map((award, index) => (
                                <li key={index}>
                                    {award.name} {award.year && `(${award.year})`}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {recognition && recognition.length > 0 && (
                    <div className={styles.metadataSection}>
                        <strong className={styles.metadataLabel}>Recognition:</strong>
                        <ul className={styles.metadataList}>
                            {recognition.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                {renderTitle()}
                {renderText()}
                {renderMetadata()}
            </div>
        </div>
    );
}
