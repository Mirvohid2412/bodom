import { NavLink, useLocation } from 'react-router-dom';
import { IoMailOutline, IoCalendarOutline, IoWalletOutline, IoGridOutline, IoPersonOutline } from 'react-icons/io5';
import './SpecialistBottomNav.css';

export default function SpecialistBottomNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="spec-bottom-nav">
      <NavLink to="/chat" className={`spec-nav-item ${path.includes('/chat') ? 'active' : ''}`}>
        <div className="spec-nav-icon-wrapper">
           <IoMailOutline className="spec-nav-icon" />
           <span className="spec-nav-badge">9+</span>
        </div>
        <span className="spec-nav-label">Сообщения</span>
      </NavLink>

      <NavLink to="/orders" className={`spec-nav-item ${path.includes('/orders') ? 'active' : ''}`}>
        <div className="spec-nav-icon-wrapper">
           <IoCalendarOutline className="spec-nav-icon" />
        </div>
        <span className="spec-nav-label">Заказы</span>
      </NavLink>

      <NavLink to="/finance" className={`spec-nav-item ${path.includes('/finance') ? 'active' : ''}`}>
        <div className="spec-nav-icon-wrapper">
           <IoWalletOutline className="spec-nav-icon" />
        </div>
        <span className="spec-nav-label">Финансы</span>
      </NavLink>

      <NavLink to="/specialist-dashboard" className={`spec-nav-item ${path.includes('/specialist-dashboard') ? 'active' : ''}`}>
        <div className="spec-nav-icon-wrapper">
           <IoGridOutline className="spec-nav-icon" />
           <span className="spec-nav-badge">9+</span>
        </div>
        <span className="spec-nav-label">Доска</span>
      </NavLink>

      <NavLink to="/specialist-profile" className={`spec-nav-item ${path.includes('/specialist-profile') ? 'active' : ''}`}>
        <div className="spec-nav-icon-wrapper">
           <IoPersonOutline className="spec-nav-icon" />
        </div>
        <span className="spec-nav-label">Профиль</span>
      </NavLink>
    </div>
  );
}
