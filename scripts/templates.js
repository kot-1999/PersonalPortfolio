export const bookTemplate =  `
    <div class='libraryItem'>
        <div class="bookImageBlock">
            <img
                class='bookImg'
                alt='{{img.alt}}'
                src='{{img.source}}'
            >
        </div>
        <div class='bookInfo'>
            <h3>{{book.name}}</h3>
            <p><strong>Author: </strong>{{book.author}}</p>
            <p><strong>Category: </strong>{{book.category}}</p>
            <p class='summary'><strong>Summary: </strong>{{book.summary}}</p>
            <p class='takeaways'><strong>Takeaways: </strong>{{book.takeaways}}</p>
        </div>
    </div>`

export const navTemplate = `
    <div class="navigationBar">
        <div class="navigationMenu">≡
            <ul>
                <li><a 
                    id='navMain'
                    class='noDecoration'
                    href='index.html'
                >Main</a></li>
                <li><a
                    id='navProjects'
                    class='noDecoration smallSpace blockCenter blockInLine textWhite'
                    href='#projects'
                >Projects</a></li>
                <li><a
                    id='navTechStack'
                    class='noDecoration smallSpace blockCenter blockInLine textWhite'
                    href='#techStack'
                >Tech Stack</a></li>
                <li><a
                    id='navLibrary'
                    class='noDecoration smallSpace blockCenter blockInLine textWhite'
                    href='#library'
                >Library</a></li>
                <li><a
                    id='navEmailMe'
                    class='smallSpace blockCenter blockInLine textWhite'
                    href='#emailMe'
                >Email Me</a></li>
            </ul>
        </div>
    </div>
`
// <div class='stickyTop blockInLine'>
//     <a
//         id='navMain'
//         class='noDecoration smallSpace blockCenter blockInLine textWhite'
//         href='index.html'
//     >
//         Main
//     </a>
//     <a
//         id='navProjects'
//         class='noDecoration smallSpace blockCenter blockInLine textWhite'
//         href='#'
//     >
//         <span class='smallSpace blockCenter blockInLine textWhite'>Projects</span>
//     </a>
//     <a
//         id='navTechStack'
//         class='noDecoration smallSpace blockCenter blockInLine textWhite'
//         href='#techStack'
//     >
//         Technology Stack
//     </a>
//
//     <a
//         id='navLibrary'
//         class='noDecoration smallSpace blockCenter blockInLine textWhite'
//         href='#'
//     >
//         Personal Library
//     </a>
//
//     <a
//         id='navEmailMe '
//         class='smallSpace blockCenter blockInLine textWhite'
//         href='#'
//     >Contact Me</a>
// </div>

export const skillTemplate = `
    <div class='blockInLine circleAround textCenter mediumSpace'>
        <picture>
            <source class='techIcon spaceZero'
                src='{{img.srcSmall}}'
                media="(max-width: 600px)">
            <img
                class='techIcon spaceZero'
                alt='{{img.alt}}'
                src='{{img.srcLarge}}'
                height='{{img.height}}'
            >
        </picture>
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