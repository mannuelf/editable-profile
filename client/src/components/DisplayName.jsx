import React, { Component } from 'react'

class DisplayName extends Component {
  render() {
    const displayName = this.props.displayName
    return (
      <h1>
        <input
          className="[ profile-page__name ] [ is-size-1 ]"
          type="text"
          name="displayName"
          value={displayName}
          onChange={this.handleDisplayName}
        />
        <span className="[ mandatory]">*</span>
      </h1>
    )
  }
}

export default DisplayName
