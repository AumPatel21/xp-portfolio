import React from 'react'
import { useState } from 'react';
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";


const Terminal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(false);
    } 
    return (
        <div>
            {
                isOpen && (
                    <div className='flex justify-center items-center min-h-screen overflow-hidden'>
            <Draggable bounds='parent'>
                <div class="window">
                    <div class="title-bar">
                        <div class="title-bar-text">Command Prompt</div>
                        <div class="title-bar-controls">
                            {/* <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button> */}
                            <button aria-label="Close" onClick={handleClick}></button>
                        </div>
                    </div>
                    <div class="window-body text-xs">
                        <pre>
                            Microsoft&#10094;R&#10095; Windows DOS<br />
                            &#10094;C&#10095; Copyright Microsoft Corp 1990-2001.<br />
                            <br />
                            C:\Users\aumpa&gt; echo Welcome to my Portfolio!<br />
                            Welcome, I’m Aum Patel!<br />
                            <br />
                            C:\Users\aumpa&gt; whoami<br />
                            User: Aum Patel| Role: Developer<br />
                            <br />
                            C:\Users\aumpa&gt; dir Projects<br />
                            Directory of C:\Users\aumpa\Projects<br />
                            <br />
                            01/01/2024  10:00 AM    &lt;DIR&gt;     xp-portfolio<br />
                            01/01/2024  10:05 AM    &lt;DIR&gt;     React-Game<br />
                            <br />
                            C:\Users\aumpa\Projects&gt; type xp-portfolio/README.txt<br />
                            Hi! I build user-friendly apps with React. Check out my work!<br />
                        </pre>

                    </div>
                </div>
            </Draggable>
        </div>
                )
            }
        </div>
    )
}

export default Terminal