export const bookTemplate =  `
    <div class='libraryItem'>
        <div class='bookImageBlock'>
            <img
                class='bookImg'
                alt='{{img.alt}}'
                src='{{img.source}}'
            >
        </div>
        <div class='bookInfo'>
            <h3>{{book.name}}</h3>
            <p class='author fontSmall'><strong>{{book.author}}</strong></p>
    
            <div class='bookExtra'>
                <p><strong>Category:</strong> {{book.category}}</p>
                <p class='summary'><strong>Summary:</strong> {{book.summary}}</p>
                <p class='takeaways'><strong>Takeaways:</strong> {{book.takeaways}}</p>
            </div>
    
            <div class='bookToggle'>Details</div>
        </div>
    </div>
`

export const navTemplate =  `
    <nav class='navBar'>
        <a
            id='navLogo'
            class='navLeft'
            href='index.html'
        >/:AlexK</a>
    
        <button id='navToggle' class='navToggle'>≡</button>
    
        <ul id='navMenu' class='navRight'>
            <li><a
                    id='navMain'
                    class='navItem'
                    href='index.html'
                >Main</a></li>
            <li><a
                    id='navProjects'
                    class='navItem'
                    href='#projects'
                >Projects</a></li>
            <li><a
                    id='navTechStack'
                    class='navItem'
                    href='#techStack'
                >Tech Stack</a></li>
            <li><a
                    id='navLibrary'
                    class='navItem'
                    href='#library'
                >Library</a></li>
            <li><a
                    id='navEmailMe'
                    class='navItem'
                    href='#emailMe'
                >Email Me</a></li>
        </ul>
    </nav>
`

export const skillCardTemplate = `
    <div class="skillCard {{skill.borderColor}}">
        <div class='skillIcon'>
            <picture>
                <source
                    media='(min-width: 600px)'
                    srcset="{{img.srcLarge}}">
                <img
                    class='techIcon'
                    alt="{{img.alt}}"
                    height="{{img.height}}"
                    src="{{img.srcSmall}}"
                >
            </picture>
        </div>
    
        <p class='skillName fontBig'>{{skill.name}}</p>
        <p class='skillContext'>{{skill.context}}</p>
    </div>
`

export const libraryPageTemplate = `
    <h2>Library</h2>
    <p>
        Here’s a list of books I’ve read over the years. Each book taught
        me something new about programming, software design, or data science.
        I hope you find some inspiration here!
    </p>
    
    <div id='libraryCategories'></div>
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
    <div id='techCategories'></div>
    <div id='technologyProficiency'>
        <p class='technologyProficiencyText borderBasic'>Basic</p>
        <p class='technologyProficiencyText borderAdvanced'>Advacned</p>
        <p class='technologyProficiencyText borderExpert'>Expert</p>
    </div>
    <div id='techIcons' class='width80 blockCenter'></div>
`

export const mainPage = `
    <div id='main'>
        <div class='hero'>
            <h1 class='name fontExtraLarge'>Oleksandr (Alex) Kashytskyi</h1>
            <h2 class='role fontLarge'><i>Backend Developer / Database Architect</i></h2>
            <p class='location'>London, UK</p>
        </div>
    
        <h3 class='fontLarge welcome'>Hello and Welcome</h3>
    
        <section class='about'>
            <p>
                I am a Backend Developer with 3+ years of production experience building scalable
                backend systems for B2B, B2C, and fintech products. I’ve worked on
                applications serving hundreds of thousands of clients. and millions of requests per hour. I focus on
                code quality and performance, clean architecture, and long-term maintainability.
            </p>
        </section>
    
        <div class='sideBySide'>
            <h3 class='fontLarge'>Projects</h3>
            <a class='footerLink' href='#projects'>Explore Projects</a>
        </div>
    
        <div class='carousel-wrapper'>
            <button class='carousel-prev prev'>‹</button>
            <div class='carousel projectCarousel'></div>
            <button class='carousel-next next'>›</button>
        </div>
    
        <section class='domains'>
            <h3>My Domains:</h3>
            <span>B2B</span>
            <span>B2C</span>
            <span>Fintech</span>
            <span class='noWrap'> E-commerce</span>
            <span class='noWrap'>Enterprise Systems</span>
    
        </section>
    
        <div class='sideBySide'>
            <section>
                <div class='sectionContent'>
                    <h3>What I Do</h3>
                    <ul>
                        <li><strong>Design</strong> and maintain scalable <strong>REST APIs</strong></li>
                        <li><strong>Build</strong> and evolve Node.js <strong>backend systems</strong></li>
                        <li>Optimise databases and data-heavy workflows</li>
                        <li><strong>Refactor legacy</strong> systems safely in production</li>
                        <li>Collaborate in cross-functional <strong>Agile teams</strong></li>
                    </ul>
                </div>
            </section>
    
            <section>
                <div class='sectionContent'>
                    <h3>Education</h3>
                    <ul class='educationItem'>
                        <li><strong>MSc Web Development</strong> 2025 – Present</li>
                        <li class='noListStyle'>University of Roehampton, London</li>
                        <li><strong>BSc Computer Science</strong> 2019 – 2022</li>
                        <li class='noListStyle'>Technical University of Košice</li>
                        <li class='noListStyle'>Thesis:
                            <a href='https://www.youtube.com/watch?v=DrO_A16kGj8' target='_blank'>
                                Implementation of OpenAI environment
                            </a>
                        </li>
                    </ul>
    
                </div>
            </section>
        </div>
    
        <div class='sideBySide'>
            <h3 class='fontLarge'>Tech Stack</h3>
            <a class='footerLink' href='#techStack'>Explore Tech Stack</a>
        </div>
        <div class='carousel-wrapper'>
            <button class='carousel-prev prev'>‹</button>
            <div class='carousel techCarousel'></div>
            <button class='carousel-next next'>›</button>
        </div>
    
        <div class='sideBySide'>
            <h3 class='fontLarge'>Experience Summary</h3>
            <a class='footerLink navEmailMe' href='#emailMe'>Get in Touch</a>
        </div>
        <section>
            <div class='sectionContent'>
                <p class='textIdent'>
                    I’m passionate about building scalable,
                    high-performance applications. Working at GoodReqeust ltd I’ve delivered robust solutions for
                    companies like Notino,
                    KIA, and Aivodot, designing REST APIs, optimizing databases, implementing caching strategies,
                    and integrating complex workflows. I work across the full backend stack, from Node.js, TypeScript,
                    and Express.js to PostgreSQL, Redis, Docker, and AWS, ensuring clean, maintainable, and
                    well-tested code that powers real-world systems serving thousands of users.
                </p>
                <p class='textIdent'>
    
                    Beyond professional projects, I develop personal and open-source applications
                    that showcase my ability to tackle complex logic, build functional prototypes,
                    and experiment with emerging technologies like AR and real-time data processing.
                    With a solid foundation in algorithms, design patterns, and software architecture,
                    I create solutions that are not only reliable and efficient but also user-focused and scalable.
                </p>
            </div>
        </section>
    
    
        <div class='sideBySide'>
            <h3 class='fontLarge'>Personal Library</h3>
            <a class='footerLink' href='#library'>Explore Library</a>
        </div>
        <div class='carousel-wrapper'>
            <button class='carousel-prev prev'>‹</button>
            <div class='carousel libraryCarousel'></div>
            <button class='carousel-next next'>›</button>
        </div>
    </div>
`

