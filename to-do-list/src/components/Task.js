import React from 'react';

const Task = (props) => {
  const { title, done, category } = props;
  return (
    <div className="card">
      <h5 className="card-header">{title}</h5>
      <div className="card-body">
        <h5 className="card-title">{done}</h5>
        <p className="card-text">{category}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Task;
