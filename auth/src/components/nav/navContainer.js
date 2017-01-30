import { connect } from 'react-redux'
import NavbarApp from './nav'

const mapStateToProps = ({auth}) => {
  return {
    isLoggedIn : auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(NavbarApp)
