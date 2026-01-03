import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';
import TimelineContainer from '../ui/Timeline/TimelineContainer';
import styles from '../../styles/services.module.css';

/**
 * ServiceTemplate component - Reusable template for all service pages
 * Uses new timeline-based layout with modular cards
 *
 * @param {Object} props
 * @param {Object} props.service - Service data from JSON
 * @param {string} props.service.title - Service title
 * @param {Object} props.service.meta - Meta tags for SEO
 * @param {Array} props.service.projects - Array of project objects
 * @param {string} props.titleSuffix - Optional suffix for page title (e.g., "Service Examples", "Projects")
 * @param {boolean} props.showClient - Whether to show client info (default: true)
 */
export default function ServiceTemplate({
    service,
    titleSuffix = 'Service Examples',
    showClient = true
}) {
    return (
        <>
            <Head>
                <title>{service.meta.title}</title>
                <meta property="og:title" content={service.meta.ogTitle}/>
                <meta property="og:type" content={service.meta.ogType}/>
                <meta name="description" content={service.meta.description} />
            </Head>
            <section className={styles.full_env}>
                <div className={styles.d_encompass}>
                    <div className={styles.d_header}>
                        <Header />
                    </div>
                    <div className={styles.d_title}>
                        <h1 className={styles.title}>{service.title} {titleSuffix}</h1>
                    </div>
                    <TimelineContainer
                        projects={service.projects}
                        showClient={showClient}
                    />
                    <div className={`${styles.d_footer}`}>
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
}
