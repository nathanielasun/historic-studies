import styles from './Section.module.css';

/**
 * Section component - Provides consistent section structure
 * Wraps content with standardized spacing and styling
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.id - Section ID for navigation anchors
 * @param {string} props.background - Background variant: 'default', 'alternate', 'transparent'
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 */
export default function Section({
    children,
    id,
    background = 'default',
    className = '',
    style = {}
}) {
    // Map background prop to CSS class name
    const backgroundClassMap = {
        'default': styles.sectionDefault,
        'alternate': styles.sectionAlternate,
        'transparent': styles.sectionTransparent
    };

    const backgroundClass = backgroundClassMap[background] || backgroundClassMap['default'];

    return (
        <section
            id={id}
            className={`${styles.section} ${backgroundClass} ${className}`}
            style={style}
        >
            <div className={styles.sectionContainer}>
                {children}
            </div>
        </section>
    );
}
