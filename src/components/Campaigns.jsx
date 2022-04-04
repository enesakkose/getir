import { useState , useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banners from '../api/banners.json'
import './Campaigns.scss'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useWindowWidth } from '@react-hook/window-size'

function NextButton ({ onClick, className }) {
	return (
		<button  className='right' onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className='left' onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}



function Campaigns() {

  const [banners, setBanners] = useState([])

  const windowWidth = useWindowWidth()

  useEffect(()=>{
    setBanners(Banners)
  },[])
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
            slidesToShow: 3,
            arrows: false,
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            arrows: false,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            arrows: false,
        }
    }
    ]
    
    
  };

  return (
    <div className=" banner container">
      <h3>Kampanyalar</h3>
      {windowWidth >= 0 && <Slider {...settings}>
      {banners.length && banners.map((banner) =>(
        <div key={banner.id}>
          <img src={banner.image}  />   
        </div>
      ))}
      </Slider>}
    </div>
  )
}

export default Campaigns