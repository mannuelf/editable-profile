import React, { Component } from 'react'

class FigureSelector extends Component {
  render() {
    const options = this.props.figure
    const figureOptions = options.map((value, index) => {
      return <option key={index} selected={this.props.initFigureProps === value.name}> {value.name}</ option>
    })
    return (
      <select name="figure">
        {figureOptions}
      </select>
    )
  }
}

export default FigureSelector