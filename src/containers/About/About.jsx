import styles from './About.module.scss';
import starsIcon from '../../assets/doodles/stars.svg';
import codeIcon from '../../assets/doodles/code.svg';
import youtubeIcon from '../../assets/doodles/youtube.svg';

function About() {
    return (
        <section className={styles.About}>
            <div className={styles.skills}>
                <p className={styles.content}>
                    Here is my toolbelt
                    <br /> for designing websites and apps.
                </p>
                <img className={styles.stars} src={starsIcon} alt='starsIcon' />
                <img className={styles.code} src={codeIcon} alt='codeIcon' />
                <img
                    className={styles.youtube}
                    src={youtubeIcon}
                    alt='youtubeIcon'
                />
            </div>
            <div className={styles.icons}>
                <div title='HTML'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                        alt='HTML'
                    />
                    <p>HTML</p>
                </div>
                <div title='CSS'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                        alt='CSS'
                    />
                    <p>CSS</p>
                </div>
                <div title='Javascript'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                        alt='Javascript'
                    />
                    <p>Javascript</p>
                </div>
                <div title='Sass'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
                        alt='Sass'
                    />
                    <p>Sass</p>
                </div>
                <div title='React'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                        alt='React'
                    />
                    <p>React</p>
                </div>
                <div title='NextJS'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
                        alt='NextJS'
                    />
                    <p>NextJS</p>
                </div>
                <div title='Typescript'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                        alt='Typescript'
                    />
                    <p>Typescript</p>
                </div>
                <div title='NodeJS'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                        alt='NodeJS'
                    />
                    <p>NodeJS</p>
                </div>
                <div title='Git'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                        alt='Git'
                    />
                    <p>Git</p>
                </div>
                <div title='Figma'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
                        alt='Figma'
                    />
                    <p>Figma</p>
                </div>
                <div title='Firebase'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
                        alt='Firebase'
                    />
                    <p>Firebase</p>
                </div>
                <div title='VueJS'>
                    <img
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain.svg'
                        alt='VueJS'
                    />
                    <p>VueJS</p>
                </div>
            </div>
        </section>
    );
}
export { About };
