import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import "./todos.scss";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

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
  const [todo, setTodo] = useState("");
  const addTaskInput = useRef(null);
  console.log("Todos -> addTaskInput", addTaskInput);

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
      addTaskInput.current.focus();
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
        ref={addTaskInput}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={add}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
