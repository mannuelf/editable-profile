import React, { Component } from 'react'

class LocationSelector extends Component {
  render() {
    const locations = this.props.locationProps;
    const allCities = locations.map((value, index) => {
      return <option
        key={index}
        selected={this.props.initLocationProps === value.city}>
        {value.city}
      </option>
    })
    return (
      <select
        name="location"
      >
        {allCities}
      </select>
    )
  }
}

export default LocationSelector
