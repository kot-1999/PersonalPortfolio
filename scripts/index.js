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

const pathBase = 'assets/icons/'
const imageSize = 96
const fileExtention = '.png'

const iconsDiv = document.getElementById('icons')
const iconTemplate = document.getElementById('iconTemplate')

for (const iconShortcut of iconPaths) {

    const iconClone = iconTemplate.content.cloneNode(true)
    // const img = document.createElement('img')

    const img = iconClone.querySelector('img')
    img.src = `${pathBase}${iconShortcut}-${imageSize}${fileExtention}`
    img.alt = iconShortcut
    img.height = 70

    const imgText = iconClone.querySelector('p')
    imgText.textContent = iconShortcut.replaceAll('-', ' ')

    iconsDiv.appendChild(iconClone)
}





















