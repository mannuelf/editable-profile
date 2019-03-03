import React, { Component } from 'react'

class ReligionSelector extends Component {
  render() {
    console.log('A ReligionSelector', this.props.religion)
    const options = this.props.religion
    const religionOptions = options.map((value, index) => {
      return <option key={index}>{value.name}</option>
    })
    return (
      <select name="religion">
        {religionOptions}
      </select>
    )
  }
}

export default ReligionSelector