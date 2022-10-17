import React from "react";

export default function Navbar() {
    return (
        <nav>
            <img src="./logo192.png" className="nav--icon" alt="a logo of react"/>
            <h3 className="nav--logo_text"><a href="https://reactjs.org/"  target="_blank" rel="noreferrer">ReactFacts</a></h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    ) 
}