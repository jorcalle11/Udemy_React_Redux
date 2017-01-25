import React, {Component} from 'react';
import { Table, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import ModalGoogleMap from '../components/ModalGoogleMap';
import './style.css'

class WeatherList extends Component {

  constructor() {
    super()
    this.state = { showModal: false }
  }

  renderWeather(data) {
    const temps = data.list.map(weather => weather.main.temp)
    const humidities = data.list.map(weather => weather.main.humidity)
    const pressures = data.list.map(weather => weather.main.pressure)

    return (
      <tr key={data.city.id}>
        <td>
          <a style={{cursor:'pointer'}} onClick={() => this.setState({ showModal: true }) }>
            {data.city.name}
          </a>
          <ModalGoogleMap
            data={data}
            showModal={this.state.showModal}
            onClose={() => this.setState({ showModal: false })}/>
        </td>
        <td><Chart data={temps} color="orange" units="k" /></td>
        <td><Chart data={humidities} color="green" units="hPa" /></td>
        <td><Chart data={pressures} color="blue" units="%" /></td>
      </tr>
    )
  }

  render() {
    const { weather } = this.props
    return (
      <Grid style={{marginTop:'1em'}}>
        <Table responsive={true}>
          <thead>
            <tr className="info">
              <th>Ciudad</th>
              <th>Temperatura (k)</th>
              <th>Presion (hPa)</th>
              <th>Humedad (%)</th>
            </tr>
          </thead>
          <tbody>
            {weather.map(data => this.renderWeather(data))}
          </tbody>
        </Table>
      </Grid>
    );
  }
}

const mapStateToProps = ({weather}) => {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList);