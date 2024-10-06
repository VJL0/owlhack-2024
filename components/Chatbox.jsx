"use client"; 
import {createChatMessage} from "@/app/actions"
import { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: 'user' };
    setInputValue('');
    setMessages((prev) => [...prev, userMessage]);
    
    // Call the server action
    const response = await createChatMessage(inputValue)

    setMessages((prev) => [...prev, { text: response, sender: 'bot' }]);
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow min-h-80 ">
      <div className="space-y-1.5 p-6 flex flex-row items-center">
        <div className="flex items-center space-x-4">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <img className="aspect-square h-full w-full" alt="Avatar" src="avatar.jpeg" />
          </span>
          <div>
            <p className="text-sm font-medium leading-none">Bobby</p>
            {/* <p className="text-sm text-muted-foreground">m@example.com</p> */}
          </div>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ${msg.sender === 'user' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted'}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center p-6 pt-0">
        <form className="flex w-full items-center space-x-2" onSubmit={handleSubmit}>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 w-9"
            type="submit"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
              <path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
