import React from 'react';
import { Todo } from '../model';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
interface Props{
    todo:Todo;
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;



}
const TodosItems:React.FC<Props> =({todos,setTodos,todo}:Props) => {

    const handleDone = (id:number) => {

        setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo
        ) )
    }

    const handleDelete = (id:number) => {
        setTodos(todos.filter((todo)=>todo.id !==id))
    }
   
    
    return (
        <div>
        

        <div  className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 mb-4 rounded-lg shadow-md">
        <div className="text-white mb-2 text-center"> {todo.todo}</div>
        <div className="flex justify-between">
          <button
         
            className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            <FaEdit />
          </button>
          <button
           onClick={()=>handleDelete(todo.id)}
            className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
          >
            <FaTrash />
          </button>
          <div>
          <button
               onClick={()=>handleDone(todo.id)}
            className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
          >
            Todo Check
            {
                todo.isDone &&   <MdDone/>
            }
          
          
          </button>
     
          </div>
        </div>
      </div>
          
        


        </div>
    );
};

export default TodosItems;