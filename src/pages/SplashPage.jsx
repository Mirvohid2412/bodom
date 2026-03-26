import { useNavigate } from 'react-router-dom'
import './SplashPage.css'
import heroImg from '../assets/images/splash.png'
import logoImg from '../assets/icons/logo.svg'

export default function SplashPage() {
  const navigate = useNavigate()

  return (
    <div className="splash-page page-full">
      <div className="splash-content">
        
        {/* Logo Section */}
        <div className="splash-logo-container">
          <img src={logoImg} alt="Bodom Logo" className="splash-logo-img" />
        </div>

        {/* Title */}
        <h1 className="splash-main-title">
          Быстрый поиск<br />специалистов
        </h1>

        {/* Hero Image */}
        <div className="splash-hero">
          <img 
            src={heroImg} 
            alt="Specialists" 
            className="splash-hero-img"
          />
          <div className="splash-hero-fade"></div>
        </div>

        {/* CTA Buttons */}
        <div className="splash-buttons">
          <button className="btn splash-btn-red" onClick={() => navigate('/login-client')}>
            Для поиска услуги
          </button>
          <button className="btn splash-btn-green" onClick={() => navigate('/login-specialist')}>
            Для специалистов
          </button>
        </div>

        {/* Stats */}
        <div className="splash-stats">
          <h2>70 000 специалистов</h2>
          <p>по 300 видам услуг</p>
        </div>

        {/* Footer */}
        <p className="splash-footer">
          Права и товарный знак принадлежат компании АО "Bodom Technology"
        </p>

      </div>
    </div>
  )
}
