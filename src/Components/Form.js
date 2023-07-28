import React, { useState } from 'react';
import { useUserContext } from './Logic/UserContextProvider';

export default function Form() {
  const { addTodo } = useUserContext();
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      const List = document.querySelector('#activity-list');
      const numberOfChildren = List.children.length + 1;
      addTodo(inputValue, numberOfChildren, numberOfChildren);
      setInputValue('');
    }
  };
  return (
    <form className="section input-area" onSubmit={(e) => handleSubmit(e)}>
      <span>
        <input type="text" id="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add to your list.." required />
        <box-icon name="subdirectory-left" id="enter" onDoubleClick={(e) => handleSubmit(e)} />
      </span>
    </form>

  );
}
