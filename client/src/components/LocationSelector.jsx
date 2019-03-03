import React, { Component } from 'react'

class LocationSelector extends Component {
  render() {
    const locations = this.props.locationProps;
    console.log('yay', this.props.initLocationProps)
    const allCities = locations.map((value, index) => {
      return <option key={index} selected={this.props.initLocationProps === value.city}>{value.city}</option>
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
