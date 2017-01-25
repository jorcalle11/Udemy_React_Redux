import { connect } from 'react-redux'
import BookList from '../components/BookList'
import { selectBook } from '../actions'

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectBook: (book) => dispatch(selectBook(book))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)