import { BOOK_CATEGORY, SKILL_CATEGORY, SKILL_PROFICIENCY } from './constants.js';

export const projects = [
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
        imageExtension: '.png',
        images: [
            {
                name: 'notino-01',
                caption: 'Notino tablet'
            },
            {
                name: 'notino-02',
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
        imageExtension: '.jpg',
        images: [
            {
                name: 'city-desk-1',
                caption: 'Login screen'
            },
            {
                name: 'city-desk-4',
                caption: 'Breakdowns on map'
            },
            {
                name: 'city-desk-2',
                caption: 'New post for a breakdown'
            },
            {
                name: 'city-desk-3',
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
        imageExtension: '.png',
        images: [
            {
                name: 'maze-01',
                caption: 'Game'
            },
            {
                name: 'maze-04',
                caption: 'Ranking'
            },
            {
                name: 'maze-02',
                caption: 'Authorization'
            },
            {
                name: 'maze-03',
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
        imageExtension: '.jpg',
        images: [
            {
                name: 'weather-01',
                caption: 'Daily weather forecast'
            },
            {
                name: 'weather-04',
                caption: 'Clouds Map'
            },
            {
                name: 'weather-02',
                caption: 'Air pollution info'
            },
            {
                name: 'weather-03',
                caption: 'Application settings'
            }
        ]
    }
]

export const skills = [
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

export const personalLibrary = [
    // Programming Languages
    {
        key: 'The C Programming Language',
        name: 'The C Programming Language',
        author: 'Brian W. Kernighan',
        category: BOOK_CATEGORY.PROGRAMMING_LANG,
        summary: 'Classic book teaching C fundamentals, idiomatic C programming, and foundational programming concepts.',
        takeaways: 'Learned pointers, memory management, structured programming, and clean coding practices.'
    },
    {
        key: 'C++ Programming Language',
        name: 'C++ Programming Language',
        author: 'Bjarne Stroustrup',
        category: BOOK_CATEGORY.PROGRAMMING_LANG,
        summary: 'Comprehensive guide covering C++ syntax, object-oriented programming, templates, and the Standard Template Library.',
        takeaways: 'Learned OOP principles, templates, STL, memory management, RAII, and idiomatic C++ patterns.'
    },
    {
        key: 'Java a Beginner\'s Guide',
        name: 'Java a Beginner\'s Guide',
        author: 'Herbert Schildt',
        category: BOOK_CATEGORY.PROGRAMMING_LANG,
        summary: 'Beginner-friendly introduction to Java covering core syntax, object-oriented concepts, and basic libraries.',
        takeaways: 'Learned Java syntax, OOP principles, basic GUI development, exception handling, and standard libraries.'
    },
    {
        key: 'Effective Java',
        name: 'Effective Java',
        author: 'Joshua Bloch',
        category: BOOK_CATEGORY.PROGRAMMING_LANG,
        summary: 'Advanced guide on writing robust, maintainable, and high-performance Java code with best practices.',
        takeaways: 'Learned design patterns, API usage, performance optimization, and writing clean, efficient Java code.'
    },
    {
        key: 'C The complete Reference',
        name: 'C# The complete Reference',
        author: 'Herbert Schildt',
        category: BOOK_CATEGORY.PROGRAMMING_LANG,
        summary: 'In-depth reference covering C# language features, .NET integration, and practical programming examples.',
        takeaways: 'Learned C# syntax, LINQ, collections, .NET frameworks, and practical backend application development.'
    },
    {
        key: 'JavaScript & JQuery',
        name: 'JavaScript & JQuery',
        author: 'David Dakett',
        category: BOOK_CATEGORY.PROGRAMMING_LANG,
        summary: 'Guide to JavaScript basics, DOM manipulation, event handling, and creating interactive web applications.',
        takeaways: 'Learned JavaScript syntax, DOM API, event handling, asynchronous programming, and basic web interactivity.'
    },
    {
        key: 'HTML & CSS',
        name: 'HTML & CSS',
        author: 'David Dakett',
        category: BOOK_CATEGORY.WEB_DEV,
        summary: 'Introduction to building web pages with HTML structure and styling them with CSS, including responsive design.',
        takeaways: 'Learned HTML semantics, CSS layout techniques, styling, responsive design, and best practices for web design.'
    },
    {
        key: 'NodeJS Web Development',
        name: 'NodeJS Web Development',
        author: 'David Herron',
        category: BOOK_CATEGORY.DB_BACKEND,
        summary: 'Guide to building server-side applications using Node.js, Express, and asynchronous programming techniques.',
        takeaways: 'Learned server-side JavaScript, REST APIs, routing, middleware, asynchronous programming, and Node.js ecosystem.'
    },

    // Software Development
    {
        key: 'Git Magic',
        name: 'Git Magic',
        author: 'Ben Lynn',
        category: BOOK_CATEGORY.SOFTWARE_DEV,
        summary: 'Concise guide to using Git for version control, branching, merging, and collaborative workflows.',
        takeaways: 'Learned Git commands, branching strategies, conflict resolution, and efficient version control practices.'
    },
    {
        key: 'Grokking Algorithms',
        name: 'Grokking Algorithms',
        author: 'Aditya Bhargava',
        category: BOOK_CATEGORY.SOFTWARE_DEV,
        summary: 'Illustrated guide for learning algorithms and problem-solving with visual examples and practical exercises.',
        takeaways: 'Learned sorting, searching, recursion, Big O notation, and algorithmic thinking for coding challenges.'
    },
    {
        key: 'Design Patterns',
        name: 'Design Patterns',
        author: 'Erich Gamma',
        category: BOOK_CATEGORY.SOFTWARE_DEV,
        summary: 'Classic book introducing design patterns to create reusable, maintainable, and modular object-oriented software.',
        takeaways: 'Learned key design patterns such as Singleton, Observer, Factory, and strategies for clean software architecture.'
    },

    // AI & Machine Learning
    {
        key: 'Deep Reinforcement Learning with Python',
        name: 'Deep Reinforcement Learning',
        author: 'Sudharsan Ravichandiran',
        category: BOOK_CATEGORY.AI,
        summary: 'Practical guide to reinforcement learning algorithms and agent-based models using Python.',
        takeaways: 'Learned Q-learning, policy gradients, neural network integration, environment design, and agent training techniques.'
    },
    {
        key: 'Python Machine Learning',
        name: 'Python Machine Learning',
        author: 'Sebastian Raschka',
        category: BOOK_CATEGORY.AI,
        summary: 'Guide to implementing machine learning algorithms and understanding models using Python libraries.',
        takeaways: 'Learned supervised and unsupervised learning, scikit-learn usage, model evaluation, and feature engineering.'
    },
    {
        key: 'Intelligent Agents with OpenAI Gym',
        name: 'Intelligent Agents with OpenAI Gym',
        author: 'Praveen Palanisamy',
        category: BOOK_CATEGORY.AI,
        summary: 'Hands-on reinforcement learning projects using OpenAI Gym, Python, and practical exercises.',
        takeaways: 'Learned environment creation, agent training, policy evaluation, and applying RL concepts to practical tasks.'
    },

    // Databases & Backend
    {
        key: 'Designing Data-Intensive Applications',
        name: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        category: BOOK_CATEGORY.DB_BACKEND,
        summary: 'Guide to building scalable, reliable, and maintainable data systems for modern applications.',
        takeaways: 'Learned distributed system principles, data modeling, consistency models, and designing fault-tolerant architectures.'
    },
    {
        key: 'PostgreSQL',
        name: 'PostgreSQL',
        author: 'Pavel Luzanov',
        category: BOOK_CATEGORY.DB_BACKEND,
        summary: 'Comprehensive guide to PostgreSQL covering queries, indexing, transactions, and database design.',
        takeaways: 'Learned SQL queries, indexing, transactions, performance tuning, and database best practices.'
    },
    {
        key: 'SQL Antipatterns',
        name: 'SQL Antipatterns',
        author: 'Bill Karwin',
        category: BOOK_CATEGORY.DB_BACKEND,
        summary: 'Guide to common SQL mistakes and how to avoid them in schema design and queries.',
        takeaways: 'Learned pitfalls to avoid in database design, query optimization, and maintaining data integrity.'
    },

    // Embedded & Operating Systems
    {
        key: 'Arduino Microcontrollers Programming',
        name: 'Arduino Microcontrollers Programming',
        author: 'Ulli Sommer',
        category: BOOK_CATEGORY.OS,
        summary: 'Practical guide to programming Arduino microcontrollers and building electronics projects.',
        takeaways: 'Learned microcontroller programming, working with sensors/actuators, and creating small electronics projects.'
    },
    {
        key: 'Modern Operating Systems',
        name: 'Modern Operating Systems',
        author: 'Andrew S. Tanenbaum',
        category: BOOK_CATEGORY.OS,
        summary: 'Comprehensive guide to operating system design, covering processes, memory, scheduling, and file systems.',
        takeaways: 'Learned process management, CPU scheduling, memory handling, file systems, and OS architecture concepts.'
    }
];