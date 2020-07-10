import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Task from '../components/Task';
import axios from 'axios';
import './mainContainer.css';

const MainContainer = () => {
  const [tasks, setTasks] = useState(null);
  const URL = 'https://to-do-devf-8485d.firebaseio.com/task.json';

  const getTasks = () => {
    axios.get(URL)
      .then((res) => setTasks(res.data))
      .catch((error) => alert(error));
  }

  const deleteTask = (id) => {
    axios.delete(`https://to-do-devf-8485d.firebaseio.com/task/${id}.json`)
      .then(() => getTasks())
      .catch((error) => alert(error))
  }

  const completeTask = () => {

  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <main className="background">
        <div className="container pt-4">
          {tasks
            ? Object.keys(tasks).map((id) =>
              <Task
                key={id}
                id={id}
                title={tasks[id].title}
                done={tasks[id].done}
                category={tasks[id].category}
                deleteTask={deleteTask}
              />)
            : <h1 className="text-white text-center">
                Completaste todas tus tareas 👌
              </h1>
          }
        </div>
      </main>
    </React.Fragment>
  )
}

export default MainContainer;
