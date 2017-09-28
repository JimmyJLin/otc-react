import React, { Component } from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './_navbar.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixedTop={true}>

          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>
                <img style={{width: '50%'}} src={logo} alt=""/>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={1} title="Seminars" id="basic-nav-dropdown">
                <LinkContainer to={'/seminars/hair_strokes'}>
                  <MenuItem eventKey={1.1}>Hair Strokes</MenuItem>
                </LinkContainer>
                <LinkContainer to={'/seminars/powdered'}>
                  <MenuItem eventKey={1.2}>Powdered</MenuItem>
                </LinkContainer>
                <LinkContainer to={'/seminars/lips'}>
                  <MenuItem eventKey={1.3}>Lips</MenuItem>
                </LinkContainer>
                <LinkContainer to={'/seminars/eyeliners'}>
                  <MenuItem eventKey={1.4}>Eyeliners</MenuItem>
                </LinkContainer>
                <LinkContainer to={'/seminars/areola'}>
                  <MenuItem eventKey={1.5}>Areola</MenuItem>
                </LinkContainer>
                <LinkContainer to={'/seminars/hairlines'}>
                  <MenuItem eventKey={1.6}>Hairlines</MenuItem>
                </LinkContainer>
                <LinkContainer to={'/seminars/others'}>
                  <MenuItem eventKey={1.7}>Others</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to={'/register'}>
                <NavItem eventKey={2}>Register</NavItem>
              </LinkContainer>
              <LinkContainer to={'/faq'}>
                <NavItem eventKey={3} href="#">FAQ</NavItem>
              </LinkContainer>
              <LinkContainer to={'/contact'}>
                <NavItem eventKey={4} href="#">Contact</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    );
  }
}

export default Header;
