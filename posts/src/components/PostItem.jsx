import React from 'react'
import { Link } from 'react-router'

const PostItem = ({post}) => {
  return (
    <Link to={`posts/${post.id}`} className="list-group-item">
      <span className="pull-right">{post.categories}</span>
      <strong>{post.title}</strong>
    </Link>
  )
}

export default PostItem
