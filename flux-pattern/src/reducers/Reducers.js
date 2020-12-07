import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO } from '../actions/Actions'

function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text
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
    case DELETE_TODO:
      let indexToDelete = state.map(element => element.id).indexOf(action.id);
      state.splice(indexToDelete, 1);
      return state;
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  aList
})
export default rootReducer
