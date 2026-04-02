import React, { useState, useEffect, useRef } from 'react';
import { IoSend, IoClose } from 'react-icons/io5';
import chatTopImg from '../assets/images/chat-top.png';
import dollarBtnImg from '../assets/images/dollar-btn.png';
import select1Img from '../assets/images/select1.png';
import select2Img from '../assets/images/select2.png';
import selectBtnImg from '../assets/images/select-btn.png';

// Import individual chat message assets
import msg1 from '../assets/images/chat-msg1.png';
import msg2 from '../assets/images/chat-msg2.png';
import msg3 from '../assets/images/chat-msg3.png';
import msg4 from '../assets/images/chat-msg4.png';
import msg5 from '../assets/images/chat-msg5.png';
import msg6 from '../assets/images/chat-msg6.png';
import btn1 from '../assets/images/chat-btn1.png';
import btn2 from '../assets/images/chat-btn2.png';

import './ChatModal.css';

export default function ChatModal({ isOpen, onClose }) {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const scrollRef = useRef(null);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessage = {
      id: Date.now(),
      type: 'sent',
      content: inputValue
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isInvoiceOpen]);

  const services = [
    "Разработка логотипа",
    "Дизайн визитки",
    "Создание брендбука",
    "Иллюстрация",
    "SMM оформление",
    "Веб-дизайн"
  ];

  if (!isOpen) return null;

  return (
    <div className="chat-modal-overlay" onClick={onClose}>
      <div className="chat-modal-container" onClick={(e) => e.stopPropagation()}>
        
        <div className="chat-modal-handle" onClick={onClose}></div>

        <div className="chat-modal-header-img">
          <img src={chatTopImg} alt="Chat Header" className="chat-top-img-full" />
        </div>

        <div className="chat-modal-body" ref={scrollRef}>
          <div className="chat-date-divider">
            <span>Сегодня</span>
          </div>

          {/* Initial Image-based Messages */}
          <div className="chat-msg-row received-img">
            <img src={msg1} alt="Msg1" className="chat-msg-img" />
          </div>
          <div className="chat-msg-row received-img">
            <img src={msg2} alt="Msg2" className="chat-msg-img" />
          </div>
          <div className="chat-msg-row sent-img">
            <img src={msg3} alt="Msg3" className="chat-msg-img" />
          </div>
          <div className="chat-msg-row sent-img">
            <img src={msg4} alt="Msg4" className="chat-msg-img" />
          </div>
          <div className="chat-msg-row received-img">
            <img src={msg5} alt="Msg5" className="chat-msg-img" />
          </div>

          <div className="chat-action-img">
            <img src={btn1} alt="Btn1" className="chat-btn-img" />
          </div>
          <div className="chat-action-img">
            <img src={btn2} alt="Btn2" className="chat-btn-img" />
          </div>

          <div className="chat-msg-row sent-img">
            <img src={msg6} alt="Msg6" className="chat-msg-img" />
          </div>

          {/* Dynamic User Messages */}
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-msg-row ${msg.type}`}>
               <div className="chat-bubble-new">
                 {msg.content}
               </div>
            </div>
          ))}
        </div>

        {/* Interactive Footer matching screenshot */}
        <div className="chat-modal-footer">
          <button className="chat-plus-btn-new">+</button>
          <div className="chat-input-wrapper-new">
            <input 
              type="text" 
              placeholder="Сообщение" 
              className="chat-input-field-new" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="chat-send-btn-new" onClick={handleSend}>
              <IoSend />
            </button>
          </div>
          <img 
            src={dollarBtnImg} 
            alt="Pay" 
            className="chat-dollar-btn-new" 
            onClick={() => setIsInvoiceOpen(true)}
          />
        </div>

        {/* Invoice Modal Layer on top of Chat */}
        {isInvoiceOpen && (
          <div className="invoice-modal-overlay">
             <div className="invoice-modal-container">
                <button className="invoice-modal-close" onClick={() => setIsInvoiceOpen(false)}>
                  <IoClose />
                </button>

                <div className="invoice-modal-content">
                  <div className="invoice-field-wrapper" onClick={() => setIsServicesOpen(!isServicesOpen)}>
                    <img src={select1Img} alt="Select Service" className="invoice-field-img" />
                    {selectedService && <span className="invoice-selected-text">{selectedService}</span>}
                    
                    {isServicesOpen && (
                      <div className="invoice-services-list">
                        {services.map((service, idx) => (
                          <div 
                            key={idx} 
                            className="invoice-service-item"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedService(service);
                              setIsServicesOpen(false);
                            }}
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="invoice-field-wrapper">
                    <img src={select2Img} alt="Price Input" className="invoice-field-img" />
                    {/* Placeholder content could be a real input here if needed */}
                  </div>

                  <div className="invoice-submit-container">
                    <img 
                      src={selectBtnImg} 
                      alt="Create Invoice" 
                      className="invoice-submit-img" 
                      onClick={() => setIsInvoiceOpen(false)} 
                    />
                  </div>
                </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
