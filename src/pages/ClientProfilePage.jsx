import { useNavigate } from 'react-router-dom'
import ClientBottomNav from '../components/ClientBottomNav'
import profileHeaderImg from '../assets/images/profile-header.png'
import balanceImg from '../assets/images/balance.png'
import homeScrollImg from '../assets/images/home-scroll.png'
import profileBottomImg from '../assets/images/profile-bottom.png'
import profileBottomBtnImg from '../assets/images/profile-bottom-btn.png'
import profileBottomBtn2Img from '../assets/images/profile-bottom-btn2.png'
import './ClientProfilePage.css'

export default function ClientProfilePage() {
  const navigate = useNavigate()

  return (
    <div className="profile-page">
      <div className="profile-content-scroll">
        {/* Top Header Image */}
        <img src={profileHeaderImg} alt="Profile Header" className="prof-header-img" />

        {/* Balance Info Image */}
        <img src={balanceImg} alt="Balance" className="prof-balance-img" />

        {/* Active Orders Section */}
        <div className="prof-active-orders-section">
          <h3 className="prof-section-title">Активные заказы</h3>
          <div className="home-scroll-wrapper">
            <img src={homeScrollImg} alt="Active Orders" className="home-scroll-img" />
          </div>
        </div>

        {/* Menu and Promos */}
        <div className="prof-bottom-container">
          <img src={profileBottomImg} alt="Profile Menu" className="prof-menu-img" />
          
          <img 
            src={profileBottomBtnImg} 
            alt="Specialist Promo" 
            className="prof-promo-btn" 
            onClick={() => navigate('/', { state: { openSpecialistModal: true } })}
          />

          <img 
            src={profileBottomBtn2Img} 
            alt="Logout" 
            className="prof-logout-img" 
            onClick={() => navigate('/')}
          />
        </div>

        <div className="prof-footer-spacer" />
      </div>

      <ClientBottomNav />
    </div>
  )
}
