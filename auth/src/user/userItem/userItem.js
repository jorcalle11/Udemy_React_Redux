import React,{ PropTypes } from 'react'
import { ListGroupItem,Label } from 'react-bootstrap'

const UserItem = ({user}) => {
  return (
    <div>
      <ListGroupItem key={user.id}>
        <div className="pull-right">
          <Label bsStyle="info">{user.website}</Label>
        </div>
        {user.name}
      </ListGroupItem>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
