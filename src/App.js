import Todos from "./components/Todos";
import TodoItem from "./components/TodoItem";
import DisplayTodos from "./components/DisplayTodos";
import "./app.scss";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="app">
      <motion.h1
        // initial={{ y: -200 }}
        // animate={{ y: 0 }}
        // transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="title"
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        className="container"
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
