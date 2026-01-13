import { iconExtension, iconsPathBase, libraryPathBase, logosPathBase, pngFileExtension } from './constants.js';
import { personalLibrary, projects, skills } from './content.js';
import Mustache from './mustache.js';
import { carouselItemTemplate } from './templates.js';

function initCarousels() {
    document.querySelectorAll('.carousel-wrapper').forEach((wrapper) => {
        const carousel = wrapper.querySelector('.carousel');
        const prev = wrapper.querySelector('.carousel-prev');
        const next = wrapper.querySelector('.carousel-next');

        if (!carousel) {return;}

        // Mouse wheel → horizontal scroll
        carousel.addEventListener(
            'wheel',
            (e) => {
                e.preventDefault();
                carousel.scrollLeft += e.deltaY * 3;
            },
            { passive: false }
        );

        // Buttons
        prev?.addEventListener('click', () => {
            carousel.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        next?.addEventListener('click', () => {
            carousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    });
}

export function loadMain() {

    // Render carousel items
    const techCarousel = $('.techCarousel')
    const projectCarousel = $('.projectCarousel')
    const libraryCarousel = $('.libraryCarousel')

    skills.forEach((skill) => {
        const renderedItem = Mustache.render(carouselItemTemplate, {
            imageSrc: `${iconsPathBase}${skill.key}-96${pngFileExtension}`,
            title: skill.key.replaceAll('-', ' ').replaceAll('Sharp', '#')
        });
        techCarousel.append(renderedItem)
    });

    projects.forEach((project) => {
        const renderedItem = Mustache.render(carouselItemTemplate, {
            imageSrc: logosPathBase + project.logoBase + iconExtension + pngFileExtension,
            title: project.name
        });
        projectCarousel.append(renderedItem)
    })

    personalLibrary.forEach((book) => {
        const renderedItem = Mustache.render(carouselItemTemplate, {
            imageSrc: libraryPathBase + book.key + pngFileExtension,
            title: book.name
        });
        libraryCarousel.append(renderedItem)
    })

    initCarousels();
}