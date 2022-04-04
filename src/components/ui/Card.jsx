import './Card.scss'


function Card({content:{id,image,title,text}}) {
  return (
    <div className='card' key={id}>
        <img src={image} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default Card