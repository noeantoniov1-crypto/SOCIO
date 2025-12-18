import React from 'react';
import { User, ProgressStore, ProgressData } from '../types';
import { LogOut, Calendar, Award, Star, BookOpen, CheckCircle, TrendingUp } from 'lucide-react';
import { COURSES } from '../data/content';

interface Props {
  user: User;
  progress: ProgressStore;
  onLogout: () => void;
  onNavigateToCourse: (id: string) => void;
}

const ProfileView: React.FC<Props> = ({ user, progress, onLogout, onNavigateToCourse }) => {
  
  // Calculate detailed stats based on progress object
  const completedLessons = Object.entries(progress)
    .filter(([key, val]) => {
        // Filter out non-lesson keys
        if (key === 'user' || key === 'isPremium' || key === 'bookedSessions') return false;
        // Check if lesson is completed (watched + scenario)
        const p = val as ProgressData;
        return p.watched && p.scenarioCompleted;
    })
    .map(([lessonId, val]) => {
        const p = val as ProgressData;
        // Find lesson details
        const course = COURSES.find(c => c.lessons.some(l => l.id === lessonId));
        const lesson = course?.lessons.find(l => l.id === lessonId);
        
        return {
            id: lessonId,
            title: lesson?.title || 'Unknown Lesson',
            courseTitle: course?.title || 'Unknown Course',
            score: p.quizScore || 0,
            stars: p.stars || 0,
            date: new Date(p.lastUpdated).toLocaleDateString()
        };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Most recent first

  const totalScore = completedLessons.reduce((acc, curr) => acc + curr.score, 0);
  const averageScore = completedLessons.length > 0 ? Math.round(totalScore / completedLessons.length) : 0;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header Profile Card */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-8 text-center md:text-left animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-20 -mt-20 opacity-50 pointer-events-none"></div>
        
        <div className="relative">
            <img src={user.avatar} className="w-32 h-32 rounded-3xl bg-slate-100 border-4 border-white shadow-lg" />
            <div className="absolute -bottom-3 -right-3 bg-indigo-600 text-white p-2 rounded-xl shadow-lg">
                <Award size={20} />
            </div>
        </div>
        
        <div className="flex-1 relative z-10">
          <h1 className="text-3xl font-black text-slate-900 mb-2">{user.name}</h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-500 font-medium">
             <span className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-lg"><Calendar size={14} /> Member since {user.joinDate}</span>
             <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg border border-emerald-100"><CheckCircle size={14} /> Active Scholar</span>
          </div>
        </div>
        
        <button 
          onClick={onLogout}
          className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors flex items-center gap-2 shadow-sm"
        >
          <LogOut size={18} /> Sign Out
        </button>
      </div>
      
      {/* Stats Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center shadow-sm">
           <div className="text-3xl font-black text-indigo-600 mb-1">
             {Object.keys(progress).filter(k => k !== 'user' && k !== 'isPremium' && k !== 'bookedSessions').length}
           </div>
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Lessons Started</div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center shadow-sm">
           <div className="text-3xl font-black text-emerald-500 mb-1">{completedLessons.length}</div>
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completed</div>
        </div>
         <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center shadow-sm">
           <div className="text-3xl font-black text-amber-500 mb-1">{user.streak}</div>
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Day Streak</div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center shadow-sm">
           <div className="text-3xl font-black text-blue-500 mb-1">{averageScore}%</div>
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg. Score</div>
        </div>
      </div>

      {/* Academic Transcript / Completed Lessons List */}
      <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <BookOpen size={24} className="text-indigo-600" />
            Academic Transcript
        </h2>
        
        {completedLessons.length === 0 ? (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center text-slate-400">
                <p className="font-bold">No completed lessons yet.</p>
                <p className="text-sm mt-2">Start a course to see your grades here.</p>
            </div>
        ) : (
            <div className="space-y-4">
                {completedLessons.map((item) => (
                    <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 transition-transform hover:scale-[1.01]">
                        <div className="flex-1 text-center md:text-left">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{item.courseTitle}</div>
                            <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                            <div className="text-xs text-slate-400 mt-1">Completed on {item.date}</div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            {/* Stars */}
                            <div className="flex gap-1">
                                {[1, 2, 3].map(s => (
                                    <Star 
                                        key={s} 
                                        size={18} 
                                        className={s <= item.stars ? "fill-amber-400 text-amber-400" : "text-slate-200"}
                                    />
                                ))}
                            </div>
                            
                            {/* Score Badge */}
                            <div className={`
                                px-4 py-2 rounded-xl font-black text-lg min-w-[80px] text-center
                                ${item.score >= 90 ? 'bg-emerald-100 text-emerald-700' : 
                                  item.score >= 70 ? 'bg-indigo-100 text-indigo-700' : 'bg-amber-100 text-amber-700'}
                            `}>
                                {item.score}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default ProfileView;