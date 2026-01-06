import { loadBooks } from './library.js';
import { loadSkills } from './skills.js';
import {
    emailMeTemplate,
    libraryPageTemplate,
    mainPage,
    navTemplate,
    projectsTemplate,
    techStackTemplate
} from './templates.js';

async function renderNavigation() {
    $('#body').prepend(navTemplate);
}

function showContent() {
    $('#content').css('visibility', 'visible');
}

renderNavigation()

$(document).ready ( function () {
    $(document).on ('click', '#navProjects', async function () {
        $('#content').empty()
        $('#content').append(projectsTemplate);
    });

    $(document).on ('click', '#navTechStack', async function () {
        $('#content').empty()
        $('#content').append(techStackTemplate);
        loadSkills()
    });

    $(document).on ('click', '#navLibrary', function () {
        $('#content').empty()
        $('#content').append(libraryPageTemplate)
        loadBooks()
    });

    $(document).on('click', '#navEmailMe', function () {
        const overlay = $(`
        <div id="emailOverlay">
            ${emailMeTemplate}
        </div>
    `);

        $('body').append(overlay);
    });

    $(document).on ('click', '#nawMain', async function () {
        $('#content').empty()
        $('#content').append(mainPage);
    });
});

function renderFromHash() {
    const hash = window.location.hash;

    $('#content').empty();

    switch (hash) {
    case '#projects':
        $('#content').append(projectsTemplate);
        break;

    case '#techStack':
        $('#content').append(techStackTemplate);
        loadSkills();
        break;

    case '#library':
        $('#content').append(libraryPageTemplate);
        loadBooks();
        break;

    default:
        $('#content').append(mainPage);
        break;
    }
}

$(document).ready(function () {
    renderFromHash();
    showContent()
});

$('#navToggle').on('click', function () {
    $('#navMenu').toggleClass('open');
});

// Close EmailME when clicking outside form
$(document).on('click', '#emailOverlay', function (e) {
    if (!$(e.target).closest('#emailMeForm').length) {
        $(this).remove();
    }
});