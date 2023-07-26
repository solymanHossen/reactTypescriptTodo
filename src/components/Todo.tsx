import React, { useEffect, useState } from 'react';
import InputFiled from '../components/InputFiled';
import { Todo } from '../model';
import TodosItems from './TodosItems';


const TodoApp = () => {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);
   

//     useEffect(() => {
//         localStorage.setItem('todoItems', JSON.stringify(todos));
//       }, [todos]);

// useEffect(() => {
//     const storedItems = localStorage.getItem('todoItems');
//     if (storedItems) {
//         setTodos(JSON.parse(storedItems));
//     }
//   }, []);



  const handleTodoAdded = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
    setTodos([...todos,{id:Date.now(),todo,isDone:false}]);

   setTodo('')
}
 
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 md:w-96">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
       <InputFiled
       todo={todo}
       setTodo={setTodo}
       handleTodoAdded={handleTodoAdded}
       />
       {
        todos.map((todo)=><div>
          <TodosItems  key={todo.id}  todo={todo} todos={todos} setTodos={setTodos}/>
        </div>)
       }
         
    
      </div>
  
    </div>
  );
};

export default TodoApp;