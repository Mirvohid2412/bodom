import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoCloseOutline, IoChevronDown } from 'react-icons/io5'
import logoImg from '../assets/icons/logo2.svg'
import './LoginPage.css'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [fio, setFio] = useState('')
  const [address, setAddress] = useState('')
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="login-page login-red page-full">
      <button className="login-close" onClick={() => navigate(-1)}>
        <IoCloseOutline />
      </button>

      <div className="login-content">
        <div className="login-logo-wrapper">
          <img src={logoImg} alt="Bodom Logo" className="login-logo-img" />
        </div>

        <h1 className="login-title">Введите свои данные</h1>

        <div className="login-form">
          <input
            type="text"
            className="register-input"
            value={fio}
            onChange={(e) => setFio(e.target.value)}
            placeholder="ФИО"
          />

          <div className="register-select-wrapper">
            <select
              className="register-select"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            >
              <option value="" disabled hidden>Адрес</option>
              <option value="tashkent">Ташкент</option>
              <option value="samarkand">Самарканд</option>
              <option value="bukhara">Бухара</option>
              <option value="fergana">Фергана</option>
              <option value="namangan">Наманган</option>
              <option value="andijan">Андижан</option>
              <option value="navoi">Навои</option>
              <option value="kashkadarya">Кашкадарья</option>
              <option value="surkhandarya">Сурхандарья</option>
              <option value="syrdarya">Сырдарья</option>
              <option value="khoresm">Хорезм</option>
              <option value="karakalpakstan">Республика Каракалпакстан</option>
            </select>
            <IoChevronDown className="register-select-icon" />
          </div>

          <button 
            className="login-submit"
            onClick={() => {
              if (agreed && fio && address) {
                navigate('/home')
              }
            }}
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
