import React from 'react';

const SearchInput = (props) => {

  const handleChange = (e) => {
    console.log(e.target.value);
    props.getGifs(e.target.value);
  }

  return (
    <div className="input-group input-group-lg mt-3 mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Buscar GIF 👾</span>
      </div>
      <input type="text" className="form-control" onChange={handleChange} />
    </div>
  )
}

export default SearchInput;
