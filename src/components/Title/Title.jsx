import styles from './Title.module.scss';
function Title({ children, header, icon, iconTitle }) {
    return header === 'h1' ? (
        <div className={styles.Title + ' ' + styles.h1}>
            <h1 className={`content__title`} data-splitting="chars">
                {children}
                <img src={icon} alt={iconTitle} />
            </h1>
        </div>
    ) : (
        <div className={`${styles.Title} ${styles.h2} Title`}>
            <h2 className={`content__title`} data-splitting="chars" data-effect1>{children}</h2>
        </div>
    );
}

export { Title };
