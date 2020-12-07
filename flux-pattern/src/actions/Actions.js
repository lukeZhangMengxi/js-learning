export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

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
