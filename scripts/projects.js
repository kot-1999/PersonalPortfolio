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
        timeSpent: '6 months',
        team: 'Collaboration between Project Managers, Backend, Frontend, QA testers, and Designers',
        overview: `Developed scalable backend services for Notino, one of the leading European
            e-commerce platforms for beauty and personal care. Focused on building high-performance 
            APIs, database optimization, and secure payment processing. Ensured seamless integration 
            with inventory, shipping, and third-party payment systems. Worked closely with 
            frontend and design teams to create a robust, maintainable, and scalable architecture.`,
        responsibilities: [
            'Designed and maintained REST APIs serving millions of users',
            'Optimized database queries and caching strategies using Redis',
            'Integrated third-party payment and inventory APIs',
            'Collaborated closely with frontend, QA, and design teams',
            'Implemented logging and error tracking with Sentry'
        ],
        challenges: [
            'Handling high concurrency during flash sales',
            'Maintaining API reliability with zero downtime deployments',
            'Ensuring PCI-compliant secure payment processing'
        ],
        impact: [
            'Reduced average API response times by ~30%',
            'Maintained 99.9% uptime during peak traffic',
            'Enabled seamless scaling to 10M+ users'
        ],
        kpi: ['API latency', 'Uptime', 'Transactions per second'],
        metricsLinks: ['https://www.goodrequest.com/work/notino'],
        status: 'Live',
        techStack: ['NodeJS', 'TypeScript', 'RabbitMQ', 'Sentry', 'Express-js', 'PostgreSQL', 'Redis', 'Docker', 'AWS-EC2', 'AWS-RDS', 'Sequelize']
    },
    {
        name: 'KIA',
        category: 'GoodRequest',
        link: 'https://www.goodrequest.com/work/kia-en',
        role: 'Backend Engineer',
        timeSpent: '4 months',
        team: 'Collaboration between Project Managers, Backend, Frontend, QA testers, and Designers',
        overview: `Backend services for the KIA mobile application, providing real-time 
            vehicle data, user management, and notifications. Designed APIs to support 
            multi-country deployments and integrated with external vehicle APIs to ensure accurate 
            and timely information. Focused on security and performance optimization.`,
        responsibilities: [
            'Implemented REST APIs for vehicle and user management',
            'Optimized DB queries for large datasets',
            'Integrated caching strategies and real-time updates',
            'Collaborated with frontend and mobile developers'
        ],
        challenges: [
            'Integrating multiple external vehicle APIs',
            'Securing sensitive user data',
            'Optimizing APIs for cross-country usage'
        ],
        impact: [
            'Achieved sub-200ms API response times',
            'Enabled multi-country rollout without backend issues'
        ],
        kpi: ['Response time', 'Data accuracy', 'User retention'],
        metricsLinks: ['https://www.goodrequest.com/work/kia-en'],
        status: 'Live',
        techStack: ['NodeJS', 'TypeScript', 'Express-js', 'PostgreSQL', 'Redis', 'Docker', 'Sequelize']
    },
    {
        name: 'Aivodot',
        category: 'GoodRequest',
        link: 'https://www.goodrequest.com/work/aivodot',
        role: 'Backend Engineer',
        timeSpent: '7 months',
        team: 'Collaboration between Project Managers, Backend, Frontend, QA testers, and Designers',
        overview: `Developed the backend platform for AI-powered services, including data 
            pipelines and agent-based models. Focused on performance, asynchronous processing, 
            and integrating Python-based AI components with Node.js services. The project 
            required handling large-scale data efficiently and ensuring system reliability 
            for AI computations.`,
        responsibilities: [
            'Built scalable backend services to handle AI workflows',
            'Integrated Python AI components with REST APIs',
            'Managed data pipelines, storage, and queues',
            'Optimized async task processing and logging'
        ],
        challenges: [
            'Integrating AI models with REST APIs',
            'Handling large-scale data efficiently',
            'Maintaining low-latency responses for AI tasks'
        ],
        impact: [
            'Reduced processing latency by 25%',
            'Enabled reliable deployment of AI services'
        ],
        kpi: ['Data throughput', 'Response latency', 'Model success rate'],
        metricsLinks: ['https://www.goodrequest.com/work/aivodot'],
        status: 'Live',
        techStack: ['Stripe', 'NodeJS', 'TypeScript', 'Express-js', 'MongoDB', 'Redis', 'Docker', 'S3', 'EC2', 'CloudWatch', 'Sentry', 'Sequelize']
    },
    {
        name: 'Benzinol',
        category: 'GoodRequest',
        link: 'https://www.goodrequest.com/blog/grpartners-benzinol-apps',
        role: 'Backend Engineer',
        timeSpent: '3 months',
        team: 'Collaboration between Project Managers, Backend, Frontend, QA testers, and Designers',
        overview: `Developed backend APIs for fuel and logistics tracking mobile app.
            Focused on real-time location tracking, performance optimization, and API
            integration with GPS and mapping services. Ensured high availability and
            low-latency updates for mobile clients.`,
        responsibilities: [
            'Implemented backend services for mobile tracking',
            'Optimized database queries for real-time performance',
            'Integrated mapping and GPS APIs',
            'Ensured high uptime and scalability'
        ],
        challenges: [
            'Real-time location tracking',
            'Mobile network variability',
            'Data consistency across multiple devices'
        ],
        impact: [
            'Maintained 99.9% uptime',
            'Real-time tracking for hundreds of vehicles'
        ],
        kpi: ['API latency', 'Uptime', 'Location update frequency'],
        metricsLinks: ['https://www.goodrequest.com/blog/grpartners-benzinol-apps'],
        status: 'Live',
        techStack: ['NodeJS', 'TypeScript', 'Express-js', 'PostgreSQL', 'Redis', 'Docker']
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
        overview: `Collaborative city management dashboard built in 48 hours.
            Real-time visualization of city data and task tracking for urban planning.
            Focused on rapid prototyping and cross-team collaboration.`,
        responsibilities: [
            'Developed backend APIs',
            'Created dashboard frontend with live updates',
            'Designed database schema and data models'
        ],
        challenges: [
            'Building functional prototype in limited time',
            'Real-time collaboration and data syncing'
        ],
        impact: [
            'Demo-ready dashboard recognized among top 10 hackathon projects'
        ],
        kpi: ['Realtime update frequency', 'Functional prototypes completed'],
        metricsLinks: ['https://github.com/Dmytro27Ind/city-desk?tab=readme-ov-file'],
        status: 'Prototype',
        techStack: ['NodeJS', 'React-Native', 'JavaScript', 'HTML', 'CSS', 'Leaflet', 'Bootstrap']
    },
    {
        name: 'Way of Memories',
        category: 'Hackathon',
        link: 'https://devpost.com/software/way-of-memories',
        role: 'Full Stack Developer',
        timeSpent: '72 hours',
        team: '4 people',
        overview: `AR-based multiplayer memory puzzle game developed in 3 days. 
            Focused on game logic, real-time multiplayer support, and augmented reality features.`,
        responsibilities: [
            'Backend API for multiplayer sessions',
            'AR feature integration',
            'Frontend game UI development'
        ],
        challenges: [
            'Integrating AR with multiplayer logic',
            'Rapid prototype development under time pressure'
        ],
        impact: [
            'Playable AR game demo completed',
            'Hackathon recognition for innovative gameplay'
        ],
        kpi: ['Gameplay stability', 'AR feature integration', 'Player engagement'],
        metricsLinks: ['https://devpost.com/software/way-of-memories'],
        status: 'Prototype',
        techStack: ['C#-Language', 'Unity']
    },

    // -------------------
    // Personal Projects
    // -------------------
    {
        name: 'express-joi-to-swagger',
        category: 'Personal',
        link: 'https://github.com/kot-1999/express-joi-to-swagger',
        role: 'Solo Developer',
        timeSpent: '2 weeks',
        team: 'Solo',
        overview: `Open-source library converting Joi validation schemas into Swagger/OpenAPI documentation for Express 
            applications. Simplifies API documentation for Node.js developers.`,
        responsibilities: [
            'Designed library API and usage patterns',
            'Implemented schema conversion logic',
            'Wrote documentation and tests'
        ],
        challenges: [
            'Handling all Joi validation edge cases',
            'Generating accurate OpenAPI output'
        ],
        impact: [
            'Widely used in personal and community projects',
            'Open-source contributions and forks'
        ],
        kpi: ['GitHub stars', 'Downloads', 'Pull requests'],
        metricsLinks: ['https://github.com/kot-1999/express-joi-to-swagger'],
        status: 'Maintained',
        techStack: ['NodeJS', 'JavaScript', 'Express-js', 'TypeScript', 'Joi', 'Swagger']
    },
    {
        name: 'Backend Express Template',
        category: 'Personal',
        link: 'https://github.com/kot-1999/BE-express',
        role: 'Backend Engineer / Architect',
        timeSpent: 'Ongoing (initial version ~3 weeks)',
        team: 'Solo',
        overview: `Production-ready backend template for Node.js applications. Designed as a 
            foundation for scalable REST APIs with best practices baked in: authentication,
            authorization, logging, error handling, validation, and observability. 
            Used as a starting point for multiple real projects.`,
        responsibilities: [
            'Designed modular backend architecture',
            'Implemented authentication and session handling',
            'Integrated Redis for caching and rate limiting',
            'Configured logging, monitoring, and error tracking',
            'Set up ESLint, testing, and environment configs'
        ],
        challenges: [
            'Balancing flexibility with opinionated defaults',
            'Designing extensible middleware and module structure',
            'Ensuring production readiness out of the box'
        ],
        impact: [
            'Reduced backend bootstrap time by ~70%',
            'Used as a base for multiple side and production projects',
            'Improved code consistency and maintainability'
        ],
        kpi: ['Setup time', 'Code reuse', 'Maintainability'],
        metricsLinks: ['https://github.com/kot-1999/BE-express'],
        status: 'Maintained',
        techStack: {
            existing: [
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
            ]
        }
    },
    {
        name: 'Maze',
        category: 'Personal',
        link: 'https://github.com/kot-1999/BA-Maze?tab=readme-ov-file',
        role: 'Developer',
        timeSpent: '1 week',
        team: 'Solo',
        overview: `Algorithm-focused project implementing maze generation and traversal logic. 
            Built to explore graph algorithms, pathfinding, and problem-solving techniques. 
            Emphasized clean logic, performance, and correctness.`,
        responsibilities: [
            'Implemented maze generation algorithms',
            'Developed pathfinding logic',
            'Structured code for clarity and extensibility'
        ],
        challenges: [
            'Ensuring correctness of traversal algorithms',
            'Balancing randomness with solvability',
            'Keeping implementation readable and testable'
        ],
        impact: [
            'Strengthened understanding of graph algorithms',
            'Reusable logic for future algorithmic problems'
        ],
        kpi: ['Algorithm correctness', 'Execution speed'],
        metricsLinks: ['https://github.com/kot-1999/BA-Maze?tab=readme-ov-file'],
        status: 'Completed',
        techStack: ['Java', 'Spring-Boot', 'HTML', 'CSS']
    },
    {
        name: 'Weather App',
        category: 'Personal',
        link: 'https://github.com/kot-1999/BA-Weather',
        role: 'Full Stack Developer',
        timeSpent: '1 week',
        team: 'Solo',
        overview: `Simple weather application consuming external APIs to display real-time weather 
            data. Built to practice API integration, asynchronous programming, and frontend-backend
            interaction.`,
        responsibilities: [
            'Integrated third-party weather APIs',
            'Handled async data fetching and error states',
            'Built clean and user-friendly UI'
        ],
        challenges: [
            'Handling API failures gracefully',
            'Managing async data flow',
            'Keeping UI responsive and clear'
        ],
        impact: [
            'Solidified understanding of API-driven applications',
            'Reusable patterns for async frontend apps'
        ],
        kpi: ['API response handling', 'UI responsiveness'],
        metricsLinks: ['https://github.com/kot-1999/BA-Weather'],
        status: 'Completed',
        techStack: ['JavaScript', 'React-Native', 'HTML', 'CSS']
    }
]

function renderProjectDetails(project) {
    const renderedDetails = Mustache.render(projectDetailsTemplate, project);
    $('#projectDetails').html(renderedDetails);
}

export function loadProjectsPage() {
    const $list = $('#projectsList');
    const $details = $('#projectDetails');

    $list.empty();
    $details.empty();

    // Render sidebar
    projects.forEach((project, index) => {
        const renderedItem = Mustache.render(projectSideItemTemplate, {
            ...project,
            active: index === 0,
            logo: project.logo || 'assets/projects/default.png'
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