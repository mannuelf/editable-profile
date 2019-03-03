import React, { Component } from 'react'

class EthnicitySelector extends Component {
  render() {
    console.log('A EthnicitySelector', this.props.ethnicity)
    const options = this.props.ethnicity
    const ethnicOptions = options.map((value, index) => {
      return <option key={index}>{value.name}</option>
    })
    return (
      <select name="ethnicity">
        {ethnicOptions}
      </select>
    )
  }
}

export default EthnicitySelector