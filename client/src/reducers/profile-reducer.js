import {
  UPDATE_PROFILE,
}
  from '../actions/actionType'

const initialState = [
  {
    displayName: 'Rafa',
    realName: 'Rafael Benítez',
    profilePicture: '',
    birthday: '16 April 1960',
    gender: 'Male',
    religion: 'Christian',
    userHeight: 1.56,
    figure: 'happy',
    maritalStatus: 'Single',
    occupation: 'Football Manager',
    aboutMe: 'I am a professional football manager. I enjoy reading and classical music. I never bring work home, I promise',
    location: 'Newcastle Upon Tyne'
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
