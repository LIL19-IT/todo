import { useState } from "react"
import { AddTodo } from "./AddTodo";

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'React', done: false },
    { id: 2, title: 'Vue', done: true },
    { id: 3, title: 'Angular', done: false },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      done: false,
    };

    setTodos([newTodo, ...todos]);
  }

  const doneTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }

      return todo;
    })

    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const question = window.confirm('Delete todo ???');

    if (question) {
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    }
  }

  return (
    <div className="TodoList">
      <AddTodo addTodo={addTodo} />

      {
        todos.map(todo => <div className={todo.done ? 'todo active': 'todo'} key={todo.id}>
          <input type="checkbox" defaultChecked={todo.done} onChange={() => doneTodo(todo.id)} />
          <span>{todo.title}</span>
          <span onClick={() => removeTodo(todo.id)}>&times;</span>
        </div>)
      }
    </div>
  )
}
