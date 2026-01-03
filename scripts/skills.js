import Mustache from './mustache.js';
import { skillTemplate } from './templates.js';

const iconPaths = [
    'AWS',
    'BullMQ',
    'C-Language',
    'Docker',
    'ElasticSearch',
    'Express-js',
    'i18next',
    'JavaScript',
    'MongoDB',
    'NodeJS' ,
    'PostgreSQL',
    'Python',
    'Redis',
    'Sentry',
    'SES',
    'TypeScript',
    'Bitbucket',
    'CloudWatch',
    'EC2',
    'Eslint',
    'IAM',
    'Jira',
    'Linux',
    'MySQL',
    'Notion',
    'Prisma',
    'RDS',
    'S3',
    'Sequelize',
    'Stripe'
]

const pathBase = '../assets/icons/'
const fileExtention = '.png'

export function loadSkills() {

    for (const iconShortcut of iconPaths) {
        const renderedTemplate = Mustache.render(skillTemplate, {
            img: {
                srcLarge: `${pathBase}${iconShortcut}-96${fileExtention}`,
                srcSmall: `${pathBase}${iconShortcut}-48${fileExtention}`,
                alt: iconShortcut,
                height: '70px'
            },
            skill: {
                name: iconShortcut
            }
        })

        $('#icons').append(renderedTemplate)
    }

}