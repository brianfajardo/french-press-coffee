import { SELECT_LIBRARY } from '../constants/actionTypes'

export default (state = null, action) => {
  switch (action.payload) {
    case SELECT_LIBRARY:
      return action.payload
    default:
      return state
  }
}