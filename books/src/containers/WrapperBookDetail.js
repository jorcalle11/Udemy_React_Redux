import { connect } from 'react-redux'
import BookDetail from '../components/BookDetail'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    activeBook: state.bookSelected
  }
}


export default connect(mapStateToProps)(BookDetail)