import { Title } from '../../../components/Title/Title';
import styles from './Reviews.module.scss';
import { testimonials } from '../../../data/content/reviews';
import { Review } from '../../../components/Review/Review';

function Reviews() {
    return (
        <section className={styles.reviews}>
            <Title>Why people love my work!</Title>
            <div className={styles.reviewWrap}>
                {testimonials &&
                    testimonials.map((item, index) => (
                        <Review key={index} {...item} index={index} />
                    ))}
            </div>
        </section>
    );
}

export { Reviews };
