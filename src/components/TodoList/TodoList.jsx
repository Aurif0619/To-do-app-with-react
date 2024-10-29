import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState();
  const [todo, setTodo] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    setTodo((prev) => [...prev, inputValue]);

    setInputValue("");
  };

  const deleteHandler = (task) => {
  const removeTask = todo.filter((list) => list !== task);
  setTodo(removeTask);
  }
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div>
        <form onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Enter your task"
            className="px-4 py-2 shadow-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn bg-success px-4 py-2 text-white ms-1" type="submit">Add</button>
        </form>
        <div className="mt-1">
          {todo.map((task) => {
            return (
              <div className="d-flex justify-content-between my-2">
                <h4>{task}</h4>
                <button className="btn bg-danger text-white" onClick={() => deleteHandler(task)
                }>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;