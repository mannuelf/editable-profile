import {
  UPDATE_DISPLAY_NAME,
  UPDATE_REAL_NAME,
  UPDATE_PROFILE_PICTURE,
  UPDATE_BIRTHDAY,
  UPDATE_GENDER,
  UPDATE_RELIGION,
  UPDATE_HEIGHT,
  UPDATE_FIGURE,
  UPDATE_MARITAL_STATUS,
  UPDATE_OCCUPATION,
  UPDATE_ABOUT_ME,
  UPDATE_LOCATION
}
  from './actionType'

export const setDisplayName = displayName => ({
  type: UPDATE_DISPLAY_NAME,
  displayName: displayName
})

export const setRealName = realName => ({
  type: UPDATE_REAL_NAME,
  realName: realName
})

export const setProfilePicture = profilePicture => ({
  type: UPDATE_PROFILE_PICTURE,
  profilePicture: profilePicture
})

export const setBirthday = birthday => ({
  type: UPDATE_BIRTHDAY,
  birthday: birthday
})

export const setGender = gender => ({
  type: UPDATE_GENDER,
  gender: gender
})

export const setReligion = religion => ({
  type: UPDATE_RELIGION,
  gender: religion
})

export const setHeight = height => ({
  type: UPDATE_HEIGHT,
  height: height
})

export const setFigure = figure => ({
  type: UPDATE_FIGURE,
  figure: figure
})

export const setMaritalStatus = maritalStatus => ({
  type: UPDATE_MARITAL_STATUS,
  maritalStatus: maritalStatus
})

export const setOccupation = occupation => ({
  type: UPDATE_OCCUPATION,
  occupation: occupation
})

export const setAboutMe = aboutMe => ({
  type: UPDATE_ABOUT_ME,
  aboutMe: aboutMe
})

export const setLocation = location => ({
  type: UPDATE_LOCATION,
  location: location
})

