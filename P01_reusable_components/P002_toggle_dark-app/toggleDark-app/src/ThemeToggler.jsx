// ThemeToggler.jsx
import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const ThemeToggler = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkModeEnabled', false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    // Apply the 'dark-mode' class to the .appcontainer element
    useEffect(() => {

        const appContainer = document.querySelector('.appcontainer');
        if (appContainer) {
            if (darkMode) {
                appContainer.classList.add('dark-mode');
            } else {
                appContainer.classList.remove('dark-mode');
            }
        }
        console.log("App container classes:", appContainer ? appContainer.classList : 'App container not found');
    }, [darkMode]);

    return (
        <div className="theme-toggler">
            <button onClick={toggleTheme}>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
};

export default ThemeToggler;