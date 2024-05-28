// TodoList.jsx
import PropTypes from 'prop-types'; // Import PropTypes
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

// Define propTypes
TodoList.propTypes = {
  todos: PropTypes.array.isRequired, // todos prop is required and must be an array
  onDelete: PropTypes.func.isRequired, // onDelete prop is required and must be a function
  onEdit: PropTypes.func.isRequired // onEdit prop is required and must be a function
};

export default TodoList;

