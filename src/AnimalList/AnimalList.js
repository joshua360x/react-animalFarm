import React from 'react';
import Animal from '../Animal/Animal';
import './AnimalList.css';

function AnimalList({ animals }) {
  return <div className='listDisplay'>
    {animals.map((animal, i) => 
      <Animal key={i} {...animal} />)}
  </div>;
}

export default AnimalList;
