
import './App.css';
import React, { useState } from 'react';

type TodoItem = {
  title: string;
  description: string;
  isDone: boolean;
  id: string;
};

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

  const handleAddItem = () => {
    if (title && description && id) {
      const newItem: TodoItem = {
        isDone: false,
        title,
        description,
        id,
      };

      setTodoList([...todoList, newItem]);

      // To clear input fields
      setTitle('');
      setDescription('');
      setId('');
    }
  };

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].isDone = checked;
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Is Done</th>
            <th>Title</th>
            <th>Description</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item, index) => (
            <tr key={index} className={item.isDone ? 'highlighted' : ''}>
              <td>
                <input
                  type="checkbox"
                  checked={item.isDone}
                  onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

