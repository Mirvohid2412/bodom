import { NavLink, useLocation } from 'react-router-dom';
import ChatModal from './ChatModal';
import navItem1 from '../assets/images/nav-item1.png';
import navItem2 from '../assets/images/nav-item2.png';
import navItem3 from '../assets/images/nav-item3.png';
import navItem4 from '../assets/images/nav-item4.png';
import navItem5 from '../assets/images/nav-item5.png';
import './SpecialistBottomNav.css';
import { useState } from 'react';

export default function SpecialistBottomNav() {
  const location = useLocation();
  const path = location.pathname;
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  return (
    <>
      <div 
        className="spec-bottom-nav"
        style={{ display: isChatModalOpen ? 'none' : 'flex' }}
      >
        {/* Messages toggles the ChatModal */}
        <div 
          className="spec-nav-item-img"
          onClick={() => setIsChatModalOpen(true)}
        >
          <img src={navItem1} alt="Messages" className="nav-img-item" />
        </div>

        <NavLink to="/orders" className="spec-nav-item-img">
          <img src={navItem2} alt="Orders" className="nav-img-item" />
        </NavLink>

        <NavLink to="/finance" className="spec-nav-item-img">
          <img src={navItem3} alt="Finance" className="nav-img-item" />
        </NavLink>

        <NavLink to="/specialist-dashboard" className="spec-nav-item-img">
          <img src={navItem4} alt="Dashboard" className="nav-img-item" />
        </NavLink>

        <NavLink to="/specialist-profile" className="spec-nav-item-img">
          <img src={navItem5} alt="Profile" className="nav-img-item" />
        </NavLink>
      </div>

      {/* Chat Modal Integration */}
      <ChatModal 
        isOpen={isChatModalOpen} 
        onClose={() => setIsChatModalOpen(false)} 
      />
    </>
  );
}
