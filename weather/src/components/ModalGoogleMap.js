import { Modal,Button } from 'react-bootstrap';
import { GoogleMapLoader,GoogleMap } from 'react-google-maps';
import React from 'react';

const styleGoogleMap= {height:'400px',width:'100%'}

const ModalGoogleMap  = ({data,showModal,onClose}) => {
  const { coord } = data.city
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header className="text-center">
        <Modal.Title>{data.city.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={styleGoogleMap}>
          <GoogleMapLoader
            containerElement={ <div style={{height:'100%'}} /> }
            googleMapElement={ <GoogleMap defaultZoom={15} defaultCenter={{lat:coord.lat, lng:coord.lon}} /> }
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="danger" onClick={() => onClose()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalGoogleMap;