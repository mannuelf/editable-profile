import React, { Component } from 'react'

class GenderSelector extends Component {
  render() {
    console.log('A GenderSelector', this.props.gender)
    const options = this.props.gender
    const genderOptions = options.map((value, index) => {
      return <option key={index}>{value.name}</option>
    })
    return (
      <select name="gender">
        {genderOptions}
      </select>
    )
  }
}

export default GenderSelector