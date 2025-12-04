import { useRef, useEffect  } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function useAutoScroll (dependencies) {
    const containerRef = useRef(null);

    useEffect(() => {
        const containerElam = containerRef.current;
        if(containerElam){
            containerElam.scrollTop = containerElam.scrollHeight;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },dependencies);

    return containerRef;
}


export function ChatMessages({chatMessages}) {

    const chatMessagesRef = useAutoScroll([chatMessages]);

    return (
    <div
        className="chat-messages-container"
        ref={chatMessagesRef}
    >
        {chatMessages.map((chatMessage) => {
            return (
            <ChatMessage 
                message = {chatMessage.message}
                sender = {chatMessage.sender}
                time = {chatMessage.time}
                key = {chatMessage.id}
            />
            );
        })}
    </div>
  );
}


export default ChatMessages;