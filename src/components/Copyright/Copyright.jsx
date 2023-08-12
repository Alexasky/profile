import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './Copyright.module.scss';
function Copyright() {
    return (
        <div className={styles.Copyright}>
            <p className={styles.info}>
                Made with{' '}
                <FontAwesomeIcon
                    icon={icon({ name: 'react', style: 'brands' })}
                    style={{ color: '#d60270' }}
                    size='2xl'
                />
            </p>
            <p>
                Made by{' '}
                <a href='mailto:alex.korenkova@gmail.com'>
                    Alexandra Korenkova
                </a>
                . All rights reserved.
            </p>
        </div>
    );
}

export { Copyright };
