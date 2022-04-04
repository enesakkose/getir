import './category.scss'

function category({category: {id, title, image}}) {
  return (
      <div className="category">
        <a href="#" key={id}>
        <img src={image} alt="" />
        <span>{title}</span>
        </a>  
      </div>
    
  )
}

export default category