import React, { Component } from 'react';
import { setProfile } from './../../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileComponent from './../../components/ProfileComponent'
import API from '../../api/Api'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: []
    }
  }
  updateProfileDetails = (profileObject) => {
    this.props.setProfile(profileObject);
  }

  componentDidMount() {
    this.getCities();
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

  render() {
    console.log('this.state.locations', this.state.locations)

    let loading = (this.state.locations === undefined || this.state.locations.length === 0)
      ? <div>Loading Gif</div>
      : <div>
        <ProfileComponent
          profileProps={this.updateProfileDetails}
          locationProps={this.state.locations}
          displayNameProps={this.state.displayName}
        />
      </div>
    return (
      <div className="[ container ] [ is-fluid ] [ is-marginless ]">
        <section className="[ hero ] [ is-primary ] [ profile-page ] [ profile-page__food--icon ]">
          <div className="[ container ] [ has-text-centered ] [ profile-page__photo ]">
            <img src={this.props.profile.profilePicture} alt="" />
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

