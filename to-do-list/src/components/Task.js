import React from 'react';

const Task = (props) => {
  const { title, done, category, id, deleteTask } = props;
  return (
    <div className="card">
      <h5 className="card-header">{title}</h5>
      <div className="card-body">
        <h5 className="card-title">{done}</h5>
        <p className="card-text">{category}</p>
        <button className="btn btn-primary">Completar</button>
        <button className="btn btn-danger" onClick={() => deleteTask(id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default Task;
