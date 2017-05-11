import { combineReducers } from 'redux'
import library from './library_reducer'
import selectedLibraryID from './selectedLibrary_reducer'

export default combineReducers({
  library,
  selectedLibraryID
})