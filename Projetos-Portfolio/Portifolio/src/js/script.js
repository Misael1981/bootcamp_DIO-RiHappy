const toggleTheme = document.getElementById('toggleTheme')
const rootHtml = document.documentElement

toggleTheme.addEventListener('click', () => {
    const correntTheme = rootHtml.getAttribute('data-theme')

    if(correntTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light")
    }else {
        rootHtml.setAttribute("data-theme", "dark")
    }
    
    toggleTheme.classList.toggle('bi-sun')
    toggleTheme.classList.toggle('bi-moon')
})

// ACCORDION

const accordionHeaders = document.querySelectorAll('.accordion__header')

accordionHeaders.forEach(hearder => {
    hearder.addEventListener('click', () => {
        const accordionItem = hearder.parentElement
        const accordionActive = accordionItem.classList.contains('active')

        accordionActive ? accordionItem.classList.remove('active') : accordionItem.classList.add('active')
    })
})

// MENU

const menuLinks = document.querySelectorAll('.menu__link')

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.toggle('active')

        menuLinks.forEach(otherLink => {
            if(otherLink !== link) {
                otherLink.classList.remove('active')
            }
        })
    })
})

/*============== Typing animation =============*/

let typed = new Typed(".typing", {
    strings: ['suas ideias em realidade digital...'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

