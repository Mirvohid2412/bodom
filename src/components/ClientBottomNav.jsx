import { NavLink } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import logoImg from '../assets/icons/logo3.svg'
import './BottomNav.css'

const HomeIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60.3976 30.667L30.9111 0L0.461455 30.6705C-0.526512 31.6661 0.176455 33.3589 1.58055 33.3608L5.24816 33.3646V60.9554H22.812V37.1557H38.3305V60.9554H55.9357V33.3646H59.2499C60.6543 33.3646 61.3716 31.6803 60.3976 30.667Z" fill="currentColor" />
  </svg>
)

const CategoryIconSVG = () => (
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="40" height="40" rx="8" fill="currentColor" />
    <rect x="55" y="5" width="40" height="40" rx="8" fill="currentColor" />
    <rect x="5" y="55" width="40" height="40" rx="8" fill="currentColor" />
    <rect x="55" y="55" width="40" height="40" rx="8" fill="currentColor" />
  </svg>
)

const OrdersIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM6 6H18C18.8284 6 19.5 6.67157 19.5 7.5C19.5 8.32843 18.8284 9 18 9H6C5.17157 9 4.5 8.32843 4.5 7.5C4.5 6.67157 5.17157 6 6 6ZM6 15H18C18.8284 15 19.5 15.6716 19.5 16.5C19.5 17.3284 18.8284 18 18 18H6C5.17157 18 4.5 17.3284 4.5 16.5C4.5 15.6716 5.17157 15 6 15Z" fill="currentColor" />
  </svg>
)

export default function ClientBottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        {({ isActive }) => (
          <>
            <span className="nav-icon">
              <HomeIconSVG />
            </span>
            <span className="nav-label">Главная</span>
          </>
        )}
      </NavLink>

      <NavLink to="/specialists" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        {({ isActive }) => (
          <>
            <span className="nav-icon">
              <CategoryIconSVG />
            </span>
            <span className="nav-label">Категории</span>
          </>
        )}
      </NavLink>

      <NavLink to="/ai-assistant" className="bottom-nav-center">
        <img src={logoImg} alt="Bodom" className="bottom-nav-logo" style={{ width: "30px" }} />
      </NavLink>

      <NavLink to="/booking" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        {({ isActive }) => (
          <>
            <span className="nav-icon">
              <OrdersIconSVG />
              <span className="nav-badge">2</span>
            </span>
            <span className="nav-label">Мои заказы</span>
          </>
        )}
      </NavLink>

      <NavLink to="/client-profile" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        {({ isActive }) => (
          <>
            <span className="nav-icon">
              {isActive ? <FaUser /> : <FiUser />}
            </span>
            <span className="nav-label">Профиль</span>
          </>
        )}
      </NavLink>
    </nav>
  )
}
