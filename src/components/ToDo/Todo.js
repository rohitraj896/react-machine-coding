import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleAdd = () => {
    setTodo([...todo, inputValue]);
    setInputValue("");
  };

  const removeHandle = i => {
    const newData = [...todo];
    newData.splice(i, 1);
    setTodo(newData);
  };

  return (
    <div className="text-center m-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
        autoFocus
      />
      <button onClick={handleAdd} className="ml-2">
        Add
      </button>
      <ul>
        {todo.map((item, index) => (
          <li key={item}>
            {item} &nbsp;
            {!!index && (
              <button onClick={() => removeHandle(index)}>Remove</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
