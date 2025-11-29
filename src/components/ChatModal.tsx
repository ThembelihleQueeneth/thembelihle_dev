import { useState, useRef, useEffect } from "react";

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const aiMessage: Message = { sender: "ai", text: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMsg: Message = { sender: "ai", text: "Oops! Something went wrong." };
      setMessages((prev) => [...prev, errorMsg]);
    }

    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-yellow-500 text-white font-semibold px-4 py-3 flex justify-between items-center">
          <span>Chat with AI</span>
          <button onClick={onClose} className="text-white hover:text-gray-200 font-bold">&times;</button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-yellow-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                } shadow`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input */}
        <div className="flex p-3 bg-white border-t border-gray-200 gap-2">
          <input
            className="flex-1 border rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-2xl transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
