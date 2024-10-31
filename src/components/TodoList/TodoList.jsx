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
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} className="bg-img">
      <div style={{ width: "400px", padding: "20px", backgroundColor: "#DE3163", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }} >Todo List</h2>
        <form onSubmit={formHandler}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <input
              type="text" placeholder="Enter your task" style={{
                padding: "10px", width: "80%", marginRight: "10px", borderRadius: "5px", border: "#caca",
                outline: "none",
              }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              style={{ padding: "10px 20px", backgroundColor: "#2ecc71", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Add
            </button>
          </div>
        </form>
        <div>
          {todo.map((task, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderBottom: "1px solid #ccc" }}>
              <h4>{task}</h4>
              <button
                onClick={() => deleteHandler(task)}
                style={{ padding: "5px 10px", backgroundColor: "#e74c3c", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;