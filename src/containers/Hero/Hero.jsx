import { Button } from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './Hero.module.scss';
import resume from '../../assets/pdf/cv.pdf';
import iconHtml from '../../assets/doodles/html.svg';
import 'animate.css';

function Hero(className) {
    return (
        <section className={styles.hero + ' ' + styles.content}>
            <p className='animate__animated animate__fadeInDown'>Hi, I'm Alexandra Korenkova.</p>
            <h1 className='content__title' data-splitting='chars'>
                I enjoy <span className={styles.heroPink}>building</span> and{' '}
                <span className={styles.heroPink}>developing</span> for the web.
            </h1>
            <div className={`${styles.svgWrapper} ${styles.html}`}>
                <img className='animate__animated animate__zoomIn' src={iconHtml} alt='iconHtml'></img>
            </div>
            <div className={styles.svgWrapper + ' ' + styles.palette}>
                <FontAwesomeIcon 
                    icon={icon({ name: 'palette' })} 
                    className='animate__animated animate__zoomIn animate__delay-2s'
                />
            </div>
            <div className={styles.svgWrapper + ' ' + styles.paintbrush}>
                <FontAwesomeIcon
                    icon={icon({ name: 'paintbrush', style: 'solid' })}
                    className='animate__animated animate__zoomIn animate__delay-2s'
                />
            </div>
            <div className={styles.svgWrapper + ' ' + styles.sun}>
                <FontAwesomeIcon
                    className='animate__animated animate__zoomIn'
                    icon={icon({ name: 'sun', style: 'regular' })}
                />
            </div>
            <div className={styles.svgWrapper + ' ' + styles.rocket}>
                <FontAwesomeIcon
                    icon={icon({ name: 'rocket', style: 'solid' })}
                    className='animate__animated animate__zoomIn animate__delay-2s'
                />
            </div>
            <div className={styles.svgWrapper + ' ' + styles.desktop}>
                <FontAwesomeIcon
                    icon={icon({ name: 'desktop', style: 'solid' })}
                    className='animate__animated animate__zoomIn animate__delay-2s'
                />
            </div>
            <div className={styles.svgWrapper + ' ' + styles.node}>
                <FontAwesomeIcon
                    icon={icon({ name: 'node', style: 'brands' })}
                    className='animate__animated animate__zoomIn animate__delay-2s'
                />
            </div>
            <div className={styles.svgWrapper + ' ' + styles.keyboard}>
                <FontAwesomeIcon
                    icon={icon({ name: 'keyboard', style: 'solid' })}
                    className='animate__animated animate__zoomIn animate__delay-2s'
                />
            </div>
            <div className={styles.svgWrapper + ' ' + styles.js}>
                <FontAwesomeIcon
                    icon={icon({ name: 'square-js', style: 'brands' })}
                    className='animate__animated animate__zoomIn animate__delay-2s'
                />
            </div>

            <div className={styles.content}>
                <p className='animate__animated animate__fadeInUp animate__delay-1s' data-splitting="chars">
                    My passion lies in transforming complex problems and
                    opportunities into elegant, user-friendly interfaces through
                    thoughtful design and meticulous coding. I believe in the
                    power of simplicity and aim to craft intuitive web solutions
                    that make a lasting impact.
                </p>
                <div></div>
            </div>
            <div className={`${styles.cv} animate__animated animate__zoomIn animate__delay-2s`}>
                <Button appearance='arrow' link={resume} label='Download CV'>
                    Download CV
                </Button>
            </div>
        </section>
    );
}
export { Hero };
