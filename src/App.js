import { useState, useReducer, useCallback, useMemo } from "react";
import Header from "./compoments/Header";
import AddTodo from "./compoments/AddTodo";
import Todos from "./compoments/Todos";
import TodoReducer from "./TodoReducer";

function App() {
  console.log("app rendering");

  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [],
    todo: "",
    search: "",
  });

  const onChange = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
    },
    [state.todo]
  );

  const [count, setCount] = useState(0);

  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo
        .toLocaleLowerCase("TR")
        .includes(state.search.toLocaleLowerCase("TR"))
    );
  }, [state.search, state.todos])

  return (
    <>
      <Header />
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>artır</button>
      <hr />
      <h1>Todo App</h1>
      <input
        type="text"
        value={state.search}
        placeholder="Todolarda Arama"
        onChange={searchHandle}
      />
      <hr />
      <AddTodo
        onChange={onChange}
        submitHandle={submitHandle}
        todo={state.todo}
      />
      <Todos todos={filteredTodos} />
    </>
  );
}

export default App;
