import React from 'react';
import Navbar from '../components/Navbar';
import Task from '../components/Task';

const MainContainer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <Task title="Demo" done="false" category="demo" />
      </div>
    </React.Fragment>
  )
}

export default MainContainer;
