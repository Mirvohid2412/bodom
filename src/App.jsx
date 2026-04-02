import { Routes, Route } from 'react-router-dom'
import SplashPage from './pages/SplashPage'
import LoginClientPage from './pages/LoginClientPage'
import LoginSpecialistPage from './pages/LoginSpecialistPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import AIAssistantPage from './pages/AIAssistantPage'
import SpecialistListPage from './pages/SpecialistListPage'
import BookingConfirmPage from './pages/BookingConfirmPage'
import ClientProfilePage from './pages/ClientProfilePage'
import SpecialistProfilePage from './pages/SpecialistProfilePage'
import SpecialistDashboardPage from './pages/SpecialistDashboardPage'

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login-client" element={<LoginClientPage />} />
        <Route path="/login-specialist" element={<LoginSpecialistPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ai-assistant" element={<AIAssistantPage />} />
        <Route path="/specialists" element={<SpecialistListPage />} />
        <Route path="/booking" element={<BookingConfirmPage />} />
        <Route path="/client-profile" element={<ClientProfilePage />} />
        <Route path="/specialist/:id" element={<SpecialistProfilePage />} />
        <Route path="/specialist-profile" element={<SpecialistProfilePage />} />
        <Route path="/specialist-dashboard" element={<SpecialistDashboardPage />} />
      </Routes>
    </div>
  )
}

export default App
