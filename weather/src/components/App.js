import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

class App extends Component {
  render() {
    return (
      <Grid style={{marginTop:'1em'}}>
        <SearchBar/>
        <WeatherList/>
      </Grid>
    );
  }
}

export default App;