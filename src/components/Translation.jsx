import React from 'react'
import springLogo from '../assets/springLogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3Alt,
    faHtml5,
    faJs,
    faReact,
    faJava
} from '@fortawesome/free-brands-svg-icons'

import { faDatabase } from '@fortawesome/free-solid-svg-icons'
    const translation = {
        en: {
            navbar: {
                projects: "projects",
                contacts: "contacts"
            },
            home: {
                name: "MY NAME IS ",
                des: "Motivated junior full stack developer with a passion for web technologies. Self-taught and course-trained, eager to collaborate, grow, and contribute in real-world projects within dynamic development teams.",
                nationality: "Italian",
                cv: "Download my CV"
            },
            skills: {
                title: "These are my skills",
                des: "Here are the programming languages and technologies I’ve learned through self-study and courses. They reflect my dedication to full stack development and my passion for building modern web applications.",
                skillsList: [
                    {
                        name: 'HTML',
                        des: 'HTML defines the structure of web pages using elements like headings, paragraphs, and links. It is the foundation for organizing content on websites and applications.',
                        icon: faHtml5
                    },
                    {
                        name: 'CSS',
                        des: 'CSS styles web pages with colors, layouts, fonts, and animations. It separates design from content, enabling responsive and visually appealing interfaces across different screen sizes and devices.',
                        icon: faCss3Alt
                    },
                    {
                        name: 'JAVA SCRIPT',
                        des: 'JavaScript adds interactivity to web pages, enabling dynamic content updates, user input handling, and real-time features. It s essential for building modern, client-side web applications.',
                        icon: faJs
                    },
                    {
                        name: 'REACT',
                        des: 'React is a JavaScript library for building interactive user interfaces. It uses components and a virtual DOM to efficiently update and render dynamic views in web applications.',
                        icon: faReact
                    },
                    {
                        name: 'JAVA',
                        des: 'Java is a powerful, object-oriented programming language used for building cross-platform applications. It’s widely used in enterprise environments for backend development, Android apps, and large systems.',
                        icon: faJava
                    },
                    {
                        name: 'SPRING',
                        des: 'Spring is a Java-based framework that simplifies backend development. It provides tools for dependency injection, REST APIs, security, and database integration in scalable, enterprise-grade applications.',
                        icon: springLogo
                    },
                    {
                        name: 'MYSQL',
                        des: 'MySQL is a relational database management system used to store and manage data. It supports structured queries (SQL) and is commonly used in web and server-side applications.',
                        icon: faDatabase
                    }
                ]
            },
            projects: {
                title: "These are my projects",
                des: "Here are some projects I’ve built to apply and demonstrate my skills in web development through hands-on experience and learning.",
                projectsList: [
                    {
                        name: "GameSpot",
                        des: "A full-stack web application for managing a digital game library. The frontend allows users to browse, search, and view game details, while the backend handles game data, and database integration.",
                        mission: "Full stack developer",
                        language: "HTML, CSS, JS, Java, Spring, MySql",
                        images: "/project1.png"
                    },
                    {
                        name: "B&B",
                        des: "Team project where we recreated a fictional B&B with rooms located in various parts of the world. The app includes an interactive map to locate the properties and manage room information.",
                        mission: "Full stack developer",
                        language: "HTML, CSS, JS, MySql",
                        images: "../project2.png"
                    },
                ]
            },
            contacts: {
                title: "These are my contacts",
                contactsList: [
                    {
                        title: "Email",
                        value: "agostinocaruso321@gmail.com"
                    },
                    {
                        title: "Phone",
                        value: "+39 3665036464"
                    },
                ]
            }

        },
        it: {
            navbar: {
                projects: "progetti",
                contacts: "contatti"
            },
            home: {
                name: "IL MIO NOME È ",
                des: "Sviluppatore junior full stack motivato con passione per le tecnologie web. Formato tramite corso e studio autodidatta, desideroso di crescere, collaborare e contribuire in progetti reali con team dinamici.",
                nationality: "Italiano",
                cv: "Scarica il mio CV",
            },
            skills: {
                title: "Queste sono le mie competenze",
                des: "Qui trovi i linguaggi di programmazione e le tecnologie che ho imparato tramite corsi e studio autodidatta. Riflettono la mia dedizione allo sviluppo full stack e la passione per la creazione di applicazioni web moderne.",
                skillsList: [
                    {
                        name: 'HTML',
                        des: 'HTML definisce la struttura delle pagine web utilizzando elementi come titoli, paragrafi e collegamenti. È la base per organizzare i contenuti su siti web e applicazioni.',
                        icon: faHtml5
                    },
                    {
                        name: 'CSS',
                        des: 'CSS serve per stilizzare le pagine web con colori, layout, font e animazioni. Separa il design dal contenuto, permettendo interfacce responsive e visivamente accattivanti su vari dispositivi e dimensioni dello schermo.',
                        icon: faCss3Alt
                    },
                    {
                        name: 'JAVA SCRIPT',
                        des: 'JavaScript aggiunge interattività alle pagine web, consentendo aggiornamenti dinamici dei contenuti, gestione degli input utente e funzionalità in tempo reale. È essenziale per costruire applicazioni web moderne lato client.',
                        icon: faJs
                    },
                    {
                        name: 'REACT',
                        des: 'React è una libreria JavaScript per costruire interfacce utente interattive. Utilizza componenti e un virtual DOM per aggiornare e rendere efficientemente le viste dinamiche nelle applicazioni web.',
                        icon: faReact
                    },
                    {
                        name: 'JAVA',
                        des: 'Java è un potente linguaggio di programmazione orientato agli oggetti usato per creare applicazioni multipiattaforma. È molto diffuso in ambienti enterprise per sviluppo backend, app Android e sistemi di grandi dimensioni.',
                        icon: faJava
                    },
                    {
                        name: 'SPRING',
                        des: 'Spring è un framework basato su Java che semplifica lo sviluppo backend. Offre strumenti per dependency injection, API REST, sicurezza e integrazione database in applicazioni scalabili e di livello enterprise.',
                        icon: springLogo
                    },
                    {
                        name: 'MYSQL',
                        des: 'MySQL è un sistema di gestione di database relazionali usato per memorizzare e gestire dati. Supporta query strutturate (SQL) ed è comunemente utilizzato in applicazioni web e server-side.',
                        icon: faDatabase
                    }

                ]
            },
            projects: {
                title: "Questi sono i miei progetti",
                des: "Qui trovi alcuni progetti che ho realizzato per mettere in pratica e dimostrare le mie competenze nello sviluppo web attraverso l’esperienza diretta.",
                projectsList: [
                    {
                        name: "GameSpot",
                        des: "Un'applicazione web full-stack per gestire una libreria digitale di videogiochi. Il frontend consente agli utenti di sfogliare, cercare e visualizzare i dettagli dei giochi, mentre il backend gestisce i dati e l'integrazione con il database.",
                        mission: "Full stack developer",
                        language: "HTML, CSS, JS, Java, Spring, MySql",
                        images: "/project1.png"
                    },
                    {
                        name: "B&B",
                        des: "Progetto realizzato in team in cui abbiamo ricostruito un B&B fittizio con camere situate in varie parti del mondo. L’app include una mappa interattiva per localizzare le strutture e gestire le informazioni delle stanze.",
                        mission: "Full stack developer",
                        language: "HTML, CSS, JS, MySql",
                        images: "../project2.png"
                    }
                ]
            },
            contacts: {
                title: "Questi sono i miei contatti",
                contactsList: [
                    {
                        title: "Email",
                        value: "agostinocaruso321@gmail.com"
                    },
                    {
                        title: "Cellulare",
                        value: "+39 3665036464"
                    },
                ]
            }


        }
    }

export default translation;