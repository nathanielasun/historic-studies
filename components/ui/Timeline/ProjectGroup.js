import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import TimelineImage from './TimelineImage';
import ConnectorLine from './ConnectorLine';
import styles from './ProjectGroup.module.css';

/**
 * ProjectGroup - Wrapper for a single project's card, images, and connector
 *
 * Creates fluid, artistic layout with slightly randomized positioning
 * and smooth bezier curves connecting text to images.
 *
 * @param {Object} props
 * @param {Object} props.project - Project data object
 * @param {string} props.variant - Layout variant: 'imageLeft' or 'imageRight'
 * @param {number} props.zoneIndex - Index for alternating background zones
 * @param {boolean} props.showClient - Whether to display client information
 */
export default function ProjectGroup({
    project,
    variant = 'imageRight',
    zoneIndex = 0,
    showClient = true
}) {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const [cardPosition, setCardPosition] = useState(null);
    const [imagePosition, setImagePosition] = useState(null);

    // Seeded random function for consistent randomness
    const seededRandom = (seed) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    };

    // Generate subtle random offsets for artistic positioning
    const cardOffsetY = Math.floor(seededRandom(zoneIndex * 7 + 1) * 20 - 10);
    const imageOffsetY = Math.floor(seededRandom(zoneIndex * 11 + 3) * 24 - 12);
    const cardOffsetX = Math.floor(seededRandom(zoneIndex * 13 + 5) * 20 - 10);
    const imageOffsetX = Math.floor(seededRandom(zoneIndex * 17 + 7) * 20 - 10);

    // Get images array (supports both 'image' and 'images' formats)
    const images = project.images || (project.image ? [project.image] : []);
    const hasImages = images.length > 0;

    // Build project text with optional client info
    let projectText = project.description || '';

    if (showClient && project.client) {
        const clientLocation = project.client.location
            ? `, ${project.client.location}`
            : '';
        projectText += `\n\n(Client: ${project.client.name}${clientLocation})`;
    }

    // Determine connector direction based on variant
    const connectorDirection = variant === 'imageLeft' ? 'toLeft' : 'toRight';

    // Track element positions for connector
    useEffect(() => {
        const updatePositions = () => {
            if (cardRef.current && imageRef.current) {
                const cardRect = cardRef.current.getBoundingClientRect();
                const imageRect = imageRef.current.getBoundingClientRect();
                const containerRect = cardRef.current.parentElement.getBoundingClientRect();

                // Calculate connection point on card edge
                const cardX = cardRect.left - containerRect.left;
                const cardY = cardRect.top - containerRect.top;

                setCardPosition({
                    x: variant === 'imageRight' ? cardX + cardRect.width : cardX,
                    y: cardY + cardRect.height / 2,
                    width: cardRect.width,
                    height: cardRect.height
                });

                // Calculate connection point on image edge
                const imageX = imageRect.left - containerRect.left;
                const imageY = imageRect.top - containerRect.top;

                setImagePosition({
                    x: variant === 'imageRight' ? imageX : imageX + imageRect.width,
                    y: imageY + imageRect.height / 2,
                    width: imageRect.width,
                    height: imageRect.height
                });
            }
        };

        // Update positions after render and on resize
        const timeoutId = setTimeout(updatePositions, 100);
        window.addEventListener('resize', updatePositions);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', updatePositions);
        };
    }, [variant]);

    return (
        <div
            className={`${styles.projectGroup} ${styles[variant]}`}
            data-zone={zoneIndex % 2 === 0 ? 'even' : 'odd'}
            style={{
                '--card-offset-y': `${cardOffsetY}px`,
                '--image-offset-y': `${imageOffsetY}px`,
                '--card-offset-x': `${cardOffsetX}px`,
                '--image-offset-x': `${imageOffsetX}px`
            }}
        >
            <div className={styles.cardArea} ref={cardRef}>
                <ProjectCard
                    title={project.title}
                    titleLink={project.titleLink}
                    text={projectText}
                    year={project.year}
                    awards={project.awards}
                    recognition={project.recognition}
                />
            </div>

            {hasImages && (
                <>
                    <div className={styles.imageArea} ref={imageRef}>
                        <TimelineImage
                            images={images}
                            position={variant === 'imageLeft' ? 'left' : 'right'}
                        />
                    </div>

                    <div className={styles.connectorArea}>
                        <ConnectorLine
                            direction={connectorDirection}
                            cardPosition={cardPosition}
                            imagePosition={imagePosition}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
