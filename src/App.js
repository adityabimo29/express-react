import React from 'react';
import {BrowserRouter as Router,Route,Switch , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Navbaria from './components/Navbaria';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

function App(prop) {
  const isLogin = localStorage.getItem('token');
  return (
    <Router>
        <Navbaria />
        <Switch>
           <Route exact path='/'>
             <Home />
           </Route>
           
           <Route path='/about'>
           {(isLogin) ? <About /> : <Redirect to='/' />}
           </Route>
           <Route path='/login'>
             <Login />
           </Route>
           <Route path='/register'>
             <Register />
           </Route>
        </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return{
    isLogin:state.users.isLogin
  }
}

export default connect(mapStateToProps)(App);
