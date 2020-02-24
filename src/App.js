import '../node_modules/@fortawesome/fontawesome-free/css/all.css'; 
import React from 'react';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './jsx/header';
import About from './jsx/about';
import Skills from './jsx/skills';
import Services from './jsx/services';
import Contact from './jsx/contact';
import './App.css';
import './css/style.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <nav id='navbar'>
            <ul>
              <li>
                <Link to='/'>
                  <img id='logo2' src='../images/Logo.PNG' alt='logo'/>
                </Link>
              </li>
              <li className='containers'>
                <div>
                  <Link className='icone' to='/'> <i className="fas fa-home fa-2x"> </i> </Link>
                  <div className='overlay'>
                    <Link className='text' to='/'>Home</Link>
                  </div>
                </div>
              </li>

              <li className='containers'> 
                <div>
                  <Link className='icone' to='About'> <i className="far fa-user fa-2x"> </i> </Link>
                  <div className='overlay'>
                    <Link className='text' to='About'>About</Link>
                  </div>
                </div>
              </li>

              <li className='containers'>
                <div>
                  <Link className='icone' to='Skills'> <i className="fas fa-cogs fa-2x"> </i> </Link>
                  <div className='overlay'>
                    <Link className='text' to='Skills'>Skills</Link>
                  </div>
                </div>
              </li>

              {/* <li className='containers'>
                <div>
                  <Link className='icone' to='Services'> <i className="far fa-eye fa-2x"> </i> </Link>
                  <div className='overlay'>
                    <Link className='text' to='Services'>Services</Link>
                  </div>
                </div>
              </li> */}

              <li className='containers'>
                <div>
                  <Link className='icone' to='Contact'> <i className="fas fa-envelope fa-2x"> </i> </Link>
                  <div className='overlay'>
                    <Link className='text' to='Contact'>Contact</Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/About'> <About /> </Route>
            <Route path='/Skills'> <Skills /> </Route>
            <Route path='/Services'> <Services /> </Route>
            <Route path='/Contact'> <Contact /> </Route>
            <Route path='/'> <Header /> </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
