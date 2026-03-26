import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoCloseOutline } from 'react-icons/io5'
import logoImg from '../assets/icons/logo2.svg'
import './LoginPage.css'

export default function LoginClientPage() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('+ 998 ')
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="login-page login-red page-full">
      <button className="login-close" onClick={() => navigate('/')}>
        <IoCloseOutline />
      </button>

      <div className="login-content">
        <div className="login-logo-wrapper">
          <img src={logoImg} alt="Bodom" className="login-logo-img" />
        </div>

        <h1 className="login-title">Вход для поиска услуги</h1>

        <div className="login-form">
          <input
            type="tel"
            className="login-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+ 998"
          />

          <button 
            className="login-submit"
            onClick={() => navigate('/register')}
          >
            Вход
          </button>
        </div>

        <label className="login-checkbox-wrapper">
          <div className={`custom-checkbox ${agreed ? 'checked' : ''}`}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
          </div>
          <span className="login-checkbox-text">
            Я подтверждаю что я прочитал и согласен<br />
            с <a href="#">Договором оферты</a> и <a href="#">Политикой<br />конфеденциальности</a>
          </span>
        </label>
      </div>

      <p className="login-footer">
        Права и товарный знак принадлежат компании АО "Bodom Technology"
      </p>
    </div>
  )
}
