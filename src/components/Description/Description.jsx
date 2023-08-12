import styles from './Description.module.scss';

function Description({ text }) {
    return <p className={styles.Description}>{text}</p>;
}

export { Description };
