import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = () => {
        setLanguage(language === 'en' ? 'it' : 'en');
    };

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

            },

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

            },
        }
    }

    return (
        <GlobalContext.Provider value={{ language, changeLanguage, translation }}>
            {children}
        </GlobalContext.Provider>
    );
};
