export const bookTemplate =  `
    <span
        class='book-card blockInLine textCenter mediumSpace'
        style='width: 30%'
    >
        <img
            class='book-img'
            alt='{{img.alt}}'
            height='{{img.height}}'
            src='{{img.source}}'
        >
        <div class='book-info'>
            <h3>{{book.name}}</h3>
            <p><strong>Author: </strong>{{book.author}}</p>
            <p><strong>Category: </strong>{{book.category}}</p>
            <p class='summary'>{{book.summary}}</p>
            <p class='takeaways'>{{book.takeaways}}</p>
        </div>
    </span>`

export const navTemplate = `
    <div class='stickyTop blockInLine'>
        <a
            id='navMain'
            class='noDecoration smallSpace blockCenter blockInLine textWhite'
            href='index.html'
        >
            Main
        </a>
        <a
            id='navProjects'
            class='noDecoration smallSpace blockCenter blockInLine textWhite'
            href='#'
        >
            <span class='smallSpace blockCenter blockInLine textWhite'>Projects</span>
        </a>
        <a
            id='navTechStack'
            class='noDecoration smallSpace blockCenter blockInLine textWhite'
            href='#techStack'
        >
            Technology Stack
        </a>

        <a
            id='navLibrary'
            class='noDecoration smallSpace blockCenter blockInLine textWhite'
            href='#'
        >
            Personal Library
        </a>

        <a
            id='navEmailMe '
            class='smallSpace blockCenter blockInLine textWhite'
            href='#'
        >Contact Me</a>
    </div>`

export const skillTemplate = `
    <div class='blockInLine circleAround textCenter mediumSpace'>
        <img
            class='techIcon spaceZero'
            alt='{{img.alt}}'
            src='{{img.src}}'
            height='{{img.height}}'
        >
        <p class='fontSmall spaceZero'>{{skill.name}}</p>
    </div>
`

export const libraryPageTemplate = `
    <h2>Library</h2>
    <p>
        Here’s a list of books I’ve read over the years. Each book taught
        me something new about programming, software design, or data science.
        I hope you find some inspiration here!
    </p>
    <div id='bookIcons'></div>
`

export const techStackTemplate = `
    <h2>Technological Stack</h2>
    <div id='icons' class='width80 blockCenter'></div>
`

export const projectsTemplate = `
    <h2>Projects</h2>
`