import React from 'react';
import '../css/skills.css';

const Skills = () => {
    return(
        <>
            <div className='filtre'>
                <button className='tisec' onClick={() => front()}>Front-end</button>
                <button className='tisec' onClick={() => back()}>Back-end</button>
                <button className='tisec' onClick={() => other()}>Other</button>
            </div>
            <div className='disp' id='fronts'>
                <div className='tex'>
                    <h1>Front-end</h1>
                    <p className='pi'>Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, I build fast, interactive websites.</p>
                </div>
                <div id="test" className="rotating">
                    <img className='rotating' src="../images/html.png" alt=""/>
                </div>
            </div>

            <div className='disp' id='backs'>
                <div className='tex'>
                    <h1>Back-end</h1>
                    <p className='pi'>Back-end Development refers to the server-side development. It is the term used for the behind-the-scenes activities that happen when performing any action on a website.</p>
                </div>
                <div id="test" className="rotating">
                    <img className='rotating' src="../images/python.png" alt=""/>
                </div>
            </div>

            <div className='disp' id='others'>
                <div className='tex'>
                    <h1>Other</h1>
                    <p className='pi'>Other languages I know are always a plus and that's why I always learn new languages. </p>
                </div>
                <div id="test" className="rotating">
                    <img className='rotating' src="../images/github.png" alt=""/>
                </div>
            </div>
        </>
    );

    function front(){
        document.getElementById('fronts').style.display = 'flex';
        document.getElementById('backs').style.display = 'none';
        document.getElementById('others').style.display = 'none';
    }

    function back(){
        document.getElementById('fronts').style.display = 'none';
        document.getElementById('backs').style.display = 'flex';
        document.getElementById('others').style.display = 'none';
    }

    function other(){
        document.getElementById('fronts').style.display = 'none';
        document.getElementById('backs').style.display = 'none';
        document.getElementById('others').style.display = 'flex';
    }
}

export default Skills;