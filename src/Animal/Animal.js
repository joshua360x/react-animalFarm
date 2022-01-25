import React from 'react';
import './Animal.css';

function Animal({ name, type, says }) {
  return <div className='animalBox'>
    {name}
    {says}
    <img className='animalImg' src={`./animals/${type}.svg`} alt={`${name}`} />
    {/* {console.log('🚀 ~ file: Animal.js ~ line 6 ~ Animal ~ props.animals.name', props.animal.name)} */}
  </div>;
}

export default Animal;
