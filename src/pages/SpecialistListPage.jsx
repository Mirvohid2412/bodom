import { useNavigate } from 'react-router-dom'
import ClientBottomNav from '../components/ClientBottomNav'
import filtrImg from '../assets/images/filtr.png'
import doktorInfoImg from '../assets/images/doktor-info.png'
import doktorInfo1Img from '../assets/images/doktor-info2.png'
import doktorInfoBtnImg from '../assets/images/doktor-info-btn.png'
import './SpecialistListPage.css'

export default function SpecialistListPage() {
  const navigate = useNavigate()

  return (
    <div className="specialist-list-page">
      {/* Top Filter - Part of fixed structure or scrollable header */}
      <img src={filtrImg} alt="Filter" className="sl-top-filter-img" />

      {/* Scrollable Content Area */}
      <div className="sl-cards-scroll-area">

        {/* Doctor Card 1 */}
        <div className="sl-specialist-card">
          <img src={doktorInfoImg} alt="Specialist Info" className="sl-info-img" />
          <img
            src={doktorInfoBtnImg}
            alt="Book Appointment"
            className="sl-btn-img"
          // onClick={() => navigate('/booking-confirm')}
          />
        </div>

        {/* Doctor Card 2 */}
        <div className="sl-specialist-card">
          <img src={doktorInfo1Img} alt="Specialist Info" className="sl-info-img" />
          <img
            src={doktorInfoBtnImg}
            alt="Book Appointment"
            className="sl-btn-img"
          // onClick={() => navigate('/booking-confirm')}
          />
        </div>

      </div>

      <ClientBottomNav />
    </div>
  )
}
