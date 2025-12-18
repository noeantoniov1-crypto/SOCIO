import React, { useState } from 'react';
import { Calendar, Clock, Star, Check, X, ChevronRight, CalendarCheck } from 'lucide-react';
import { BookedSession } from '../types';

interface Props {
  onBookSession: (session: BookedSession) => void;
  bookedSessions: BookedSession[];
}

// Updated avatars to ensure consistent style (Avataaars v9 with pastel backgrounds)
const MENTORS = [
  { 
    id: 1, 
    name: 'Dr. Sarah Chen', 
    role: 'Organizational Sociologist', 
    bio: 'Expert in bureaucracy and innovation.', 
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah&backgroundColor=c0aede', 
    style: 'Academic & Precise' 
  },
  { 
    id: 2, 
    name: 'Marcus Aurelius', 
    role: 'Stoic Philosopher (AI)', 
    bio: 'Applying ancient wisdom to modern work.', 
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Marcus&backgroundColor=ffdfbf', 
    style: 'Philosophical & Deep' 
  },
  { 
    id: 3, 
    name: 'Elena Rodriguez', 
    role: 'HR Strategist', 
    bio: 'Practical advice for navigating corporate ladders.', 
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Elena&backgroundColor=b6e3f4', 
    style: 'Direct & Tactical' 
  },
];

const TIME_SLOTS = ["09:00 AM", "11:00 AM", "02:00 PM", "04:30 PM"];

const PremiumHub: React.FC<Props> = ({ onBookSession, bookedSessions }) => {
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      full: d.toISOString().split('T')[0],
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' })
    };
  });

  const handleBook = () => {
    if (selectedMentor && selectedDate && selectedTime) {
      const newSession: BookedSession = {
        mentorId: selectedMentor.id.toString(),
        date: selectedDate,
        timeSlot: selectedTime
      };
      
      onBookSession(newSession);
      setShowConfirmation(true);
      
      // Reset after animation
      setTimeout(() => {
        setShowConfirmation(false);
        setSelectedMentor(null);
        setSelectedDate(null);
        setSelectedTime(null);
      }, 2000);
    }
  };

  const isSlotBooked = (date: string, time: string, mentorId: string) => {
    return bookedSessions.some(s => 
      s.date === date && 
      s.timeSlot === time && 
      s.mentorId === mentorId.toString()
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
          <Star size={20} />
        </div>
        <h2 className="text-2xl font-black text-slate-900">Expert Mentorship</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {MENTORS.map(mentor => {
          // Check upcoming sessions for this mentor
          const upcoming = bookedSessions
            .filter(s => s.mentorId === mentor.id.toString())
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

          return (
            <div key={mentor.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-indigo-300 transition-colors shadow-sm shrink-0">
                   <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">{mentor.name}</h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mt-1">{mentor.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-grow">{mentor.bio}</p>
              
              {upcoming ? (
                <div className="mb-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-3">
                   <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                     <CalendarCheck size={14} />
                   </div>
                   <div>
                     <div className="text-[10px] font-bold text-emerald-800 uppercase">Next Session</div>
                     <div className="text-xs font-semibold text-emerald-700">
                       {new Date(upcoming.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {upcoming.timeSlot}
                     </div>
                   </div>
                </div>
              ) : null}

              <button 
                onClick={() => setSelectedMentor(mentor)}
                className="w-full py-3 bg-slate-50 text-slate-900 rounded-xl font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={16} /> Book Session
              </button>
            </div>
          );
        })}
      </div>

      {/* Booking Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedMentor(null)}></div>
          
          <div className="bg-white rounded-[2rem] w-full max-w-2xl relative overflow-hidden animate-scale-in shadow-2xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img src={selectedMentor.image} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Book with {selectedMentor.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">Select a date and time for your 1-on-1 session</p>
                  </div>
               </div>
               <button onClick={() => setSelectedMentor(null)} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                 <X size={20} className="text-slate-400" />
               </button>
            </div>

            {/* Body */}
            {showConfirmation ? (
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center animate-fade-in">
                 <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-scale-in">
                   <Check size={48} strokeWidth={3} />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-2">Session Confirmed!</h3>
                 <p className="text-slate-500">You are booked with {selectedMentor.name} on {new Date(selectedDate!).toLocaleDateString()} at {selectedTime}.</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                {/* Date Picker */}
                <div>
                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                     <Calendar size={14} /> Select Date
                   </h4>
                   <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar snap-x">
                     {dates.map((d, i) => (
                       <button
                         key={i}
                         onClick={() => { setSelectedDate(d.full); setSelectedTime(null); }}
                         className={`snap-start min-w-[70px] p-3 rounded-2xl border transition-all flex flex-col items-center gap-1
                           ${selectedDate === d.full 
                             ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105' 
                             : 'bg-white border-slate-100 text-slate-600 hover:border-indigo-200 hover:bg-slate-50'}
                         `}
                       >
                         <span className="text-[10px] font-bold uppercase opacity-80">{d.day}</span>
                         <span className="text-xl font-black">{d.date}</span>
                         <span className="text-[10px] font-bold opacity-60">{d.month}</span>
                       </button>
                     ))}
                   </div>
                </div>

                {/* Time Picker */}
                <div className={`transition-opacity duration-300 ${selectedDate ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                     <Clock size={14} /> Select Time
                   </h4>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                     {TIME_SLOTS.map(time => {
                       const booked = selectedDate ? isSlotBooked(selectedDate, time, selectedMentor.id) : false;
                       return (
                         <button
                           key={time}
                           disabled={booked}
                           onClick={() => setSelectedTime(time)}
                           className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all text-center
                             ${selectedTime === time 
                               ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' 
                               : booked
                                 ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed decoration-slate-300 line-through'
                                 : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50'}
                           `}
                         >
                           {time}
                         </button>
                       );
                     })}
                   </div>
                </div>
              </div>
            )}

            {/* Footer */}
            {!showConfirmation && (
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={handleBook}
                  disabled={!selectedDate || !selectedTime}
                  className="px-8 py-3 bg-indigo-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-200"
                >
                   Confirm Booking <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumHub;