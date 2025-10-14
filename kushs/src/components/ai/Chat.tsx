import React, { useState, useRef, useEffect } from 'react';
import '../../css/ai/chat.scss';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ClaudeResponse {
  content: Array<{
    type: string;
    text: string;
  }>;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const isProduction = !window.location.hostname.includes('localhost');
    setDebugInfo(isProduction
      ? 'Production mode: Chat requires local development server'
      : 'Development mode: Using backend proxy at http://localhost:8000/api/chat'
    );
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Check if we're in production (deployed to GitHub Pages)
      const isProduction = !window.location.hostname.includes('localhost');
      
      if (isProduction) {
        throw new Error('Chat is only available in development mode. Run "npm start" locally to use the chat feature.');
      }

      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const requestPayload = {
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [
          ...conversationHistory,
          {
            role: 'user',
            content: userMessage.content
          }
        ]
      };

      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestPayload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API request failed: ${response.status}`);
      }

      const data: ClaudeResponse = await response.json();
      const assistantContent = data.content[0]?.text || 'No response received';

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: assistantContent,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat with Claude</h1>
        <button 
          onClick={clearChat} 
          className="clear-button"
          disabled={messages.length === 0}
        >
          Clear Chat
        </button>
      </div>

      {error && (
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
      )}

      {debugInfo && (
        <div className="debug-info">
          <strong>Debug:</strong> {debugInfo}
        </div>
      )}

      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="welcome-message">
            <h3>Welcome to Claude Chat!</h3>
            <p>Start a conversation by typing a message below.</p>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`message ${message.role}`}>
              <div className="message-content">
                <div className="message-text">{message.content}</div>
                <div className="message-time">{formatTime(message.timestamp)}</div>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="message assistant loading">
            <div className="message-content">
              <div className="message-text">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here... (Enter to send, Shift+Enter for new line)"
          disabled={isLoading}
          rows={1}
          style={{ 
            minHeight: '40px',
            maxHeight: '120px',
            resize: 'none',
            overflow: 'auto'
          }}
        />
        <button 
          onClick={sendMessage} 
          disabled={!input.trim() || isLoading}
          className="send-button"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chat;