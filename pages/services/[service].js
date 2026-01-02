import { getServiceData, getAllServices } from '../../lib/content';
import ServiceTemplate from '../../components/templates/ServiceTemplate';

/**
 * Dynamic service page - handles all service routes
 * Replaces individual service page files with a single template
 *
 * Routes:
 * - /services/specialty-research
 * - /services/oral-history
 * - /services/published-works
 * - /services/cultural-resources
 */

export async function getStaticPaths() {
    const services = getAllServices();

    const paths = services.map((service) => ({
        params: { service: service.slug }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const service = getServiceData(params.service);

    // Customize title suffix per service
    let titleSuffix = 'Service Examples';
    let showClient = true;

    if (params.service === 'oral-history') {
        titleSuffix = 'Projects and Service Examples';
    } else if (params.service === 'published-works') {
        titleSuffix = '';
        showClient = false; // Published works don't show client info
    } else if (params.service === 'cultural-resources') {
        titleSuffix = 'Services';
    }

    return {
        props: {
            service,
            titleSuffix,
            showClient
        }
    };
}

export default function ServicePage({ service, titleSuffix, showClient }) {
    return (
        <ServiceTemplate
            service={service}
            titleSuffix={titleSuffix}
            showClient={showClient}
        />
    );
}
