import React, { Component } from 'react';
import { setProfile } from './../../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import photo from './../../assets/img/photo.png'
import ProfileComponent from './../../components/ProfileComponent'

class ProfilePage extends Component {
  updateProfileDetails = (profileObject) => {
    this.props.setProfile(profileObject)
  }

  render() {
    return (
      <div className="[ container ] [ is-fluid ] [ is-marginless ]">
        <section className="[ hero ] [ is-primary ] [ profile-page ]">
          <div className="[ container ] [ has-text-centered ] [ profile-page__photo ]">
            {/* <img src={photo} alt={profile.displayName} /> */}
          </div>
        </section>
        <ProfileComponent profileProps={this.updateProfileDetails} />
      </div >
    )
  }
}

// gets data from state
const mapStateToProps = state => {
  return {
    profile: state.ProfileReducer
  }
}

// sets data in state
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setProfile
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
