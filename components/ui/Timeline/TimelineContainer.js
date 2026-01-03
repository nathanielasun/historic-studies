import ProjectGroup from './ProjectGroup';
import styles from './TimelineContainer.module.css';

/**
 * TimelineContainer - Main timeline wrapper for project display
 *
 * Manages the vertical timeline layout with alternating left/right project groups.
 * Each project automatically gets positioned opposite to the previous one.
 *
 * @param {Object} props
 * @param {Array} props.projects - Array of project objects from JSON
 * @param {boolean} props.showClient - Whether to display client information
 */
export default function TimelineContainer({ projects = [], showClient = true }) {
    if (!projects || projects.length === 0) {
        return null;
    }

    return (
        <div className={styles.timeline}>
            {projects.map((project, index) => {
                // Alternate between imageLeft and imageRight
                const variant = index % 2 === 0 ? 'imageRight' : 'imageLeft';

                // Zone index for alternating background colors
                const zoneIndex = index;

                return (
                    <ProjectGroup
                        key={project.id || index}
                        project={project}
                        variant={variant}
                        zoneIndex={zoneIndex}
                        showClient={showClient}
                    />
                );
            })}
        </div>
    );
}
