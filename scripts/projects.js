import Mustache from './mustache.js';
import {
    projectSideItemTemplate,
    projectDetailsTemplate
} from './templates.js';

export const projects = [
    // -------------------
    // GoodRequest Projects
    // -------------------
    {
        name: 'Notino',
        category: 'GoodRequest',
        link: 'https://www.goodrequest.com/work/notino',
        role: 'Backend Engineer',
        timeSpent: '18 months',
        team: 'Collaboration between Project Managers, Backend, Frontend, QA testers, and Designers',
        overview: `Developed scalable backend services for Notino, one of the leading European
            e-commerce platforms for beauty and personal care. Focused on building high-performance 
            APIs, database optimization, and secure payment processing. Ensured seamless integration 
            with inventory, shipping, and third-party payment systems. Worked closely with 
            frontend and design teams to create a robust, maintainable, and scalable architecture.`,
        responsibilities: [
            'Design and maintained REST APIs serving millions of users',
            'Optimize database queries and caching strategies using Redis',
            'Collaborate closely with frontend, QA, and design teams',
            'Implement logging and error tracking with Sentry'
        ],
        impact: [
            'Reduced code duplication by 70%, by introducing new endpoint versioning strategy',
            'Introduced a new caching strategy which increased code maintainability with removing unnecessary complexity from endpoints',
            'Identified and optimized 20% of the slovest SQL queries to the PSQL database',
            'Increased integration and unit test coverage from 79% to 93%',
            'Updated email notifications to pass 99% of spam checkers.'
        ],
        status: 'Live',
        techStack: ['NodeJS', 'TypeScript', 'RabbitMQ', 'Sentry', 'Express-js', 'PostgreSQL', 'Redis', 'Docker', 'EC2', 'RDS', 'Sequelize'],
        logoBase: 'notino',
        images: [
            {
                full: 'notino-01.png',
                thumb: 'notino-01.png',
                caption: 'Notino tablet'
            },
            {
                full: 'notino-02.png',
                thumb: 'notino-02.png',
                caption: 'Notino app'
            }
        ]
    },
    {
        name: 'KIA',
        category: 'GoodRequest',
        link: 'https://www.goodrequest.com/work/kia-en',
        role: 'Backend Engineer',
        timeSpent: '4 months',
        team: 'Collaboration between Project Managers, Backend, Frontend, QA testers, and Designers',
        overview: `At GoodRequest, we developed a custom feedback platform for Kia Slovakia, enabling the HR 
            team to create, manage, and evaluate anonymous questionnaires efficiently. The system 
            focuses on user comfort, speed, and clarity of results, reducing completion time 
            while improving feedback quality. Built with a collaborative, cross-functional team, 
            the platform delivers an MVP tailored to Kia’s specific needs, supporting data-driven 
            insights for employee satisfaction and workplace improvement.`,
        responsibilities: [
            'Implemented REST APIs for vehicle and user management',
            'Optimized DB queries for large datasets',
            'Integrated caching strategies and real-time updates',
            'Collaborated with frontend and mobile developers'
        ],
        impact: [
            'Secure sensitive user data',
            'Integrating multiple external APIs'
        ],
        status: 'Live',
        techStack: ['NodeJS', 'TypeScript', 'Express-js', 'PostgreSQL', 'Redis', 'Docker', 'Sequelize'],
        logoBase: 'kia'
    },
    {
        name: 'Aivodot',
        category: 'GoodRequest',
        link: 'https://www.goodrequest.com/work/aivodot',
        role: 'Backend Engineer',
        timeSpent: '7 months',
        team: 'Collaboration between Project Managers, Backend, Frontend, QA testers, and Designers',
        overview: `AIVODOT was developed to help investors navigate the complexity of portfolio construction. 
            Many tools provide generic recommendations, often leading to herd behavior and 
            suboptimal decisions. This platform delivers personalized guidance tailored to each 
            investor’s risk profile, style, and preferences. It simplifies security selection, 
            offers comprehensive investment insights, and includes educational resources to 
            empower users to make informed decisions and build optimized portfolios.`,
        responsibilities: [
            'Built scalable backend services to handle API workflows',
            'Manage data pipelines, storage, and queues',
            'Optimized async task and data processing'
        ],
        impact: [
            'Implemented registration flows for both administrators and users',
            'Implemented subscription flows for three types of subscription',
            'Implemented app’s core logic which assured correct calculation of risk, mach and other scores per user individually for over 30k of markets',
            'Enhanced DB architecture on an early development stage to avoid performance problems in future'
        ],
        status: 'Live',
        techStack: ['Stripe', 'NodeJS', 'TypeScript', 'Express-js', 'MongoDB', 'Redis', 'Docker', 'S3', 'EC2', 'CloudWatch', 'Sentry', 'Sequelize'],
        logoBase: 'aivodot'
    },
    {
        name: 'Benzinol',
        category: 'GoodRequest',
        link: 'https://www.goodrequest.com/blog/grpartners-benzinol-apps',
        role: 'Backend Engineer',
        timeSpent: '6 months',
        team: 'Collaboration between Project Managers, Backend, Frontend, QA testers, and Designers',
        overview: `The Benzinol mobile application was created to modernize and streamline the loyalty 
            program experience. It enables users to easily create or manage loyalty cards, 
            collect reward points, and access detailed information such as user profiles, transaction 
            history, and available rewards. Built with a strong emphasis on performance and usability, 
            the app supports both iOS and Android platforms.`,
        responsibilities: [
            'Optimize database queries for real-time performance',
            'Ensure high uptime and scalability'
        ],
        impact: [
            'Maintained 99.9% uptime',
            'Data consistency across multiple devices'
        ],
        kpi: ['API latency', 'Uptime', 'Location update frequency'],
        metricsLinks: ['https://www.goodrequest.com/blog/grpartners-benzinol-apps'],
        status: 'Live',
        techStack: ['NodeJS', 'TypeScript', 'Express-js', 'PostgreSQL', 'Redis', 'Docker'],
        logoBase: 'benzinol'
    },

    // -------------------
    // Hackathon Projects
    // -------------------
    {
        name: 'CityDesk',
        category: 'Hackathon',
        link: 'https://github.com/Dmytro27Ind/city-desk?tab=readme-ov-file',
        role: 'Full Stack Developer',
        timeSpent: '48 hours',
        team: '4 people',
        overview: `Application for notification of failures or breakdowns in the city built in 48 hours.
            Real-time visualization of city data and task tracking for urban planning.
            Focused on rapid prototyping and cross-team collaboration.`,
        responsibilities: [
            'Create dashboard frontend with live updates',
            'Implement real time issues update on map'
        ],
        impact: [
            'Demo-ready dashboard recognized among top hackathon projects',
            'Real-time collaboration and data syncing',
            'Building functional prototype in limited time'
        ],
        status: 'Prototype',
        techStack: ['NodeJS', 'React-Native', 'JavaScript', 'HTML', 'CSS', 'Leaflet', 'Bootstrap'],
        logoBase: 'city-desk',
        images: [
            {
                full: 'city-desk-1.jpg',
                thumb: 'city-desk-1.jpg',
                caption: 'Login screen'
            },
            {
                full: 'city-desk-4.jpg',
                thumb: 'city-desk-4.jpg',
                caption: 'Breakdowns on map'
            },
            {
                full: 'city-desk-2.jpg',
                thumb: 'city-desk-2.jpg',
                caption: 'New post for a breakdown'
            },
            {
                full: 'city-desk-3.jpg',
                thumb: 'city-desk-3.jpg',
                caption: 'Profile info'
            }
        ]
    },
    {
        name: 'Way of Memories',
        category: 'Hackathon',
        link: 'https://devpost.com/software/way-of-memories',
        role: 'Game Developer',
        timeSpent: '72 hours',
        team: '4 people',
        overview: `AR-based 2D single payer game developed in 3 days. 
            Focused on game logic and augmented reality features.`,
        responsibilities: [
            'AR feature integration',
            'Frontend game UI development'
        ],
        impact: [
            'Playable AR game demo completed',
            'Hackathon recognition'
        ],
        status: 'Prototype',
        techStack: ['CSharp-Language', 'Unity'],
        logoBase: 'way-of-memmories',
        videoUrl: 'https://www.youtube.com/embed/VV7NYGk6_Gc'
    },
    {
        name: 'express-joi-to-swagger',
        category: 'Personal',
        link: 'https://github.com/kot-1999/express-joi-to-swagger',
        role: 'Software Developer',
        timeSpent: '3 months',
        team: 'Part of a multi-contributor development effort',
        overview: `Open-source library converting Joi validation schemas into Swagger/OpenAPI documentation for Express 
            applications. Simplifies API documentation for Node.js developers.`,
        responsibilities: [
            'Implement new swagger versioning',
            'Update schema conversion logic and documentation',
            'Update documentation and tests'
        ],
        impact: [
            'Widely used in personal and community projects',
            'Open-source contributions and forks'
        ],
        status: 'Maintained',
        techStack: ['NodeJS', 'JavaScript', 'Express-js', 'TypeScript', 'JOI', 'Swagger'],
        logoBase: 'goodreqeust'
    },
    {
        name: 'Backend Express Template',
        category: 'Personal',
        link: 'https://github.com/kot-1999/BE-express',
        role: 'Backend Engineer / Architect',
        timeSpent: 'Ongoing',
        team: 'Solo',
        overview: `BE-express is a project designed to demonstrate a robust backend application using 
            modern technologies and best practices. The project is built with Express.js and TypeScript,
            providing a solid foundation for scalable and maintainable server-side applications.`,
        responsibilities: [
            'Design modular backend architecture',
            'Implement authentication and session handling',
            'Integrate Redis and PostgreSQL for storage purposes',
            'Configure logging, monitoring, and error tracking',
            'Set up ESLint, testing, and environment configs'
        ],
        impact: [
            'Used as a base for multiple side projects',
            'Improved code consistency and maintainability'
        ],
        status: 'Maintained',
        techStack: [
            'NodeJS',
            'TypeScript',
            'Express-js',
            'PostgreSQL',
            'Redis',
            'Docker',
            'Eslint',
            'Winston',
            'Prisma',
            'JWT',
            'Helmet',
            'OAuth',
            'Swagger',
            'Sentry'
        ],
        logoBase: 'backend-template'
    },
    {
        name: 'Maze',
        category: 'Personal',
        link: 'https://github.com/kot-1999/BA-Maze?tab=readme-ov-file',
        role: 'Developer',
        timeSpent: '6 months',
        team: 'Solo',
        overview: `BA-Maze is a project designed to generate and solve mazes using various algorithms. It provides 
            a graphical user interface (GUI) to visualize the maze generation and solving processes, making 
            it an excellent educational tool for understanding these algorithms.`,
        responsibilities: [
            'Implement maze generation algorithms',
            'Ensure correctness of algorithms ',
            'Structure code for clarity and extensibility',
            'Keeping implementation readable and testable'
        ],
        impact: [
            'Strengthened understanding of algorithms',
            'Implementing a reusable logic for future algorithmic problems'
        ],
        status: 'Completed',
        techStack: ['Java', 'Spring-Boot', 'HTML', 'CSS'],
        logoBase: 'maze',
        images: [
            {
                full: 'maze-01.png',
                thumb: 'maze-01.png',
                caption: 'Game'
            },
            {
                full: 'maze-04.png',
                thumb: 'maze-04.png',
                caption: 'Ranking'
            },
            {
                full: 'maze-02.png',
                thumb: 'maze-02.png',
                caption: 'Authorization'
            },
            {
                full: 'maze-03.png',
                thumb: 'maze-03.png',
                caption: 'Comments'
            }
        ]
    },
    {
        name: 'Weather App',
        category: 'Personal',
        link: 'https://github.com/kot-1999/BA-Weather',
        role: 'Full Stack Developer',
        timeSpent: '1 months',
        team: 'Solo',
        overview: `Weather is a hybrid BE/FE application designed to provide weather-related data and services. 
            This project leverages external APIs to gather real-time weather information and offers endpoints
            for clients to access various weather metrics. The system is built with a focus on scalability 
            and reliability, ensuring efficient handling of API requests.`,
        responsibilities: [
            'Design and build clean and user-friendly UI',
            'Integrate third-party weather APIs',
            'Handle async data fetching and error states'
        ],
        impact: [
            'Fetches real-time weather data using third-party APIs',
            'Provided detailed weather metrics such as temperature, humidity, and wind speed',
            'Allowed users to tailor requests to specific data needs (e.g., current weather, forecasts)',
            'Built with a robust backend architecture to handle concurrent requests efficiently'
        ],
        status: 'Completed',
        techStack: ['JavaScript', 'React-Native', 'HTML', 'CSS'],
        logoBase: 'weather',
        images: [
            {
                full: 'weather-01.jpg',
                thumb: 'weather-01.jpg',
                caption: 'Daily weather forecast'
            },
            {
                full: 'weather-04.jpg',
                thumb: 'weather-04.jpg',
                caption: 'Clouds Map'
            },
            {
                full: 'weather-02.jpg',
                thumb: 'weather-02.jpg',
                caption: 'Air pollution info'
            },
            {
                full: 'weather-03.jpg',
                thumb: 'weather-03.jpg',
                caption: 'Application settings'
            }
        ]
    }
]

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

const pathBase = '../assets/logos/'
const fileExtention = '.png'
const iconExtention = '-icon'
const smallLogoExtention = '-logo-small'
const largeLogoExtention = '-logo-large'
const skillPathBase = '../assets/icons/'
const projectImagesPathBase = '../assets/projectImages/'

function renderProjectDetails(project) {
    const renderedDetails = Mustache.render(projectDetailsTemplate, {
        ...project,
        logoLarge: pathBase + project.logoBase + largeLogoExtention + fileExtention,
        logoSmall: pathBase + project.logoBase + smallLogoExtention + fileExtention,
        logoAlt: project.logoBase + ' logo',
        logoHeight: '100px',
        techBadges: project.techStack.map((techName) => ({
            name: techName.replaceAll('-', ' ').replaceAll('Sharp', '#'),
            alt: techName + ' icon',
            src: skillPathBase + techName + '-48' + fileExtention

        })),
        images: project.images
            ? project.images.map((image, index, arr) => ({
                full: projectImagesPathBase + image.full,
                thumb: projectImagesPathBase + image.thumb,
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
            icon: pathBase + project.logoBase + iconExtention + fileExtention,
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