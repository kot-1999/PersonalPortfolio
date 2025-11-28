import { loadBooks } from './library.js';
import { loadSkills } from './skills.js';
import { libraryPageTemplate, navTemplate, projectsTemplate, techStackTemplate } from './templates.js';

async function renderNavigation() {
    $('#body').prepend(navTemplate);
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

    $(document).on ('click', '#navEmailMe', async function () {
        const res = await fetch('###');
        const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
        $('#content').empty()
        $('#content').append(doc.getElementById('###').innerHTML);
    });
});