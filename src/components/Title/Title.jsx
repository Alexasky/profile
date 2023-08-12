import styles from './Title.module.scss';
function Title({ children, header, icon, iconTitle }) {
    return header === 'h1' ? (
        <div className={styles.Title + ' ' + styles.h1}>
            <h1>
                {children}
                <img src={icon} alt={iconTitle} />
            </h1>
        </div>
    ) : (
        <div className={styles.Title + ' ' + styles.h2}>
            <h2>{children}</h2>
        </div>
    );
}

export { Title };
