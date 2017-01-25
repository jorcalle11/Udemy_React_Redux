import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row,Col,FormControl,Button } from 'react-bootstrap';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = { term: '' }
  }

  handleInputChange(e) {
    this.setState({ term : e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Row>
          <Col xs={10}>
            <FormControl
              type="search"
              placeholder="Escribe el nombre de una ciudad..."
              value={this.state.term}
              onChange={this.handleInputChange.bind(this)}/>
          </Col>
          <Col xs={2}>
            <Button bsStyle="primary" type="submit">Buscar</Button>
          </Col>
        </Row>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchWeather: (city) => dispatch(fetchWeather(city))
  }
}

export default connect(null,mapDispatchToProps)(SearchBar);