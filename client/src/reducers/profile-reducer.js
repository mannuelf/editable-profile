import {
  UPDATE_PROFILE,
}
  from '../actions/actionType'

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
    profilePicture: '',
    realName: 'Rafael Benítez',
    religion: 'Christian',
    userHeight: 1.56,
  }
]
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        payload: action.payload,
      }
    default:
      return state
  }
}

export default ProfileReducer
