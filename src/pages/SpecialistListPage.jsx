import { useNavigate } from 'react-router-dom'
import { IoOptionsOutline, IoLocationOutline } from 'react-icons/io5'
import { FaUserAlt, FaStar, FaRegCommentDots, FaRegBookmark, FaCheckCircle } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import ClientBottomNav from '../components/ClientBottomNav'
import './SpecialistListPage.css'

import doctor from "../assets/images/doctor.png"

export default function SpecialistListPage() {
  const navigate = useNavigate()

  const specialists = [
    {
      id: 1,
      name: "Ашуров Шухрат Нигматович",
      profession: "Педиатр и хирург",
      rating: "5,0",
      reviews: "135",
      isVerified: true,
      isRecommended: true,
      experience: "Опыт 15+ лет",
      services: [
        { name: "Осмотр / Приём", price: "200 000 сум", unit: "сеанс" },
        { name: "Выездной осмотр", price: "300 000 сум", unit: "сеанс" }
      ],
      location: "г. Ташкент",
      canTravel: true,
      img: doctor
    },
    {
      id: 2,
      name: "Ашуров Шухрат Нигматович",
      profession: "Педиатр и хирург",
      rating: "5,0",
      reviews: "135",
      isVerified: true,
      isRecommended: false,
      experience: "Опыт 20+ лет",
      services: [
        { name: "Осмотр / Приём", price: "200 000 сум", unit: "сеанс" },
        { name: "Выездной осмотр", price: "300 000 сум", unit: "сеанс" }
      ],
      location: "г. Ташкент",
      canTravel: true,
      img: doctor
    }
  ]

  return (
    <div className="specialist-list-page page-with-nav">
      
      {/* Header */}
      <div className="sl-header">
         <div className="sl-header-title">
           <h2>Педиатр и хирург</h2>
           <div className="sl-header-count">
              <FaUserAlt className="sl-count-icon"/> 549
           </div>
         </div>
      </div>

      {/* Filters */}
      <div className="sl-filters-wrapper">
        <div className="sl-filter-pill">
          <IoOptionsOutline className="sl-filter-icon" />
          Фильтры
        </div>
        <div className="sl-filter-pill">
          <IoOptionsOutline className="sl-filter-icon" />
          Уточнить услугу
        </div>
        <div className="sl-filter-pill">
          <IoLocationOutline className="sl-filter-icon" />
          Уточнить адрес
        </div>
      </div>

      {/* List */}
      <div className="sl-list-container">
        {specialists.map(sp => (
          <div key={sp.id} className="sl-card">
            
            <div className="sl-card-header">
               <img src={sp.img} alt={sp.name} className="sl-card-img" />
              
              <div className="sl-card-info">
                <div className="sl-card-name-row">
                  <h3 className="sl-card-name">
                    {sp.name} {sp.isVerified && <MdVerified className="verified-icon" />}
                  </h3>
                </div>
                <p className="sl-card-profession">{sp.profession}</p>
                
                <div className="sl-card-stats">
                  <div className="sl-stat-box red-text"><FaStar /> {sp.rating}</div>
                  <div className="sl-stat-box"><FaRegCommentDots style={{ transform: 'rotateY(180deg)' }}/> {sp.reviews}</div>
                  {sp.isRecommended && (
                    <div className="sl-stat-box green-bg"><FaCheckCircle className="check-icon"/> Рекомендуют</div>
                  )}
                </div>
              </div>

              <div className="sl-card-actions">
                <button className="sl-icon-btn"><FaRegBookmark /></button>
                <button className="sl-icon-btn"><BsThreeDots /></button>
              </div>
            </div>

            <div className="sl-card-services">
              <div className="sl-services-list">
                {sp.services.map((svc, idx) => (
                  <div key={idx} className="sl-service-item">
                    <div className="sl-service-name">{svc.name}</div>
                    <div className="sl-service-price">{svc.price} <span className="sl-service-unit">/ {svc.unit}</span></div>
                  </div>
                ))}
              </div>
              <div className="sl-experience-badge">{sp.experience}</div>
            </div>

            <div className="sl-card-footer">
              <p>Принимает у себя: <strong>• {sp.location}</strong> {sp.canTravel && <span className="sl-can-travel">• Возможен выезд</span>}</p>
              <button className="sl-book-btn">Записаться на приём</button>
            </div>

          </div>
        ))}
      </div>

      <ClientBottomNav />
    </div>
  )
}
