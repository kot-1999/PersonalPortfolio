import { BOOK_CATEGORY } from './constants.js';
import { personalLibrary } from './content.js';
import Mustache from './mustache.js';
import { bookTemplate } from './templates.js';

export function loadBooks(selectedCategory = BOOK_CATEGORY.ALL) {
    const $container = $('#libraryCategories');
    $container.empty();

    Object.values(BOOK_CATEGORY).forEach((category) => {
        const button = `
            <button
                class="categoryButton bookCategoryButton ${selectedCategory === category ? 'activeCategory' : ''}"
                data-category="${category}"
            >
                ${category}
            </button>
        `;
        $container.append(button);
    });

    $('#bookIcons').empty();

    const books
        = selectedCategory === BOOK_CATEGORY.ALL
            ? personalLibrary
            : personalLibrary.filter((book) => book.category === selectedCategory);

    for (const book of books) {
        const renderedTemplate = Mustache.render(bookTemplate, {
            img: {
                source: `../assets/bookCovers/${book.key}.png`,
                alt: book.name
            },
            book
        });

        $('#bookIcons').append(renderedTemplate);
    }
}

// Handles category clicks
$(document).on('click', '.bookCategoryButton', function () {
    const category = $(this).data('category');
    loadBooks(category);
});

// Open via toggle
$(document).on('click', '.bookToggle', function (e) {
    e.stopPropagation();
    $('.libraryItem').removeClass('open');
    $(this).closest('.libraryItem')
        .addClass('open');
});

// Prevent closing when clicking inside extra content
$(document).on('click', '.bookExtra', function (e) {
    e.stopPropagation();
});

// Close on ANY other click
$(document).on('click', function () {
    $('.libraryItem').removeClass('open');
});

// Click on book image → open full screen
$(document).on('click', '.bookImg', function (e) {
    e.stopPropagation();
    const src = $(this).attr('src');

    const overlay = $(`
        <div id="lightboxOverlay">
            <img src="${src}" alt="">
        </div>
    `);

    $('body').append(overlay);
});

// Click outside image → close overlay
$(document).on('click', '#lightboxOverlay', function () {
    $(this).remove();
});