'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, X, Send, Bot, User, Car, Wrench, ShieldAlert, PhoneCall, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionButtons?: { label: string; action: () => void }[];
}

export default function SupportChatWidget() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hi there! Welcome to SR Multi Car Tech 🚗. How can our automotive team assist you today?',
      time: 'Just now'
    }
  ]);

  const addBotResponse = (text: string, actionButtons?: { label: string; action: () => void }[]) => {
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: String(Date.now()),
          sender: 'bot',
          text,
          time: 'Just now',
          actionButtons
        }
      ]);
    }, 450);
  };

  const handleQuickOption = (option: string) => {
    // Add user message
    setMessages(prev => [
      ...prev,
      {
        id: String(Date.now()),
        sender: 'user',
        text: option,
        time: 'Just now'
      }
    ]);

    if (option === 'Book a Service') {
      addBotResponse('Great! We offer Periodic Services, AC Repair, Tyres, Denting and more with free pickup & drop.', [
        { label: 'Go to Booking Form', action: () => { setIsOpen(false); router.push('/book-service'); } },
        { label: 'Browse Packages', action: () => { setIsOpen(false); router.push('/services'); } }
      ]);
    } else if (option === 'Track My Car') {
      addBotResponse('You can track your service live through all 7 stages with photos and technician updates.', [
        { label: 'Open Live Tracker', action: () => { setIsOpen(false); router.push('/track-service'); } }
      ]);
    } else if (option === 'Get a Price') {
      addBotResponse('Our services start at just ₹499 for inspection, ₹1,499 for periodic service, and ₹1,299 for AC gas refill. Enter your car model for an instant transparent estimate:', [
        { label: 'Select Car & View Prices', action: () => { setIsOpen(false); router.push('/select-car'); } }
      ]);
    } else if (option === 'Roadside Assistance') {
      addBotResponse('🚨 Need emergency rescue? We dispatch flatbed towing, puncture vans, and jumpstart units within 25 minutes.', [
        { label: 'Request Immediate SOS Help', action: () => { setIsOpen(false); router.push('/sos'); } },
        { label: 'Call Helpline (+91 95504 25789)', action: () => { window.location.href = 'tel:+919550425789'; } }
      ]);
    } else if (option === 'Talk to Support') {
      addBotResponse('Our support executive is available on WhatsApp and phone right away:', [
        { label: 'Chat on WhatsApp', action: () => { window.open('https://wa.me/919550425789', '_blank'); } },
        { label: 'Call 95504 25789', action: () => { window.location.href = 'tel:+919550425789'; } }
      ]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [
      ...prev,
      {
        id: String(Date.now()),
        sender: 'user',
        text: userText,
        time: 'Just now'
      }
    ]);

    const lower = userText.toLowerCase();
    if (lower.includes('ac') || lower.includes('gas') || lower.includes('cooling')) {
      addBotResponse('Our AC Service includes high-pressure leak testing, R134a eco refrigerant refill, and vent disinfection starting at ₹1,299.', [
        { label: 'View AC Service Details', action: () => { setIsOpen(false); router.push('/services/ac-gas-refill-inspection'); } }
      ]);
    } else if (lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
      addBotResponse('Our prices are 100% upfront with zero hidden charges. Basic service starts at ₹1,499 and Comprehensive at ₹3,999.', [
        { label: 'Browse All Prices', action: () => { setIsOpen(false); router.push('/services'); } }
      ]);
    } else if (lower.includes('track') || lower.includes('status') || lower.includes('srmct')) {
      addBotResponse('You can check live job progress using your Booking ID (e.g. SRMCT-10821) or mobile number:', [
        { label: 'Track Booking Now', action: () => { setIsOpen(false); router.push('/track-service'); } }
      ]);
    } else {
      addBotResponse('Thank you for reaching out! Our service advisors are ready to assist. You can also directly call or message us on WhatsApp:', [
        { label: 'Open WhatsApp Chat', action: () => { window.open('https://wa.me/919550425789', '_blank'); } },
        { label: 'View Booking Options', action: () => { setIsOpen(false); router.push('/book-service'); } }
      ]);
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-rose-600 text-white shadow-xl hover:bg-rose-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center glow-primary"
        title="SR Multi Car Tech Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Popover Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-40 w-[92vw] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[520px] animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">SR Multi Car Tech Support</div>
                <div className="text-[11px] text-rose-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online • AI Assistant Ready
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Option Pills */}
          <div className="p-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px] whitespace-nowrap">
            <button
              onClick={() => handleQuickOption('Book a Service')}
              className="px-2.5 py-1 rounded-full bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 font-medium text-slate-700 transition-all flex-shrink-0"
            >
              📅 Book a Service
            </button>
            <button
              onClick={() => handleQuickOption('Track My Car')}
              className="px-2.5 py-1 rounded-full bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 font-medium text-slate-700 transition-all flex-shrink-0"
            >
              🔍 Track My Car
            </button>
            <button
              onClick={() => handleQuickOption('Get a Price')}
              className="px-2.5 py-1 rounded-full bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 font-medium text-slate-700 transition-all flex-shrink-0"
            >
              🏷️ Get a Price
            </button>
            <button
              onClick={() => handleQuickOption('Roadside Assistance')}
              className="px-2.5 py-1 rounded-full bg-white border border-red-200 text-red-600 font-bold hover:bg-red-50 transition-all flex-shrink-0"
            >
              🚨 Roadside Assistance
            </button>
            <button
              onClick={() => handleQuickOption('Talk to Support')}
              className="px-2.5 py-1 rounded-full bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 font-medium text-slate-700 transition-all flex-shrink-0"
            >
              💬 Talk to Support
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-rose-600 text-white rounded-br-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}

                  {/* Optional Action Buttons attached to Bot message */}
                  {msg.actionButtons && msg.actionButtons.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-1.5">
                      {msg.actionButtons.map((btn, idx) => (
                        <button
                          key={idx}
                          onClick={btn.action}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-[11px] flex items-center justify-between transition-colors"
                        >
                          <span>{btn.label}</span>
                          <ChevronRight className="w-3 h-3 text-rose-500" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSendMessage} className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything about car service..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-100 border-none outline-none focus:ring-1 focus:ring-rose-500 text-slate-800 placeholder-slate-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 bg-rose-600 text-white rounded-xl hover:bg-rose-700 disabled:opacity-40 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
