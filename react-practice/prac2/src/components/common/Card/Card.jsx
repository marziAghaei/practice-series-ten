import React from 'react';
import './Card.css';


 function Card({title,imageurl,body}) {
    return (
        <div className='card-container'>
          <div className="image-container">
            <img src={imageurl} alt='' />
          </div>
          <div className="card-title">
            <h3>{body}</h3>
          </div>
        </div>
    )
}

export default Card;
