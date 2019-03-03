import React, { Component } from 'react'

class MaritalSelector extends Component {
  render() {
    const options = this.props.marital_status
    const maritalOptions = options.map((value, index) => {
      return <option key={index} selected={this.props.initMaritalProps === value.name}>{value.name}</option>
    })
    return (
      <select name="marital">
        {maritalOptions}
      </select>
    )
  }
}

export default MaritalSelector