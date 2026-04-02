import { useNavigate } from 'react-router-dom'
import { IoClose, IoSend } from 'react-icons/io5'
import { FiPlus } from 'react-icons/fi'
import aiBgImg from '../assets/images/ai-bg.png'
import msg1 from '../assets/images/msg1.png'
import msg2 from '../assets/images/msg2.png'
import msg3 from '../assets/images/msg3.png'
import msg4 from '../assets/images/msg4.png'
import aiIconImg from '../assets/images/ai.png'
import aiBtnImg from '../assets/images/ai-btn.png'
import './AIAssistantPage.css'

export default function AIAssistantPage() {
  const navigate = useNavigate()

  return (
    <div className="ai-modal-page">
      <div className="ai-modal-overlay" onClick={() => navigate(-1)}></div>

      <div className="ai-modal-container">
        <div className="ai-modal-handle" onClick={() => navigate(-1)}></div>

        <div 
          className="ai-modal-bg" 
          style={{ backgroundImage: `url(${aiBgImg})`, backgroundColor: '#fff' }}
        >
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-header-left">
              <div className="ai-chat-logo-circle">
                <span className="ai-chat-logo-b">B</span>
              </div>
              <div className="ai-chat-header-titles">
                <div className="ai-chat-header-main">Bodom помощник</div>
                <div className="ai-chat-header-sub">Готов помочь решить любую задачу</div>
              </div>
            </div>
            <div className="ai-chat-header-right">
              <img src={aiIconImg} alt="AI Icon" className="ai-chat-icon-ai-img" />
            </div>
          </div>

          <div className="ai-chat-date-separator">
            <span>Сегодня</span>
          </div>

          {/* Messages Container */}
          <div className="ai-chat-scroll-area">
            <div className="ai-msg-group">
              {/* Msg 1 - Right aligned (User) */}
              <div className="ai-msg-row msg-right">
                <img src={msg1} alt="Message 1" className="ai-msg-img" />
              </div>

              {/* Msg 2 - Left aligned (Bot) */}
              <div className="ai-msg-row msg-left">
                <img src={msg2} alt="Message 2" className="ai-msg-img" />
              </div>

              {/* Msg 3 - Right aligned (User) */}
              <div className="ai-msg-row msg-right">
                <img src={msg3} alt="Message 3" className="ai-msg-img" />
              </div>

              {/* Msg 4 - Left aligned (Bot) */}
              <div className="ai-msg-row msg-left">
                <img src={msg4} alt="Message 4" className="ai-msg-img" />
              </div>

              {/* Call to Action Image Button */}
              <div className="ai-cta-container">
                <img 
                  src={aiBtnImg} 
                  alt="Select Specialist" 
                  className="ai-cta-img-btn" 
                  onClick={() => navigate('/specialists')} 
                />
              </div>
            </div>
          </div>

          {/* Footer Input */}
          <div className="ai-chat-footer">
            <div className="ai-footer-plus">
              <FiPlus />
            </div>
            <div className="ai-footer-input-box">
              <input type="text" placeholder="Написать запрос..." className="ai-footer-input" />
              <div className="ai-footer-send">
                <IoSend />
              </div>
            </div>
          </div>

          <button className="ai-modal-close" onClick={() => navigate(-1)}>
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  )
}
