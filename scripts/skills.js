import { iconsPathBase, pngFileExtension, SKILL_CATEGORY } from './constants.js'
import { skillsContent } from './content.js'
import Mustache from './mustache.js'
import { skillCardTemplate } from './templates.js'

export function loadSkills(selectedCategory = SKILL_CATEGORY.ALL) {
    const $container = $('#techCategories')
    $container.empty()

    Object.values(SKILL_CATEGORY).forEach((category) => {
        const button = `
            <button
                class="categoryButton techCategoryButton ${selectedCategory === category ? 'activeCategory' : ''}"
                data-category="${category}"
            >
                ${category}
            </button>
        `
        $container.append(button)
    })

    $('#techIcons').empty()

    for (
        const skill 
        of selectedCategory === SKILL_CATEGORY.ALL
            ? skillsContent
            : skillsContent.filter((skill) => skill.categories.includes(selectedCategory))
    ) {
        const renderedTemplate = Mustache.render(skillCardTemplate, {
            img: {
                srcLarge: `${iconsPathBase}${skill.key}-96${pngFileExtension}`,
                srcSmall: `${iconsPathBase}${skill.key}-48${pngFileExtension}`,
                alt: skill.key,
                height: '90px'
            },
            skill: {
                name: skill.key.replaceAll('-', ' ').replaceAll('Sharp', '#'),
                context: skill.context,
                borderColor: 'border' + skill.proficiency
            }
        })

        $('#techIcons').append(renderedTemplate)
    }

}

// Handles category clicks
$(document).on('click', '.techCategoryButton', function () {
    const category = $(this).data('category')
    loadSkills(category)
})
