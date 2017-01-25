import React,{ Component,PropTypes } from 'react'
import { ListGroupItem,Label,Checkbox } from 'react-bootstrap'

class CountryItem extends Component {

  handleSelected({ name },e) {
    const { onSelectCountry, onDeselectCountry } = this.props
    e.target.checked ? onSelectCountry(name) : onDeselectCountry(name)
  }

  renderInSelectedList() {
    const { country } = this.props
    return (
      <ListGroupItem>
        <Label bsStyle="danger" className="pull-right">{country.region}</Label>
        {country.name} - {country.capital}
      </ListGroupItem>    
    )
  }

  renderInList() {
    const { country } = this.props
    return (
      <ListGroupItem>
        <Label className="pull-right">{country.region}</Label>
        <Checkbox onChange={this.handleSelected.bind(this,country)}>
          {country.name} - {country.capital}
        </Checkbox>
      </ListGroupItem>
    )
  }

  render() {
    return (
      <div>
        {this.props.selected ? this.renderInSelectedList() : this.renderInList()}
      </div>
    )
  }
}

CountryItem.propTypes = {
  selected: PropTypes.bool.isRequired,
  country: PropTypes.object.isRequired,
  onSelectCountry: PropTypes.func,
  onDeselectCountry: PropTypes.func
}

export default CountryItem
