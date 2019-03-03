import React, { Component } from 'react'

class GenderSelector extends Component {
  render() {
    const options = this.props.gender
    const genderOptions = options.map((value, index) => {
      return <option key={index} selected={this.props.initGenderProps === value.name}>{value.name}</option>
    })
    return (
      <select name="gender">
        {genderOptions}
      </select>
    )
  }
}

export default GenderSelector