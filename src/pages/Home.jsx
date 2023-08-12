import { About } from '../containers/About/About';
import { Hero } from '../containers/Hero/Hero';
import { Portfolio } from '../containers/Portfolio/Portfolio/Portfolio';
import { Reviews } from '../containers/Reviews/Reviews/Reviews';
import { CTA } from '../containers/CTA/CTA';

function Home() {
    return (
        <>
            <Hero />
            <Portfolio />
            <About />
            <Reviews />
            <CTA />
        </>
    );
}
export { Home };
