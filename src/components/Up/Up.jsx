import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './Up.module.scss';
import { Button } from '../Button/Button';
import { useEffect, useState } from 'react';
import { useScrollY } from '../../hooks/useScrollY';
function Up() {
    const y = useScrollY();
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        setOpacity(y / (document.body.scrollHeight / 2));
    }, [y]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div
            className={styles.up}
            style={{
                opacity: opacity,
            }}
        >
            <Button
                appearance='circle'
                clickHandler={scrollToTop}
                aria-label='UP'
            >
                <FontAwesomeIcon
                    icon={icon({ name: 'chevron-up', style: 'solid' })}
                    size='lg'
                />
            </Button>
        </div>
    );
}
export { Up };
