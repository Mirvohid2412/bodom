import React, { useState, useEffect } from 'react';
import { IoSend, IoClose } from 'react-icons/io5';
import chatTopImg from '../assets/images/chat-top.png';
import chatMessagesImg from '../assets/images/chat-messages.png';
import dollarBtnImg from '../assets/images/dollar-btn.png';
import select1Img from '../assets/images/select1.png';
import select2Img from '../assets/images/select2.png';
import selectBtnImg from '../assets/images/select-btn.png';
import './ChatModal.css';

export default function ChatModal({ isOpen, onClose }) {
  const [message, setMessage] = useState('');
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

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

        <div className="chat-modal-body">
          {/* Scrollable Messages Image */}
          <div className="chat-messages-wrapper">
             <img src={chatMessagesImg} alt="Chat Messages" className="chat-messages-img-full" />
          </div>
        </div>

        {/* Interactive Footer matching screenshot */}
        <div className="chat-modal-footer">
          <button className="chat-plus-btn-new">+</button>
          <div className="chat-input-wrapper-new">
            <input 
              type="text" 
              placeholder="Сообщение" 
              className="chat-input-field-new" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="chat-send-btn-new">
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
