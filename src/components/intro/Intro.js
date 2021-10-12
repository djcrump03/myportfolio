import "./intro.scss";
import React from 'react';
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current,{ 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer","Content Creator" ],
         })
    
        
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/headshot2.png" alt="" />
                    
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Dionna Crump</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/downarrow (2).png" alt=""/>

                </a>
            </div>

        </div>
    )
}
