import React from 'react'
import { Col } from 'react-bootstrap'

const NotFound = ({router,location}) => {
  return (
    <Col xs={12} md={6} mdOffset={3}>
      <h4 className="text-warning">
        Lo siento, La url <code>{location.pathname}</code> a la que quieres acceder no exite :(
      </h4>
      <p><a href="" onClick={() => router.goBack()}>Sacame de aqui.</a></p>
    </Col>
  )
}

export default NotFound
