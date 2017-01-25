import React, { Component,PropTypes } from 'react'
import { Grid } from 'react-bootstrap'
import HeaderApp from './common/Header'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderApp title="Posts App"></HeaderApp>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
