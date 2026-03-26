import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack, IoSend } from 'react-icons/io5'
import { FiPlus } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'
import './AIAssistantPage.css'

const initialMessages = [
  {
    id: 1,
    type: 'date',
    text: 'Сегодня'
  },
  {
    id: 2,
    type: 'user',
    text: 'Привет, у моего ребёнка опухло под глазом к кому и куда обратится?'
  },
  {
    id: 3,
    type: 'bot',
    text: 'Здравствуйте! По Вашему описанию я бы порекомендовал обратиться сначала к педиатру, а именно к кичику с хирургической квалификацией, а после к окулисту для профилактики. В Ташкенте есть несколько специалистов, к кому Вы хотите обратиться?'
  },
  {
    id: 4,
    type: 'bot',
    text: 'Давай сначала мы обратимся к педиатру и хирургу.'
  },
  {
    id: 5,
    type: 'bot',
    text: 'Хорошо! Для выбора специалиста нажмите на кнопку ниже.'
  },
]

export default function AIAssistantPage() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: input }])
    setInput('')
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: 'Спасибо за ваше сообщение! Я ищу подходящих специалистов для вас...'
      }])
    }, 1000)
  }

  return (
    <div className="ai-page page-full">
      {/* Header */}
      <div className="ai-header">
        <div className="ai-header-left">
          <button className="ai-back-btn" onClick={() => navigate(-1)}>
            <IoArrowBack />
          </button>
          <div className="ai-header-info">
            <div className="ai-header-logo">
              <div className="ai-logo-icon">B</div>
              <span className="ai-logo-text">Bodom помощник</span>
            </div>
            <span className="ai-header-subtitle">Готов помочь решить любую задачу</span>
          </div>
        </div>
        <div className="ai-header-avatar">
          <HiSparkles />
        </div>
      </div>

      {/* Messages */}
      <div className="ai-messages">
        {messages.map((msg) => {
          if (msg.type === 'date') {
            return (
              <div key={msg.id} className="ai-date">
                <span>{msg.text}</span>
              </div>
            )
          }
          return (
            <div key={msg.id} className={`ai-message ${msg.type === 'user' ? 'ai-message-user' : 'ai-message-bot'}`}>
              <p>{msg.text}</p>
            </div>
          )
        })}

        {/* CTA Button */}
        <div className="ai-cta">
          <button className="btn btn-primary" onClick={() => navigate('/specialists')}>
            Выбрать специалиста
            <br />
            <span style={{ fontSize: 11, opacity: 0.8 }}>(Педиатр и хирург)</span>
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="ai-input-area">
        <button className="ai-input-add">
          <FiPlus />
        </button>
        <div className="ai-input-wrapper">
          <input
            type="text"
            className="ai-input"
            placeholder="Написать запрос..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="ai-send-btn" onClick={handleSend}>
            <IoSend />
          </button>
        </div>
      </div>

      <p className="ai-disclaimer">
        Искуственный интелект от Bodom поможет только найти правильного специалиста
      </p>
    </div>
  )
}
