import { combineReducers } from 'redux'
import schoolsResults from './schoolsResults'
import schoolProfile from './schoolProfile'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  schoolsResults,
  schoolProfile,
  form: formReducer 
})