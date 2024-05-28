import  { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBox from './components/SearchBox';
import './App.css';

const App=()=>{
  const [todos,setTodos]=useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]); //Using usestate set the filters in todos 

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || []; //use to store data in a json format in a local storage 
    setTodos(storedTodos);
    setFilteredTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setFilteredTodos(todos);
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), ...newTodo }]);  // this function is used to handle functionalites of Add Todos
  };
  const handleDeleteTodo = (todoToDelete) => {
    setTodos(todos.filter(todo => todo.id !== todoToDelete.id)); // this function is used to handle functionalites of delete Todos
  };
  const handleEditTodo = (editedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === editedTodo.id ? editedTodo : todo // this function is used to handle functionalites of edits Todos
    );
    setTodos(updatedTodos);
  };

  const handleSearch = (onSearch) => {
    const filtered = todos.filter(todo =>
      todo.title.toLowerCase().includes(onSearch.toLowerCase()) ||
      todo.description.toLowerCase().includes(onSearch.toLowerCase()) //this function is used to handle functionalites of search Todos names
    );
    setFilteredTodos(filtered); 
  };

  return(
    <div className='app'>
      <h1>To-do App</h1>
      <TodoForm onSubmit={handleAddTodo}/> 
      <SearchBox onSearch={handleSearch}/>
      <TodoList 
        todos={filteredTodos}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}/>

    </div>

  );

}

export default App
