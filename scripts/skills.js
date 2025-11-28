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
    'LinkedIn',
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
    'Dev-Community',
    'EC2',
    'Eslint',
    'GitHub',
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
const imageSize = 96
const fileExtention = '.png'

export function loadSkills() {

    for (const iconShortcut of iconPaths) {
        const renderedTemplate = Mustache.render(skillTemplate, {
            img: {
                src: `${pathBase}${iconShortcut}-${imageSize}${fileExtention}`,
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