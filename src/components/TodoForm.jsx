// TodoForm.jsx
import  { useState } from 'react'; //Import usestate hooks

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState(''); //set the state of title 
  const [description, setDescription] = useState(''); //set the state of description

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return; // The trim() method of String values removes whitespace from both ends
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}   //Input field used to enter a title 
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)} //input field used to enter a description about the title 
          required
        ></textarea>
      </div>
      <button type="submit">Add Task</button>  
    </form>
  );
};

export default TodoForm;
