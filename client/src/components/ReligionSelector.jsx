import React, { Component } from 'react'

class ReligionSelector extends Component {
  render() {
    const options = this.props.religion
    const religionOptions = options.map((value, index) => {
      return <option key={index} selected={this.props.initReligionProps === value.name}>{value.name}</option>
    })
    return (
      <select name="religion">
        {religionOptions}
      </select>
    )
  }
}

export default ReligionSelector