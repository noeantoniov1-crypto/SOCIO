import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Lesson } from '../types';
import { Send, Sparkles, X, ChevronDown, Minimize2, Maximize2, Loader2, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Props {
  activeLesson?: Lesson;
  mentor?: any; // Simplified type
  onMentorClear?: () => void;
  isPremium: boolean;
  onRequestUpgrade?: () => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC<Props> = ({ activeLesson, mentor, onMentorClear, isPremium, onRequestUpgrade }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: mentor 
      ? `Hello! I am ${mentor.name}. How can I help you with your sociology studies today?` 
      : "Hi! I'm your SocioLearn tutor. Ask me anything about the current lesson!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) throw new Error("API Key missing");
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const context = activeLesson 
        ? `Current Context: Lesson "${activeLesson.title}". Summary: ${activeLesson.summaryBullets.join('. ')}. Key Terms: ${JSON.stringify(activeLesson.keyTerms)}.`
        : "General Sociology Context.";
        
      const systemPrompt = mentor 
        ? `You are ${mentor.name}, a ${mentor.role}. ${mentor.bio}. Tone: ${mentor.style}. ${context}`
        : `You are a helpful sociology tutor. ${context} Keep answers concise and encouraging.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            { role: 'user', parts: [{ text: `System: ${systemPrompt}\n\nUser: ${userMsg}` }] }
        ]
      });

      const text = response.text || "I couldn't generate a response. Please try again.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting to the knowledge base right now." }]);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      >
        <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl z-50 flex flex-col border border-slate-100 animate-scale-in overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
            {mentor ? <img src={mentor.image} className="w-full h-full rounded-full object-cover" /> : <Bot size={20} />}
          </div>
          <div>
            <div className="font-bold text-sm">{mentor ? mentor.name : 'SocioBot'}</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">AI Tutor</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
           {mentor && (
             <button onClick={onMentorClear} className="p-1 hover:bg-slate-800 rounded text-slate-400" title="Switch Mentor">
               <X size={14} />
             </button>
           )}
           <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-slate-800 rounded">
             <ChevronDown size={20} />
           </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none border border-slate-100 prose-chat'
            }`}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-100 flex items-center gap-2 text-slate-400 text-xs">
               <Loader2 size={14} className="animate-spin" /> Thinking...
             </div>
          </div>
        )}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={isPremium ? "Ask about this concept..." : "Upgrade to unlock unlimited AI..."}
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            disabled={!isPremium && messages.length > 5}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading || (!isPremium && messages.length > 5)}
            className="absolute right-2 top-2 p-1.5 bg-indigo-600 text-white rounded-lg disabled:opacity-50 hover:bg-indigo-500 transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
        {!isPremium && messages.length > 5 && (
           <div className="mt-2 text-center">
             <button onClick={onRequestUpgrade} className="text-xs font-bold text-indigo-600 hover:underline">
               Free limit reached. Upgrade to continue.
             </button>
           </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;