import Head from 'next/head';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import ImageCard from '../ui/ImageCard/ImageCard';
import styles from '../../styles/services.module.css';

/**
 * ServiceTemplate component - Reusable template for all service pages
 * Eliminates code duplication across service pages
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
                    {service.projects.map((project, index) => {
                        // Build project text with optional client info
                        let projectText = project.description;

                        if (showClient && project.client) {
                            const clientLocation = project.client.location
                                ? `, ${project.client.location}`
                                : '';
                            projectText += `\n\n(Client: ${project.client.name}${clientLocation})`;
                        }

                        // Handle linked titles (for published works)
                        const titleElement = project.titleLink ? (
                            <Link style={{'textDecoration':'none', 'color':'black'}} target='_blank' href={project.titleLink}>
                                {project.title}
                            </Link>
                        ) : project.title;

                        // Determine border style for cultural resources
                        let borderStyle = {borderTop: "2px solid black"};
                        if (service.slug === 'cultural-resources') {
                            borderStyle = index === 0
                                ? {borderTop: "2px solid black", borderBottom: "2px solid black"}
                                : index === service.projects.length - 1
                                    ? {}
                                    : {borderBottom: "2px solid black"};
                        }

                        return (
                            <div key={project.id} className={styles.d_dropcard} style={borderStyle}>
                                <ImageCard
                                    variant={project.layout}
                                    image={project.image}
                                    images={project.images}
                                    title={titleElement}
                                    text={projectText}
                                />
                            </div>
                        );
                    })}
                    <div className={`${styles.d_footer}`}>
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
}
