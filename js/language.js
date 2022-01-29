const json_langauge = {
    italiano: [
        { "id": "home-txt", "html": "home" },
        { "id": "about-txt", "html": "Chi sono" },
        { "id": "skills-txt", "html": "Competenze" },
        { "id": "projects-txt", "html": "Portfolio" },
        { "id": "qualification-txt", "html": "Esperienza" },
        { "id": "language-txt", "html": "English" },
        { "id": "home-title-txt", "html": "Ciao, sono Alberto" },
        { "id": "home-subtitle-txt", "html": "Sviluppatore Full Stack e AI " },
        { "id": "footer-subtitle-text", "html": "Sviluppatore Full Stack e AI " },
        { "id": "home-description-txt", "html": "Sono Alberto Campini ho " +calcYear(new Date("8/23/99") )+" anni, laureato in informatica, sviluppatore AI presso <b>Reply</b>, Fouder di <b>ABC Labs</b>" },
        { "id": "contactme-txt", "html": "Contattami" },
        { "id": "scroll-txt", "html": "Scorri giù" },
        { "id": "about-section__title-txt", "html": "Chi sono" },
        { "id": "about-section__subtitle-txt", "html": "La mia introduzione" },
        { "id": "about__description-txt", "html": "Sono Alberto Campini, nato ad Asti il 23 agosto del <b>1999</b>. Sin da subito ho avuto le idee chiare su cosa volessi fare da grande. Ho fondato assieme a due soci la mia prima società, <b>ABC Labs</b>, nel marzo del 2021. Attualmente sono un AI developer presso <b>Cluster Reply</b> e studente magistrale di Intelligenza Artificiale" },
        { "id": "about__info-experience-txt", "html": "Anni di <br> esperienza" },
        { "id": "about__info-experience-number-txt", "html": "0" + calcYear(new Date("1/1/2017") )  + "+" },
        { "id": "about__info-project-txt", "html": "Progetti <br> completati" },
        { "id": "about__info-companies-txt", "html": "Aziende in cui <br> ho lavorato" },
        { "id": "about__buttons-txt", "html": "Download CV" },
        { "id": "skills-section__title-txt", "html": "Skills" },
        { "id": "skills-section__subtitle-txt", "html": "Il mio livello tecnico" },
        { "id": "Frontend-skills__subtitle-txt", "html": "Più di " + calcYear(new Date("1/1/2017") )  + " anni" },
        { "id": "Backend-skills__subtitle-txt", "html": "Più di " + calcYear(new Date("1/1/2018") )  + " anni" },
        { "id": "AI-skills__subtitle-txt", "html": "Solo " + calcYear(new Date("9/15/2020") ) + " anno" },
        { "id": "BI-skills__subtitle-txt", "html": "Solo " + calcYear(new Date("9/15/2020") ) + " anno" },
        { "id": "SW-skills__subtitle-txt", "html": "Solo " + calcYear(new Date("9/15/2020") ) + " anno" },
        { "id": "qualification-section__title-txt", "html": "Esperienza" },
        { "id": "qualification-section__subtitle-txt", "html": "Il mio viaggio personale" },
        { "id": "qualification-work-button-txt", "html": "Lavoro" },
        { "id": "qualification-education-button-txt", "html": "Istruzione" },
        { "id": "qualification-publishing-button-txt", "html": "Pubblicazioni" },
        { "id": "footer-copy", "html": "&#169; ABC Labs, All rigth reserved" },
        { "id": "footer-link-portfolio-txt", "html": "Portfolio" },
        { "id": "footer-link-contactme-txt", "html": "Contattami" },
        { "id": "footer-link-skills-txt", "html": "Skills" },
        { "id": "contactme-section__title-txt", "html": "Contattami" },
        { "id": "contactme-section__subtitle-txt", "html": "Rimaniamo in contatto" },
        { "id": "contactme-call-section__title-txt", "html": "Chiamami" },
        { "id": "contactme-email-section__title-txt", "html": "Mail" },
        { "id": "contactme-location-section__title-txt", "html": "Dove sono" },
        { "id": "contactme-location-section__subtitle-txt", "html": "Torino - Italia" },
        { "id": "name-contact__label-txt", "html": "Nome" },
        { "id": "surname-contact__label-txt", "html": "Cognome" },
        { "id": "email-contact__label-txt", "html": "Mail" },
        { "id": "message-contact__label-txt", "html": "Messaggio" },
        { "id": "contactme-button-txt", "html": "Invia il messaggio" },
        { "id": "portfolio-section__title-txt", "html": "Portfolio" },
        { "id": "portfolio-section__subtitle-txt", "html": "I progetti piu recenti" },
        { "id": "abclabs-portfolio__title-txt", "html": "ABC Labs sito vetrina" },
        { "id": "abclabs-portfolio__description-txt", "html": "Il sito vetrina di ABC Labs, un'azienda di sviluppo software. Progetto svolto con HTML, CSS, JS. Integrazione con bot di Telegram per le comunicazioni e google analytics" },
        { "id": "abclabs-dashboard-portfolio__title-txt", "html": "ABC Labs pannello gestionale" },
        { "id": "abclabs-dashboard-portfolio__description-txt", "html": "Il pannello gestionale di ABC Labs nel quale i clienti possono visionare statistiche, generare report e ticket. Piattaforma che gestisce in completa autonomia pagamenti ricorrenti. Progetto svolto con  HTML, CSS, JS, NodeJS per il backend" }

    ],

    english: [
        { "id": "home-txt", "html": "Home" },
        { "id": "about-txt", "html": "About" },
        { "id": "skills-txt", "html": "Skills" },
        { "id": "projects-txt", "html": "Projects" },
        { "id": "contactme-txt", "html": "Contact Me" },
        { "id": "language-txt", "html": "Italiano" },
        { "id": "home-title-txt", "html": "Hi, I'm Alberto" },
        { "id": "home-subtitle-txt", "html": "Full Stack, AI Developer " },
        { "id": "footer-subtitle-text", "html": "Full Stack, AI Developer " },
        { "id": "home-description-txt", "html": "My name is Alberto Campini, I have "+ calcYear(new Date("8/23/99") ) +" years, graduated in computer science, AI developer at <b>Reply</b>, Fouder of <b>ABC Labs</b>" },
        { "id": "qualification-txt", "html": "Qualification" },
        { "id": "scroll-txt", "html": "Scroll Down" },
        { "id": "about-section__title-txt", "html": "About Me" },
        { "id": "about-section__subtitle-txt", "html": "My introduction" },
        { "id": "about__description-txt", "html": "I'm Alberto Campini, born in Asti on August 23 of <b> 1999 </b>. Right from the start I had clear ideas about what I wanted to do when I grew up. I founded my first company, <b> ABC Labs </b>, together with two partners in March 2021. Now I'm an AI developer at <b> Cluster Reply </b> and a master's student in Artificial Intelligence." },
        { "id": "about__info-experience-txt", "html": "Years <br> experience" },
        { "id": "about__info-experience-number-txt", "html": "0" + calcYear(new Date("1/1/2017") ) + "+" },
        { "id": "about__info-project-txt", "html": "Completated <br> Projects" },
        { "id": "about__info-companies-txt", "html": "Companies <br> worked" },
        { "id": "about__buttons-txt", "html": "Download CV" },
        { "id": "skills-section__title-txt", "html": "Skills" },
        { "id": "skills-section__subtitle-txt", "html": "My technical level" },
        { "id": "Frontend-skills__subtitle-txt", "html": "More than " + calcYear(new Date("1/1/2017") ) + " years" },
        { "id": "Backend-skills__subtitle-txt", "html": "More than " + calcYear(new Date("1/1/2018") ) + " years" },
        { "id": "AI-skills__subtitle-txt", "html": "Only " + calcYear(new Date("9/15/2020") ) + " year" },
        { "id": "BI-skills__subtitle-txt", "html": "Only " + calcYear(new Date("9/15/2020") ) + " year" },
        { "id": "SW-skills__subtitle-txt", "html": "Only " + calcYear(new Date("9/15/2020") ) + " year" },
        { "id": "qualification-section__title-txt", "html": "Qualification" },
        { "id": "qualification-section__subtitle-txt", "html": "My personal journey" },
        { "id": "qualification-work-button-txt", "html": "Work" },
        { "id": "qualification-education-button-txt", "html": "Education" },
        { "id": "qualification-publishing-button-txt", "html": "Publishing" },
        { "id": "footer-copy", "html": "&#169; ABC Labs, All rigth reserved" },
        { "id": "footer-link-portfolio-txt", "html": "Portfolio" },
        { "id": "footer-link-contactme-txt", "html": "Contactme" },
        { "id": "footer-link-skills-txt", "html": "Skills" },
        { "id": "contactme-section__title-txt", "html": "Contact Me" },
        { "id": "contactme-section__subtitle-txt", "html": "Get in touch" },
        { "id": "contactme-call-section__title-txt", "html": "Call Me" },
        { "id": "contactme-email-section__title-txt", "html": "Mail" },
        { "id": "contactme-location-section__title-txt", "html": "Location" },
        { "id": "contactme-location-section__subtitle-txt", "html": "Italy - Turin" },
        { "id": "name-contact__label-txt", "html": "Name" },
        { "id": "surname-contact__label-txt", "html": "Surname" },
        { "id": "email-contact__label-txt", "html": "Mail" },
        { "id": "message-contact__label-txt", "html": "Message" },
        { "id": "contactme-button-txt", "html": "Send Message" },
        { "id": "portfolio-section__title-txt", "html": "Portfolio" },
        { "id": "portfolio-section__subtitle-txt", "html": "Most recent projects" },
        { "id": "abclabs-portfolio__title-txt", "html": "ABC Labs static website" },
        { "id": "abclabs-portfolio__description-txt", "html": "The showcase site of ABC Labs, a software development company. Project done with HTML, CSS, JS. Integration with Telegram bot for communications and google analytics" },
        { "id": "abclabs-dashboard-portfolio__title-txt", "html": "ABC Labs dashboard" },
        { "id": "abclabs-dashboard-portfolio__description-txt", "html": "The ABC Labs management panel where customers can view statistics, generate reports and tickets. Platform that manages recurring payments in complete autonomy. Project done with HTML, CSS, JS, NodeJS for the backend." }
]
};

function calcYear(dateStart) {
    const now = new Date(Date.now())
    if(dateStart.getMonth() < now.getMonth())
        if(dateStart.getDate() < now.getDate())
            return now.getFullYear() - dateStart.getFullYear()
    return now.getFullYear() - dateStart.getFullYear() - 1
}