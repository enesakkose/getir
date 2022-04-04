import React from 'react'
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineGlobal } from 'react-icons/ai'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
        <div className="navbar container">
            <a  href="#" className='brand'>
              <img  src="https://upload.wikimedia.org/wikipedia/commons/3/38/Getir_wordmark.svg" />
            </a>
            <nav >
              <a href="#">
                <AiOutlineGlobal size={20} />
                Türkçe (TR)
              </a>
              <a href="#">
                <AiOutlineUser size={20} />
                Giriş Yap
              </a>
              <a href="#">
                <AiOutlineUserAdd size={20} />
                Kayıt Ol
              </a>
            </nav>
        </div>

    </div>
  )
}

export default Header