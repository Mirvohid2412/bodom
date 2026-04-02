import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'
import ClientBottomNav from '../components/ClientBottomNav'
import homeHeaderImg from '../assets/images/home-header.png'
import homeHeader2Img from '../assets/images/home-header2.png'
import homeScrollImg from '../assets/images/home-scroll.png'
import carouselItem1 from '../assets/images/home-carousel-item1.png'
import carouselItem2 from '../assets/images/home-carousel-item2.png'
import carouselItem3 from '../assets/images/home-carousel-item3.png'
import gridItem1Img from '../assets/images/home-grid-item1.png'
import gridItem2Img from '../assets/images/home-grid-item2.png'
import gridItem3Img from '../assets/images/home-grid-item3.png'
import gridItem4Img from '../assets/images/home-grid-item4.png'
import gridItem5Img from '../assets/images/home-grid-item5.png'
import gridItem6Img from '../assets/images/home-grid-item6.png'
import gridItem7Img from '../assets/images/home-grid-item7.png'
import gridItem8Img from '../assets/images/home-grid-item8.png'
import homeBottomImg from '../assets/images/home-bottom.png'
import './HomePage.css'

export default function HomePage() {
  const navigate = useNavigate()
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const gridItems = [
    { title: 'Медицинские специалисты', count: '5698', img: gridItem1Img },
    { title: 'Психологи', count: '386', img: gridItem2Img },
    { title: 'Репетиторы', count: '23 548', img: gridItem3Img },
    { title: 'Сантехники', count: '32 422', img: gridItem4Img },
    { title: 'Бухгалтеры и юристы', count: '5698', img: gridItem5Img },
    { title: 'Фрилансеры', count: '17 896', img: gridItem6Img },
    { title: 'Мастера красоты', count: '18 548', img: gridItem7Img },
    { title: 'Автоинструкторы', count: '9435', img: gridItem8Img },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth } = carouselRef.current
        const index = Math.round(scrollLeft / clientWidth)
        setActiveIndex(index)
      }
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll)
    }

    const interval = setInterval(() => {
      if (carouselRef.current) {  
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          carouselRef.current.scrollTo({ 
            left: scrollLeft + clientWidth, 
            behavior: 'smooth' 
          })
        }
      }
    }, 3000)

    return () => {
      clearInterval(interval)
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  
  return (
    <div className="home-page page-with-nav">
      <img src={homeHeaderImg} alt="Home Header" className="home-header-img" />
      <img src={homeHeader2Img} alt="Home Header 2" className="home-header-img" style={{ marginTop: '16px' }} />
      
      <div className="home-scroll-wrapper">
        <img src={homeScrollImg} alt="Horizontal Scroll" className="home-scroll-img" />
      </div>

      <div className="home-carousel-wrapper" ref={carouselRef}>
        <img src={carouselItem1} alt="Carousel Item 1" className="home-carousel-item" />
        <img src={carouselItem2} alt="Carousel Item 2" className="home-carousel-item" />
        <img src={carouselItem3} alt="Carousel Item 3" className="home-carousel-item" />
      </div>

      <div className="carousel-dots">
        {[0, 1, 2].map((idx) => (
          <div key={idx} className={`dot ${activeIndex === idx ? 'active' : ''}`}></div>
        ))}
      </div>

      <div className="home-content">
        <h3 className="home-section-title">Готовы помочь</h3>
        
        <div className="home-grid">
          {gridItems.map((item, i) => (
            <div key={i} className="home-grid-card" onClick={() => navigate('/specialists')}>
              <img src={item.img} alt={item.title} className="grid-card-img" />
              <div className="grid-card-title">{item.title}</div>
            </div>
          ))}
        </div>

        <div className="home-bottom-section">
          <div className="home-search-container">
            <input type="text" placeholder="Поиск услуги" className="home-bottom-input" />
            <IoSearchOutline className="home-bottom-search-icon" />
          </div>
          <img src={homeBottomImg} alt="Home Bottom" className="home-bottom-img" />
        </div>
      </div>

      <ClientBottomNav />
    </div>
  )
}
