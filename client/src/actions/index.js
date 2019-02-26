import {
  UPDATE_PROFILE,
}
  from './actionType'

export const setProfile = payload => ({
  type: UPDATE_PROFILE,
  payload: payload
})