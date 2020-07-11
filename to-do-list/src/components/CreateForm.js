import React, { useState } from 'react'

const CreateForm = (props) => {
  const { createTask } = props;
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  }

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  }

  const submitForm = () => {
    if(title !== '' && category !== '') {
      createTask(category, title);
    } else {
      alert('Los campos deben de contener información.');
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="title">Tarea</label>
          <input type="text" onChange={titleHandler} className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <input type="text" onChange={categoryHandler} className="form-control" id="category" />
        </div>
        <button onClick={() => submitForm()} className="btn btn-primary">Agregar</button>
      </div>
    </div>
  );
};

export default CreateForm;
