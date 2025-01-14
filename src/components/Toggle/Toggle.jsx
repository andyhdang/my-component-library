import React from 'react';
import './Toggle.css';
import { useTheme } from '../../context/ThemeContext';

const Toggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <label className="switch">
                <input 
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                 />
                <span className="slider round"></span>
            </label>

        </div>
    );
};

export default Toggle;