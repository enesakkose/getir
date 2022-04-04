import { useState, useEffect } from 'react'
import cardData from '../api/cards.json'
import Card from './ui/Card'
import './Cards.scss'

function Cards() {

  const [datas, setData] = useState([])

  useEffect(()=>{
    setData(cardData)
  },[])

  
  return (
    <div className='cards'>
      <div className="container">
      {datas.length && datas.map((data)=>(
        <Card key={data.id} content={data} />
      ))}
      </div>
    </div>
  )
}

export default Cards