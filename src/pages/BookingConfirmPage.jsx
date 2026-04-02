import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClientBottomNav from '../components/ClientBottomNav'
import bookingTopImg from '../assets/images/booking-top.png'
import bookingCardImg from '../assets/images/booking-card.png'
import bookingCardBtn1Img from '../assets/images/booking-card-btn1.png'
import bookingCardBtn2Img from '../assets/images/booking-card-btn2.png'
import './BookingConfirmPage.css'

export default function BookingConfirmPage() {
  const navigate = useNavigate()
  const [activeBtn, setActiveBtn] = useState(1)

  return (
    <div className="booking-page page-with-nav">
      {/* Top Image Header */}
      <img src={bookingTopImg} alt="Booking Top" className="bk-top-img" />

      {/* Main Booking Card with Toggle Button */}
      <div className="bk-card-wrapper">
        <img src={bookingCardImg} alt="Booking Card" className="bk-card-img" />
        
        {/* Toggleable Button Image */}
        <img 
          src={activeBtn === 1 ? bookingCardBtn1Img : bookingCardBtn2Img} 
          alt="Action Button" 
          className="bk-card-btn-img" 
          onClick={() => setActiveBtn(activeBtn === 1 ? 2 : 1)}
        />
      </div>

      {/* Footer Disclaimer Text */}
      <div className="bk-footer-text">
        <p>После записи стоимость услуги взимается с Вас,<br/>а после завершения заказа деньги поступят исполнителю</p>
        <p>В случае отмены заказа или его пропуска деньги<br/>вернутся на ваш счёт</p>
      </div>

      <ClientBottomNav />
    </div>
  )
}
