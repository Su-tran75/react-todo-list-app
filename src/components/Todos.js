import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

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

function Todos(props) {
  console.log("Todos -> props", props);
  const [todo, setTodo] = useState("");

  const add = () => {
    if (todo === "") {
      alert("Input is empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 10000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

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
      <button className="add-btn" onClick={add}>
        Add
      </button>
      <br />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
