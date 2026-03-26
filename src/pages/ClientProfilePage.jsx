import { useNavigate } from 'react-router-dom'
import { IoChatbubbleOutline, IoNotificationsOutline, IoLocationOutline, IoMenu, IoChevronForward, IoAddOutline } from 'react-icons/io5'
import { AiOutlineEye } from 'react-icons/ai'
import { FaUserAlt, FaStar, FaHistory, FaRegEnvelope, FaRegSmile, FaRegStar, FaRegQuestionCircle } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { MdOutlinePhotoCamera } from 'react-icons/md'
import ClientBottomNav from '../components/ClientBottomNav'
import './ClientProfilePage.css'

import user from '../assets/images/user.png'

export default function ClientProfilePage() {
  const navigate = useNavigate()

  return (
    <div className="profile-page page-with-nav">
      
      {/* Top White Header Block */}
      <div className="prof-header-block">
        <div className="prof-header-top-actions">
          <div className="prof-action-icons">
            <IoChatbubbleOutline className="prof-icon-sm" />
            <div className="prof-bell-wrapper">
              <IoNotificationsOutline className="prof-icon-sm" />
              <span className="prof-bell-dot"></span>
            </div>
            <div className="prof-lang">RU</div>
            <IoMenu className="prof-menu-icon" />
          </div>
        </div>

        <div className="prof-user-info">
          <div className="prof-avatar-wrapper">
            <img src={user} alt="User" className="prof-avatar-img" />
            <div className="prof-camera-btn">
              <MdOutlinePhotoCamera />
            </div>
          </div>
          <div className="prof-details">
            <h2 className="prof-name">Руслан Лащёнов</h2>
            <p className="prof-phone">+998 90 981 23 56</p>
            <div className="prof-location">
              <IoLocationOutline /> Ташкент
            </div>
            <div className="prof-badges">
              <div className="prof-badge prof-badge-blue">★</div>
              <div className="prof-badge prof-badge-red">🏆</div>
              <div className="prof-badge prof-badge-green">🏆</div>
            </div>
          </div>
        </div>
      </div>

      <div className="prof-content">
        
        {/* Balance Card */}
        <div className="prof-balance-card">
          <div className="prof-balance-title">Общий баланс</div>
          <div className="prof-balance-row">
            <IoAddOutline className="prof-balance-plus" />
            <div className="prof-balance-amount">2 357 000 <span>UZS</span></div>
            <AiOutlineEye className="prof-balance-eye" />
          </div>
        </div>

        {/* Active Orders - Scrollable Cards */}
        <div className="prof-active-orders-section">
          <h3 className="prof-section-title">Активные заказы</h3>
          <div className="prof-quick-cards">
            
            <div className="prof-q-card prof-card-blue">
              <div className="prof-q-top">
                <span className="prof-q-title">Сантехник</span>
                <span className="prof-q-badge">9+</span>
              </div>
              <div className="prof-q-bottom">
                <span className="prof-q-status">Задача опубликована</span>
                <span className="prof-q-stats">👁 30 👤 3</span>
              </div>
            </div>

            <div className="prof-q-card prof-card-green">
              <div className="prof-q-top">
                <span className="prof-q-title">Маникюр</span>
              </div>
              <div className="prof-q-bottom">
                <span className="prof-q-status">Активная запись</span>
                <span className="prof-q-time">⏱ 18:00</span>
              </div>
            </div>

            <div className="prof-q-card prof-card-lightblue">
              <div className="prof-q-top">
                <span className="prof-q-title">Педиатр</span>
              </div>
              <div className="prof-q-bottom">
                <span className="prof-q-status">Активная запись</span>
                <span className="prof-q-time">⏱ 18:00</span>
              </div>
            </div>

          </div>
        </div>

        {/* Menu Links */}
        <div className="prof-menu-links">
          <div className="prof-menu-item">
            <FaHistory className="prof-menu-icon-left" />
            <span className="prof-menu-text">История заказов</span>
            <IoChevronForward className="prof-menu-chevron" />
          </div>
          <div className="prof-menu-item">
            <FaRegEnvelope className="prof-menu-icon-left" />
            <span className="prof-menu-text">Чаты</span>
            <IoChevronForward className="prof-menu-chevron" />
          </div>
          <div className="prof-menu-item">
            <FaRegSmile className="prof-menu-icon-left" />
            <span className="prof-menu-text">Мои отзывы</span>
            <IoChevronForward className="prof-menu-chevron" />
          </div>
          <div className="prof-menu-item">
            <FaRegStar className="prof-menu-icon-left" />
            <span className="prof-menu-text">Избранные</span>
            <IoChevronForward className="prof-menu-chevron" />
          </div>
          <div className="prof-menu-item">
            <FiSettings className="prof-menu-icon-left" />
            <span className="prof-menu-text">Настройки</span>
            <IoChevronForward className="prof-menu-chevron" />
          </div>
          <div className="prof-menu-item">
            <FaRegQuestionCircle className="prof-menu-icon-left" />
            <span className="prof-menu-text">О приложении</span>
            <IoChevronForward className="prof-menu-chevron" />
          </div>
          <div className="prof-menu-item border-none">
            <BiSupport className="prof-menu-icon-left" />
            <span className="prof-menu-text">Поддержка</span>
            <IoChevronForward className="prof-menu-chevron" />
          </div>
        </div>

        {/* Become Specialist Promo */}
        <div className="prof-specialist-promo">
          <h4>Вы специалист?</h4>
          <p>Находите клиентов и<br/>зарабатывайте<br/>вместе с Bodom!</p>
        </div>

        {/* Logout */}
        <button 
          className="prof-logout-btn"
          onClick={() => navigate('/login-client')}
        >
          Выйти
        </button>

      </div>

      <ClientBottomNav />
    </div>
  )
}
