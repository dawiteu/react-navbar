import React from 'react';
import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 


const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    //const divCol = document.querySelector("div.collapse"); 
    const [menuOpen, setMenuOpen] = useState(true); 

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
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>   
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                </ul>
            </div>
        </nav>   
    );
}

export default Navbar;