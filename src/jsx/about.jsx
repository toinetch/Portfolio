import React from 'react';
import '../css/about.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const About = () => {
    return(
        <>
            <div id='contient'>
                <h1 id='enTeteAbout'>About me</h1>
                <div id='paragraphe'>
                    <p>I'm in the computer science branch since few years. <br/>
                    - 2 years at INRACI from where i got a computer science technician degree. <br/>
                    - Currently doing a 6 months course as web developer at Molengeek.</p>
                    
                    <p>I'm a well organized person who loves to solve problems and full of motivation.</p>
                    
                    <p>I love collective sports for team spirit as hockey. <br/>
                    I like other kind of activities too with personal challenges like skateboarding and playing guitar.</p>
                </div>
            </div>
            <div className="container">
                <div className="side left"><img className='imagepyra' src="../images/css.png" alt="" /></div>
                <div className="side front"><img className='imagepyra' src="../images/html.png" alt="" /></div>
                <div className="side right"><img className='imagepyra' src="../images/react.png" alt="" /></div>
                <div className="side back"><img id='js' src="../images/js.png" alt="" /></div>
            </div>
        </>
    );
}

export default About;