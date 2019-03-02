import {
  UPDATE_PROFILE,
}
  from './actionType'

export const setProfile = payload => ({
  type: UPDATE_PROFILE,
  profile: payload,
  myFunction: () => {
    console.log('Action was called with this payload ' + payload)
  }
})
