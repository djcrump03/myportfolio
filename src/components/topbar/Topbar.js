import React from 'react';
import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        //to activate the hamburger icon created; deselect "active"
        <div className={"topbar  " + (menuOpen && "active")}> 
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        full/stack/dev
                    </a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>(470)782-1967</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>djcdev21@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
               
        </div>
    )
}
