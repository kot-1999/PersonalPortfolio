export const bookTemplate =  `
    <div class='libraryItem'>
        <div class="bookImageBlock">
            <img
                class='bookImg'
                alt='{{img.alt}}'
                src='{{img.source}}'
            >
        </div>
        <div class="bookInfo">
            <h3>{{book.name}}</h3>
            <p class="author fontSmall"><strong>{{book.author}}</strong></p>
        
            <div class="bookExtra">
                <p><strong>Category:</strong> {{book.category}}</p>
                <p class="summary"><strong>Summary:</strong> {{book.summary}}</p>
                <p class="takeaways"><strong>Takeaways:</strong> {{book.takeaways}}</p>
            </div>
        
            <div class="bookToggle">▼</div>
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

export const skillCardTemplate = `
    <div class="skillCard {{skill.borderColor}}">
        <div class="skillIcon">
            <picture>
                <source
                    srcset="{{img.srcLarge}}"
                    media="(min-width: 600px)">
                <img
                    class="techIcon"
                    alt="{{img.alt}}"
                    src="{{img.srcSmall}}"
                    height="{{img.height}}">
            </picture>
        </div>

        <p class="skillName fontBig">{{skill.name}}</p>
        <p class="skillContext">{{skill.context}}</p>
    </div>
`

export const libraryPageTemplate = `
    <h2>Library</h2>
    <p>
        Here’s a list of books I’ve read over the years. Each book taught
        me something new about programming, software design, or data science.
        I hope you find some inspiration here!
    </p>
    
    <div id="libraryCategories"></div>
    <div id='bookIcons'></div>
`

export const techStackPageTemplate = `
    <h2>Technological Stack</h2>
    <p>
        From server-side frameworks to cloud services, these
        are the tools I use to build robust applications and keep
        systems running smoothly. These are the tools and technologies
        I rely on daily to build scalable backend systems, maintain
        databases, and ensure observability and reliability.
    </p>
    <div id="techCategories"></div>
    <div id='technologyProficiency'>
        <p class="technologyProficiencyText borderBasic">Basic</p>
        <p class="technologyProficiencyText borderAdvanced">Advacned</p>
        <p class="technologyProficiencyText borderExpert">Expert</p>
    </div>
    <div id='techIcons' class='width80 blockCenter'></div>
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

export const emailMeTemplate = `
    <form id="emailMeForm">
        <h2>Contact Me</h2>

        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
    </form>
`

export const projectsPageTemplate = `
    <h2>Projects</h2>
    <p>
        Projects that reflect my growth as a software engineer — from production 
        systems used by millions to experimental ideas built for learning and exploration.
    </p>

    <div class="projectsLayout">
        <button class="projectsToggle">PROJECTS</button>
        <aside class="projectsList" id="projectsList"></aside>
        <section class="projectDetails" id="projectDetails"></section>
    </div>
`

export const projectSideItemTemplate = `
    <div class="projectItem {{#active}}active{{/active}}" data-project="{{name}}">
        <img src="{{icon}}" alt="{{iconAlt}} logo" class="projectLogo">
        <div class="projectMeta">
            <span class="projectName">{{name}}</span>
            <span class="projectCategory fontSmall">{{category}}</span>
        </div>
    </div>
`
export const projectDetailsTemplate = `
    <div class='projectDetails'>
        <header class='projectHeader'>
            <div class="projectTitle">
                <h2 class="fontLarge">{{name}}</h2>
                <a class="fontSmall" href="{{link}}" target='_blank'>View source</a>
            </div>
            <div class="logoIcon">
                <picture>
                    <source
                        srcset="{{logoLarge}}"
                        media="(min-width: 600px)">
                    <img
                        alt="{{logoAlt}}"
                        src="{{logoSmall}}"
                        height="{{logoHeight}}">
                </picture>
            </div>
        </header>
        
        <div class='projectInfo'>
            <p><strong>Role:</strong> {{role}}</p>
            <p><strong>Time spent:</strong> {{timeSpent}}</p>
            <p><strong>Team:</strong> {{team}}</p>
            <p><strong>Status:</strong> {{status}}</p>
        </div>
        
        <section class="projectVideo">
            {{#videoUrl}}
            <h3>Project Video</h3>
            <div class="videoWrapper">
                <iframe 
                    src="{{videoUrl}}" 
                    title="Project Video" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            {{/videoUrl}}
        </section>
        
        {{#images.length}}
        <section class='slideshow' data-project="{{name}}">
            <div class='slideshowContainer'>
        
                {{#images}}
                <div class='slide'>
                    <img alt="{{caption}}" src="{{full}}">
                </div>
                {{/images}}
        
                <button class='prev'>❮</button>
                <button class='next'>❯</button>
                
                <div class='captionRow'>
                    <div class='caption'>{{images.0.caption}}</div>
                    <div class="slideIndex"></div>
                </div>
                
                <div class='thumbnails'>
                    {{#images}}
                    <img
                        class='thumb'
                        alt="{{caption}}"
                        data-index="{{index}}"
                        src="{{thumb}}"
                    >
                    {{/images}}
                </div>
        
            </div>
        </section>
        {{/images.length}}
    
        <section>
            <h3>Overview</h3>
            <p>{{overview}}</p>
        </section>
    
        <section>
            <h3>Responsibilities</h3>
            <ul>
                {{#responsibilities}}
                <li>{{.}}</li>
                {{/responsibilities}}
            </ul>
        </section>
    
        <section>
            <h3>Impact</h3>
            <ul>
                {{#impact}}
                <li>{{.}}</li>
                {{/impact}}
            </ul>
        </section>
    
        <section>
            <h3>Tech Stack</h3>
            <div class="techBadges">
                {{#techBadges}}
                <div class="techBadge">
                    <img
                        src="{{src}}"
                        alt="{{alt}}"
                        width="48"
                        height="48"
                    >
                    <p class="fontSmall">{{name}}</p>
                </div>
                {{/techBadges}}
            </div>
        </section>
    </div>
`
