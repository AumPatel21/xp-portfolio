import React from 'react'
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";


const Xp = () => {
    return (
        <div className='flex justify-center items-center min-h-screen overflow-hidden'>
            <Draggable bounds='parent'>
                <div class="window">
                    <div class="title-bar">
                        <div class="title-bar-text">Command Prompt</div>
                        <div class="title-bar-controls">
                            {/* <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button> */}
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="window-body">
                        <pre>
                            Microsoft&#10094;R&#10095; Windows DOS<br />
                            &#10094;C&#10095; Copyright Microsoft Corp 1990-2001.<br />
                            <br />
                            C:\WINDOWS\SYSTEM32&gt; echo Welcome to my Portfolio!<br />
                            Welcome, I’m Aum!<br />
                            <br />
                            C:\WINDOWS\SYSTEM32&gt; whoami<br />
                            User: Aum Patel| Role: Developer<br />
                            <br />
                            C:\WINDOWS\SYSTEM32&gt; dir Projects<br />
                            Directory of C:\WINDOWS\SYSTEM32\Projects<br />
                            <br />
                            01/01/2024  10:00 AM    &lt;DIR&gt;     Portfolio-Site<br />
                            01/01/2024  10:05 AM    &lt;DIR&gt;     React-Game<br />
                            <br />
                            C:\WINDOWS\SYSTEM32\Projects&gt; type Portfolio-Site/README.txt<br />
                            Hi! I build user-friendly apps with React. Check out my work!<br />
                        </pre>

                    </div>
                </div>
            </Draggable>
        </div>
    )
}

export default Xp