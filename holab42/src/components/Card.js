import React from 'react';

const Card = (props) => {
  console.log(props.title);
  console.log(props.score);
  console.log(props);
  // JSX
  return (
    <div>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <h4>Valoración: {props.score} estrellas</h4>
      <p>Dirección: {props.address}</p>
      { props.superhost ? <small>Superhost</small> : null }
    </div>
  )
}

export default Card;
