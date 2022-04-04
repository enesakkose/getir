import { useEffect, useState} from 'react'
import './Footer.scss'
import { Collapse } from 'react-collapse'
import { IoLogoInstagram } from 'react-icons/io'
import { MdLanguage } from 'react-icons/md'
import { useWindowWidth } from '@react-hook/window-size'
import { IoIosArrowDown} from 'react-icons/io'



function Footer() {

  const [isOpen1, setIsOpen1] = useState(true)
  const [isOpen2, setIsOpen2] = useState(true)
  const [isOpen3, setIsOpen3] = useState(true)
  const windowWidth = useWindowWidth()

  useEffect(()=>{
    if(isOpen1 && windowWidth <= 768){
      setIsOpen1(false)
    }
    if(!isOpen1 && windowWidth > 768){
      setIsOpen1(true)
    }
  }, [windowWidth])

  useEffect(()=>{
    if(isOpen2 && windowWidth <= 768){
      setIsOpen2(false)
    }
    if(!isOpen2 && windowWidth > 768){
      setIsOpen2(true)
    }
  }, [windowWidth])

  useEffect(()=>{
    if(isOpen3 && windowWidth <= 768){
      setIsOpen3(false)
    }
    if(!isOpen3 && windowWidth > 768){
      setIsOpen3(true)
    }
  }, [windowWidth])

  function onChange2(){
    if(windowWidth <= 768){
      setIsOpen2((prevIsOpen)=> !prevIsOpen)
    }
    
  }

  function onChange1(){
    if(windowWidth <= 768){
      setIsOpen1((prevIsOpen)=> !prevIsOpen)
    }
    
  }

  function onChange3(){
    if(windowWidth <= 768){
      setIsOpen3((prevIsOpen)=> !prevIsOpen)
    }
    
  }

  return (
    <div className="footer">

    
    <div className='container'>
      <nav className="app-section">
        <h3>Getir'i indirin</h3>
        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
        </nav>
        
        <div className="footer-section">
          
          <h3 onClick={onChange1}>Getir'i keşfedin
            <button>
              <span styles={`background-color: yellow; ${isOpen1 ? 'transform: rotate(-360deg)' : ''}`}>
                <IoIosArrowDown size={15}/>
              </span>
              
            </button>
          </h3>
          <Collapse isOpened={isOpen1}>
          <nav>
            <a href="#">Hakkımızda</a>
            <a href="#">Kariyer</a>
            <a href="#">Teknoloji Kariyerleri</a>
            <a href="#">İletişim</a>
            <a href="#">COVID-19 Duyuru</a>
            <a href="#">Sosyal Sorumluluk Projeleri</a> 
          </nav>
          </Collapse>
        
        </div>
        <div className="footer-section">
          <h3 onClick={onChange3}>Yardıma mı ihtiyacınız var?
          <button><IoIosArrowDown size={15}/></button>
          </h3>
          <Collapse isOpened={isOpen3}>
          <nav>
            <a href="#">Hakkımızda</a>
            <a href="#">Kariyer</a>
            <a href="#">Teknoloji Kariyerleri</a>
            <a href="#">İletişim</a>
            <a href="#">COVID-19 Duyuru</a>
          </nav>
          </Collapse>
          
          

        </div>
        
        <div className="footer-section">
          
          <h3 onClick={onChange2}>İş ortağımız olun
          <button><IoIosArrowDown size={15}/></button>
          </h3>
            <Collapse isOpened={isOpen2}>
            <nav>
             <a href="#">Hakkımızda</a>
            <a href="#">Kariyer</a>
            <a href="#">Teknoloji Kariyerleri</a>
            <a href="#">İletişim</a>  
            </nav>
            </Collapse>
            
          
          
        </div>
        
          <img className='ebis' src="	https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"  />
        
        
      
    </div>
    <div className="line container">
    <div className='ff'>
      © 2022 Getir
      <a href="#">Bilgi Toplumu Hizmetleri</a>
      
        
      </div>
      <div className="bottom-right">
        <div className="social-footer">
          <a href="#">
          <IoLogoInstagram size={24}  />
          </a>
          <a href="#">
          <IoLogoInstagram size={24} />
          </a>
          <a href="#">
          <IoLogoInstagram size={24} />
          </a>
        </div>
        
          
          <div className='change' href="#">
            <MdLanguage size={18} />
            Türkçe (TR)
          </div>
        
    </div>
    </div>
    
    </div>
  )
}

export default Footer