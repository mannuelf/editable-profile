import React, { Component } from 'react';
import { connect } from 'react-redux'

class ProfileComponent extends Component {
  constructor(props) {
    super(props)
    let profile = this.props.profile[0];
    this.state = {
      aboutMe: profile.aboutMe,
      displayName: profile.displayName,
      ethnicity: profile.ethnicity,
      figure: profile.figure,
      file: profile.file,
      gender: profile.gender,
      location: profile.location,
      maritalStatus: profile.maritalStatus,
      occupation: profile.occupation,
      realName: profile.realName,
      religion: profile.religion,
      userHeight: profile.userHeight,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let profileObject = {
      aboutMe: this.state.aboutMe,
      displayName: this.state.displayName,
      ethnicity: this.state.ethnicity,
      figure: this.state.figure,
      file: this.state.file,
      gender: this.state.gender,
      location: this.state.location,
      maritalStatus: this.state.maritalStatus,
      occupation: this.state.occupation,
      realName: this.state.realName,
      religion: e.target.religion.value,
      userHeight: this.state.userHeight,
    }
    console.log('STATE', profileObject)
    this.props.profileProps(profileObject)
  }

  handleAboutMe = (event) => {
    this.setState({ aboutMe: event.target.value })
    console.log('handleDisplayName', this.state.aboutMe);
  }

  handleDisplayName = (event) => {
    this.setState({ displayName: event.target.value })
  }

  handleEthnicity = (event) => {
    this.setState({ ethnicity: event.target.value })
  }

  handleFigure = (event) => {
    this.setState({ figure: event.target.value })
  }

  handleFile = (event) => {
    this.setState({ file: event.target.value })
  }

  handleLocation = (event) => {
    this.setState({ location: event.target.value })
  }

  handleAboutMe = (event) => {
    this.setState({ aboutMe: event.target.value })
  }

  handleMaritalStatus = (event) => {
    this.setState({ maritalStatus: event.target.value })
  }

  handleOccupation = (event) => {
    this.setState({ occupation: event.target.value })
  }

  handleRealName = (event) => {
    this.setState({ realName: event.target.value })
  }

  handleReligion = (event) => {
    this.setState({ religion: event.target.value })
  }

  handleUserHeight = (event) => {
    this.setState({ userHeight: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <section className="[ hero ] [ is-primary ]">
          <div className="[ hero-body ]">
            <div className="[ container ]">
              <h1><span className="[ mandatory]">*</span>
                <input
                  className="[ profile-page__name ] [ is-size-1 ]"
                  type="text"
                  name="displayName"
                  value={this.state.displayName}
                  onChange={this.handleDisplayName}
                />
              </h1>
              <h2 className="[ subtitle ] [ is-size-2 ]">
                <input
                  className="[ subtitle ] [ is-size-2 ]"
                  type="text"
                  name="realName"
                  value={this.state.realName}
                  onChange={this.handleRealName}
                />
                <span className="[ mandatory]">*</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="[ container ]">
          <div className="columns">
            <div className="columns">
              <h3>Upload Photo</h3>
              <div className="file has-name is-right">
                <label className="file-label">
                  <input className="file-input" type="file" name="file" />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span className="file-name">
                    Upload photo
                  </span>
                </label>
              </div>
              <h3>About Me</h3>
              <div className="control">
                <textarea
                  className="textarea"
                  name="aboutMe"
                  value={this.state.aboutMe}
                  onChange={this.handleAboutMe}
                >
                  {this.state.aboutMe}
                </textarea>
              </div>
              <h3>Birthday</h3>
              <h3>Gender</h3>
              <input
                className="[]"
                type="text"
                name="gender"
                value={this.state.gender}
                onChange={this.handleGender}
              />
              <h3>Ethnicity</h3>
              <input
                className="[]"
                type="text"
                name="ethnicity"
                value={this.state.ethnicity}
                onChange={this.handleEthnicity}
              />
              <h3>Religion</h3>
              <input
                className="[]"
                type="text"
                name="religion"
                value={this.state.religion}
                onChange={this.handleReligion}
              />
              <h3>Height</h3>
              <input
                className="[]"
                type="text"
                name="userHeight"
                value={this.state.userHeight}
                onChange={this.handleUserHeight}
              />
              <h3>Figure</h3>
              <input
                className="[]"
                type="text"
                name="figure"
                value={this.state.figure}
                onChange={this.handleFigure}
              />
              <h3>Marital Status</h3>
              {/* This one might need to be select drop down */}
              <input
                className="[]"
                type="text"
                name="maritalStatus"
                value={this.state.maritalStatus}
                onChange={this.handleMaritalStatus}
              />
              <h3>Occupation</h3>
              <input
                className="[]"
                type="text"
                name="occupation"
                value={this.state.occupation}
                onChange={this.handleOccupation}
              />
              <h3>Location</h3>
              {/* This one has to come from the API/DB */}
              <div className="control has-icons-left">
                <div className="select">
                  <select
                    name="location"
                    onChange={this.handleLocation}
                  >
                    <option>Country</option>
                    <option>Select dropdown</option>
                  </select>
                </div>
                <span className="icon is-left">
                  <i className="fas fa-globe"></i>
                </span>
              </div>
            </div>
          </div>

          <input type="submit" value="Submit" />
        </section>

      </form>
    );
  }
}

// gets data from state
const mapStateToProps = state => {
  return {
    profile: state.ProfileReducer
  }
}

export default connect(mapStateToProps)(ProfileComponent)
