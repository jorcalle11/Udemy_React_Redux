import React, { Component,PropTypes } from 'react'
import { Grid,Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import _ from 'lodash'
import { selectCountry , deselectCountry } from '../../actions/countries'
import CountryItem from './CountryItem'
import SelectedCountryList from './SelectedCountryList'

class CountryList extends Component {

  renderCountry(country) {
    const { selectCountry,deselectCountry } = this.props

    return (
      <CountryItem
        selected={false}
        key={country.name}
        onSelectCountry={selectCountry}
        onDeselectCountry={deselectCountry}
        country={country}/>
    )
  }
  
  render() {
    const { countries } = this.props
    
    if (_.isEmpty(countries)) {
      return <div className="text center">Cargando...</div>
    }

    return (
      <Grid>
        <Col xs={12} md={4}>
          <h4 className="text-center">Lista de paises </h4>
          {_.map(countries,this.renderCountry.bind(this))}
        </Col>
        <Col xs={12} md={8}>
          <h4 className="text-center">Lista de paises seleccionados</h4>
          <SelectedCountryList />
        </Col>
      </Grid>
    )
  }
}

CountryList.propTypes = {
  countries : PropTypes.object.isRequired,
  selectCountry: PropTypes.func.isRequired,
  deselectCountry: PropTypes.func.isRequired
}

const mapStateToProps = ({countries}) => {
  return { countries }
}

export default connect(mapStateToProps,{ selectCountry,deselectCountry })(CountryList)
