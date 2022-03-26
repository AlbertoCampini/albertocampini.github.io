/*==================== MANAGE TOASTY ====================*/
let options = {
    classname: "toast",
    transition: "fade",
    insertBefore: true,
    duration: 3000,
    enableSounds: true,
    autoClose: true,
    progressBar: true,
    sounds: {
        info: "sounds/info/1.mp3",
        success: "sounds/success/1.mp3",
        warning: "sounds/warning/1.mp3",
        error: "sounds/error/1.mp3",
    },
    onShow: function (type) {
    },
    onHide: function (type) {
    },
    prependTo: document.body.childNodes[0]
};

let toast = new Toasty(options)

let counterEsterEgg = 0;

document.getElementById("footer-name").addEventListener("click", () => {
    counterEsterEgg = counterEsterEgg + 1;
    if (counterEsterEgg === 3) console.log("v")
})

/*==================== MANAGE LANGUAGE ====================*/
let running_language = (navigator.language || navigator.userLanguage).substring(0, 2);

changeLanguage(running_language)

function wrapperChangeLanguage() {
    const audioChangeLanguage = document.getElementById("audio-change-language")

    options.enableSounds ? audioChangeLanguage.play() : audioChangeLanguage

    if (running_language === 'it') {
        changeLanguage('en')
    } else {

        changeLanguage('it')

    }
}

function changeLanguage(string) {
    let language = string === 'en' ? json_langauge.english : json_langauge.italiano
    Object.keys(language).forEach(function (key) {
        $("#" + language[key].id).html(language[key].html)
    });
    running_language = string
}

function submitMessage() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const check = document.getElementById("check").checked;


    if (name !== '' && surname !== '' && email !== '' && message !== '' && check === true && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {

        let text = 'Hai ricevuto un messaggio da '+name+' '+surname+' \nCon la Mail: '+email+' \nCorpo del messaggio: '+message

        $.ajax({
            method: "GET",
            url: "https://api.telegram.org/bot5182757126:AAF9e7IhDzo_hnbtIm8BfSVIP5aCJ_1RvdY/sendMessage",
            data: {
                chat_id: -786119668,
                text: text
            },
            success: () => {
                running_language === 'it' ? toast.success("Messaggio inviato correttamente") : toast.success("Message sent correctly")
                document.querySelectorAll(".contact__input").forEach(function (element) {
                    element.value = ""
                });
            },
            error: () => {
                running_language === 'it' ? toast.error("Controlla di aver inserito correttamente i dati all'interno del form") : toast.error("Check that you have correctly inserted the data within the module")
            }
        });


    } else {
        running_language === 'it' ? toast.error("Controlla di aver inserito correttamente i dati all'interno del form") : toast.error("Check that you have correctly inserted the data within the module")

    }

}


/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navMenuColor = document.getElementById('nav-menu-color'),
    navToggle = document.getElementById('nav-toggle'),
    navToggleColor = document.getElementById('nav-toggle-color'),
    navCloseColor = document.getElementById('nav-close-color'),
    navClose = document.getElementById('nav-close'),
    navChangeLanguages = document.querySelectorAll('.change-language')
navChangeVolume = document.querySelectorAll('.change-volume')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navToggleColor) {
    navToggleColor.addEventListener('click', () => {
        navMenuColor.classList.add('show-menu')
    })
}
navChangeLanguages.forEach(navChangeLanguage => {
    if (navChangeLanguage) {
        navChangeLanguage.addEventListener('click', () => {
            wrapperChangeLanguage()
        })
    }
})

navChangeVolume.forEach(navChangeVolume => {
    const topBarVolume = document.getElementById('change-volume-topbar')
    const audioChangeVolume = document.getElementById("audio-change-volume")


    if (navChangeVolume) {
        navChangeVolume.addEventListener('click', () => {
            options.enableSounds = !options.enableSounds
            toast = new Toasty(options)
            options.enableSounds ? audioChangeVolume.play() : audioChangeVolume
            if (topBarVolume.classList.contains("uil-volume")) {
                topBarVolume.classList.remove("uil-volume")
                topBarVolume.classList.add("uil-volume-mute")
            } else {
                topBarVolume.classList.add("uil-volume")
                topBarVolume.classList.remove("uil-volume-mute")
            }
        })
    }
})

/*=============== SHOW MODAL ===============*/


function openModal(target) {
    const modalContainer = document.getElementById('modal-container')
    const modalContentTerm = document.getElementById('modal__content__Term')
    const modalContentAbout = document.getElementById('modal__content__about')

    switch (target) {
        case 'About':
            modalContentTerm.classList.add("d-none")
            modalContentAbout.classList.remove("d-none")
            break;
        case 'Term':
            modalContentTerm.classList.remove("d-none")
            modalContentAbout.classList.add("d-none")
            break;

    }
    modalContainer.classList.add('show-modal')


}

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal() {
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
}

closeBtn.forEach(c => c.addEventListener('click', closeModal))


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

if (navCloseColor) {
    navCloseColor.addEventListener('click', () => {
        navMenuColor.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.ClassName

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    this.parentNode.className = 'skills__content skills__open'

}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tabs.forEach(t => {
            t.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })


})


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (document.querySelector('.nav__menu a[href*=' + sectionId + ']') !== null)
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            if (document.querySelector('.nav__menu a[href*=' + sectionId + ']') !== null)
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
const audioSwitchOn = document.getElementById("audio-switch-on")
const audioSwitchOff = document.getElementById("audio-switch-off")

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add(darkTheme)
    themeButton.classList.add(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
} else {
    document.body.classList.remove(darkTheme)
    themeButton.classList.remove(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //Manage the sound of switch
    options.enableSounds ? getCurrentTheme() === 'light' ? audioSwitchOn.play() : audioSwitchOff.play() :

        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function changeColor(value) {
    document.documentElement.style.setProperty("--hue-color", value);

}

/*==================== SCROLL REVEAL ====================*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 300,
})

sr.reveal('.home__img')
sr.reveal('.skills__content', {interval: 100})
sr.reveal('.about__info__content', {interval: 100})
sr.reveal('.qualification__tabs', {delay: 200})
sr.reveal('.qualification__sections')
sr.reveal('.swiper-container')
sr.reveal('.contact__information', {origin: 'left', interval: 100})
sr.reveal('.contact__content', {origin: 'left', interval: 100})



