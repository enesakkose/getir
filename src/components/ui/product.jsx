import React from 'react'
import './product.scss'

function product({product: {id,title,image,alt,price}}) {
  return (
    <div className='product'>
        <a href="#" key={id}>
            <img src={image}/>
            <button>+</button>
            </a>
            <h4>₺{price}</h4>
            <h3>{title}</h3>
            <h5>{alt}</h5>
        
    </div>
  )
}

export default product