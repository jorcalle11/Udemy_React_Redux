import { connect } from 'react-redux'
import NavbarApp from './nav'
import { changeAuthentication } from '../../auth/authActions'

const mapStateToProps = ({authenticated}) => {
  return {
    isLoggedIn: authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeAuthentication : isLoggedIn => dispatch(changeAuthentication(isLoggedIn))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarApp)
