import cn from 'classnames';
import styles from './Button.module.scss';
function Button({
    appearance = 'none',
    link = '',
    clickHandler = Function.prototype,
    label= '',
    children,
    className,
    ...props
}) {
    return link ? (
        <a
            className={cn(styles.button, className, {
                [styles.arrow]: appearance === 'arrow',
                [styles.solid]: appearance === 'solid',
                [styles.big]: appearance === 'big',
            })}
            href={link}
            target='_blank'
            rel='noreferrer noopener'
        >
            <span>{children}</span>
        </a>
    ) : (
        <button
            className={cn(styles.button, className, {
                [styles.big]: appearance === 'big',
                [styles.circle]: appearance === 'circle',
            })}
            onClick={clickHandler}
            aria-label={label}
        >
            {children}
        </button>
    );
}

export { Button };
