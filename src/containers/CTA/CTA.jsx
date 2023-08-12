import { Button } from '../../components/Button/Button';
import styles from './CTA.module.scss';
import lineBreakIcon from '../../assets/doodles/lineBreak.svg';
import fancyLinesIcon from '../../assets/doodles/fancyLines.svg';

function CTA() {
    return (
        <section className={styles.CTA}>
            <img
                className={styles.lineBreakIcon}
                src={lineBreakIcon}
                alt='lineBreakIcon'
            />
            <h2>Interested in Working Together?</h2>
            <Button link='mailto:alex.korenkova@gmail.com' appearance='solid'>
                Get in Touch
            </Button>
            <img
                className={styles.fancyLinesIcon}
                src={fancyLinesIcon}
                alt='fancyLinesIcon'
            />
        </section>
    );
}

export { CTA };
