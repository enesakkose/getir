import { useEffect, useState } from 'react'
import './Categories.scss'
import ctData from '../api/categories.json'
import Category from './ui/category'

function Categories() {

  const [categories, setCategories] = useState([])
  
  useEffect(()=>{
    setTimeout(()=> setCategories(ctData),1000)
    
  }, [])
  



  return (
    <div className='categories'>
      <div className="container">
        <h3>Kategoriler</h3>
        <div className="items">
          {!categories.length && 'Yükleniyor...'}
          {categories && categories.map((category, index)=> <Category key={index} category={category} />)}
          
        </div>
      </div>
    </div>
  )
}

export default Categories