import React, { Component } from 'react';
import { connect } from 'react-redux'

class ProfileComponent extends Component {
  constructor(props) {
    super(props)
    let profile = this.props.profile[0];
    this.state = {
      displayName: profile.displayName,
      realName: profile.realName,
      aboutMe: profile.aboutMe,
      location: profile.username,
      username: profile.username,
      gender: profile.gender,
      ethnicity: profile.ethnicity,
      religion: profile.religion,
      userHeight: profile.userHeight,
      figure: profile.figure,
      maritalStatus: profile.maritalStatus,
      occupation: profile.occupation,
      file: profile.file,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDisplayName = () => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    let profileObject = {
      displayName: e.target.displayName.value,
      realName: e.target.realName.value,
      aboutMe: e.target.aboutMe.value,
      location: e.target.location.value,
      username: e.target.username.value,
      gender: e.target.gender.value,
      ethnicity: e.target.ethnicity.value,
      religion: e.target.religion.value,
      userHeight: e.target.userHeight.value,
      figure: e.target.figure.value,
      maritalStatus: e.target.maritalStatus.value,
      occupation: e.target.occupation.value,
      file: e.target.file.value,
    }
    this.props.profileProps(profileObject)
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
                  ref={node => (this.inputNode = node)}
                />
              </h1>
              <h2 className="[ subtitle ] [ is-size-2 ]">
                <input
                  className="[ subtitle ] [ is-size-2 ]"
                  type="text"
                  name="realName"
                  value={this.state.realName}
                  ref={node => (this.inputNode = node)}
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
                  ref={node => (this.inputNode = node)}
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
                ref={node => (this.inputNode = node)}
              />
              <h3>Ethnicity</h3>
              <input
                className="[]"
                type="text"
                name="ethnicity"
                value={this.state.ethnicity}
                ref={node => (this.inputNode = node)}
              />
              <h3>Religion</h3>
              <input
                className="[]"
                type="text"
                name="religion"
                value={this.state.religion}
                ref={node => (this.inputNode = node)}
              />
              <h3>Height</h3>
              <input
                className="[]"
                type="text"
                name="userHeight"
                value={this.state.userHeight}
                ref={node => (this.inputNode = node)}
              />
              <h3>Figure</h3>
              <input
                className="[]"
                type="text"
                name="figure"
                value={this.state.figure}
                ref={node => (this.inputNode = node)}
              />
              <h3>Marital Status</h3>
              <input
                className="[]"
                type="text"
                name="maritalStatus"
                value={this.state.maritalStatus}
                ref={node => (this.inputNode = node)}
              />
              <h3>Occupation</h3>
              <input
                className="[]"
                type="text"
                name="occupation"
                value={this.state.occupation}
                ref={node => (this.inputNode = node)}
              />
              <h3>Location</h3>
              <div className="control has-icons-left">
                <div className="select">
                  <select
                    name="location"
                    ref={node => (this.inputNode = node)}
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