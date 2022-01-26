import React from 'react';
import './Animal.css';

function Animal({ name, type, says, left, top }) {
  return <div className='animalBox' style={{ left: left, top: top }}>
    {name}
    {says}
    <img className='animalImg' src={`./animals/${type}.svg`} alt={`${name}`} />
    {/* {console.log('🚀 ~ file: Animal.js ~ line 6 ~ Animal ~ props.animals.name', props.animal.name)} */}
  </div>;
}

export default Animal;
