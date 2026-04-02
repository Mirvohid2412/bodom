import SpecialistBottomNav from '../components/SpecialistBottomNav'
import userInfoImg from '../assets/images/user-info.png'
import userInfo2Img from '../assets/images/user-info2.png'
import menuIconImg from '../assets/images/menu-icon.png'
import menuIcon2Img from '../assets/images/menu-icon2.png'
import scroll2Img from '../assets/images/scroll2.png'
import statisticsImg from '../assets/images/statistics.png'
import './SpecialistDashboardPage.css'
import { useState } from 'react'

export default function SpecialistDashboardPage() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`spec-dash-page page-with-nav ${isDark ? 'dark-mode' : ''}`}>

      {/* New Header with Images */}
      <div className="sd-header-new">
        <img
          src={isDark ? userInfo2Img : userInfoImg}
          alt="User Info"
          className="sd-user-info-img"
        />
        <img
          src={isDark ? menuIcon2Img : menuIconImg}
          alt="Menu"
          className="sd-menu-icon-img"
          onClick={() => setIsDark(!isDark)}
        />
      </div>

      {/* Horizontal Scroll Section */}
      <div className="sd-scroll-section">
        <div className="sd-scroll-wrapper">
          <img src={scroll2Img} alt="Tasks Scroll" className="sd-scroll-img" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="sd-statistics-section">
        <img src={statisticsImg} alt="Stats" className="sd-statistics-img" />
      </div>

      <div className="sd-content-empty">
        {/* Kelajakda bu yerga boshqa kontentlar qo'shiladi */}
      </div>

      <SpecialistBottomNav />
    </div>
  )
}
