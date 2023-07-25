import React from 'react';

export default function Form() {
  return (
    <form className="section input-area">
      <span>
        <input type="text" id="input" placeholder="Add to your list.." required />
        <box-icon name="subdirectory-left" id="enter" />
      </span>
    </form>

  );
}
