import React from 'react';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import Contact from './contact';
import '../css/header.css';
import '../js/movingtext.js';

const Header = () => {
    return(
        <>
            <div id='menutext'>
                <h1 className='apparait'>Hi !! <br/>
                I'm <span id='rouge' className='lettreColor'>A</span>ntoine <span id='bleu' className='lettreColor'>G</span>ouders</h1> <br/>
                <h1>I'm
                    <span
                    class="txt-rotate"
                    data-period="2000"
                    data-rotate='[ " coder.", " web developer.", "geek."]'></span>
                    </h1>
            </div>
            <img id='logo' src='../images/Logo.PNG' alt='Logo A'></img>
        </>
    );
}

export default Header;