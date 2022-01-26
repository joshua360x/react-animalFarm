import React from 'react';
import AnimalList from '../AnimalList/AnimalList';
import './Main.css';

function Main({ animals }) {
  return (
    <div className='back'>
      {/* From my main js I need to take the values and start to use my map method to interate over data  */}
      <AnimalList animals={animals} />
    </div>
  );
}

export default Main;