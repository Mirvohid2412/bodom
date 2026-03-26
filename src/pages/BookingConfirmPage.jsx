import { useNavigate } from 'react-router-dom'
import { IoLocationOutline, IoCalendarClearOutline } from 'react-icons/io5'
import { FaStar, FaRegCommentDots, FaRegCheckCircle } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import ClientBottomNav from '../components/ClientBottomNav'
import './BookingConfirmPage.css'

export default function BookingConfirmPage() {
  const navigate = useNavigate()

  return (
    <div className="booking-page page-with-nav">
      
      {/* Header title */}
      <div className="booking-header">
        <div className="bk-header-icon-box">
          <IoCalendarClearOutline className="bk-header-icon" />
        </div>
        <h2 className="bk-header-title">Онлайн запись к<br/>специалисту</h2>
      </div>

      {/* Main Content Card */}
      <div className="bk-main-card">
        
        {/* Specialist Profile Sub-Card */}
        <div className="bk-specialist-card">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Doctor" 
            className="bk-specialist-img" 
          />
          <div className="bk-specialist-info">
            <BsThreeDots className="bk-dots-icon" />
            <div className="bk-sp-name-row">
              <span className="bk-sp-name">Ашуров Шухрат Нигматович</span>
              <MdVerified className="bk-verified-icon" />
            </div>
            <div className="bk-sp-profession">Педиатр и хирург</div>
            <div className="bk-sp-stats">
              <div className="bk-stat"><FaStar className="bk-star" /> 5,0</div>
              <div className="bk-stat"><FaRegCommentDots className="bk-comment" style={{transform: 'rotateY(180deg)'}} /> 135</div>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="bk-date-title">22 Сентября 2026</div>

        {/* Time Button */}
        <div className="bk-time-btn">18:00</div>

        {/* Address Box */}
        <div className="bk-address-box">
          <IoLocationOutline className="bk-address-icon" />
          <span className="bk-address-text"><strong>Адрес:</strong> Юнусабад 10, 27 квартал, дом 34</span>
        </div>

        {/* Status Box */}
        <div className="bk-status-box">
          <FaRegCheckCircle className="bk-status-icon" />
          <div className="bk-status-text">
            <h4>Онлайн запись</h4>
            <p>Подтверждена</p>
          </div>
        </div>

        {/* Action Button */}
        <button className="bk-submit-btn" onClick={() => navigate('/home')}>
          Записаться
        </button>

      </div>

      {/* Footer Disclaimer */}
      <div className="bk-footer-text">
        <p>После записи стоимость услуги взимается с Вас,<br/>а после завершения заказа деньги поступят исполнителю</p>
        <p>В случае отмены заказа или его пропуска деньги<br/>вернутся на ваш счёт</p>
      </div>

      <ClientBottomNav />
    </div>
  )
}
