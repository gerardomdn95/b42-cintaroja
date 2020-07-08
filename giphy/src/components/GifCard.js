import React from 'react';

const GifCard = (props) => {
  const { img, title, website, description } = props;
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={website} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default GifCard;
