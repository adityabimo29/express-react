import React, { useState, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
 
const Navbaria = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const  isLogin = localStorage.getItem('token');

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Rexpress</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            {isLogin ? (
              <Fragment>
                <NavItem>
                  <NavLink tag={Link} to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/todos">Master</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/logout">Logout</NavLink>
                </NavItem>
              </Fragment>
            ) : (
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              
            ) }
 
            
          </Nav>
          {!isLogin ? (
            <Link className='btn btn-warning'  to='/register'>Register</Link>
          ):''}
          
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    isLogin:state.users.isLogin
  }
}

export default connect(mapStateToProps)(Navbaria);