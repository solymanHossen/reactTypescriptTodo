import React, { useState } from 'react';

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleTodoAdded:(e:React.FormEvent)=>void;

}
const InputFiled:React.FC<Props> = ({todo,setTodo,handleTodoAdded}:Props) => {
  
    const [inputValue, setInputValue] = useState('');
    return (
        <form onSubmit={handleTodoAdded}>
              <div className="flex mb-4">
          <input
            type="text"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            placeholder="Enter your todo"
            className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
            type='submit'
            
          >
            Add
          </button>
        </div>
        </form>
    );
};

export default InputFiled;