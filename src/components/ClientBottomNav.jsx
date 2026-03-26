import { NavLink } from 'react-router-dom'
import { IoHomeOutline, IoHome } from 'react-icons/io5'
import { BiCategory, BiSolidCategory } from 'react-icons/bi'
import { BsClipboard, BsClipboardFill } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import logoImg from '../assets/icons/logo3.svg'
import './BottomNav.css'

export default function ClientBottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        {({ isActive }) => (
          <>
            <span className="nav-icon">
              {isActive ? <IoHome /> : <IoHomeOutline />}
            </span>
            <span className="nav-label">Главная</span>
          </>
        )}
      </NavLink>

      <NavLink to="/specialists" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        {({ isActive }) => (
          <>
            <span className="nav-icon">
              {isActive ? <BiSolidCategory /> : <BiCategory />}
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
              {isActive ? <BsClipboardFill /> : <BsClipboard />}
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
