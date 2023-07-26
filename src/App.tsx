import React from 'react';
import './App.css';
import TodoApp from './components/Todo';



const App:React.FC=()=> {
  return (
    <div className="App">
    <div className='bg-gray-400'>
      <TodoApp/>
    </div>
    </div>
  );
}

export default App;
