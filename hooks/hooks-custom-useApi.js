import { useState, useEffect } from "react";

function useApi(endpoint) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(endpoint);
    const data = await response.json();
    setValue(data);
  }

  return value;
}

function App() {
  const todos = useApi("https://jsonplaceholder.typicode.com/todos/");

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
