import React,{ Component,PropTypes } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      const { isLoggedIn } = this.props.auth 
      if (!isLoggedIn) {
        this.context.router.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      const { isLoggedIn } = nextProps.auth      
      if (!isLoggedIn) {
        this.context.router.push('/')
      }
    }
    
    render() {
      return <ComposedComponent { ...this.props } />
    }
  }

  Authentication.contextTypes = {
    router: PropTypes.object
  }

  Authentication.propTypes = {
    auth: PropTypes.object.isRequired
  }

  const mapStateToProps = ({auth}) => {
    return { auth }
  }

  return connect(mapStateToProps)(Authentication)
}
