import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions/Actions'
import { v4 as uuidv4 } from 'uuid';

function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        uuid: uuidv4(),
      }
    default:
      return state
  }
}
function aList(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}
const rootReducer = combineReducers({
  aList
})
export default rootReducer
