import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = () => {
        setLanguage(language === 'en' ? 'it' : 'en');
    };

    const translation = {
        en: {
            home: {
                name: "MY NAME IS ",
                des: "I'm..."
            }
        },
        it: {
            home: {
                name: "IL MIO NOME È ",
                des: "Io sono ..."
            }
        }
    }

    return (
        <GlobalContext.Provider value={{ language, changeLanguage, translation }}>
            {children}
        </GlobalContext.Provider>
    );
};
