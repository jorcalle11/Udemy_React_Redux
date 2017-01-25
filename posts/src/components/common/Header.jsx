import React,{ PropTypes } from 'react'
import { Navbar,Nav,NavItem } from 'react-bootstrap'

const HeaderApp = ({title}) => {
  return (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">{title}</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1} href="/countries">Paises</NavItem>    
      <NavItem eventKey={2} href="https://github.com/jorcalle11/Udemy-course-react-redux/tree/master/posts">Repositorio</NavItem>
    </Nav>
  </Navbar>
  )
}

HeaderApp.propTypes = {
  title: PropTypes.string.isRequired
}

export default HeaderApp
