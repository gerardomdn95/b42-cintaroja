import React from 'react';
import CreateForm from '../components/CreateForm';
import axios from 'axios';
import { TaskClass } from '../utils/TaskClass';
import { useHistory } from 'react-router-dom';
import './mainContainer.css';

const CreateContainer = () => {
  const URL = 'https://to-do-devf-8485d.firebaseio.com/task.json';
  const history = useHistory();

  const createTask = (category, title) => {
    const newTask = new TaskClass(category, title, false, 'a');
    axios.post(URL, newTask.a)
      .then(() => history.push('/'))
      .catch((error) => alert(error))
  }

  return (
    <React.Fragment>
      <main className="background">
        <div className="container pt-4">
          <CreateForm createTask={createTask} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default CreateContainer;
