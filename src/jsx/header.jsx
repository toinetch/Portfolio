import React from 'react';
import '../css/header.css';

const Header = () => {
    return(
        <>
            <div id='menutext'>
                <h1>Hi !!</h1>
                <h1>I'm <span id='rouge'>A</span>ntoine <span id='bleu'>G</span>ouders </h1>
                <h1>I'm web developer</h1>
                <a href='/Contact'>Contact me</a>
                {/* <Router> */}
                    {/* <Link to='Contact'>Contact me</Link> */}
                    {/* <Switch> */}
                        {/* <Route path='/Contact'> <Contact /> </Route> */}
                    {/* </Switch> */}
                {/* </Router> */}
            </div>
            <img id='logo' src='../images/Logo.PNG' alt='Logo A'></img>
        </>
    );
}

export default Header;



/* fonction au chargement

    window.onload = function typeWriter() {
        var i = 0;
        var txt = document.getElementsByClassName('titre');
        var speed = 100;
        
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
*/