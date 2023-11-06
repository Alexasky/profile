import styles from './ProjectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function ProjectCard({
    img = '',
    title = '',
    desc = '',
    link = '',
    github = '',
    tags = [],
    filterHandler = Function.prototype
}) {
    return (
        <div className={`${styles.ProjectCard} card animate__animated animate__zoomIn`}>
            {img && (
                <a className={styles.linkImg} href={link}>
                    <img src={img} alt={title} />
                </a>
            )}
            <div className={styles.contentItem}>
                <div className={styles.headerBlock}>
                    <a className={styles.title} href={link}>
                        {title && <h3>{title}</h3>}
                    </a>
                    <div className={styles.linkIcons}>
                        {link && (
                            <a href={link} aria-label='link to the website page'>
                                <FontAwesomeIcon
                                    icon={icon({
                                        name: 'square-up-right',
                                        style: 'solid',
                                    })}
                                />
                            </a>
                        )}
                        {github && (
                            <a href={github} aria-label='link to the project on github'>
                                <FontAwesomeIcon
                                    icon={icon({
                                        name: 'github',
                                        style: 'brands',
                                    })}
                                />
                            </a>
                        )}
                    </div>
                </div>
                {desc && <p>{desc}</p>}
                <ul className={styles.tags}>
                    {tags &&
                        tags.map((tag, index) => {
                            return (
                                <li key={index}>
                                    <div
                                        className={styles.tag}
                                        onClick={() => filterHandler(tag)}
                                    >
                                        {tag}
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}

export { ProjectCard };
