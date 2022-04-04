import React from 'react'
import './MobileApp.scss'

function Mobileapp() {
  return (
    <div className='appBanner'>
      <div className="container">
        <section className='style-appBanner'>
          <div className="left-style">
            <div className="text">
              <h2>Getiri indirin!</h2>
              <p>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
            </div>
            
          
          <div className="store-logo">
            <ul>
              <li>
                <a href="#">
                  <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                </a>
              </li>
            
            <li>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="	https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
              </a>
            </li>
            </ul>
          </div>
          <div className="right-style">
            <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
          </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Mobileapp