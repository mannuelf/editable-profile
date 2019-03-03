import React, { Component } from 'react'

class CitiesOptionsSelector extends Component {
  render() {
    const locations = this.props.locationProps;
    const allCities = locations.map((value, index) => {
      return <option key={index}>{value.city}</option>
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

export default CitiesOptionsSelector
