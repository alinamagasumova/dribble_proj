import React from "react";
import { themes } from "../theme-context";
import { useState } from "react";


function Header({themeb, handler}) {

    return (
        <header style={{background: themeb.background, color: themeb.color}}>
            <a href="/" className="noLinkSt"><h2>Clay<span>.</span>co</h2></a>
            <nav className="list">
                <a href="About" style={{color: themeb.header_color}}>About</a>
                <a href="Products" style={{color: themeb.header_color}}>Shop</a>
                <a href="Artists" style={{color: themeb.header_color}}>Artists</a>
                <a href="Stories" style={{color: themeb.header_color}}>Stories</a>
            </nav>
            <div className="icons">
            <i className="fa-solid fa-moon head-icon" onClick={()=>handler()}></i>
            <i className="fa-solid fa-magnifying-glass ml head-icon"></i>
            <i className="fa-solid fa-cart-shopping ml head-icon"></i>
            </div>
        </header>
    )
}

export default Header;