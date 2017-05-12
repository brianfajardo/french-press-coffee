import { SELECT_LIBRARY } from '../constants/actionTypes'

export default (state = 0, action) => {
  switch (action.type) {
    case SELECT_LIBRARY:
      return action.payload
    default:
      return state
  }
}