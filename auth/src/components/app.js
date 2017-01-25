import React, { Component,PropTypes } from 'react'
import FooterApp from './footer/footer'
import NavContainer from './nav/navContainer'



class App extends Component {
  render() {
    return (
      <div>
        <NavContainer nameApp="Auth React Redux" />
        {this.props.children}
        <FooterApp/>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
