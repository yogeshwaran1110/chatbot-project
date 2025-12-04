import { useState, useEffect} from 'react'
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput';
import ChatMessages  from './components/ChatMessages';
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [] );
  // const {chatMessages, setChatMessages} = arrey;
  // const chatMessages = arrey[0];
  // const setChatMessages = arrey[1]
  
  useEffect(() => {
    Chatbot.addResponses({
      'goodbye' : 'Goodbye. Have a great day!',
      'give me unique id' : function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });
    
  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.

  },[]);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);


  return (
    <div className="app-conatiner"> 
      {chatMessages.length === 0 && (
          <p className="welcome-message">
              Welcome to the chatbot project! Send a message using the textbox below.
          </p>
      )}
        
      <ChatMessages
        chatMessages={chatMessages}
      />  
      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages= {setChatMessages}
      />          
    </div>
  );
}

export default App
