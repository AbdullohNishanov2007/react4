// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const handleClic = () => {
//     console.log('Кнопка нажата');
//   }


//   return (
//     <div>
//       <button onClic={handleClic}>Clic me</button>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react'

// const TodoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleAddTask = () => {
//     if (newTask){
//       setTasks([...tasks, newTask])
//       setNewTask("")
//     }
//   }

//   const handleInputChancge = (event) => {
//     setNewTask(event.target.value)
//   } 


//   return (
//     <div>
//       <h1>To Do List</h1>
//       <ul>
//         {
//           tasks.map((task, index) => (
//             <li key={index}>{task}</li>
//           ))
//         }
//       </ul>
//       <input type="text" value={newTask} onChange={handleInputChancge}/>
//       <button onClick={handleAddTask}>Add</button>
//     </div>
//   )
// }


// function App (){
//   return <TodoList />
// }

// export default App


// без кнопки удаления
// import React, { useState } from 'react';

// const TodoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleAddTask = () => {
//     if (newTask) {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };

//   const handleInputChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   return (
//     <div>
//       <h1>To Do List</h1>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//       <input type="text" value={newTask} onChange={handleInputChange} />
//       <button onClick={handleAddTask}>Add</button>
//     </div>
//   );
// };

// function App() {
//   return <TodoList />;
// }

// export default App;



// с кнопкой удаления
import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <h1>To Do List</h1>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className='button2' onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
      <input title='text' type="text" value={newTask} onChange={handleInputChange} />
      <button className='button' onClick={handleAddTask}>Add</button>
    </div>
  );
};

function App() {
  return <TodoList />;
}

export default App;
