import React from 'react';
import './style.css';

const ItemList = ({title, description, link}) => {
    return (
        <div className='item-list'>
            <a href={link} target="_blank">{title}</a>
            <p>{description}</p>
            <hr />
        </div>
    )
  }
  
  export default ItemList;