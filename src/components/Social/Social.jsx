import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './Social.module.scss';
function Social() {
    return (
        <div className={styles.Social}>
            <a
                href='https://github.com/Alexasky'
                target='_blank'
                rel='noreferrer'
                aria-label='link to the github page'
            >
                <FontAwesomeIcon
                    icon={icon({ name: 'github', style: 'brands' })}
                />
            </a>
            <a
                href='https://www.linkedin.com/in/alexandra-korenkova-81131562/'
                target='_blank'
                rel='noreferrer'
                aria-label='link to the linkedin page'
            >
                <FontAwesomeIcon
                    icon={icon({ name: 'linkedin', style: 'brands' })}
                />
            </a>
            <a
                href='https://www.facebook.com/alexa.korenkova'
                target='_blank'
                rel='noreferrer'
                aria-label='link to the facebook page'
            >
                <FontAwesomeIcon
                    icon={icon({
                        name: 'facebook',
                        style: 'brands',
                    })}
                />
            </a>
        </div>
    );
}
export { Social };
