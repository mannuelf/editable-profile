import {
  UPDATE_PROFILE,
}
  from '../actions/actionType'
import photo from './../assets/img/photo.png'

const initialState = [
  {
    aboutMe: 'I am a professional football manager. I enjoy reading and classical music. I never bring work home, I promise',
    birthday: '16 April 1960',
    displayName: 'Rafa',
    ethnicity: 'Caucasian',
    figure: 'happy',
    gender: 'Male',
    location: 'Newcastle Upon Tyne',
    maritalStatus: 'Single',
    occupation: 'Football Manager',
    profilePicture: photo,
    realName: 'Rafael Benítez',
    religion: 'Christian',
    selectedFile: photo,
    userHeight: 1.56,
  }
]
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          aboutMe: action.payload.aboutMe,
          birthday: action.payload.aboutMe.birthday,
          displayName: action.payload.displayName,
          ethnicity: action.payload.ethnicity,
          figure: action.payload.figure,
          gender: action.payload.gender,
          location: action.payload.location,
          maritalStatus: action.payload.maritalStatus,
          occupation: action.payload.occupation,
          profilePicture: action.payload.profilePicture,
          realName: action.payload.realName,
          religion: action.payload.religion,
          selectedFile: action.payload.photo,
          userHeight: action.payload.userHeight,
        },
      }
    default:
      return state
  }
}

export default ProfileReducer
