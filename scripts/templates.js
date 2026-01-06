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

export const navTemplate =  `
    <nav class="navBar">
        <a id="navLogo" class="navLeft" href="index.html">/:AlexK</a>
        
        <button class="navToggle" id="navToggle">≡</button>
    
        <ul class="navRight" id="navMenu">
            <li><a id="navMain" href="index.html">Main</a></li>
            <li><a id="navProjects" href="#projects">Projects</a></li>
            <li><a id="navTechStack" href="#techStack">Tech Stack</a></li>
            <li><a id="navLibrary" href="#library">Library</a></li>
            <li><a id="navEmailMe" href="#emailMe">Email Me</a></li>
        </ul>
    </nav>
`

// export const navTemplate = `
//     <div class="navigationBar">
//         <div class="navigationMenu">≡
//             <ul>
//                 <li><a
//                     id='navMain'
//                     class='noDecoration'
//                     href='index.html'
//                 >Main</a></li>
//                 <li><a
//                     id='navProjects'
//                     class='noDecoration smallSpace blockCenter blockInLine textWhite'
//                     href='#projects'
//                 >Projects</a></li>
//                 <li><a
//                     id='navTechStack'
//                     class='noDecoration smallSpace blockCenter blockInLine textWhite'
//                     href='#techStack'
//                 >Tech Stack</a></li>
//                 <li><a
//                     id='navLibrary'
//                     class='noDecoration smallSpace blockCenter blockInLine textWhite'
//                     href='#library'
//                 >Library</a></li>
//                 <li><a
//                     id='navEmailMe'
//                     class='smallSpace blockCenter blockInLine textWhite'
//                     href='#emailMe'
//                 >Email Me</a></li>
//             </ul>
//         </div>
//     </div>
// `

export const skillTemplate = `
    <div class='blockInLine circleAround textCenter mediumSpace'>
        <picture>
            <source 
                class='techIcon spaceZero'
                srcset='{{img.srcLarge}}'
                media="(min-width: 600px)">
            <img
                class='techIcon spaceZero'
                alt='{{img.alt}}'
                src='{{img.srcSmall}}'
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
    
    <div id="categories"></div>
    <div id='bookIcons'></div>
`

export const techStackTemplate = `
    <h2>Technological Stack</h2>
    <div id='icons' class='width80 blockCenter'></div>
`

export const projectsTemplate = `
    <h2>Projects</h2>
`

export const mainPage = `
    <section class='hero'>
        <h1 class='name fontExtraLarge'>Oleksandr (Alex) Kashytskyi</h1>
        <h2 class='role fontLarge'>Backend Engineer</h2>
        <p class='location fontSmall'>London, UK</p>
    </section>

    <section class='about'>
        <p>
            Backend Engineer with 3+ years of production experience building scalable
            backend systems for B2B, B2C, and fintech products. I’ve worked on
            applications serving <strong>10M+ users</strong>, focusing on performance,
            clean architecture, and long-term maintainability.
        </p>
    </section>

    <section class='sectionContent'>
        <h3>Domains</h3>
        <p>B2B · B2C · Fintech · E-commerce · Enterprise Systems</p>
    </section>

    <div class='sideBySide'>
        <section>
            <div class='sectionContent'>
                <h3>What I Do</h3>
                <ul>
                    <li>Design and maintain scalable REST APIs</li>
                    <li>Build and evolve Node.js backend systems</li>
                    <li>Optimise databases and data-heavy workflows</li>
                    <li>Refactor legacy systems safely in production</li>
                    <li>Collaborate in cross-functional Agile teams</li>
                </ul>
            </div>
        </section>

        <section>
            <div class='sectionContent'>
                <h3>Impact</h3>
                <ul>
                    <li>Systems handling millions of requests daily</li>
                    <li>Reduced backend code duplication by <strong>70%</strong></li>
                    <li>Improved slow SQL queries by <strong>~20%</strong></li>
                    <li>Increased test coverage from <strong>79% → 93%</strong></li>
                    <li>Maintained <strong>99.9% uptime</strong></li>
                </ul>
            </div>
        </section>

        <section>
            <div class='sectionContent'>
                <h3>Education</h3>
                <div class='educationItem'>
                    <p>MSc Web Development 2025 – Present</p>
                    <p>University of Roehampton, London</p>

                    <p>BSc Computer Science 2019 – 2022</p>
                    <p>Technical University of Košice</p>
                    <p>Thesis: Implementation of OpenAI environment</p>
                </div>
            </div>
        </section>

        <section>
            <div class='sectionContent'>
                <h3>Experience Summary</h3>
                <p>
                    Backend Engineer with commercial experience delivering and maintaining
                    production systems for large-scale e-commerce, fintech, and enterprise
                    applications. Worked on high-traffic products used by millions of users
                    across Europe in cross-functional Agile teams.
                </p>
            </div> 
        </section>
    </div>
`