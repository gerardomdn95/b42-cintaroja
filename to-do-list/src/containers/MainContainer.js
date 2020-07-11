import React, { useState, useEffect } from 'react';
import Task from '../components/Task';
import axios from 'axios';
import { TaskClass } from '../utils/TaskClass';
import './mainContainer.css';

const MainContainer = () => {
  const [tasks, setTasks] = useState(null);
  const URL = 'https://AQUIVAELTUYO.firebaseio.com/task.json';

  const getTasks = () => {
    axios.get(URL)
      .then((res) => setTasks(res.data))
      .catch((error) => alert(error));
  }

  const deleteTask = (id) => {
    axios.delete(`https://AQUIVAELTUYO.firebaseio.com/task/${id}.json`)
      .then(() => getTasks())
      .catch((error) => alert(error))
  }

  const completeTask = (category, title, done, id) => {
    const currentTask = new TaskClass(category, title, done, id);
    axios.patch(URL, currentTask)
      .then(() => getTasks())
      .catch((error) => alert(error))
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <React.Fragment>
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
                completeTask={completeTask}
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
