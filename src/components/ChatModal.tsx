import { useState, useRef, useEffect } from "react";
import { Send, X, Bot, User } from "lucide-react";

// Define the type for a single message
interface Message {
  sender: "user" | "ai";
  text: string;
}

// Define the props for the ChatModal
interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      
      // Simulate typing delay for better UX
      setTimeout(() => {
        const aiMessage: Message = { sender: "ai", text: data.reply };
        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      }, 800);
    } catch (err) {
      setTimeout(() => {
        const errorMsg: Message = { sender: "ai", text: "Oops! Something went wrong." };
        setMessages((prev) => [...prev, errorMsg]);
        setIsTyping(false);
      }, 800);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg flex flex-col overflow-hidden transform transition-all duration-300 scale-100 animate-in zoom-in-95"
        style={{ height: "600px", maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white px-6 py-4 flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">AI Assistant</h3>
              <p className="text-xs text-white/90">Always here to help</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-white">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <Bot className="w-16 h-16 mb-3 opacity-50" />
              <p className="text-sm">Ask anything you need to know about Thembelihle</p>
            </div>
          )}
          
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 animate-in slide-in-from-bottom-3 duration-300 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              
              <div
                className={`max-w-[75%] px-5 py-3 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg ${
                  msg.sender === "user"
                    ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-tr-sm"
                    : "bg-white text-gray-800 rounded-tl-sm border border-gray-100"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
              
              {msg.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center flex-shrink-0 shadow-md">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 animate-in slide-in-from-bottom-3 duration-300">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white text-gray-800 px-5 py-3 rounded-2xl rounded-tl-sm shadow-md border border-gray-100">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200 shadow-lg">
          <div className="flex gap-2 items-end">
            <div className="flex-1 relative">
              <input
                className="w-full border-2 border-gray-200 rounded-2xl px-5 py-3 pr-12 focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all duration-200 text-sm"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:via-yellow-600 hover:to-orange-600 disabled:from-gray-300 disabled:via-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white w-12 h-12 rounded-2xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo wrapper to show the modal
export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:via-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Open Chat
      </button>
      
      <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}