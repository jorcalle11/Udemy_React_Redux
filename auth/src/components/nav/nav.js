import React, {Component, PropTypes} from 'react'
import { Navbar,Button } from 'react-bootstrap'
import { Link } from 'react-router'

export class NavbarApp extends Component {
  constructor() {
    super()
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  handleClickButton() {
    const { isLoggedIn,changeAuthentication } = this.props
    changeAuthentication(!isLoggedIn)
  }

  renderButton() {
    let button = <Button bsStyle="success" onClick={this.handleClickButton}>Log In</Button>

    if (this.props.isLoggedIn) {
      button = <Button bsStyle="danger" onClick={this.handleClickButton}>Log Out</Button>
    }
    return button
  }

  render() {
    return (
      <div id="NavbarApp">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>{this.props.nameApp}</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <ul className="nav navbar-nav navbar-right">
            <li role="presentation">
              <Link to={'/'}>Home</Link>
            </li>
            <li role="presentation">
              <Link to={'/resources'}>Resources</Link>
            </li>
            <li role="presentation" style={{paddingTop:'7px'}}>
              {this.renderButton()}
            </li>
          </ul>
        </Navbar>
      </div>
    )
  }
}

NavbarApp.propTypes = {
  nameApp: PropTypes.string,
  isLoggedIn : PropTypes.bool,
  changeAuthentication: PropTypes.func
}

export default NavbarApp
