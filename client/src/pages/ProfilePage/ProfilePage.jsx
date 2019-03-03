import React, { Component } from 'react';
import { setProfile } from './../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileComponent from './../../components/ProfileComponent'
import API from '../../api/Api'
import LoadingIcon from '../../components/Loading'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      ethnicity: [],
      figure: [],
      gender: [],
      marital_status: [],
      religion: []
    }
  }

  updateProfileDetails = (profileObject) => {
    this.props.setProfile(profileObject)
    this.postForm(profileObject)
  }

  componentDidMount() {
    this.getCities()
    this.getUserAttributes()
  }

  getCities = () => {
    let cityArray = []
    API.get('/locations/cities')
      .then(res => {
        cityArray = res.data.cities
        this.setState({
          locations: cityArray
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  getUserAttributes = () => {
    let userAttributes = []
    API.get('/user/attributes')
      .then((response) => {
        userAttributes = response.data
        this.setState({
          ethnicity: userAttributes.ethnicity,
          figure: userAttributes.figure,
          gender: userAttributes.gender,
          marital_status: userAttributes.marital_status,
          religion: userAttributes.religion
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  postForm = (profileObject) => {
    let data = profileObject
    data = JSON.stringify(data)
    API.put(`/user`, {
      data
    }).then((response) => {
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    console.log('ProfilePage: ', this.state)
    let loading = (
      (this.state.locations === undefined || this.state.locations.length === 0)
      && (this.state.ethnicity === undefined || this.state.ethnicity === 0)
      && (this.state.figure === undefined || this.state.figure === 0)
      && (this.state.gender === undefined || this.state.gender === 0)
      && (this.state.marital_status === undefined || this.state.marital_status === 0)
      && (this.state.religion === undefined || this.state.religion === 0)
    )
      ? <div><LoadingIcon /></div>
      : <div>
        <ProfileComponent
          profileProps={this.updateProfileDetails}
          locationProps={this.state.locations}
          displayNameProps={this.state.displayName}
          ethnicity={this.state.ethnicity}
          figure={this.state.figure}
          gender={this.state.gender}
          marital_status={this.state.marital_status}
          religion={this.state.religion}
        />
      </div>
    return (
      <div className="[ container ] [ is-fluid ] [ is-marginless ]">
        <section className="[ hero ] [ is-primary ] [ profile-page ] [ profile-page__food--icon ]">
          <div className="[ container ] [ has-text-centered ] [ profile-page__photo ]">
            <img src={this.props.profile.profilePicture} alt={this.props.profile.realName} />
          </div>
        </section>
        {loading}
      </div>
    )
  }
}

// gets data from state
const mapStateToProps = state => {
  return {
    profile: state.reducer.profile
  }
}

// sets data in state
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setProfile
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

