import Mustache from './mustache.js';
import { bookTemplate } from './templates.js';

const CATEGORY = {
    ALL: 'All',
    AI: 'AI',
    PROGRAMMING_LANG: 'Programming Languages',
    SOFTWARE_DEV: 'Software Development',
    WEB_DEV: 'Web Development',
    DB_BACKEND: 'Backend & Databases',
    OS: 'Embedded & Operating Systems'
}

const personalLibrary = [
    // Programming Languages
    {
        key: 'The C Programming Language',
        name: 'The C Programming Language',
        author: 'Brian W. Kernighan',
        category: CATEGORY.PROGRAMMING_LANG,
        summary: 'Classic book teaching C fundamentals, idiomatic C programming, and foundational programming concepts.',
        takeaways: 'Learned pointers, memory management, structured programming, and clean coding practices.'
    },
    {
        key: 'C++ Programming Language',
        name: 'C++ Programming Language',
        author: 'Bjarne Stroustrup',
        category: CATEGORY.PROGRAMMING_LANG,
        summary: 'Comprehensive guide covering C++ syntax, object-oriented programming, templates, and the Standard Template Library.',
        takeaways: 'Learned OOP principles, templates, STL, memory management, RAII, and idiomatic C++ patterns.'
    },
    {
        key: 'Java a Beginner\'s Guide',
        name: 'Java a Beginner\'s Guide',
        author: 'Herbert Schildt',
        category: CATEGORY.PROGRAMMING_LANG,
        summary: 'Beginner-friendly introduction to Java covering core syntax, object-oriented concepts, and basic libraries.',
        takeaways: 'Learned Java syntax, OOP principles, basic GUI development, exception handling, and standard libraries.'
    },
    {
        key: 'Effective Java',
        name: 'Effective Java',
        author: 'Joshua Bloch',
        category: CATEGORY.PROGRAMMING_LANG,
        summary: 'Advanced guide on writing robust, maintainable, and high-performance Java code with best practices.',
        takeaways: 'Learned design patterns, API usage, performance optimization, and writing clean, efficient Java code.'
    },
    {
        key: 'C The complete Reference',
        name: 'C# The complete Reference',
        author: 'Herbert Schildt',
        category: CATEGORY.PROGRAMMING_LANG,
        summary: 'In-depth reference covering C# language features, .NET integration, and practical programming examples.',
        takeaways: 'Learned C# syntax, LINQ, collections, .NET frameworks, and practical backend application development.'
    },
    {
        key: 'JavaScript & JQuery',
        name: 'JavaScript & JQuery',
        author: 'David Dakett',
        category: CATEGORY.PROGRAMMING_LANG,
        summary: 'Guide to JavaScript basics, DOM manipulation, event handling, and creating interactive web applications.',
        takeaways: 'Learned JavaScript syntax, DOM API, event handling, asynchronous programming, and basic web interactivity.'
    },
    {
        key: 'HTML & CSS',
        name: 'HTML & CSS',
        author: 'David Dakett',
        category: CATEGORY.WEB_DEV,
        summary: 'Introduction to building web pages with HTML structure and styling them with CSS, including responsive design.',
        takeaways: 'Learned HTML semantics, CSS layout techniques, styling, responsive design, and best practices for web design.'
    },
    {
        key: 'NodeJS Web Development',
        name: 'NodeJS Web Development',
        author: 'David Herron',
        category: CATEGORY.DB_BACKEND,
        summary: 'Guide to building server-side applications using Node.js, Express, and asynchronous programming techniques.',
        takeaways: 'Learned server-side JavaScript, REST APIs, routing, middleware, asynchronous programming, and Node.js ecosystem.'
    },

    // Software Development
    {
        key: 'Git Magic',
        name: 'Git Magic',
        author: 'Ben Lynn',
        category: CATEGORY.SOFTWARE_DEV,
        summary: 'Concise guide to using Git for version control, branching, merging, and collaborative workflows.',
        takeaways: 'Learned Git commands, branching strategies, conflict resolution, and efficient version control practices.'
    },
    {
        key: 'Grokking Algorithms',
        name: 'Grokking Algorithms',
        author: 'Aditya Bhargava',
        category: CATEGORY.SOFTWARE_DEV,
        summary: 'Illustrated guide for learning algorithms and problem-solving with visual examples and practical exercises.',
        takeaways: 'Learned sorting, searching, recursion, Big O notation, and algorithmic thinking for coding challenges.'
    },
    {
        key: 'Design Patterns',
        name: 'Design Patterns',
        author: 'Erich Gamma',
        category: CATEGORY.SOFTWARE_DEV,
        summary: 'Classic book introducing design patterns to create reusable, maintainable, and modular object-oriented software.',
        takeaways: 'Learned key design patterns such as Singleton, Observer, Factory, and strategies for clean software architecture.'
    },

    // AI & Machine Learning
    {
        key: 'Deep Reinforcement Learning with Python',
        name: 'Deep Reinforcement Learning with Python',
        author: 'Sudharsan Ravichandiran',
        category: CATEGORY.AI,
        summary: 'Practical guide to reinforcement learning algorithms and agent-based models using Python.',
        takeaways: 'Learned Q-learning, policy gradients, neural network integration, environment design, and agent training techniques.'
    },
    {
        key: 'Python Machine Learning',
        name: 'Python Machine Learning',
        author: 'Sebastian Raschka',
        category: CATEGORY.AI,
        summary: 'Guide to implementing machine learning algorithms and understanding models using Python libraries.',
        takeaways: 'Learned supervised and unsupervised learning, scikit-learn usage, model evaluation, and feature engineering.'
    },
    {
        key: 'Intelligent Agents with OpenAI Gym',
        name: 'Intelligent Agents with OpenAI Gym',
        author: 'Praveen Palanisamy',
        category: CATEGORY.AI,
        summary: 'Hands-on reinforcement learning projects using OpenAI Gym, Python, and practical exercises.',
        takeaways: 'Learned environment creation, agent training, policy evaluation, and applying RL concepts to practical tasks.'
    },

    // Databases & Backend
    {
        key: 'Designing Data-Intensive Applications',
        name: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        category: CATEGORY.DB_BACKEND,
        summary: 'Guide to building scalable, reliable, and maintainable data systems for modern applications.',
        takeaways: 'Learned distributed system principles, data modeling, consistency models, and designing fault-tolerant architectures.'
    },
    {
        key: 'PostgreSQL',
        name: 'PostgreSQL',
        author: 'Pavel Luzanov',
        category: CATEGORY.DB_BACKEND,
        summary: 'Comprehensive guide to PostgreSQL covering queries, indexing, transactions, and database design.',
        takeaways: 'Learned SQL queries, indexing, transactions, performance tuning, and database best practices.'
    },
    {
        key: 'SQL Antipatterns',
        name: 'SQL Antipatterns',
        author: 'Bill Karwin',
        category: CATEGORY.DB_BACKEND,
        summary: 'Guide to common SQL mistakes and how to avoid them in schema design and queries.',
        takeaways: 'Learned pitfalls to avoid in database design, query optimization, and maintaining data integrity.'
    },

    // Embedded & Operating Systems
    {
        key: 'Arduino Microcontrollers Programming',
        name: 'Arduino Microcontrollers Programming',
        author: 'Ulli Sommer',
        category: CATEGORY.OS,
        summary: 'Practical guide to programming Arduino microcontrollers and building electronics projects.',
        takeaways: 'Learned microcontroller programming, working with sensors/actuators, and creating small electronics projects.'
    },
    {
        key: 'Modern Operating Systems',
        name: 'Modern Operating Systems',
        author: 'Andrew S. Tanenbaum',
        category: CATEGORY.OS,
        summary: 'Comprehensive guide to operating system design, covering processes, memory, scheduling, and file systems.',
        takeaways: 'Learned process management, CPU scheduling, memory handling, file systems, and OS architecture concepts.'
    }
];

export function loadBooks(selectedCategory = CATEGORY.ALL) {
    const $container = $('#categories');
    $container.empty();

    Object.values(CATEGORY).forEach((category) => {
        const button = `
            <button
                class="bookCategoryButton ${selectedCategory === category ? 'bookActiveCategory' : ''}"
                data-category="${category}"
            >
                ${category}
            </button>
        `;
        $container.append(button);
    });

    $('#bookIcons').empty();

    const books
        = selectedCategory === CATEGORY.ALL
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