import { useNavigate } from 'react-router-dom'
import { IoSearchOutline, IoChatbubbleOutline, IoNotificationsOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'
import ClientBottomNav from '../components/ClientBottomNav'
import bannerBg from '../assets/images/banner-bg.png'
import './HomePage.css'

export default function HomePage() {
  const navigate = useNavigate()
  
  const topCategories = [
    { title: 'Медицинские специалисты', count: '508', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&fit=crop' },
    { title: 'Психологи', count: '305', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop' },
    { title: 'Репетиторы', count: '13 548', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop' },
    { title: 'Сантехники', count: '32 422', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200&h=200&fit=crop' },
    { title: 'Бухгалтеры и юристы', count: '5698', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&fit=crop' },
    { title: 'Фрилансеры', count: '17 896', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&fit=crop' },
    { title: 'Мастера красоты', count: '18 548', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&h=200&fit=crop' },
    { title: 'Автоинструкторы', count: '5426', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop' },
  ]

  const listCategories = [
    { title: 'Репетиторы', sub: 'Английский, математика, химия и др.', count: '23 548' },
    { title: 'Мастера по ремонту', sub: 'Электрика, сантехника, ремонт квартир и др.', count: '32 422' },
    { title: 'Мастера красоты', sub: 'Маникюр, макияж, стрижка, пошив и др.', count: '18 548' },
    { title: 'Фрилансеры', sub: 'Дизайнеры, маркетинг, программисты и др.', count: '17 896' },
    { title: 'Бухгалтеры и юристы', sub: 'Риелторы, бизнес консультанты, страхование и др.', count: '5698' },
    { title: 'Другие услуги...', sub: 'Грузоперевозки, организаторы мероприятий и др.', count: '32 564' },
  ]

  return (
    <div className="home-page page-with-nav">
      
      {/* Header */}
      <div className="home-header">
        <h2 className="home-greeting">Здравствуйте, Руслан</h2>
        <div className="home-header-actions">
          <div className="home-location">
            <IoLocationOutline className="loc-icon" />
            <span>Ташкент</span>
          </div>
          <button className="h-icon-btn"><IoChatbubbleOutline /></button>
          <button className="h-icon-btn notif-btn">
            <IoNotificationsOutline />
            <span className="notif-dot"></span>
          </button>
          <div className="lang-toggle">RU</div>
        </div>
      </div>

      <div className="home-content">
        {/* Main Search Component */}
        <div className="home-search-bar" onClick={() => navigate('/specialist-list')}>
          <IoSearchOutline className="h-search-icon" />
          <span className="h-search-text">Найти специалиста или услугу...</span>
          <div className="h-ai-btn" onClick={(e) => { e.stopPropagation(); navigate('/ai-assistant'); }}>AI</div>
        </div>

        {/* Quick Action Cards */}
        <div className="home-quick-cards">
          <div className="quick-card card-blue">
            <div className="quick-card-top">
              <span className="quick-title">Сантехник</span>
              <span className="quick-badge-red">9+</span>
            </div>
            <div className="quick-card-bottom">
              <span className="quick-status">Задача опубликована</span>
              <div className="quick-stats">
                <AiOutlineEye /> 30 &nbsp;&nbsp; <FaUserAlt style={{fontSize:'8px'}}/> 2
              </div>
            </div>
          </div>
          <div className="quick-card card-green">
             <div className="quick-card-top">
              <span className="quick-title">Маникюр</span>
            </div>
            <div className="quick-card-bottom">
              <span className="quick-status">Активная запись</span>
              <div className="quick-time">
                <IoTimeOutline style={{marginTop:'-1px'}}/> 18:00
              </div>
            </div>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="home-promo-banner">
           <div className="promo-content">
             <h2>С Bodom<br/>легко...</h2>
             <p>Скидка до 50% на первый<br/>заказ при регистрации</p>
           </div>
           <div className="promo-img-wrapper">
             <img src={bannerBg} className="promo-img" alt="Promo" />
           </div>
        </div>
        <div className="promo-dots">
          <span></span><span className="active"></span><span></span>
        </div>

        {/* Categories Grid */}
        <div className="home-section">
          <h3 className="section-title">Готовы помочь</h3>
          <div className="home-categories-grid">
            {topCategories.map((cat, i) => (
              <div key={i} className="cat-grid-item" onClick={() => navigate('/specialist-list')}>
                <img src={cat.img} alt={cat.title} className="cat-grid-img" />
                <div className="cat-grid-overlay">
                  <div className="cat-grid-count"><FaUserAlt style={{fontSize:'7px', marginRight:'3px'}}/> {cat.count}</div>
                  <div className="cat-grid-title">{cat.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* List Categories */}
        <div className="home-section list-section">
          <h3 className="section-title">Все 74 706 специалистов</h3>
          <div className="home-list-search">
            <input type="text" placeholder="Поиск услуги" />
            <IoSearchOutline className="list-search-icon" />
          </div>

          <div className="cat-list">
            {listCategories.map((cat, i) => (
              <div key={i} className="cat-list-item" onClick={() => navigate('/specialist-list')}>
                <div className="cat-list-info">
                  <h4>{cat.title}</h4>
                  <p>{cat.sub}</p>
                </div>
                <div className="cat-list-count">
                  <FaUserAlt style={{fontSize:'10px'}}/> {cat.count}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <ClientBottomNav />
    </div>
  )
}
