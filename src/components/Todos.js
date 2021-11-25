import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

function Todos(props) {
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
      <br />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
