import React, { useState } from "react";

export default function Todos(props) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        className="todoInput"
        onChange={handleChange}
        value={todo}
      />
      <button className="add-btn">Add</button>
      <br/>
    </div>
  );
}
