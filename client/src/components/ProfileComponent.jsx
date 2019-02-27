import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from '../api'

let apiEndPoint = 'http://locahost:9000'
let apiCities = 'http://localhost:8080/en/locations/cities.json'
class ProfileComponent extends Component {
  constructor(props) {
    super(props)
    let profile = this.props.profile[0];
    this.state = {
      aboutMe: profile.aboutMe,
      displayName: profile.displayName,
      ethnicity: profile.ethnicity,
      figure: profile.figure,
      gender: profile.gender,
      location: profile.location,
      maritalStatus: profile.maritalStatus,
      occupation: profile.occupation,
      realName: profile.realName,
      religion: profile.religion,
      userHeight: profile.userHeight,
      selectedFile: profile.selectedFile,
      loaded: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount = () => {
    this.fetchCities()
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let profileObject = {
      aboutMe: this.state.aboutMe,
      displayName: this.state.displayName,
      ethnicity: this.state.ethnicity,
      figure: this.state.figure,
      gender: this.state.gender,
      location: this.state.location,
      maritalStatus: this.state.maritalStatus,
      occupation: this.state.occupation,
      realName: this.state.realName,
      religion: e.target.religion.value,
      userHeight: this.state.userHeight,
      selectedFile: this.state.selectedFile,
      loaded: this.state.loaded,
    }

    this.props.profileProps(profileObject)
  }

  handleAboutMe = (event) => {
    this.setState({ aboutMe: event.target.value })
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

  handleUpload = (profileObject) => {
    const data = new FormData(profileObject)
    data.append('file',
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    console.log('data', data)
    API.post(`${apiEndPoint}/upload`, data, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
        })
        // console.log('axios', data)
      },
    })
      .then(response => {
        // console.log('response', response)
      })
      .catch(error => {
        // console.log('error', error)
      })
  }

  fetchCities = () => {
    console.log('fetching cities');
    API.get(`${apiCities}`)
      .then(res => {
        let locations = res.data
        this.setState({
          location: locations
        })
      })
      .catch(err => {
        console.log(err)
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
      <form onSubmit={this.handleSubmit}>
        <section className="[ hero ] [ is-primary ] [ is-primary--dark ]">
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
                          <input className="file-input" type="file" name="file"
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
                      <h3 className="[ is-size-4 ]">Location</h3>
                      {/* This one has to come from the API/DB */}
                      <div className="control has-icons-left">
                        <div className="select">
                          <select
                            name="location"
                            onChange={this.fetchCities}
                          >
                            <option>Country</option>
                            <option>Select dropdown</option>
                          </select>
                        </div>
                        <span className="icon is-left">
                          <i className="fas fa-globe"></i>
                        </span>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    ...
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <h3 className="[ is-size-4 ]">Birthday</h3>
                  <h3 className="[ is-size-4 ]">Gender</h3>
                  <input
                    className="[ is-editable-input  ]"
                    type="text"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleGender}
                  />
                  <h3 className="[ is-size-4 ]">Ethnicity</h3>
                  <input
                    className="[ is-editable-input  ]"
                    type="text"
                    name="ethnicity"
                    value={this.state.ethnicity}
                    onChange={this.handleEthnicity}
                  />
                  <h3 className="[ is-size-4 ]">Religion</h3>
                  <input
                    className="[ is-editable-input  ]"
                    type="text"
                    name="religion"
                    value={this.state.religion}
                    onChange={this.handleReligion}
                  />
                  <h3 className="[ is-size-4 ]">Height</h3>
                  <input
                    className="[ is-editable-input  ]"
                    type="text"
                    name="userHeight"
                    value={this.state.userHeight}
                    onChange={this.handleUserHeight}
                  />
                  <h3 className="[ is-size-4 ]">Figure</h3>
                  <input
                    className="[ is-editable-input  ]"
                    type="text"
                    name="figure"
                    value={this.state.figure}
                    onChange={this.handleFigure}
                  />
                  <h3 className="[ is-size-4 ]">Marital Status</h3>
                  <input
                    className="[ is-editable-input  ]"
                    type="text"
                    name="maritalStatus"
                    value={this.state.maritalStatus}
                    onChange={this.handleMaritalStatus}
                  />
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
