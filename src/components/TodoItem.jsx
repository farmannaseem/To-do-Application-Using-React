// TodoItem.jsx

import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false); // State to track whether the item is being edited
  const [editedTitle, setEditedTitle] = useState(todo.title); // State to store the edited title
  const [editedDescription, setEditedDescription] = useState(todo.description); // State to store the edited description

  const handleEdit = () => {
    setIsEditing(true); // Functions is used to handle the edit 
  };

  const handleSave = () => {
    const editedTodo = { ...todo, title: editedTitle, description: editedDescription }; // this function is used to handle the save of an edited todos
    onEdit(editedTodo);
    setIsEditing(false);
  };

  const handleCancel = () => { // this function is used to cancel the edit the current todo
    setIsEditing(false);
    setEditedTitle(todo.title);
    setEditedDescription(todo.description);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={() => onDelete(todo)}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;

