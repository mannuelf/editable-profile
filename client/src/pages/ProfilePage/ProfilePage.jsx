import React, { Component } from 'react';
import { setDisplayName } from './../../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setDisplayName(e.target.username.value)
  }

  render() {
    console.log(this.props.profile[0].displayName)
    return (
      <div className="[ container-fluid ]">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            name="username"
            placeholder={this.props.profile[0].displayName}
            ref={node => (this.inputNode = node)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// gets data from state
const mapStateToProps = state => {
  return {
    profile: state.ProfileReducer
  }
};

// sets data in state
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setDisplayName
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
