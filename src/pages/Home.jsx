import { About } from '../containers/About/About';
import { Hero } from '../containers/Hero/Hero';
import { Portfolio } from '../containers/Portfolio/Portfolio';
import { Reviews } from '../containers/Reviews/Reviews';
import { CTA } from '../containers/CTA/CTA';
import { useEffect } from 'react';
import { contentScroll } from '../hooks/contentScroll';

function Home() {
    useEffect(() => {
		contentScroll();
	}, []);
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
