import { BOOK_CATEGORY, libraryPathBase, pngFileExtension } from './constants.js'
import { personalLibraryContent } from './content.js'
import Mustache from './mustache.js'
import { bookTemplate } from './templates.js'

export function loadBooks(selectedCategory = BOOK_CATEGORY.ALL) {
    // Load book categories
    const $container = $('#libraryCategories')
    $container.empty()

    Object.values(BOOK_CATEGORY).forEach((category) => {
        const button = `
            <button
                class="categoryButton bookCategoryButton ${selectedCategory === category ? 'activeCategory' : ''}"
                data-category="${category}"
            >
                ${category}
            </button>
        `
        $container.append(button)
    })

    // Load book titles and other details
    $('#bookIcons').empty()

    const books
        = selectedCategory === BOOK_CATEGORY.ALL
            ? personalLibraryContent
            : personalLibraryContent.filter((book) => book.category === selectedCategory)

    for (const book of books) {
        const renderedTemplate = Mustache.render(bookTemplate, {
            img: {
                source: libraryPathBase + book.key + pngFileExtension,
                alt: book.name
            },
            book
        })

        $('#bookIcons').append(renderedTemplate)
    }
}

// Handle category clicks
$(document).on('click', '.bookCategoryButton', function () {
    const category = $(this).data('category')
    loadBooks(category)
})

// Open details via toggle
$(document).on('click', '.bookToggle', function (event) {
    event.stopPropagation()
    $('.libraryItem').removeClass('open')
    $(this).closest('.libraryItem')
        .addClass('open')
})

// Prevent closing when clicking inside extra content
$(document).on('click', '.bookExtra', function (event) {
    event.stopPropagation()
})

// Close on ANY other click
$(document).on('click', function () {
    $('.libraryItem').removeClass('open')
})

// Open book image on full screen
$(document).on('click', '.bookImg', function (event) {
    event.stopPropagation()
    const src = $(this).attr('src')

    const overlay = $(`
        <div id="lightboxOverlay">
            <img src="${src}" alt="">
        </div>
    `)

    $('body').append(overlay)
})

// Close overlay on click outside image
$(document).on('click', '#lightboxOverlay', function () {
    $(this).remove()
})