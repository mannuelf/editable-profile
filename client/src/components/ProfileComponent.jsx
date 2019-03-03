import React, { Component } from 'react'
import { connect } from 'react-redux'
import CityOptionsSelector from './CityOptionsSelector'
import EthnicitySelector from './EthnicitySelector'
import FigureSelector from './FigureSelector'
import GenderSelector from './GenderSelector'
import MaritalSelector from './MaritalSelector'
import ReligionSelector from './ReligionSelector'

class ProfileComponent extends Component {
  constructor(props) {
    super(props)
    let profile = this.props.profile;
    this.state = {
      aboutMe: profile.aboutMe,
      birthday: profile.birthday,
      displayName: profile.displayName,
      ethnicity: profile.ethnicity,
      figure: profile.figure,
      gender: profile.gender,
      loaded: 0,
      location: profile.location,
      maritalStatus: profile.maritalStatus,
      occupation: profile.occupation,
      realName: profile.realName,
      religion: profile.religion,
      selectedFile: profile.selectedFile,
      userHeight: profile.userHeight,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let profileObject = {
      aboutMe: this.state.aboutMe,
      birthday: this.state.birthday,
      displayName: this.state.displayName,
      ethnicity: this.state.ethnicity,
      figure: this.state.figure,
      gender: this.state.gender,
      loaded: this.state.loaded,
      location: this.state.location,
      maritalStatus: this.state.maritalStatus,
      occupation: this.state.occupation,
      realName: this.state.realName,
      religion: e.target.religion.value,
      selectedFile: this.state.selectedFile,
      userHeight: this.state.userHeight,
    }

    this.props.profileProps(profileObject)
  }

  handleAboutMe = (event) => {
    this.setState({ aboutMe: event.target.value })
  }

  handleBirthday = (event) => {
    this.setState({ birthday: event.target.value })
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

  handleGender = (event) => {
    this.setState({ gender: event.target.value })
  }

  handleSelectedFile = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    })
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
      <form onSubmit={this.handleSubmit} >
        <section className="[ hero ] [ is-primary ] [ is-primary--dark ]">
          <div className="[ hero-body ]">
            <div className="[ container ]">
              <h1>
                <input
                  className="[ profile-page__name ] [ is-size-1 ]"
                  type="text"
                  name="displayName"
                  value={this.state.displayName}
                  onChange={this.handleDisplayName}
                />
                <span className="[ mandatory]">*</span>
              </h1>
              <h2>
                <input
                  className="[ profile-page__name ] [ is-size-1 ]"
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
        <section className="[ section ] [ background-stripes ]">
          <section className="[ container ]">

            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child box">
                      <h3 className="[ is-size-4 ]">About Me</h3>
                      <div className="control">
                        <textarea
                          className="[ textarea ] [ is-editable-input ]"
                          name="aboutMe"
                          value={this.state.aboutMe}
                          onChange={this.handleAboutMe}
                        >
                          {this.state.aboutMe}
                        </textarea>
                      </div>
                    </article>
                    <article className="tile is-child box">
                      <h3 className="[ is-size-4 ]">Upload Photo</h3>
                      <div className="file has-name is-right">
                        <label className="file-label">
                          <input className="file-input" type="file" name="upload_file"
                            onChange={this.handleSelectedFile}
                          />
                          <span className="file-cta">
                            <span className="file-icon">
                              <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">
                              Choose a photo...
                            </span>
                          </span>
                          <span className="file-name">
                            Upload photo
                          </span>
                        </label>
                        <div> {Math.round(this.state.loaded, 2)} %</div>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <h3 className="[ is-size-4 ]">Birthday</h3>
                      <input type="date"
                        placeholder={this.state.birthday}
                        onChange={this.handleBirthday}
                        value={this.state.birthday} />

                      <h3 className="[ is-size-4 ]">Location</h3>
                      <div className="control has-icons-left">
                        <div className="select">
                          <CityOptionsSelector locationProps={this.props.locationProps} />
                        </div>
                        <span className="icon is-left">
                          <i className="fas fa-globe"></i>
                        </span>
                      </div>
                    </article>
                  </div>
                </div>

              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <h3 className="[ is-size-4 ]">Gender</h3>
                  <div className="select">
                    <GenderSelector
                      gender={this.props.gender}
                      onChange={this.handleGender}
                    />
                  </div>

                  <h3 className="[ is-size-4 ]">Ethnicity</h3>
                  <div className="select">
                    <EthnicitySelector
                      ethnicity={this.props.ethnicity}
                    />
                  </div>

                  <h3 className="[ is-size-4 ]">Religion</h3>
                  <div className="select">
                    <ReligionSelector
                      religion={this.props.religion}
                      onChange={this.handleReligion}
                    />
                  </div>

                  <h3 className="[ is-size-4 ]">Height</h3>
                  <input
                    className="[ is-editable-input  ]"
                    type="text"
                    name="userHeight"
                    value={this.state.userHeight}
                    onChange={this.handleUserHeight}
                  />

                  <h3 className="[ is-size-4 ]">Figure</h3>
                  <div className="select">
                    <FigureSelector
                      figure={this.props.figure}
                      onChange={this.handleFigure}
                    />
                  </div>


                  <h3 className="[ is-size-4 ]">Marital Status</h3>
                  <div className="select">
                    <MaritalSelector
                      marital_status={this.props.marital_status}
                      onChange={this.handleMaritalStatus}
                    />
                  </div>

                  <h3 className="[ is-size-4 ]">Occupation</h3>
                  <input
                    className="[ is-editable-input  ]"
                    type="text"
                    name="occupation"
                    value={this.state.occupation}
                    onChange={this.handleOccupation}
                  />
                </article>
              </div>
            </div>

            <input
              className="button is-large is-primary is-fullwidth"
              onClick={this.handleUpload}
              type="submit"
              value="SAVE PROFILE"
            />
          </section>
        </section>
      </form >
    );
  }
}

// gets data from state
const mapStateToProps = state => {
  return {
    profile: state.reducer.profile
  }
}

export default connect(mapStateToProps)(ProfileComponent)
