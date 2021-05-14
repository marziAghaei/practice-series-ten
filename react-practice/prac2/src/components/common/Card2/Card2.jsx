import React from 'react';
import './Card2.css';



 function Card2({title,imageurl,body}) {
    return (
        <div className='card-container2'>
          <div className="image-container2">
            <img src={imageurl} alt='' />
          </div>
          <div className="card-title">
            <h4>{body}</h4>
          </div>
        </div>
    )
}

export default Card2;
