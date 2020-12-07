export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'

let nextTodoId = 0;

export function addAction(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
}

export function deleteAction(id) {
  return {
    type: DELETE_TODO,
    id: id
  };
}

export function updateAction(id, text) {
  return {
    type: UPDATE_TODO,
    id: id,
    text
  };
}
