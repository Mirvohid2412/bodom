import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import './SplashPage.css'
import bgImage from '../assets/images/splash-bg.png'
import btn1Img from '../assets/images/splash-btn1.png'
import btn2Img from '../assets/images/splash-btn2.png'
import loginBg1Image from '../assets/images/login-bg1.png'
import loginBg2Image from '../assets/images/login-bg2.png'
import loginBg3Image from '../assets/images/login-bg3.png'
import loginBtn1Img from '../assets/images/login-btn1.png'
import loginBtn2Img from '../assets/images/login-btn2.png'

export default function SplashPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showStep1, setShowStep1] = useState(false)
  const [showStep2, setShowStep2] = useState(false)
  const [loginType, setLoginType] = useState('client')

  const openModal = (type) => {
    setLoginType(type)
    setShowStep1(true)
  }

  // Effect to handle navigation from Profile to Splash with modal trigger
  useEffect(() => {
    if (location.state?.openSpecialistModal) {
      openModal('specialist')
    }
  }, [location.state])

  const handleStep1Submit = () => {
    setShowStep1(false)
    // Birinchisi yopilishni boshlaganda (150ms o'tib) ikkinchisini ochamiz
    setTimeout(() => {
      setShowStep2(true)
    }, 150)
  }

  const handleStep2Submit = () => {
    // 2-bosqichdan keyin sahifaga o'tish
    navigate(loginType === 'client' ? '/home' : '/specialist-dashboard')
  }

  return (
    <>
      <div className="splash-outer">
        <div className="splash-inner">
          {/* Orqa fon rasmi */}
          <img src={bgImage} alt="Splash Background" className="splash-bg" />

          {/* Rasmni ustiga minadigan tugmalar */}
          <div className="splash-btn-group">
            <img
              src={btn1Img}
              alt="Client Login"
              className="splash-btn"
              onClick={() => openModal('client')}
            />
            <img
              src={btn2Img}
              alt="Specialist Login"
              className="splash-btn"
              onClick={() => openModal('specialist')}
            />
          </div>
        </div>
      </div>

      {/* --- MODAL 1: Telefon raqami --- */}
      <div className={`login-modal ${loginType === 'specialist' ? 'specialist-theme' : ''} ${showStep1 ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div 
          className="login-modal-bg" 
          style={{ 
            backgroundImage: `url(${loginType === 'client' ? loginBg1Image : loginBg3Image})`,
            transform: 'scale(1.1)'
          }}
        ></div>
        
        <div className="login-close-btn" onClick={() => setShowStep1(false)}>
          <IoClose />
        </div>

        <div className="login-form-area step-1-form">
          <div className="login-input-wrapper">
            <span>+ 998</span>
            <input type="tel" placeholder=" " />
          </div>

          {loginType === 'specialist' ? (
            <img 
              src={loginBtn2Img} 
              alt="Login Button" 
              className="login-submit-img" 
              onClick={() => navigate('/specialist-dashboard')} 
            />
          ) : (
            <img 
              src={loginBtn1Img} 
              alt="Login Button" 
              className="login-submit-img" 
              onClick={handleStep1Submit} 
            />
          )}

          <label className="login-checkbox-area">
            <input type="checkbox" className="login-custom-checkbox" defaultChecked />
            <div className="login-terms-text">
              Я подтверждаю что я прочитал и согласен с <span>Договором оферты и Политикой конфиденциальности</span>
            </div>
          </label>
        </div>
      </div>

      {/* --- MODAL 2: Ma'lumotlar --- */}
      <div className={`login-modal ${loginType === 'specialist' ? 'specialist-theme' : ''} ${showStep2 ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div 
          className="login-modal-bg" 
          style={{ 
            backgroundImage: `url(${loginBg2Image})`,
            transform: 'scale(1.0)'
          }}
        ></div>
        
        <div className="login-close-btn" onClick={() => setShowStep2(false)}>
          <IoClose />
        </div>

        <div className="login-form-area step-2-form">
          <div className="login-input-wrapper" style={{ marginTop: '0' }}>
            <input type="text" placeholder="ФИО" className="login-text-input" />
          </div>

          <div className="login-input-wrapper">
            <div className="login-select-wrapper">
              <input type="text" placeholder="Адрес" readOnly className="login-text-input" />
              <div className="login-select-arrow"></div>
            </div>
          </div>

          <img 
            src={loginBtn1Img} 
            alt="Login Button" 
            className="login-submit-img" 
            onClick={handleStep2Submit} 
            style={{ marginTop: '20px' }}
          />
        </div>
      </div>
    </>
  )
}
