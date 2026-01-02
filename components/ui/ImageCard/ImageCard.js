import Image from 'next/image';
import styles from './ImageCard.module.css';

/**
 * Unified ImageCard component - handles all layout variants
 *
 * @param {Object} props
 * @param {string} props.variant - Layout variant: 'image-left', 'image-right', 'image-middle', 'double-bottom'
 * @param {string} props.title - Card title
 * @param {string|React.ReactNode} props.title - Card title (can be string or JSX for links)
 * @param {string} props.text - Card content (supports HTML via dangerouslySetInnerHTML)
 * @param {Object} props.image - Single image object (for left/right variants)
 * @param {string} props.image.src - Image source path
 * @param {string} props.image.alt - Image alt text
 * @param {number} props.image.width - Image width
 * @param {number} props.image.height - Image height
 * @param {Array<Object>} props.images - Array of image objects (for middle/double-bottom variants)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 */
export default function ImageCard({
    variant = 'image-left',
    title,
    text,
    image,
    images,
    className = '',
    style = {}
}) {
    // Determine which images to use
    const imageList = images || (image ? [image] : []);

    // Render background blur effect for first image
    const renderBackgroundBlur = (img) => (
        <Image
            src={img.src}
            width={0}
            height={0}
            quality={25}
            alt=""
            className={styles.backgroundBlur}
            aria-hidden="true"
        />
    );

    // Render a single image
    const renderImage = (img, index = 0) => (
        <div key={index} className={styles.imageWrapper}>
            {index === 0 && renderBackgroundBlur(img)}
            <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                quality={50}
                className={styles.image}
            />
        </div>
    );

    // Layout: image-left or image-right
    if (variant === 'image-left' || variant === 'image-right') {
        return (
            <div className={`${styles.card} ${styles[variant]} ${className}`} style={style}>
                <div className={styles.imageContainer}>
                    {imageList[0] && renderImage(imageList[0])}
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <div
                        className={styles.text}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
            </div>
        );
    }

    // Layout: image-middle (two images with text in between)
    if (variant === 'image-middle') {
        return (
            <div className={`${styles.card} ${styles.imageMiddle} ${className}`} style={style}>
                <div className={styles.imageContainer}>
                    {imageList[0] && renderImage(imageList[0], 0)}
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <div
                        className={styles.text}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
                <div className={styles.imageContainer}>
                    {imageList[1] && renderImage(imageList[1], 1)}
                </div>
            </div>
        );
    }

    // Layout: double-bottom (text above, two images below)
    if (variant === 'double-bottom') {
        return (
            <div className={`${styles.card} ${styles.doubleBottom} ${className}`} style={style}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <div
                        className={styles.text}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
                <div className={styles.imageGrid}>
                    {imageList.map((img, index) => (
                        <div key={index} className={styles.imageContainer}>
                            {renderImage(img, index)}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
}
