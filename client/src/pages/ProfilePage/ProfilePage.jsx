import React, { Component } from 'react';
import { setProfile } from './../../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import photo from './../assets/img/photo.png'
import ProfileComponent from './../../components/ProfileComponent'

class ProfilePage extends Component {
  updateProfileDetails = (profileObject) => {
    this.props.setProfile(profileObject);
    this.forceUpdate();
  }

  render() {
    console.log(this.props.profile[0])
    return (
      <div className="[ container ] [ is-fluid ] [ is-marginless ]">
        <section className="[ hero ] [ is-primary ] [ profile-page ] [ profile-page__food--icon ]">
          <div className="[ container ] [ has-text-centered ] [ profile-page__photo ]">
            <img src={this.props.profile[0].profilePicture} alt="" />
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
