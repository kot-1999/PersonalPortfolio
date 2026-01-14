import { loadBooks } from './library.js'
import { loadMain } from './main.js'
import { loadProjectsPage } from './projects.js'
import { loadSkills } from './skills.js'
import {
    emailMeTemplate,
    libraryPageTemplate,
    mainPage,
    navTemplate,
    projectsPageTemplate,
    techStackPageTemplate
} from './templates.js'

// Load secret config
const formspreeAction = 'https://formspree.io/f/mlggekeq'

// Add navigation to the page
async function renderNavigation() {
    $('#body').prepend(navTemplate)
}

// Show page content
function showContent() {
    $('#content').css('visibility', 'visible')
}

// Send email. To send email FORMSPREE_ACTION var should be available in config.s
function emailListener() {
    $('#emailMeForm').on('submit', async function(e) {
        e.preventDefault()

        const formData = new FormData(this)
        const action = this.action

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            $('#emailOverlay').remove()
            if (response.ok) {
                window.Swal.fire({
                    icon: 'success',
                    title: 'Email sent!',
                    text: 'Thanks for reaching out.',
                    timer: 2000,
                    showConfirmButton: false
                })
            } else {
                window.Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: 'Form submission error',
                    timer: 2000,
                    showConfirmButton: false
                })
            }
        } catch (err) {
            $('#emailOverlay').remove()
            window.Swal.fire({
                icon: 'error',
                title: 'ERROR',
                text: 'Network error: ' + err.message,
                timer: 2000,
                showConfirmButton: false
            })
        }
    })

}

// First load on when document DOM is ready
$(document).ready(function () {
    renderNavigation()
    renderFromHash()
    showContent()

    // Navigation clicks ONLY change hash
    $(document).on('click', '#navProjects', () => {
        location.hash = '#projects'
    })

    $(document).on('click', '#navTechStack', () => {
        location.hash = '#techStack'
    })

    $(document).on('click', '#navLibrary', () => {
        location.hash = '#library'
    })

    $(document).on('click', '#navMain', () => {
        location.hash = ''
    })

    // Email overlay (not routed)
    $(document).on('click', '#navEmailMe, .navEmailMe', function () {
        $('body').append(`
            <div id="emailOverlay">
                ${emailMeTemplate(formspreeAction)}
            </div>
        `)
        emailListener()
    })
})

// Page load logic
function loadPage(template, loader, navId) {
    $('.navItem').removeClass('navActive')

    $(navId).addClass('navActive')

    $('#content').empty()
        .append(template)

    loader()

    window.scrollTo({
        top: 0,
        behavior: 'auto' 
    })
}

// Handles page reload. Assures that page will reload on same page
function renderFromHash() {
    const routes = {
        '#projects': {
            template: projectsPageTemplate,
            loader: loadProjectsPage,
            nav: '#navProjects'
        },
        '#techStack': {
            template: techStackPageTemplate,
            loader: loadSkills,
            nav: '#navTechStack'
        },
        '#library': {
            template: libraryPageTemplate,
            loader: loadBooks,
            nav: '#navLibrary'
        }
    }

    // Load main page if url hash is not awailable
    const route = routes[window.location.hash] || {
        template: mainPage,
        loader: loadMain,
        nav: '#navMain'
    }

    loadPage(route.template, route.loader, route.nav)
}

// Handles nav toggle
$(document).on('click', '#navToggle', function () {
    $('#navMenu').toggleClass('open')
})

// Close naw if clicked outside
$(document).on('click', function(e) {
    const $navMenu = $('#navMenu')
    const $toggle = $('#navToggle')

    if ($navMenu.hasClass('open') && !$(e.target).closest($navMenu).length && !$(e.target).is($toggle)) {
        $navMenu.removeClass('open')
    }
})

// Close email form when clicking outside form
$(document).on('click', '#emailOverlay', function (e) {
    if (!$(e.target).closest('#emailMeForm').length) {
        $(this).remove()
    }
})

// Reacts on any hash changes
window.addEventListener('hashchange', renderFromHash)
