/* eslint-disable no-plusplus */
// actions.js

import {
  ADD_TODO, CLEARALL, EDIT_TODO, INIT_TODO, REMOVE_TODO, UPDATE_TODO,
} from './Actiontypes';

// let nextTodoId = 1; // Initialize a variable to keep track of the next todo ID

export const addTodo = (description, index, ID) => ({
  type: ADD_TODO,
  payload: {
    id: ID, // Increment the nextTodoId and use it as the new todo ID
    description,
    completed: false,
    index,
  },
});

export const removeTodo = (todoId, todoIndex) => ({
  type: REMOVE_TODO,
  payload: { id: todoId, index: todoIndex },
});

export const loadTodo = (parsedLS) => ({
  type: INIT_TODO,
  payload: parsedLS,
});

export const updateTodo = (todoID) => ({
  type: UPDATE_TODO,
  payload: { id: todoID },
});

export const editTodo = (todoId, value) => ({
  type: EDIT_TODO,
  payload: {
    id: todoId,
    value,
  },
});

export const clearAll = () => ({
  type: CLEARALL,
});
