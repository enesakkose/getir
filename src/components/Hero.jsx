import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Hero.scss'
import ReactFlagsSelect from 'react-flags-select'
import  { useState } from 'react'




function Hero() {

  const [selected, setSelected] = useState('TR')
  
  

  const phones = {
    US: '+1',
    DE: '+56',
    TR: '+90',
    IT: '+12'


  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="hero">
      <Slider {...settings} >
          <div>
            <img src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
          </div>
          <div>
            <img  src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
          </div>
        </Slider>
        <div className="container">
            <div className="hero-banner">
              <div className="container">
                <div className="brand-highlights ">
                <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
                <h2>Dakikalar içinde kapınızda</h2>          
              </div>
              <div className="log-in">
                <h4>Giriş yap veya kayıt Ol</h4>
                <div className="form">
                <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flag-select"
                />
                <label className="input">
                  <input type="tel" placeholder="Telefon Numarası" required/>
                  
                </label>
                
                
                </div>
                <button className="btn">Telefon Numarası İle Devam Et</button> 
              </div>
                                           
              
                
              </div>      
                        
                        
                      
        </div>
        </div>
      
        
    </div>
  )
}

export default Hero


