import { useNavigate } from 'react-router-dom'
import { IoMenu, IoLocationOutline } from 'react-icons/io5'
import { MdOutlinePhotoCamera, MdVerified } from 'react-icons/md'
import { FaCheck, FaShieldAlt } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi'
import SpecialistBottomNav from '../components/SpecialistBottomNav'
import './SpecialistProfilePage.css'

export default function SpecialistProfilePage() {
  const navigate = useNavigate()

  return (
    <div className="sp-profile-page page-with-nav">
      
      {/* Header Info */}
      <div className="sp-header">
        <IoMenu className="sp-menu-icon" />
        
        <div className="sp-user-identity">
          <div className="sp-avatar-wrapper">
            <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="User" />
            <div className="sp-camera-btn">
              <MdOutlinePhotoCamera />
            </div>
          </div>
          <div className="sp-details">
            <h2 className="sp-name">Руслан Лащёнов <MdVerified className="sp-verified" /></h2>
            <p className="sp-phone">+998 90 981 23 56</p>
            <div className="sp-location">
              <IoLocationOutline /> Ташкент
            </div>
            <div className="sp-badges">
              <div className="sp-badge blue-b">★</div>
              <div className="sp-badge red-b">🏆</div>
              <div className="sp-badge green-b">🏆</div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Badges Slider */}
      <div className="sp-h-badges">
        <div className="sp-h-badge">
          <div className="sp-hb-icon green-icon"><FaShieldAlt /></div>
          <span>Паспорт подтверждён</span>
        </div>
        <div className="sp-h-badge">
          <div className="sp-hb-icon red-icon"><FaShieldAlt /></div>
          <span>Сертификаты подтверждены</span>
        </div>
        <div className="sp-h-badge rating-badge">
          <div className="sp-hb-val">★ 4,8</div>
          <span>Рейтинг</span>
        </div>
        <div className="sp-h-badge bg-green">
          <div className="sp-hb-icon white-icon"><FaCheck /></div>
          <span>Рекомендуют</span>
        </div>
        <div className="sp-h-badge">
          <div className="sp-hb-icon lightgreen-icon"><FaShieldAlt /></div>
          <span>Даёт гарантию качества</span>
        </div>
         <div className="sp-h-badge">
          <div className="sp-hb-icon blue-icon"><HiOutlineUserGroup /></div>
          <span>Работает в команде</span>
        </div>
      </div>

      <div className="sp-divider"></div>

      {/* About Section */}
      <div className="sp-section">
        <h3 className="sp-sec-title">О себе</h3>
        <p className="sp-sec-text">Графический дизайнер, создаю логотипы, баннеры, фирменный стиль и визуал для бизнеса.</p>
        <button className="sp-red-btn">Написать специалисту</button>
      </div>

      <div className="sp-divider"></div>

      {/* Discount Section */}
      <div className="sp-section sp-discount-row">
        <div className="sp-discount-info">
          <h3 className="sp-sec-title">Имеется скидка</h3>
          <p className="sp-sec-text">При заказы более 3х услуг, есть скидка, обсуждается индивидуально.</p>
        </div>
        <div className="sp-discount-val">25%</div>
      </div>

      <div className="sp-divider"></div>

      {/* Services Slider */}
      <div className="sp-section sp-services-sec">
        <h3 className="sp-sec-title px-20">Услуги</h3>
        <div className="sp-services-slider">
          <div className="sp-srv-card srv-red">
            <span>Разработка визитки</span>
            <div className="sp-srv-price">◎ 500 000 UZS</div>
          </div>
          <div className="sp-srv-card srv-blue">
            <span>Разработка логотипа</span>
            <div className="sp-srv-price">◎ 2 000 000 UZS</div>
          </div>
          <div className="sp-srv-card srv-green">
            <span>Разработка брендбука</span>
            <div className="sp-srv-price">◎ 10 000 000 UZS</div>
          </div>
          <div className="sp-srv-card srv-grey">
            <span>Дизайн поста</span>
            <div className="sp-srv-price">◎ 800 000 UZS</div>
          </div>
        </div>
      </div>

      <div className="sp-divider"></div>

      {/* Portfolio Grid */}
      <div className="sp-section px-20">
        <div className="sp-sec-header">
          <h3 className="sp-sec-title">Портфолио</h3>
          <span className="sp-sec-more">ещё...</span>
        </div>
        <div className="sp-portfolio-grid">
          <img src="https://picsum.photos/300/400?random=1" alt="P1" />
          <img src="https://picsum.photos/300/400?random=2" alt="P2" />
          <img src="https://picsum.photos/300/400?random=3" alt="P3" />
        </div>
      </div>

      <SpecialistBottomNav />
    </div>
  )
}
