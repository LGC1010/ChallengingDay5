import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../feature/todos/todo";

const TodoListRedux = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="content_box">
      <div>
        <h1>Todo List</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>추가</button>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <span onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
              <button onClick={() => handleRemoveTodo(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoListRedux;
