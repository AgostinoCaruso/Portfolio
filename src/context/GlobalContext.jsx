import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();
import translation from '../components/Translation';
export const GlobalProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = () => {
        setLanguage(language === 'en' ? 'it' : 'en');
    };


    return (
        <GlobalContext.Provider value={{ language, changeLanguage, translation }}>
            {children}
        </GlobalContext.Provider>
    );
};
