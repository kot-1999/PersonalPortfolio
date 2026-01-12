import {
    iconExtension,
    iconsPathBase, largeImageExtension,
    largeLogoExtension,
    logosPathBase,
    pngFileExtension,
    projectImagesPathBase, smallImageExtension,
    smallLogoExtension, thumbnailExtension
} from './constants.js';
import { projects } from './content.js'
import Mustache from './mustache.js'
import {
    projectSideItemTemplate,
    projectDetailsTemplate
} from './templates.js'

function initSlideshows() {
    document.querySelectorAll('.slideshow').forEach((slideshow) => {
        let index = 1;
        const slides = slideshow.querySelectorAll('.slide');
        const thumbs = slideshow.querySelectorAll('.thumb');
        const caption = slideshow.querySelector('.caption');

        function show(n) {
            if (n > slides.length) {
                index = 1
            }
            if (n < 1) {
                index = slides.length
            }

            slides.forEach((s) => s.style.display = 'none');
            thumbs.forEach((t) => t.classList.remove('active'));

            slides[index - 1].style.display = 'block';
            thumbs[index - 1].classList.add('active');
            caption.textContent = thumbs[index - 1].alt;

            const indexEl = slideshow.querySelector('.slideIndex');

            indexEl.textContent = `${index} / ${slides.length}`;
            caption.textContent = thumbs[index - 1].alt;
        }

        show(index);

        slideshow.querySelector('.prev').onclick = () => show(--index);
        slideshow.querySelector('.next').onclick = () => show(++index);

        thumbs.forEach((thumb) => {
            thumb.onclick = () => {
                index = Number(thumb.dataset.index);
                show(index);
            };
        });
    });
}

function renderProjectDetails(project) {
    const renderedDetails = Mustache.render(projectDetailsTemplate, {
        ...project,
        logoLarge: logosPathBase + project.logoBase + largeLogoExtension + pngFileExtension,
        logoSmall: logosPathBase + project.logoBase + smallLogoExtension + pngFileExtension,
        logoAlt: project.logoBase + ' logo',
        logoHeight: '100px',
        techBadges: project.techStack.map((techName) => ({
            name: techName.replaceAll('-', ' ').replaceAll('Sharp', '#'),
            alt: techName + ' icon',
            src: iconsPathBase + techName + '-48' + pngFileExtension

        })),
        images: project.images && project.imageExtension
            ? project.images.map((image, index, arr) => ({
                imageLarge: projectImagesPathBase + image.name + largeImageExtension + project.imageExtension,
                imageSmall: projectImagesPathBase + image.name + smallImageExtension + project.imageExtension,
                thumb: projectImagesPathBase + image.name + thumbnailExtension + project.imageExtension,
                caption: image.caption,
                index: index + 1,
                total: arr.length
            }))
            : null
    });
    $('#projectDetails').html(renderedDetails)
    initSlideshows();
}

function projectToggleLogic() {
    const $layout = $('.projectsLayout');

    $('.projectsToggle').on('click', function () {
        $layout.toggleClass('showProjects');
    });

    // Close sidebar when project is selected
    $(document).on('click', '.projectItem', function () {
        $layout.removeClass('showProjects');
    });
}

export function loadProjectsPage() {
    projectToggleLogic()

    const $list = $('#projectsList');
    const $details = $('#projectDetails');

    $list.empty();
    $details.empty();

    // Render sidebar
    projects.forEach((project, index) => {
        const renderedItem = Mustache.render(projectSideItemTemplate, {
            ...project,
            active: index === 0,
            icon: logosPathBase + project.logoBase + iconExtension + pngFileExtension,
            iconAlt: project.logoBase + ' icon'
        });

        $list.append(renderedItem);
    });

    // Render first project by default
    renderProjectDetails(projects[0]);

    // Click handling
    $list.on('click', '.projectItem', function () {
        const projectName = $(this).data('project');

        $('.projectItem').removeClass('active');
        $(this).addClass('active');

        const project = projects.find((p) => p.name === projectName);
        renderProjectDetails(project);
    });
}