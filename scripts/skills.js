import Mustache from './mustache.js';
import { skillCardTemplate } from './templates.js';

export const SKILL_CATEGORY = {
    ALL: 'All',
    LANGUAGES: 'Languages',
    BACKEND: 'Backend',
    FRONTEND: 'Frontend',
    STORAGE: 'Storage',
    SECURITY: 'Security',
    AWS: 'AWS Stack',
    TESTING: 'Testing',
    MONITORING: 'Monitoring',
    PROJECT_MANAGEMENT: 'Project Management',
    OTHERS: 'Others'
};

export const SKILL_PROFICIENCY = {
    BASIC: 'Basic',
    ADVANCED: 'Advanced',
    EXPERT: 'Expert'
};
const skills = [
    // Languages & Backend
    {
        key: 'NodeJS',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'JavaScript runtime for building fast, scalable backend services and event-driven APIs.'
    },
    {
        key: 'Express-js',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Minimal Node.js framework for building REST APIs with middleware-based architecture.'
    },
    {
        key: 'TypeScript',
        categories: [SKILL_CATEGORY.LANGUAGES],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Strongly typed JavaScript superset improving code safety, refactoring, and scalability.'
    },
    {
        key: 'JavaScript',
        categories: [SKILL_CATEGORY.LANGUAGES],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Core language of the web used across frontend interfaces and backend services.'
    },
    {
        key: 'Python',
        categories: [SKILL_CATEGORY.LANGUAGES],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'General-purpose language used for backend services, scripting, and automation.'
    },
    {
        key: 'Java',
        categories: [SKILL_CATEGORY.LANGUAGES],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Enterprise-grade language for building reliable, long-running backend systems.'
    },
    {
        key: 'C-Language',
        categories: [SKILL_CATEGORY.LANGUAGES],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Low-level language used to understand memory management and system-level programming.'
    },
    {
        key: 'Shell-Script',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.BASIC,
        context: 'Used for automating deployments, server tasks, and development workflows.'
    },

    // Storage
    {
        key: 'PostgreSQL',
        categories: [SKILL_CATEGORY.STORAGE],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Advanced relational database focused on data integrity, performance, and complex queries.'
    },
    {
        key: 'MySQL',
        categories: [SKILL_CATEGORY.STORAGE],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Popular relational database used in transactional and data-driven systems.'
    },
    {
        key: 'MongoDB',
        categories: [SKILL_CATEGORY.STORAGE],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'NoSQL document database designed for flexible schemas and rapid iteration.'
    },
    {
        key: 'Redis',
        categories: [SKILL_CATEGORY.STORAGE],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'In-memory data store used for caching, queues, sessions, and real-time data.'
    },
    {
        key: 'Prisma',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Type-safe ORM simplifying database access and schema migrations.'
    },
    {
        key: 'Sequelize',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'ORM providing model-based access to SQL databases.'
    },

    // Frontend
    {
        key: 'HTML',
        categories: [SKILL_CATEGORY.FRONTEND],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Markup language defining semantic structure of web pages.'
    },
    {
        key: 'CSS',
        categories: [SKILL_CATEGORY.FRONTEND],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Styling language used for layouts, responsiveness, and UI design.'
    },
    {
        key: 'Bootstrap',
        categories: [SKILL_CATEGORY.FRONTEND],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'CSS framework for building responsive and consistent user interfaces.'
    },
    {
        key: 'Leaflet',
        categories: [SKILL_CATEGORY.FRONTEND],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Lightweight JavaScript library for interactive maps and geospatial visualizations.'
    },

    // Testing
    {
        key: 'JMeter',
        categories: [SKILL_CATEGORY.TESTING],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Load and performance testing tool for backend systems.'
    },
    {
        key: 'Mocha',
        categories: [SKILL_CATEGORY.TESTING],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'JavaScript testing framework for unit and integration tests.'
    },
    {
        key: 'Chai',
        categories: [SKILL_CATEGORY.TESTING],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Assertion library used to validate application behavior in tests.'
    },
    {
        key: 'Postman',
        categories: [SKILL_CATEGORY.TESTING],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Tool for testing, debugging, and documenting REST APIs.'
    },

    // Security
    {
        key: 'Helmet',
        categories: [SKILL_CATEGORY.SECURITY],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Secures applications by configuring HTTP security headers.'
    },
    {
        key: 'Passport',
        categories: [SKILL_CATEGORY.SECURITY],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Authentication middleware supporting multiple strategies.'
    },
    {
        key: 'OAuth',
        categories: [SKILL_CATEGORY.SECURITY],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Authorization framework for secure delegated access.'
    },
    {
        key: 'JWT',
        categories: [SKILL_CATEGORY.SECURITY],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Stateless authentication mechanism using signed tokens.'
    },
    {
        key: 'JOI',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Schema-based validation library ensuring API request data integrity.'
    },

    // Monitoring
    {
        key: 'Sentry',
        categories: [SKILL_CATEGORY.MONITORING],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Error tracking and performance monitoring in production environments.'
    },
    {
        key: 'ElasticSearch',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Search and analytics engine used for log analysis and observability.'
    },
    {
        key: 'Winston',
        categories: [SKILL_CATEGORY.MONITORING],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Structured logging library for Node.js applications.'
    },

    // Project Management & DevOps
    {
        key: 'Docker',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Containerization platform ensuring consistent runtime environments.'
    },
    {
        key: 'BullMQ',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Redis-based queue system for background jobs and async processing.'
    },
    {
        key: 'RabbitMQ',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Message broker enabling asynchronous system communication.'
    },
    {
        key: 'GitHub',
        categories: [SKILL_CATEGORY.PROJECT_MANAGEMENT],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Version control and collaboration platform for managing source code.'
    },
    {
        key: 'Bitbucket',
        categories: [SKILL_CATEGORY.PROJECT_MANAGEMENT],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Git-based repository hosting with CI/CD integrations.'
    },
    {
        key: 'Jira',
        categories: [SKILL_CATEGORY.PROJECT_MANAGEMENT],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Agile project management tool for sprint planning and tracking.'
    },
    {
        key: 'Notion',
        categories: [SKILL_CATEGORY.PROJECT_MANAGEMENT],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Documentation and collaboration workspace for teams.'
    },
    {
        key: 'Eslint',
        categories: [SKILL_CATEGORY.OTHERS],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Static analysis tool enforcing code quality and consistency.'
    },

    // Others
    {
        key: 'Spring-Boot',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.BASIC,
        context: 'Java framework for building scalable and production-ready backend services.'
    },
    {
        key: 'OpenAI',
        categories: [SKILL_CATEGORY.OTHERS],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'API platform enabling AI-powered features such as text generation and automation.'
    },
    {
        key: 'Google-Cloud-Console',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.BASIC,
        context: 'Set of Google APIs and services used for integrations and external features.'
    },
    {
        key: 'CSharp-Language',
        categories: [SKILL_CATEGORY.LANGUAGES],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Strongly typed language used for backend development on the .NET platform.'
    },
    {
        key: 'CloudWatch',
        categories: [SKILL_CATEGORY.MONITORING, SKILL_CATEGORY.AWS],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'AWS monitoring service for collecting logs, metrics, and setting alarms for cloud resources.'
    },
    {
        key: 'EC2',
        categories: [SKILL_CATEGORY.BACKEND, SKILL_CATEGORY.AWS],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'AWS virtual servers used to deploy and scale backend applications.'
    },
    {
        key: 'IAM',
        categories: [SKILL_CATEGORY.AWS],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'AWS identity and access management for defining permissions, roles, and security policies.'
    },
    {
        key: 'RDS',
        categories: [SKILL_CATEGORY.STORAGE, SKILL_CATEGORY.AWS],
        proficiency: SKILL_PROFICIENCY.BASIC,
        context: 'Managed AWS service for running relational databases with automated backups and scaling.'
    },
    {
        key: 'SES',
        categories: [SKILL_CATEGORY.BACKEND, SKILL_CATEGORY.AWS],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'AWS email service for sending transactional and notification emails at scale.'
    },
    {
        key: 'Linux',
        categories: [SKILL_CATEGORY.OTHERS],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Operating system used for servers, deployments, and backend infrastructure.'
    },
    {
        key: 'i18next',
        categories: [SKILL_CATEGORY.FRONTEND, SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Internationalization framework for managing translations and multi-language support.'
    },
    {
        key: 'Swagger',
        categories: [SKILL_CATEGORY.BACKEND, SKILL_CATEGORY.PROJECT_MANAGEMENT],
        proficiency: SKILL_PROFICIENCY.EXPERT,
        context: 'Tooling for designing, documenting, and testing REST APIs using OpenAPI specifications.'
    },
    {
        key: 'Stripe',
        categories: [SKILL_CATEGORY.BACKEND],
        proficiency: SKILL_PROFICIENCY.ADVANCED,
        context: 'Payment processing platform for handling subscriptions, payments, and billing workflows.'
    },
    {
        key: 'Unity',
        categories: [SKILL_CATEGORY.OTHERS],
        proficiency: SKILL_PROFICIENCY.BASIC,
        context: 'Game engine used for experimenting with interactive applications and learning real-time 2D/3D development concepts.'
    }
];

const pathBase = '../assets/icons/'
const fileExtention = '.png'

export function loadSkills(selectedCategory = SKILL_CATEGORY.ALL) {
    const $container = $('#techCategories');
    $container.empty();

    Object.values(SKILL_CATEGORY).forEach((category) => {
        const button = `
            <button
                class="categoryButton techCategoryButton ${selectedCategory === category ? 'activeCategory' : ''}"
                data-category="${category}"
            >
                ${category}
            </button>
        `;
        $container.append(button);
    });

    $('#techIcons').empty();

    for (
        const skill 
        of selectedCategory === SKILL_CATEGORY.ALL
            ? skills 
            : skills.filter((skill) => skill.categories.includes(selectedCategory))
    ) {
        const renderedTemplate = Mustache.render(skillCardTemplate, {
            img: {
                srcLarge: `${pathBase}${skill.key}-96${fileExtention}`,
                srcSmall: `${pathBase}${skill.key}-48${fileExtention}`,
                alt: skill.key,
                height: '90px'
            },
            skill: {
                name: skill.key.replaceAll('-', ' ').replaceAll('Sharp', '#'),
                context: skill.context
            }
        })

        $('#techIcons').append(renderedTemplate)
    }

}

// Handles category clicks
$(document).on('click', '.techCategoryButton', function () {
    const category = $(this).data('category');
    loadSkills(category);
});
