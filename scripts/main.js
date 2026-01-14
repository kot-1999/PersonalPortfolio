import {
    iconsPathBase,
    largeLogoExtension,
    libraryPathBase,
    logosPathBase,
    pngFileExtension
} from './constants.js'
import { personalLibraryContent, projectsContent, skillsContent } from './content.js'
import Mustache from './mustache.js'
import { carouselItemTemplate } from './templates.js'

function initCarousels() {
    document.querySelectorAll('.carousel-wrapper').forEach((wrapper) => {
        const carousel = wrapper.querySelector('.carousel')
        const prev = wrapper.querySelector('.carousel-prev')
        const next = wrapper.querySelector('.carousel-next')

        // Handle horizontal scroll
        carousel?.addEventListener(
            'wheel',
            (event) => {
                event.preventDefault()
                carousel.scrollLeft += event.deltaY * 2
            },
            { passive: false }
        )

        // Button scroll
        prev?.addEventListener('click', () => {
            carousel.scrollBy({
                left: -300,
                behavior: 'smooth'
            })
        })

        next?.addEventListener('click', () => {
            carousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            })
        })
    })
}

export function loadMain() {

    // Render all items for each carousel
    const techCarousel = $('.techCarousel')
    const projectCarousel = $('.projectCarousel')
    const libraryCarousel = $('.libraryCarousel')

    skillsContent.forEach((skill) => {
        const renderedItem = Mustache.render(carouselItemTemplate, {
            imageSrc: `${iconsPathBase}${skill.key}-96${pngFileExtension}`,
            title: skill.key.replaceAll('-', ' ').replaceAll('Sharp', '#')
        })
        techCarousel.append(renderedItem)
    })

    projectsContent.forEach((project) => {
        const renderedItem = Mustache.render(carouselItemTemplate, {
            imageSrc: logosPathBase + project.logoBase + largeLogoExtension + pngFileExtension,
            title: project.name
        })
        projectCarousel.append(renderedItem)
    })

    personalLibraryContent.forEach((book) => {
        const renderedItem = Mustache.render(carouselItemTemplate, {
            imageSrc: libraryPathBase + book.key + pngFileExtension,
            title: book.name
        })
        libraryCarousel.append(renderedItem)
    })

    initCarousels()
}