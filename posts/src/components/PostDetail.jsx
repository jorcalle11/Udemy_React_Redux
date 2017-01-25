import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Label , Button} from 'react-bootstrap'
import { Link } from 'react-router'
import { getPost,deletePost } from '../actions/posts.action'

class PostDetail extends Component {
  
  componentWillMount() {
    this.props.getPost(this.props.params.postId)
  }

  renderCategory(category) {
    return (
      <Label
        style={{marginRight:'5px'}}
        bsStyle="primary"
        key={category}>
        {category}
      </Label>
    )
  }

  onDeletePost() {
    this.props.deletePost(this.props.params.postId)
      .then(() => this.context.router.push('/'))
  }
  
  render() {
    const { post } = this.props
    if (!post) {
      return <div className="text-info text-center">Cargando...</div>
    }
    const categories = post.categories.split(',')
    return (
      <div>
        <div className="pull-right">
          <Button bsStyle="danger" onClick={this.onDeletePost.bind(this)}>Eliminar</Button>
        </div>
        <h3>{post.title}</h3>
        <h5>Categorias: {categories.map(this.renderCategory)}</h5>
        <p>{post.content}</p>
        <Link to={'/'}>Regresar al index</Link>
      </div>
    )
  }
}

PostDetail.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = state => {
  return {
    post: state.posts.current
  }
}

export default connect(mapStateToProps,{ getPost,deletePost })(PostDetail)
