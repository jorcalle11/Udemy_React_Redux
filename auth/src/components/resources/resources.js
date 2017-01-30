import React,{ PropTypes } from 'react'
import { Grid } from 'react-bootstrap'


const Resources = ({auth:{isLoggedIn,currentUser}}) => {
  return (
    <div>
      <Grid>
        <h3>Usuario Actual</h3>
          <code>estado: {isLoggedIn ? 'true':'false'}</code>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>React Router</li>
          <li>React Boostrap</li>
        </ul>
        {
          !currentUser ? 
          'cargando usuario...' :
          <ul>
            <li><strong>Id:</strong> <code>{currentUser._id}</code></li>
            <li><strong>Email:</strong> <code>{currentUser.email}</code></li>
            <li><strong>Password:</strong> <code>{currentUser.password}</code></li>
          </ul>   
        }
      </Grid>
    </div>
  )
}

Resources.propTypes = {
  auth: PropTypes.object.isRequired
}

export default Resources
