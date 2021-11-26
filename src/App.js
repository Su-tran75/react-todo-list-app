import Todos from "./components/Todos";
import TodoItem from "./components/TodoItem";
import DisplayTodos from "./components/DisplayTodos";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      <div className="container">
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
