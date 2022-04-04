import { useEffect, useState }from 'react'
import Products from '../api/products.json'
import Product from './ui/product'
import './Favorites.scss'
function Favorites() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    setProducts(Products)
  },[])

  return (
    <div className='favorites'>
      <div className="container">
        <h3>Favoriler</h3>
        <div className="products">
          {products.length && products.map((product,index)=>(
          <Product key={index}   product={product}/>
        ))}
        </div>
        
      </div>
    </div>
  )
}

export default Favorites