import { loadBooks } from './library.js';
import { loadSkills } from './skills.js';

async function renderNavigation() {
    // Fetch navigation template
    const res = await fetch('templates/nav.html')

    // Convert response into a DOM
    const doc = new DOMParser().parseFromString(await res.text(), 'text/html');

    // Fetch template
    const template = doc.getElementById('navTemplate').innerHTML;

    $('#body').prepend(template);
}

renderNavigation()

$(document).ready ( function () {
    $(document).on ('click', '#navProjects', async function () {
        const res = await fetch('pages/projects.html');
        const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
        $('#content').empty()
        $('#content').append(doc.getElementById('projectsPage').innerHTML);
    });

    $(document).on ('click', '#navTechStack', async function () {
        const res = await fetch('pages/techStack.html');
        const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
        $('#content').empty()
        $('#content').append(doc.getElementById('techStackPage').innerHTML);
        loadSkills(doc)
    });

    $(document).on ('click', '#navLibrary', async function () {
        const res = await fetch('pages/library.html');
        const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
        $('#content').empty()
        $('#content').append(doc.getElementById('libraryPage').innerHTML);
        loadBooks(doc)
    });

    $(document).on ('click', '#navEmailMe', async function () {
        const res = await fetch('###');
        const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
        $('#content').empty()
        $('#content').append(doc.getElementById('###').innerHTML);
    });
});