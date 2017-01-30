import React, {Component, PropTypes} from 'react'
import { Navbar,Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'

export class NavbarApp extends Component {
  constructor() {
    super()
  }

  renderLinks() {
    return (
      <Nav pullRight>
        <LinkContainer to="/signup">
          <NavItem eventKey={1}>Sign Up</NavItem>
        </LinkContainer>
        <LinkContainer to="/signin">
          <NavItem eventKey={2}>Sign In</NavItem>
        </LinkContainer>
      </Nav>
    )
  }

  renderLogout() {
    return (
      <Nav pullRight>
        <LinkContainer to="/signout">
          <NavItem eventKey={1}>Sign Out</NavItem>
        </LinkContainer>
      </Nav>
    )
  }

  render() {
    const { isLoggedIn } = this.props
    return (
      <div id="NavbarApp">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>{this.props.nameApp}</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          {isLoggedIn ? this.renderLogout() : this.renderLinks()}
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

NavbarApp.propTypes = {
  nameApp: PropTypes.string,
  isLoggedIn : PropTypes.bool
}

export default NavbarApp
