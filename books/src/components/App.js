import React, {Component} from 'react';
import { Grid,Col } from 'react-bootstrap';
import WrapperBookList from '../containers/WrapperBookList';
import WrapperBookDetail from '../containers/WrapperBookDetail';

class App extends Component {
  render() {
    return (
      <div >
        <Grid>
          <Col md={4}>
            <WrapperBookList/>
          </Col>
          <Col md={6} mdOffset={1}>
            <WrapperBookDetail/>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;