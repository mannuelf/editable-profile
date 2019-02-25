import {
  UPDATE_DISPLAY_NAME
}
  from '../actions/actionType'

const initialState = [{ displayName: 'Manny' }]
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DISPLAY_NAME:
      return [
        ...state, {
          displayName: action.displayName,
        }
      ]
    default:
      return state
  }
}

export default ProfileReducer