import React, { Component,PropTypes } from 'react'
import { Link } from 'react-router'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import PostItem from '../components/PostItem'

class PostIndex extends Component {

  renderPost(post) {
    return <PostItem key={post.id} post={post} />
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <div style={{marginBottom:'1em'}}>
          <Link to={'posts/new'} className="btn btn-primary pull-right">
            Crear Post
          </Link>
          <h2>Posts</h2>
        </div>
        <ListGroup>
          {posts.map(this.renderPost)}
        </ListGroup>
        <p className="text-info text-center">Total de posts: {posts.length}</p>
      </div>
    )
  }
}

PostIndex.propTypes = {
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps)(PostIndex)
