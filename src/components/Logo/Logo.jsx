import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
function Logo() {
    return (
        <Link to={`/`}>
            <div className={styles.Logo} aria-label='link to the home page' role='button'>
                <FontAwesomeIcon
                    icon={icon({ name: 'a', style: 'solid' })}
                    size='lg'
                />
                <FontAwesomeIcon
                    icon={icon({ name: 'k', style: 'solid' })}
                    size='lg'
                />
            </div>
        </Link>
    );
}
export { Logo };
