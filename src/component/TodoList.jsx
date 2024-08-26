import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../feature/todos/todoSlice";

const TodoList = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);

  console.log(todos);
  const dispatch = useDispatch();

  const AddTodo = () => {
    dispatch(addTodo(input));
  };
  const RemoveTodo = () => {
    dispatch(removeTodo(input));
  };
  const ToggleTodo = () => {
    dispatch(toggleTodo(input));
  };

  return (
    <div className="content_box">
        <div>
            <h1>Todo List</h1>
            <input
                value={input}
                type="text"
                onChange={(e) => setInput(e.target.value)}
                placeholder="추가 할 일을 적어 주세요"
            />
            <button onClick={AddTodo}>추가하기</button>
            <ul>
                {todos.map((todo) => (
                <li key={todo.id}>
                    <span onClick={() => ToggleTodo(todo.id)}>{todo.text}</span>
                    <button onClick={() => RemoveTodo(todo.id)}>지우기</button>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default TodoList;
