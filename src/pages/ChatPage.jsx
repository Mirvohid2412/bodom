import { useNavigate } from 'react-router-dom'
import { IoCallOutline, IoAdd, IoSend } from 'react-icons/io5'
import { FaDollarSign } from 'react-icons/fa'
import './ChatPage.css'

export default function ChatPage() {
  const navigate = useNavigate();

  return (
    <div className="chat-page">
      {/* Header */}
      <div className="cp-header">
        <div className="cp-drawer-handle"></div>
        <div className="cp-header-content">
          <div className="cp-user-info">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            <div className="cp-name-status">
              <h3>Джахонгир Юлдашев</h3>
              <p><span className="cp-online-dot"></span> В сети</p>
            </div>
          </div>
          <button className="cp-call-btn" onClick={() => navigate(-1)}>
            <IoCallOutline />
          </button>
        </div>
      </div>

      {/* Chat History */}
      <div className="cp-history">
        <div className="cp-date-divider">
          <span>Сегодня</span>
        </div>

        {/* Received Msg 1 */}
        <div className="cp-msg received">
          <div className="cp-bubble">
            Здравствуйте! Мне понравились Ваши работы мы бы хотели заказать у Вас логотип, ниже прикрепляю бриф для понимания задачи.
          </div>
        </div>

        {/* Received File Attachment */}
        <div className="cp-msg received">
          <div className="cp-bubble file-bubble">
            <div className="cp-file-icon">B</div>
            <div className="cp-file-info">
              <span className="cp-file-name">Бриф для логотипа.pdf</span>
              <span className="cp-file-size">3,7 MB</span>
            </div>
          </div>
        </div>

        {/* Sent Msg 1 */}
        <div className="cp-msg sent">
          <div className="cp-bubble">
            Здравствуйте, Я ознакомился с брифом работа понятная, начну после оплаты.
          </div>
        </div>

        {/* Sent Msg 2 */}
        <div className="cp-msg sent">
          <div className="cp-bubble">
            Стоимость заказа будет 2 млн. сум<br />Будет готово в среду вечером.
          </div>
        </div>

        {/* Received Msg 3 */}
        <div className="cp-msg received">
          <div className="cp-bubble">
            Хорошо! Выставляйте счёт, я оплачу только должно быть готово в среду.
          </div>
        </div>

        {/* Invoice Actions */}
        <div className="cp-action-msg">
          <div className="cp-invoice-card red-invoice">
            <span className="cp-inv-title">Выставлен счёт</span>
            <span className="cp-inv-amount">2 000 000 сум</span>
          </div>
        </div>

        <div className="cp-action-msg">
          <div className="cp-invoice-card green-invoice">
            <span className="cp-inv-title">Счёт оплачен</span>
            <span className="cp-inv-amount">2 000 000 сум</span>
          </div>
        </div>

        {/* Sent Msg 3 */}
        <div className="cp-msg sent">
          <div className="cp-bubble">
            Спасибо! Приступаю к работе
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="cp-input-area">
        <button className="cp-attach-btn"><IoAdd /></button>
        <div className="cp-input-wrap">
          <input type="text" placeholder="Сообщение" />
          <button className="cp-send-btn"><IoSend /></button>
        </div>
        <button className="cp-money-btn"><FaDollarSign /></button>
      </div>
    </div>
  )
}
