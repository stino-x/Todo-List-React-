import React, { useState } from 'react';
import { useUserContext } from './Logic/UserContextProvider';

export default function Activitylist() {
  const {
    state, updateTodo, EditTodo, removeTodo,
  } = useUserContext();

  const [editingItemId, setEditingItemId] = useState(null);

  const Checkboxchange = (todoID) => {
    updateTodo(todoID);
  };
  const EditTask = (todoid, value) => {
    EditTodo(todoid, value);
  };
  const handleEditClick = (todo) => {
    setEditingItemId(todo.index);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      setEditingItemId(null);
      // EditTask(todoid, value);
    }
  };

  const deleteTask = (todoId, todoIndex) => {
    removeTodo(todoId, todoIndex);
  };
  return (
    <ul id="activity-list">
      {state.map((todo) => (
        <li key={todo.index} className={`section ${editingItemId === todo.index ? 'edit' : 'listitem'}`} id={todo.index}>
          {editingItemId === todo.index ? (
          // Render the edit form when editingItemId matches the item's index
          // console.log(todo.id),
          // console.log(todo.index),
            <span className="activity">
              <input
                type="text"
                className="input-edit"
                value={todo.description}
                onChange={(e) => EditTask(todo.id, e.target.value)}
                onKeyDown={(e) => handleInputKeyDown(e)}
              />
              <box-icon name="trash-alt" onClick={() => { deleteTask(todo.id, todo.index); }} type="solid" className="trash" />
            </span>
          ) : (
          // Render the regular list item when not in edit mode
            <span className="activity td">
              <input
                type="checkbox"
                className="check-box"
                name=""
                checked={todo.completed}
                onChange={() => Checkboxchange(todo.id)}
              />
              <span className={`text ${todo.completed ? 'completed' : ''}`}>{todo.description}</span>
              <i className="fa-solid fa-ellipsis-vertical" onDoubleClick={() => handleEditClick(todo)} />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
