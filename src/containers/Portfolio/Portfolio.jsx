import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Portfolio.module.scss';
import projects from '../../data/content/projects';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
function Portfolio() {
    let navigate = useNavigate();
    const filterHandler = (tag) => {
        projects.filter((item) => item.tags.includes(tag));
        navigate({
            pathname: '/portfolio',
            search: `?filter=${tag}`,
        });
    };
    return (
        <section>
            <Title>Here are a few of my projects.</Title>
            <div className={`${styles.portfolio} cards`}>
                {projects.slice(0, 3).map((item) => (
                    <ProjectCard
                        key={item.id}
                        {...item}
                        filterHandler={filterHandler}
                    />
                ))}
            </div>
            <div className={styles.btnWrap}>
                <Link to={`/portfolio`}>
                    <Button appearance='big'>
                        <span>View All Projects</span>
                    </Button>
                </Link>
            </div>
        </section>
    );
}

export { Portfolio };
