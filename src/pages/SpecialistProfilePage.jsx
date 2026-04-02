import SpecialistBottomNav from '../components/SpecialistBottomNav'
import userInfo3Img from '../assets/images/user-info3.png'
import scroll3Img from '../assets/images/scroll3.png'
import scroll4Img from '../assets/images/scroll4.png'
import profileBtnImg from '../assets/images/profile-btn.png'
import portfolioImg1 from '../assets/images/portfolio-img1.png'
import portfolioImg2 from '../assets/images/portfolio-img2.png'
import portfolioImg3 from '../assets/images/portfolio-img3.png'
import './SpecialistProfilePage.css'

export default function SpecialistProfilePage() {
  return (
    <div className="spec-profile-page page-with-nav">

      <div className="sp-header-new">
        <img src={userInfo3Img} alt="User Profile Info" className="sp-user-info-img" />
      </div>

      <div className="sp-scroll-outer" style={{ width: "90%", margin: "0 auto" }}>
        <div className="sp-scroll-wrapper">
          <img src={scroll3Img} alt="Badges Scroll" className="sp-scroll-img" />
        </div>
      </div>

      <div className="sp-content-wrapper">

        <div className="sp-section sp-about">
          <h3 className="sp-sec-title">О себе</h3>
          <p className="sp-sec-text">
            Графический дизайнер, создаю логотипы, баннеры, фирменный стиль и визуал для бизнеса.
          </p>
        </div>

        {/* Profile Button */}
        <div className="sp-btn-container">
          <img src={profileBtnImg} alt="Написать специалисту" className="sp-profile-btn-img" />
        </div>

        <div className="sp-divider"></div>

        {/* Discount Section */}
        <div className="sp-section sp-discount-row">
          <div className="sp-discount-info">
            <h3 className="sp-sec-title">Имеется скидка</h3>
            <p className="sp-sec-text">
              При заказы lebih dar 3х услуг, есть скидка, обсуждается индивидуально.
            </p>
          </div>
          <div className="sp-discount-badge">25%</div>
        </div>

        <div className="sp-divider"></div>

        {/* Services Section */}
        <div className="sp-section">
          <h3 className="sp-sec-title">Услуги</h3>
          <div className="sp-scroll-outer">
            <div className="sp-scroll-section">
              <div className="sp-scroll-wrapper">
                <img src={scroll4Img} alt="Services Scroll" className="sp-scroll-img-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="sp-divider"></div>

        {/* Portfolio Section */}
        <div className="sp-section">
          <div className="sp-sec-header">
            <h3 className="sp-sec-title">Портфолио</h3>
          </div>
          <div className="sp-portfolio-grid">
            <img src={portfolioImg1} alt="Portfolio 1" className="sp-portfolio-img" />
            <img src={portfolioImg2} alt="Portfolio 2" className="sp-portfolio-img" />
            <img src={portfolioImg3} alt="Portfolio 3" className="sp-portfolio-img" />
          </div>
        </div>

      </div>

      <SpecialistBottomNav />
    </div>
  )
}
