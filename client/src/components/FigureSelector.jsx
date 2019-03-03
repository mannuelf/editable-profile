import React, { Component } from 'react'

class FigureSelector extends Component {
  render() {
    console.log('A FigureSelector', this.props.figure)
    const options = this.props.figure
    const figureOptions = options.map((value, index) => {
      return <option key={index}>{value.name}</option>
    })
    return (
      <select name="figure">
        {figureOptions}
      </select>
    )
  }
}

export default FigureSelector