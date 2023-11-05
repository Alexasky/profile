import styles from './Review.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import yayIcon from '../../assets/doodles/yay.svg';
import squiggleIcon from '../../assets/doodles/squiggle.svg';

function Review({ quote, name, job, index }) {
    return (
        <div className={`${styles.review} card`}>
            <FontAwesomeIcon icon={icon({ name: 'quote-left' })} />
            <p className={styles.quote}>{quote}</p>
            <p className={styles.name}>
                <b>{name}</b> - {job}
            </p>
            {index === 0 ? (
                <img className={styles.yay} src={yayIcon} alt='yayIcon' />
            ) : index === 2 ? (
                <img
                    className={styles.squiggle}
                    src={squiggleIcon}
                    alt='squiggleIcon'
                />
            ) : null}
        </div>
    );
}

export { Review };
