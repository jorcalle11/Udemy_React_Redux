import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { ListGroup,Grid } from 'react-bootstrap'
import UserItem from '../userItem/userItem'
import { fetchUsers } from '../userActions'

export class UsersList extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }
  
  render() {
    const { users } = this.props
    return (
      <div>
        <Grid>
          <ListGroup>
            {users.map(user => <UserItem key={user.id} user={user}/>)}
          </ListGroup>
        </Grid>
      </div>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired
}

const mapStateToProps = ({ users }) => {
  return { users }
}

export default connect(mapStateToProps,{ fetchUsers })(UsersList)
