import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { logout } from '../authActions'

class SignOut extends Component {

  componentWillMount() {
    this.props.logout()
  } 

  render() {
    return (
      <div>
        Lamento que te vayas!!! :(
      </div>
    )
  }
}

SignOut.propTypes = {
  logout: PropTypes.func
}

export default connect(null,{ logout })(SignOut)
