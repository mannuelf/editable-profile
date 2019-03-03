import {
  UPDATE_PROFILE,
}
  from '../actions/actionType'
import photo from './../assets/img/photo.png'
import API from '../api/Api'

let initialState = {
  profile: {
    aboutMe: 'I am a professional football manager. I enjoy reading and classical music. I never bring work home, I promise.',
    birthday: '16 April 1960',
    displayName: 'Rafa',
    ethnicity: 'White',
    figure: 'Slim',
    gender: 'Male',
    location: 'Newcastle upon Tyne',
    maritalStatus: 'Divorced',
    occupation: 'Football Manager',
    profilePicture: photo,
    realName: 'Rafael Benítez Maudes',
    religion: 'Christian',
    selectedFile: photo,
    userHeight: 1.75,
  }
}

// TODO: if database exists and has entry use that. 
API.get(`/user`)
  .then((response) => {
    const dbUserState = {
      profile: response[0],
    }
    if (dbUserState.length > 0) {
      return initialState = dbUserState
    }
  })
  .catch((err) => {
    console.log(err);
  })

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return Object.assign({}, state, {
        profile: {
          aboutMe: action.profile.aboutMe,
          birthday: action.profile.birthday,
          displayName: action.profile.displayName,
          ethnicity: action.profile.ethnicity,
          figure: action.profile.figure,
          gender: action.profile.gender,
          location: action.profile.location,
          maritalStatus: action.profile.maritalStatus,
          occupation: action.profile.occupation,
          profilePicture: action.profile.profilePicture,
          realName: action.profile.realName,
          religion: action.profile.religion,
          selectedFile: action.profile.photo,
          userHeight: action.profile.userHeight,
        }
      })
    default:
      return state
  }
}

export default ProfileReducer
