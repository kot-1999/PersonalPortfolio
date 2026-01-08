import Mustache from './mustache.js';
import { skillCardTemplate } from './templates.js';

const SKILL_CATEGORY = {
    ALL: 'ALL',
    BACKEND: 'Backend',
    FRONTEND: 'Frontend',
    AWS: 'AWS',
    TESTING: 'Testing',
    MONITORING: 'Monitoring',
    SECURITY: 'Security',
    PROJECT_MANAGEMENT: 'Project Management'
}

const skills = [
    // Backend
    {
        key: 'NodeJS',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'JavaScript runtime for building fast and scalable backend services. Widely used for APIs and event-driven systems.'
    },
    {
        key: 'Express-js',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'Lightweight Node.js framework for building REST APIs and web services with middleware support.'
    },
    {
        key: 'TypeScript',
        categories: [SKILL_CATEGORY.BACKEND, SKILL_CATEGORY.FRONTEND],
        context: 'Strongly typed superset of JavaScript that improves code safety, readability, and maintainability.'
    },
    {
        key: 'JavaScript',
        categories: [SKILL_CATEGORY.BACKEND, SKILL_CATEGORY.FRONTEND],
        context: 'Core programming language of the web used for frontend interfaces and backend logic.'
    },
    {
        key: 'Python',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'High-level language commonly used for backend services, scripting, automation, and data processing.'
    },
    {
        key: 'Java',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'Enterprise-grade language focused on reliability, scalability, and long-running backend systems.'
    },
    {
        key: 'C-Language',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'Low-level programming language used for system-level development and performance-critical software.'
    },
    {
        key: 'Shell-Script',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'Used to automate system tasks, deployments, and server-side workflows.'
    },

    // Databases
    {
        key: 'PostgreSQL',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'Advanced relational database with strong consistency, indexing, and performance optimization features.'
    },
    {
        key: 'MySQL',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'Widely used relational database for transactional and data-driven applications.'
    },
    {
        key: 'MongoDB',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'Document-based NoSQL database suited for flexible schemas and rapid development.'
    },
    {
        key: 'Redis',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'In-memory data store used for caching, sessions, queues, and real-time data.'
    },
    {
        key: 'Prisma',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'Type-safe ORM that simplifies database access and schema management.'
    },
    {
        key: 'Sequelize',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'ORM for SQL databases providing model-based data access and migrations.'
    },

    // AWS
    {
        key: 'EC2',
        categories: [SKILL_CATEGORY.AWS],
        context: 'Virtual servers in the cloud used to run and scale backend applications.'
    },
    {
        key: 'S3',
        categories: [SKILL_CATEGORY.AWS],
        context: 'Highly durable object storage for files, backups, and static assets.'
    },
    {
        key: 'RDS',
        categories: [SKILL_CATEGORY.AWS],
        context: 'Managed relational database service simplifying backups, scaling, and maintenance.'
    },
    {
        key: 'IAM',
        categories: [SKILL_CATEGORY.AWS, SKILL_CATEGORY.SECURITY],
        context: 'Controls user access, permissions, and roles across AWS services.'
    },
    {
        key: 'SES',
        categories: [SKILL_CATEGORY.AWS],
        context: 'Scalable email service for transactional and notification emails.'
    },
    {
        key: 'CloudWatch',
        categories: [SKILL_CATEGORY.AWS, SKILL_CATEGORY.MONITORING],
        context: 'Monitoring service for logs, metrics, and system health in AWS.'
    },

    // Frontend
    {
        key: 'HTML',
        categories: [SKILL_CATEGORY.FRONTEND],
        context: 'Markup language defining the structure and semantics of web pages.'
    },
    {
        key: 'CSS',
        categories: [SKILL_CATEGORY.FRONTEND],
        context: 'Styling language used to design layouts, responsiveness, and visual appearance.'
    },

    // Testing
    {
        key: 'JMeter',
        categories: [SKILL_CATEGORY.TESTING],
        context: 'Tool for load, stress, and performance testing of backend systems.'
    },
    {
        key: 'Mocha',
        categories: [SKILL_CATEGORY.TESTING],
        context: 'JavaScript test framework for writing unit and integration tests.'
    },
    {
        key: 'Chai',
        categories: [SKILL_CATEGORY.TESTING],
        context: 'Assertion library used with test frameworks to validate application behavior.'
    },

    // Monitoring
    {
        key: 'Sentry',
        categories: [SKILL_CATEGORY.MONITORING],
        context: 'Tracks runtime errors, exceptions, and performance issues in production.'
    },
    {
        key: 'ElasticSearch',
        categories: [SKILL_CATEGORY.MONITORING],
        context: 'Search and analytics engine commonly used for logs and observability.'
    },
    {
        key: 'Winston',
        categories: [SKILL_CATEGORY.MONITORING],
        context: 'Flexible logging library for structured and centralized logs.'
    },

    // Security
    {
        key: 'Helmet',
        categories: [SKILL_CATEGORY.SECURITY],
        context: 'Adds security-related HTTP headers to protect web applications.'
    },
    {
        key: 'Passport',
        categories: [SKILL_CATEGORY.SECURITY],
        context: 'Authentication middleware supporting multiple auth strategies.'
    },

    // Project & DevOps
    {
        key: 'Docker',
        categories: [SKILL_CATEGORY.BACKEND, SKILL_CATEGORY.AWS],
        context: 'Container platform for packaging applications with consistent environments.'
    },
    {
        key: 'BullMQ',
        categories: [SKILL_CATEGORY.BACKEND],
        context: 'Queue system for background jobs, retries, and async processing.'
    },
    {
        key: 'GitHub',
        categories: [SKILL_CATEGORY.PROJECT_MANAGEMENT],
        context: 'GitHub is a platform for version control, that allows developers to store, manage, and track changes in code.'
    },
    {
        key: 'Bitbucket',
        categories: [SKILL_CATEGORY.PROJECT_MANAGEMENT],
        context: 'Git-based source control and CI/CD integration platform.'
    },
    {
        key: 'Jira',
        categories: [SKILL_CATEGORY.PROJECT_MANAGEMENT],
        context: 'Agile project management tool for tasks, sprints, and planning.'
    },
    {
        key: 'Notion',
        categories: [SKILL_CATEGORY.PROJECT_MANAGEMENT],
        context: 'Documentation and collaboration tool for teams and personal knowledge.'
    },
    {
        key: 'Eslint',
        categories: [SKILL_CATEGORY.PROJECT_MANAGEMENT],
        context: 'Static analysis tool enforcing code quality and consistency.'
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
                name: skill.key.replaceAll('-', ' '),
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
