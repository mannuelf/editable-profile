import React, { Component } from 'react'

class MaritalSelector extends Component {
  render() {
    console.log('A MaritalSelector', this.props.marital_status)
    const options = this.props.marital_status
    const maritalOptions = options.map((value, index) => {
      return <option key={index}>{value.name}</option>
    })
    return (
      <select name="marital">
        {maritalOptions}
      </select>
    )
  }
}

export default MaritalSelector