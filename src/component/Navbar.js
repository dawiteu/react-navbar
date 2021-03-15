import React from 'react';
import { useState, useEffect } from 'react'; 


const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    //const divCol = document.querySelector("div.collapse"); 
    const [menuOpen, setMenuOpen] = useState(false); 

    const checkSize = () => {
        let sizeW = window.innerWidth;
        setWidth(sizeW);
        if(sizeW > 500){
            setMenuOpen(true);
        }else{
            setMenuOpen(false);
        }
    }
    window.addEventListener("resize", checkSize); 

    const toggleMenu = (e) =>{
        e.preventDefault(); 
        if(!menuOpen){ // si le menu est fermé (val par def.)
            setMenuOpen(true);
        }else{
            setMenuOpen(false);  
        }
    }

    return (
        <nav>
            <a href="###" onClick={(e) => toggleMenu(e) }><i className="fas fa-bars"></i></a> 
            <div className={`collapse ${menuOpen ? 'dblock' : 'dnone'}`}>
                <ul>
                    <li><a href="###">Lorem 1</a></li>
                    <li><a href="###">Lorem 2</a></li>   
                    <li><a href="###">Lorem 3</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;