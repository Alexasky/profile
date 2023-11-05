import styles from './Projects.module.scss';
import projects from '../../data/content/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { shuffle as _shuffle } from 'lodash-es'

function Projects() {
    const [overwriteProjects, setOverwriteProjects] = useState([]);
    const { pathname, search } = useLocation();
    let navigate = useNavigate();
    const filterHandler = (tag) => {
        setOverwriteProjects(
            projects.filter((item) => item.tags.includes(tag))
        );
        navigate({
            pathname,
            search: `?filter=${tag}`,
        });        
    };

    const projectsList =
        overwriteProjects.length > 0 ? overwriteProjects : projects;

    useEffect(() => {
        search
                ? setOverwriteProjects(_shuffle(projects.filter((item) =>
                      item.tags.includes(search.split('=')[1])
                )))
                : setOverwriteProjects(projects)

    }, [search]);

    return (
        <>
            <div className={styles.Projects}>
                {projectsList.map((item) => (
                    <ProjectCard
                        key={item.id}
                        {...item}
                        filterHandler={filterHandler}
                    />
                ))}              
            </div>
            {search && (
                <div className={styles.btnWrap}>
                    <Link to={`/portfolio`}>
                        <Button appearance='big'>
                            <span>View All Projects</span>
                        </Button>
                    </Link>
                </div>
            )}
        </>
    );
}

export { Projects };
