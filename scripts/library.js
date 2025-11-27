const library =[
    { name: 'Arduino Microcontrollers Programming' },
    { name: 'C++ Programming Language' },
    { name: 'C#  The complete Reference' },
    { name: 'Deep Reinforcement Learning with Python' },
    { name: 'Designing Data Intensive Applications' },
    { name: 'Design Paterns' },
    { name: 'Effective Java' },
    { name: 'Git Magic' },
    { name: 'Grokking Algorithms' },
    { name: 'HTML & CSS' },
    { name: 'Intelligent Agents with OpenAI Gym' },
    { name: 'Java a Beginner\'s Guide' },
    { name: 'JavaScript & JQuery' },
    { name: 'Modern Operating Systems' },
    { name: 'NodeJS Web Development' },
    { name: 'PostgreSQL' },
    { name: 'Python Machine Learning' },
    { name: 'SQL Antipatterns' },
    { name: 'The C Programming Language' }
]
const pathBase = '../assets/bookCovers/'
const imageSize = 96
const fileExtention = '.png'

export function loadSkills(doc) {
    const iconTemplate = doc.getElementById('bookCoverTemplate')

    for (const iconShortcut of iconPaths) {

        const iconClone = iconTemplate.content.cloneNode(true)
        // const img = document.createElement('img')

        const img = iconClone.querySelector('img')
        img.src = `${pathBase}${iconShortcut}-${imageSize}${fileExtention}`
        img.alt = iconShortcut
        img.height = 70

        const imgText = iconClone.querySelector('p')
        imgText.textContent = iconShortcut.replaceAll('-', ' ')

        $('#icons').append(iconClone)
    }

}