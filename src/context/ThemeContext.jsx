import React, { createContext, useState, useContext, useEffect} from 'react';

const ThemeContext = createContext(); // Create a context object that will hold the theme light or dark

export const useTheme = () => useContext(ThemeContext); // Create a custom hook to use the theme

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    useEffect(()=>{
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme){
            setTheme(storedTheme);
        }
    },[]); //'[]' makes sure that this effect runs only once when the component mounts

    useEffect(()=>{
        document.body.className = theme;
    },[theme]); //This effect runs whenever the theme changes

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        console.log('Theme:', newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}


