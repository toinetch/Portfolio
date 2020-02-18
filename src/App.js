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
              <li> <Link to='Header'> <i class="fas fa-home fa-2x header"> </i> </Link> </li>
              <li> <Link to='About'> <i class="far fa-user fa-2x"> </i> </Link> </li>
              <li> <Link to='Skills'> <i class="fas fa-cogs fa-2x"> </i> </Link> </li>
              <li> <Link to='Services'> <i class="far fa-eye fa-2x"> </i> </Link> </li>
              <li> <Link to='Contact'> <i class="fas fa-envelope fa-2x"> </i> </Link> </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/Header'> <Header /> </Route>
            <Route path='/About'> <About /> </Route>
            <Route path='/Skills'> <Skills /> </Route>
            <Route path='/Services'> <Services /> </Route>
            <Route path='Contact'> <Contact /> </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
