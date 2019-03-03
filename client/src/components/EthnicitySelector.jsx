import React, { Component } from 'react'

class EthnicitySelector extends Component {
  render() {
    const options = this.props.ethnicity
    const ethnicOptions = options.map((value, index) => {
      return <option key={index} selected={this.props.initEthnicityProps === value.name}>{value.name}</option>
    })
    return (
      <select name="ethnicity">
        {ethnicOptions}
      </select>
    )
  }
}

export default EthnicitySelector