export const carouselItemTemplate = `
    <div class='carousel-item'>
        <div class='carousel-content'>
            <img alt="{{title}}" src="{{imageSrc}}">
            <p>{{title}}</p>
        </div>
    </div>
`

export function emailMeTemplate(formspreeAction) {
    return `
        <form
            id='emailMeForm'
            action='${formspreeAction}'
        >
            <h2>Contact Me</h2>
        
            <label for='email'>Email:</label>
            <input
                id='email'
                type='email'
                name='email'
                required
            >
        
            <input
                type='hidden'
                name='_subject'
                value='New message from my website'
            >
        
            <label for='message'>Message:</label>
            <textarea
                id='message'
                name='message'
                required
                rows='5'
            ></textarea>
        
            <button type='submit'>Send</button>
        </form>
`
}

export const projectsPageTemplate = `
    <h2>Projects</h2>
    <p>
        Projects that reflect my growth as a software engineer — from production
        systems used by millions to experimental ideas built for learning and exploration.
    </p>
    
    <div class='projectsLayout'>
        <button class='projectsToggle'>PROJECTS</button>
        <aside id='projectsList' class='projectsList'></aside>
        <section id='projectDetails' class='projectDetails'></section>
    </div>
`

export const projectSideItemTemplate = `
    <div class="projectItem {{#active}}active{{/active}}" data-project="{{name}}">
        <img
            class='projectLogo'
            alt="{{iconAlt}} logo"
            src="{{icon}}"
        >
        <div class='projectMeta'>
            <span class='projectName'>{{name}}</span>
            <span class='projectCategory fontSmall'>{{category}}</span>
        </div>
    </div>
`
export const projectDetailsTemplate = `
    <div class='projectDetails'>
        <header class='projectHeader'>
            <div class='projectTitle'>
                <h2 class='fontLarge'>{{name}}</h2>
                <a
                    class='fontSmall'
                    href="{{link}}"
                    target='_blank'
                >View source</a>
            </div>
            <div class='logoIcon'>
                <picture>
                    <source
                        media='(min-width: 600px)'
                        srcset="{{logoLarge}}">
                    <img
                        alt="{{logoAlt}}"
                        height="{{logoHeight}}"
                        src="{{logoSmall}}"
                    >
                </picture>
            </div>
        </header>
    
        <div class='projectInfo'>
            <p><strong>Role:</strong> {{role}}</p>
            <p><strong>Time spent:</strong> {{timeSpent}}</p>
            <p><strong>Team:</strong> {{team}}</p>
            <p><strong>Status:</strong> {{status}}</p>
        </div>
    
        <section class='projectVideo'>
            {{#videoUrl}}
            <h3>Project Video</h3>
            <div class='videoWrapper'>
                <iframe
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                    frameborder='0'
                    src="{{videoUrl}}"
                    title='Project Video'
                >
                </iframe>
            </div>
            {{/videoUrl}}
        </section>
    
        <section>
            <h3>Overview</h3>
            <p>{{overview}}</p>
        </section>
    
        {{#images.length}}
        <section class='slideshow' data-project="{{name}}">
            <div class='slideshowContainer'>
    
                {{#images}}
                <div class='slide'>
                    <picture>
                        <source
                            media='(min-width: 600px)'
                            srcset="{{imagelarge}}">
                        <img
                            class='techIcon'
                            alt="{{caption}}"
                            src="{{imageSmall}}"
                        >
                    </picture>
                </div>
                {{/images}}
    
                <button class='prev'>❮</button>
                <button class='next'>❯</button>
    
                <div class='captionRow'>
                    <div class='caption'>{{images.0.caption}}</div>
                    <div class='slideIndex'></div>
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
            <div class='techBadges'>
                {{#techBadges}}
                <div class='techBadge'>
                    <img
                        alt="{{alt}}"
                        height='48'
                        src="{{src}}"
                        width='48'
                    >
                    <p class='fontSmall'>{{name}}</p>
                </div>
                {{/techBadges}}
            </div>
        </section>
    </div>

`
