import React,{ PropTypes } from 'react'
import { Grid } from 'react-bootstrap'


const Resources = ({authenticated}) => {
  return (
    <div>
      <Grid>
        <h3>Tecnologies</h3>
          <code>estado: {authenticated ? 'true':'false'}</code>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>React Router</li>
          <li>React Boostrap</li>
        </ul>   
      </Grid>
    </div>
  )
}

Resources.propTypes = {
  authenticated: PropTypes.bool.isRequired
}

export default Resources
