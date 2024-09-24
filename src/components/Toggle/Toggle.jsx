import React from 'react';
import './Toggle.css';

const Toggle = () => {
    // Component logic goes here

    return (
        // JSX markup goes here
        <div>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>

        </div>
    );
};

export default Toggle;