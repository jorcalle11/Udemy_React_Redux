import React,{ PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import selectedCountrySelector from '../../selectors/selectedCountry'
import CountryItem from './CountryItem'

const SelectedCountryList = ({countries}) => {

  if (!countries.length) {
    return <div className="text-center text-info">Selecciona paises de la lista</div>
  }

  const transitionOptions = {
    transitionName : 'country',
    transitionEnterTimeout : 900,
    transitionLeaveTimeout : 900,
    transitionAppear : true,
    transitionAppearTimeout : 500
  }

  return (
    <div>
      <ReactCSSTransitionGroup {...transitionOptions}>
        {countries.map(country => <CountryItem selected={true} key={country.name} country={country} />)}
      </ReactCSSTransitionGroup>
    </div>
  )
}

SelectedCountryList.propTypes = {
  countries: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    countries: selectedCountrySelector(state)
  }
}

export default connect(mapStateToProps)(SelectedCountryList)
