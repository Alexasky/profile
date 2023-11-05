import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const contentScroll = () => {
    Splitting();

    const fx1Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect1]')];
    const cards = [...document.querySelectorAll('.cards .card')];

    // Lenis smooth scrolling
    let lenis;

    // Initialize Lenis smooth scrolling
    const initSmoothScrolling = () => {
        lenis = new Lenis({
        lerp: 0.2,
        smooth: true
        });

        lenis.on('scroll', () => ScrollTrigger.update());

        const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);

    };
 
    // GSAP Scroll Triggers
    const scroll = () => {
        fx1Titles.forEach(title => {
            const chars = title.querySelectorAll('.char');
            gsap.fromTo(title, { 
                'will-change': 'opacity, transform', 
                opacity: 0, 
                scale: 0.6,
                translateX: -100
            },
            {
                ease: 'power4',
                opacity: 1,
                scale: 1,
                translateX: 0,
                stagger: 0.4,
                scrollTrigger: {
                    trigger: title,
                    start: 'center+=20% bottom',
                    end: '+=50%',
                    scrub: true
                },
            });
            gsap.fromTo(chars, { 
                'will-change': 'opacity, transform', 
                opacity: 0, 
                scale: 0.6,
                rotationZ: () => gsap.utils.random(-20,20)
            },
            {
                ease: 'power4',
                opacity: 1,
                scale: 1,
                rotation: 0,
                stagger: 0.4,
                scrollTrigger: {
                    trigger: title,
                    start: 'center+=20% bottom',
                    end: '+=50%',
                    scrub: true
                },
            });
        });        
        cards.forEach(card => {
            gsap.fromTo(card, { 
                'will-change': 'opacity, transform', 
                opacity: 0, 
                scale: 0.6
            },
            {
                ease: 'power4',
                opacity: 1,
                scale: 1,
                stagger: 0.4,
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                    end: '+=50%',
                    scrub: true
                },
            });          
        });  
        gsap.fromTo('.skills', { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            scale: 0.6,
            translateX: -300
        },
        {
            ease: 'power4',
            opacity: 1,
            scale: 1,
            translateX: 0,
            stagger: 0.4,
            scrollTrigger: {
                trigger: '.skills',
                start: 'center+=20% bottom',
                end: '+=50%',
                scrub: true
            },
        });      
        gsap.fromTo('.icons', { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            scale: 0.6,
            translateX: 300
        },
        {
            ease: 'power4',
            opacity: 1,
            scale: 1,
            translateX: 0,
            stagger: 0.4,
            scrollTrigger: {
                trigger: '.icons',
                start: 'center+=20% bottom',
                end: '+=50%',
                scrub: true
            },
        });      
    };

    // Lenis (smooth scrolling)
    initSmoothScrolling();
    // GSAP Scroll Triggers
    scroll();
}

