import styles from './ConnectorLine.module.css';

/**
 * ConnectorLine - Smooth bezier curve connecting text card to image
 *
 * Draws a simple, thick curved line with circular endpoints.
 * Dynamically positions based on actual element positions.
 *
 * @param {Object} props
 * @param {string} props.direction - Curve direction: 'toLeft' or 'toRight'
 * @param {Object} props.cardPosition - Position of text card {x, y, width, height}
 * @param {Object} props.imagePosition - Position of image {x, y, width, height}
 */
export default function ConnectorLine({ direction = 'toRight', cardPosition, imagePosition }) {
    // Don't render until we have positions
    if (!cardPosition || !imagePosition) {
        return null;
    }

    // Connection points are already calculated in ProjectGroup
    const startX = cardPosition.x;
    const startY = cardPosition.y;
    const endX = imagePosition.x;
    const endY = imagePosition.y;

    // Calculate control points for smooth, artistic bezier curve
    const distance = Math.abs(endX - startX);
    const verticalDiff = Math.abs(endY - startY);
    const controlOffset = distance * 0.6; // More pronounced curve
    const verticalInfluence = verticalDiff * 0.3; // Curve follows vertical difference

    const control1X = direction === 'toRight' ? startX + controlOffset : startX - controlOffset;
    const control1Y = startY + (endY > startY ? verticalInfluence : -verticalInfluence);
    const control2X = direction === 'toRight' ? endX - controlOffset : endX + controlOffset;
    const control2Y = endY - (endY > startY ? verticalInfluence : -verticalInfluence);

    // SVG path for smooth bezier curve
    const curvePath = `M ${startX},${startY} C ${control1X},${control1Y} ${control2X},${control2Y} ${endX},${endY}`;

    // Circle radius for endpoints
    const dotRadius = 10;
    const strokeWidth = 4;

    return (
        <svg
            className={styles.svg}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'visible',
                pointerEvents: 'none'
            }}
            aria-hidden="true"
        >
            {/* Bezier curve */}
            <path
                d={curvePath}
                stroke="var(--timeline-connector-color, var(--color-border))"
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
                className={styles.path}
            />

            {/* Start circle */}
            <circle
                cx={startX}
                cy={startY}
                r={dotRadius}
                fill="var(--timeline-connector-color, var(--color-border))"
                className={styles.dot}
            />

            {/* End circle */}
            <circle
                cx={endX}
                cy={endY}
                r={dotRadius}
                fill="var(--timeline-connector-color, var(--color-border))"
                className={styles.dot}
            />
        </svg>
    );
}
