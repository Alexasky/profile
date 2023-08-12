import cn from 'classnames';
import styles from './Menu.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
function Menu({ className }) {
    const [open, setOpen] = useState(false);
    const links = [
        { to: '/', label: 'Home' },
        { to: '/portfolio', label: 'Portfolio' },
    ];

    const location = useLocation();

    const onToggle = () => {
        setOpen(!open);
    };
    const clickHandler = () => {
        setOpen(!open);
    };
    const renderLink = () => {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        onClick={clickHandler}
                        className={cn(styles.menuItem, className, {
                            [styles.active]: link.to === location.pathname,
                        })}
                    >
                        {link.label}
                    </NavLink>
                </li>
            );
        });
    };

    return (
        <>
            <nav
                className={cn(styles.drawer, className, {
                    [styles.close]: !open,
                })}
            >
                <ul>{renderLink()}</ul>
            </nav>
            <button
                className={cn(styles.menuToggle, className, {
                    [styles.open]: open,
                })}
                onClick={onToggle}
            >
                <span className={styles.burger}></span>
            </button>
            <div
                className={cn(styles.backdrop, className, {
                    [styles.close]: !open,
                })}
            />
        </>
    );
}
export { Menu };
