import Header from '../header/Header';
import Form from '../form/form';
import TaskInfo from '../taskInfo/taskInfo';
import TaskListEmpty from '../taskListEmpty/taskListEmpty';
import TaskList from '../taskList/taskList'
import { useState } from 'react';

import './app.scss';

function App() {
    const [tasks, setTask] = useState([]);
    const completedTasks = tasks.filter(item => item.completed).length;
  
    const changeTask = (event, id) => {
        const updatedText = tasks.map((task) =>{
        if (task.id === id) {
            return { ...task, text: event.target.value };
            }
            return task;
        });
        setTask(updatedText);
    };

    const addTask = (text) => {
        
        const newTask = { id: Date.now(), text: text, completed: false };
        setTask([...tasks, newTask]);
        
        };

    const deleteTask = (id) => {
        const updatedtask = tasks.filter((task) => task.id !== id);
        setTask(updatedtask);
        };

    const toggleTask = (id) => {
        const updatedtask = tasks.map((task) => {
            if (task.id === id) {
            return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTask(updatedtask);
        };


  return (
        <div className='app'>
            <Header />
            
            <div className="components">
            <Form addTask={addTask}/>
                <TaskInfo  tasks={tasks.length} completedTasks={completedTasks}/>
                {tasks.length === 0 ? (<TaskListEmpty />) : 
                (<TaskList
                    tasks={tasks} 
                    changeTask={changeTask} 
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}/>
                )}
            </div>
        </div>
        
   
  );
}

export default App;
