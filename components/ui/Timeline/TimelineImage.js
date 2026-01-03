import Image from 'next/image';
import styles from './TimelineImage.module.css';

/**
 * TimelineImage - Image-only card component for timeline
 *
 * Displays one or more images with consistent rounded styling.
 * Supports single or multiple images in a grid layout.
 *
 * @param {Object} props
 * @param {Array} props.images - Array of image objects
 * @param {string} props.images[].src - Image source path
 * @param {string} props.images[].alt - Image alt text
 * @param {number} props.images[].width - Image width
 * @param {number} props.images[].height - Image height
 * @param {string} props.position - Position hint: 'left' or 'right' (for potential styling)
 */
export default function TimelineImage({ images = [], position = 'right' }) {
    if (!images || images.length === 0) {
        return null;
    }

    const isSingleImage = images.length === 1;

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

    return (
        <div className={`${styles.card} ${isSingleImage ? styles.single : styles.multiple}`} data-position={position}>
            <div className={styles.imageContainer}>
                {images.map((img, index) => renderImage(img, index))}
            </div>
        </div>
    );
}
