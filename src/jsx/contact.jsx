import React from 'react';
import '../css/contact.css';

const Contact = () => {
    return(
        <>
        <div>
            <h1 id='contact'>Contact me</h1>
            <form>
                <input className="formulaire" id="nom" type="text" placeholder="Name"/>
                <input className="formulaire" id="mail" type="text" placeholder="Email"/>
                <input className="formulaire" id="sujet" type="text" placeholder="Subject"/>
                <textarea className="formulaire" id="message" placeholder="Messsage"/>
                <button id="sub">Submit</button>
            </form>
            <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1299442.6102116182!2d3.345172555636327!3d50.49744448298818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17d64edf39797%3A0x47ebf2b439e60ff2!2sBelgium!5e0!3m2!1sen!2sbe!4v1582194066398!5m2!1sen!2sbe"></iframe>
            <div id="coordonnees">
                <p>Antoine Gouders <br/> Vilvoorde, Belgium</p>
            </div>
        </div>
        </>
    );
}

export default Contact;