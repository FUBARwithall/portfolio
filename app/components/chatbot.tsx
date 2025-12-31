'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Reference for auto-scrolling
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setLoading(true);

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-black p-4 text-white shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {open && (
        /* Fixed height and width container */
        <div className="fixed bottom-6 right-6 z-50 w-80 h-[500px] max-h-[80vh] rounded-xl border bg-white shadow-2xl flex flex-col overflow-hidden">
          
          {/* Header - Stays at top */}
          <div className="flex items-center justify-between border-b px-4 py-3 bg-gray-50">
            <div className="flex flex-col">
              <span className="text-sm font-bold">Panji's Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} className="hover:bg-gray-200 p-1 rounded">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area - Scrollable */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-white"
          >
            {messages.length === 0 && (
              <p className="text-gray-400 text-center mt-10">Hi! Anything i can help you with?</p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                  m.role === 'user'
                    ? 'ml-auto bg-blue-600 text-white rounded-tr-none'
                    : 'mr-auto bg-gray-100 text-black rounded-tl-none border'
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="flex gap-1 items-center mr-auto bg-gray-100 p-2 rounded-lg border">
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
            )}
          </div>

          {/* Input Area - Stays at bottom */}
          <div className="border-t p-3 bg-white">
            <div className="flex gap-2">
              <input
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
              />
              <button
                disabled={loading}
                onClick={sendMessage}
                className="rounded-full bg-black px-4 py-2 text-white text-sm font-medium disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}