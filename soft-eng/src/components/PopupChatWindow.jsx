import React, { useState } from 'react';
import logoIcon from '../assets/se.png'
import closeButton from '../assets/closeButton.png';
import sendButtonImage from '../assets/sendButton.png'; // Ensure this is the correct path
import chatBotIcon from '../assets/Chatbot.png';

function PopupChatWindow() {
  const [showChat, setShowChat] = useState(false);

  const toggleForm = () => {
    setShowChat(!showChat);
  };

  const sendMessage = () => {
    console.log("Message sent!");
  };

  return (
    <div className={`fixed bottom-16 right-2`}>
      <img src={chatBotIcon} alt="Chatbot Icon" className={`w-12 h-12 fixed bottom-4 right-4 cursor-pointer`} onClick={toggleForm} />
      <div className={`chat-popup transform transition-all duration-300 ease-in-out ${showChat ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} right-2 bg-white shadow-xl rounded-md overflow-hidden z-10`}
           style={{ width: '390px', height: '535px', bottom: 'calc(100px + 4rem * ${showChat ? 1 : 0})'}}>
        <div className="chat-header bg-blue-700 text-white p-4 rounded-t-md flex justify-between items-center" style={{height: '50px'}}>
          <div className="chat-header-content flex items-center">
            <img src={logoIcon} alt="Logo" className="w-12 mr-2" />
            <div>
              <span className="block font-semibold">3MV CONSTRUCTION</span>
              <span className="text-xs mt-0.5">Chatbot Support</span>
            </div>
          </div>
          <img src={closeButton} alt="Close" className="w-8 h-8 cursor-pointer" onClick={toggleForm} />
        </div>
        <div className="chat-messages p-4 flex-1 overflow-y-auto" style={{ borderTop: '1px solid #ccc' }}>
          {/* Add your chat messages here */}
        </div>
        <div className="absolute bottom-0 w-full bg-white" style={{ borderTop: '1px solid #ccc', padding: '5px', borderRadius: '0 0 8px 8px' }}>
          <div className="flex justify-between items-center" style={{ height: '40px' }}>
            <textarea placeholder="Type a message..." name="msg" required className="flex-1 p-2 border-0 rounded-none resize-none outline-none"
                      style={{ height: '30px', borderRadius: '4px', overflowY: 'scroll', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', lineHeight: 'normal', paddingTop: '5px', textAlign: 'left' }}></textarea>
            <img src={sendButtonImage} alt="Send" className="cursor-pointer" onClick={sendMessage} style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupChatWindow;
