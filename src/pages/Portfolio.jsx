import { Description } from '../components/Description/Description';
import { Projects } from '../components/Projects/Projects';
import { Title } from '../components/Title/Title';
import codeIcon from '../assets/doodles/code.svg';

function Portfolio() {
    return (
        <>
            <Title header='h1' icon={codeIcon} iconTitle='codeIcon'>
                Projects
            </Title>
            <Description text='I ve built cool apps and websites using anything from HTML to React (and even PHP!). Here are some of my favorite projects over the course of my journey.' />
            <Projects />
        </>
    );
}
export { Portfolio };
