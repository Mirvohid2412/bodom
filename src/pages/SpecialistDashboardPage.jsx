import { useState } from 'react'
import { IoMenu, IoCalendarOutline, IoAddOutline } from 'react-icons/io5'
import { AiOutlineEye } from 'react-icons/ai'
import { FaTrophy } from 'react-icons/fa'
import SpecialistBottomNav from '../components/SpecialistBottomNav'
import './SpecialistDashboardPage.css'

import user from '../assets/images/user.png'

export default function SpecialistDashboardPage() {
  const [isAvailable, setIsAvailable] = useState(true)

  return (
    <div className="spec-dash-page page-with-nav">
      
      {/* Header */}
      <div className="sd-header">
        <img src={user} alt="User" className="sd-avatar" />
        <div className="sd-user-info">
          <h2>Дизайнер, Руслан</h2>
          <p>Я {isAvailable ? 'занят / принимаю заказы' : 'не принимаю заказы'}</p>
          <div 
            className={`sd-toggle ${isAvailable ? 'active' : ''}`}
            onClick={() => setIsAvailable(!isAvailable)}
          >
            <div className={`sd-toggle-circle ${isAvailable ? 'active' : ''}`}></div>
          </div>
        </div>
        <IoMenu className="sd-menu-icon" />
      </div>

      {/* Tags Slider */}
      <div className="sd-tags-slider">
        {/* <div className="sd-tag red-tag" style={{ marginLeft: '-16px', paddingLeft: '32px' }}>
          <div className="sd-tag-date">29/06</div>
        </div> */}
        <div className="sd-tag green-tag">
          <div className="sd-tag-title">Логотип</div>
          <div className="sd-tag-bottom">
            <div className="sd-status-wrap"><span className="sd-dot green-dot"></span> Осталось 5 дней</div>
            <div className="sd-date-box"><IoCalendarOutline className="sd-d-icon"/> 27/06</div>
          </div>
        </div>
        <div className="sd-tag lightblue-tag">
          <div className="sd-tag-title">Брендбук</div>
          <div className="sd-tag-bottom">
            <div className="sd-status-wrap"><span className="sd-dot red-dot"></span> Завтра</div>
            <div className="sd-date-box"><IoCalendarOutline className="sd-d-icon"/> 22/06</div>
          </div>
        </div>
        <div className="sd-tag lightblue-tag">
          <div className="sd-tag-title">Брендбук</div>
          <div className="sd-tag-bottom">
            <div className="sd-status-wrap"><span className="sd-dot red-dot"></span> Завтра</div>
            <div className="sd-date-box"><IoCalendarOutline className="sd-d-icon"/> 22/06</div>
          </div>
        </div>
      </div>

      <div className="sd-content">
        
        {/* Row 1: Big Stats */}
        <div className="sd-row-2">
          <div className="sd-card blue-gradient sd-card-tall">
            <span className="sd-card-lbl">Доступные заказы</span>
            <h3 className="sd-card-val-lg">6 325</h3>
          </div>
          <div className="sd-card lightblue-gradient sd-card-tall">
            <span className="sd-card-lbl">Новые отклики</span>
            <h3 className="sd-card-val-lg">36</h3>
          </div>
        </div>

        {/* Row 2: Circles and Single */}
        <div className="sd-row-3">
          <div className="sd-card blue-gradient sd-circle-card">
            <div className="sd-c-header">Сегодня <IoAddOutline/></div>
            <div className="sd-circle-wrapper">
              <svg viewBox="0 0 36 36" className="sd-circular-chart">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="sd-circle-txt">12</div>
            </div>
          </div>
          
          <div className="sd-card blue-gradient sd-circle-card">
            <div className="sd-c-header">Завтра <IoAddOutline/></div>
            <div className="sd-circle-wrapper">
              <svg viewBox="0 0 36 36" className="sd-circular-chart">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="70, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="sd-circle-txt">7</div>
            </div>
          </div>

          <div className="sd-card green-gradient sd-simple-card">
            <span className="sd-card-lbl">Выполнено</span>
            <h3 className="sd-card-val-md">14</h3>
          </div>
        </div>

        {/* Row 3: Bar Chart */}
        <div className="sd-card sd-bar-card darkblue-gradient">
          <div className="sd-bars">
            {[{d:'Пн',v:4, h:80},{d:'Вт',v:5, h:100},{d:'Ср',v:2,h:40},{d:'Чт',v:5,h:100},{d:'Пт',v:3,h:60},{d:'Сб',v:2,h:40},{d:'Вс',v:1,h:20}].map((item, idx) => (
               <div key={idx} className="sd-bar-col">
                 <span className="sd-bar-val">{item.v}</span>
                 <div className="sd-bar-track">
                   <div className="sd-bar-fill" style={{height: `${item.h}%`}}></div>
                 </div>
                 <span className="sd-bar-day">{item.d}</span>
               </div>
            ))}
          </div>
        </div>

        {/* Row 4: Finance */}
        <div className="sd-row-2">
          <div className="sd-card brightgreen-gradient sd-card-tall">
            <div className="sd-card-header-icon">Заработано <AiOutlineEye/></div>
            <h3 className="sd-money">38 256 000 <span>UZS</span></h3>
          </div>
          <div className="sd-card blue2-gradient sd-card-tall">
            <span className="sd-card-lbl">Предоплата</span>
            <h3 className="sd-money">12 421 700 <span>UZS</span></h3>
          </div>
        </div>

        {/* Row 5: Goal */}
        <div className="sd-card red-gradient sd-goal-card">
          <div className="sd-goal-left">
             <span className="sd-card-lbl">Цель месяца</span>
             <h3 className="sd-money">50 000 000 <span>UZS</span></h3>
          </div>
          <div className="sd-circle-wrapper sd-goal-circle">
            <svg viewBox="0 0 36 36" className="sd-circular-chart">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle" strokeDasharray="76, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="sd-circle-txt text-lg">76%</div>
          </div>
        </div>

        {/* Row 6: Conversion & Rating */}
        <div className="sd-row-2">
          
          <div className="sd-card blue3-gradient sd-conv-card">
            <span className="sd-abs-title">Конверсия</span>
            <div className="sd-conv-inner">
              <div className="sd-circle-wrapper sd-md-circle">
                <svg viewBox="0 0 36 36" className="sd-circular-chart">
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle" strokeDasharray="73, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="sd-circle-txt">73%</div>
              </div>
              
              <div className="sd-divider"></div>
              
              <div className="sd-expert-badge">
                 <FaTrophy className="expert-icon"/>
                 <span>Эксперт</span>
              </div>
            </div>
          </div>

          <div className="sd-card lightblue2-gradient sd-rating-card">
             <span className="sd-abs-title">Мой рейтинг</span>
             <div className="sd-circle-wrapper sd-lg-circle">
                <svg viewBox="0 0 36 36" className="sd-circular-chart">
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle" strokeDasharray="96, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="sd-circle-txt-xl">4,8</div>
             </div>
          </div>

        </div>

      </div>

      <SpecialistBottomNav />
    </div>
  )
}
