import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();
import translation from '../components/Translation';
export const GlobalProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [themeDark, setThemeDark] = useState(true);

    const changeLanguage = () => {
        setLanguage(language === 'en' ? 'it' : 'en');
    };

    const changeTheme = () => {
        setThemeDark(prev => {
            const newTheme = !prev;

            return newTheme;
        });
    }

    useEffect(() => {
        document.body.className = themeDark ? "dark" : "light";

    }, [themeDark]);
    return (
        <GlobalContext.Provider value={{ language, changeLanguage, translation, changeTheme, themeDark }}>
            {children}
        </GlobalContext.Provider>
    );
};
