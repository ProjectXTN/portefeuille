import React from 'react';
import { Image } from './style';

const TextSkills = ({id, src, onClick , variant='primary'}) => {


  return (
    <div>
      <a><Image variant={variant} id={id} onClick={onClick}  src={src} /></a>
    </div>
  )
}


export { TextSkills };