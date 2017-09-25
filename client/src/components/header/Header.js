import React, { Component } from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>
                <img style={{width: '50%'}} src={logo} alt=""/>
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={2} title="Seminars" id="basic-nav-dropdown">
              <LinkContainer to={'/seminars/hair_strokes'}>
                <MenuItem eventKey={2.1}>Hair Strokes</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/seminars/powdered'}>
                <MenuItem eventKey={2.2}>Powdered</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/seminars/lips'}>
                <MenuItem eventKey={2.3}>Lips</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/seminars/eyeliners'}>
                <MenuItem eventKey={2.4}>Eyeliners</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/seminars/areola'}>
                <MenuItem eventKey={2.5}>Areola</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/seminars/hairlines'}>
                <MenuItem eventKey={2.6}>Hairlines</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/seminars/others'}>
                <MenuItem eventKey={2.7}>Others</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to={'/register'}>
              <NavItem eventKey={3}>Register</NavItem>
            </LinkContainer>
            <LinkContainer to={'/faq'}>
              <NavItem eventKey={4} href="#">FAQ</NavItem>
            </LinkContainer>
            <LinkContainer to={'/contact'}>
              <NavItem eventKey={5} href="#">Contact</NavItem>
            </LinkContainer>

          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
