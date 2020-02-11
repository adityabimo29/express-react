import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Formy from './pages/Form';

function App() {
  return (
    <Router>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/form'>Form</Link></li>
        </ul>
        
        <Switch>
           <Route exact path='/'>
             <Home />
           </Route>
           <Route path='/about'>
             <About />
           </Route>
           <Route path='/form'>
             <Formy />
           </Route>
        </Switch>
    </Router>
  );
}

export default App;
