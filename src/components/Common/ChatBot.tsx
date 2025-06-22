"use client";
import { useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm LogiBrix Assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");

  const botResponses = {
    pricing: "Our pricing starts from ₹15,000 for static websites, ₹35,000 for e-commerce, and ₹75,000 for custom applications. Would you like more details about any specific service?",
    services: "We offer Static Website Development (₹15K), E-commerce Development (₹35K), Dynamic Web Applications (₹75K), and Domain & Hosting services (₹199/month). Which service interests you?",
    contact: "You can reach us at:\n📧 hello@logibrix.in\n📞 +91-8358952017\nOr use our contact form on the website!",
    about: "LogiBrix is a premium web development agency with 100+ successful projects and 98% client satisfaction. We specialize in modern, responsive websites for businesses of all sizes.",
    timeline: "Typical project timelines:\n• Static Website: 5-7 days\n• E-commerce: 10-15 days\n• Custom App: 20-30 days\nTimelines may vary based on complexity.",
    support: "We provide 3-6 months free support depending on your package, plus 24/7 technical assistance. After that, maintenance packages start from ₹2,000/month.",
    default: "I can help you with information about our services, pricing, contact details, project timelines, or support. What would you like to know?"
  };

  const getResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("₹")) {
      return botResponses.pricing;
    } else if (lowerInput.includes("service") || lowerInput.includes("what do you")) {
      return botResponses.services;
    } else if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("email")) {
      return botResponses.contact;
    } else if (lowerInput.includes("about") || lowerInput.includes("company") || lowerInput.includes("logibrix")) {
      return botResponses.about;
    } else if (lowerInput.includes("time") || lowerInput.includes("how long") || lowerInput.includes("duration")) {
      return botResponses.timeline;
    } else if (lowerInput.includes("support") || lowerInput.includes("help") || lowerInput.includes("maintenance")) {
      return botResponses.support;
    } else {
      return botResponses.default;
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isBot: false };
    const botMessage = { text: getResponse(inputValue), isBot: true };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-16 left-4 z-40 group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-blue-700"
          aria-label="Open Chat"
        >
          {isOpen ? (
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
        
        {/* Tooltip */}
        <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          LogiBrix Assistant
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 left-4 z-40 w-80 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">LB</span>
              </div>
              <div>
                <h3 className="font-semibold">LogiBrix Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    message.isBot
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;