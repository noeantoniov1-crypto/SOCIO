
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { COURSES } from './data/content';
import { Lesson, Course, ProgressStore, ProgressData, BookedSession, User } from './types';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import CourseCard from './components/CourseCard';
import Chatbot from './components/Chatbot';
import SubscriptionModal from './components/SubscriptionModal';
import PremiumHub from './components/PremiumHub';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ProfileView from './components/ProfileView';
import { Search, BookOpen, RotateCcw, PlayCircle, GraduationCap, Award, Sparkles, TrendingUp, ChevronDown, Diamond, Zap, Lock, User as UserIcon } from 'lucide-react';

const Logo = ({ onClick }: { onClick?: () => void }) => (
  <div className="flex items-center gap-4 group cursor-pointer" onClick={onClick}>
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(79,70,229,0.4)] group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
        <div className="relative">
          <GraduationCap className="text-white relative z-10" size={20} />
          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 scale-110"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-lg font-black text-slate-900 tracking-tighter leading-none flex items-center gap-1">
        SOCIOS
        <span className="text-indigo-600 font-medium tracking-widest text-[9px] bg-indigo-50 px-1.5 py-0.5 rounded ml-1 uppercase">ACADEMY</span>
      </span>
      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Professional Certification</span>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentCourseId, setCurrentCourseId] = useState<string | null>(null);
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [view, setView] = useState<'HOME' | 'PROFILE'>('HOME');
  const [progress, setProgress] = useState<ProgressStore>({ isPremium: false, bookedSessions: [] });
  const [showSubModal, setShowSubModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  
  const syllabusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('sociolearn_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProgress({ 
          ...parsed, 
          isPremium: parsed.isPremium ?? false,
          bookedSessions: parsed.bookedSessions || []
        });
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(progress).length > 0) {
      localStorage.setItem('sociolearn_progress', JSON.stringify(progress));
    }
  }, [progress]);

  const updateProgress = (lessonId: string, updates: Partial<ProgressData>) => {
    setProgress(prev => {
      const currentData = (prev[lessonId] as ProgressData) || { 
        watched: false, 
        quizScore: 0, 
        scenarioCompleted: false, 
        completedScenarios: [], 
        lastUpdated: Date.now() 
      };
      
      return {
        ...prev,
        [lessonId]: {
          ...currentData,
          ...updates,
          lastUpdated: Date.now()
        }
      };
    });
  };

  const handleSubscribe = () => {
    setProgress(prev => ({ ...prev, isPremium: true } as ProgressStore));
    setShowSubModal(false);
  };

  const handleLogin = (name: string, email: string) => {
    // Generate a consistent avatar based on the name
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.replace(' ', '')}&backgroundColor=b6e3f4`;
    
    const newUser: User = {
      name,
      email,
      avatar: avatarUrl,
      joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      streak: Math.floor(Math.random() * 5) + 1 // Start with a small random streak for realism
    };
    setProgress(prev => ({ ...prev, user: newUser }));
    setShowAuthModal(false);
    
    // Optional: Redirect to profile or show a welcome toast
  };

  const handleLogout = () => {
    setProgress(prev => {
      const { user, ...rest } = prev;
      return rest;
    });
    setView('HOME');
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all training data? This cannot be undone.")) {
      setProgress({ isPremium: false, bookedSessions: [] });
      localStorage.removeItem('sociolearn_progress');
      window.location.reload();
    }
  };

  const currentCourse = useMemo(() => COURSES.find(c => c.id === currentCourseId), [currentCourseId]);
  const currentLesson = useMemo(() => 
    currentCourse?.lessons.find(l => l.id === currentLessonId), 
    [currentCourse, currentLessonId]
  );

  const getCourseProgress = (course: Course) => {
    const total = course.lessons.length;
    const completed = course.lessons.filter(l => {
      const p = progress[l.id] as ProgressData | undefined;
      return p?.watched && p?.scenarioCompleted;
    }).length;
    return Math.round((completed / total) * 100);
  };

  const allLessons = useMemo(() => COURSES.flatMap(c => c.lessons.map(l => ({ ...l, courseId: c.id, courseTitle: c.title }))), []);
  
  const resumeLesson = () => {
    const sorted = (Object.entries(progress) as [string, any][])
      .filter(e => e[0] !== 'isPremium' && e[0] !== 'bookedSessions' && e[0] !== 'user')
      .sort((a, b) => (b[1]?.lastUpdated || 0) - (a[1]?.lastUpdated || 0));
      
    if (sorted.length > 0) {
      const lastId = sorted[0][0];
      const found = allLessons.find(l => l.id === lastId);
      if (found) {
        setCurrentCourseId(found.courseId);
        setCurrentLessonId(found.id);
      }
    } else {
      if (COURSES.length > 0 && COURSES[0].lessons.length > 0) {
        setCurrentCourseId(COURSES[0].id);
        setCurrentLessonId(COURSES[0].lessons[0].id);
      }
    }
  };

  const handleBookSession = (session: BookedSession) => {
    setProgress(prev => ({
      ...prev,
      bookedSessions: [...(prev.bookedSessions || []), session]
    }));
  };

  // Keep this for when we implement the chat from the session list in future
  const handleMentorChat = (mentor: any) => {
    if (!progress.isPremium) {
      setShowSubModal(true);
    } else {
      setSelectedMentor(mentor);
    }
  };

  if (currentCourse && currentLesson) {
    return (
      <div className="flex h-screen overflow-hidden bg-white animate-fade-in font-['Plus_Jakarta_Sans'] relative">
        <Sidebar 
          course={currentCourse} 
          currentLessonId={currentLessonId} 
          progress={progress}
          onSelectLesson={setCurrentLessonId}
          onBack={() => {
            setCurrentCourseId(null);
            setCurrentLessonId(null);
          }}
        />
        <main className="flex-1 overflow-y-auto hide-scrollbar bg-slate-50/50">
          <LessonView 
            lesson={currentLesson} 
            progress={progress[currentLesson.id] as ProgressData | undefined}
            onUpdateProgress={(updates) => updateProgress(currentLesson.id, updates)}
            onNext={() => {
              const idx = currentCourse.lessons.findIndex(l => l.id === currentLessonId);
              if (idx < currentCourse.lessons.length - 1) {
                setCurrentLessonId(currentCourse.lessons[idx + 1].id);
              }
            }}
          />
        </main>
        <Chatbot activeLesson={currentLesson} isPremium={progress.isPremium} />
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fade-in font-['Plus_Jakarta_Sans'] bg-[#fcfdfe] relative flex flex-col">
      <header className="sticky top-0 z-40 w-full glass border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo onClick={() => setView('HOME')} />
          <div className="flex items-center gap-6">
             {progress.isPremium && (
               <div className="hidden lg:flex items-center gap-2 bg-slate-900 px-4 py-1.5 rounded-xl border border-slate-800 text-amber-400 text-[10px] font-black uppercase tracking-widest shadow-xl animate-scale-in">
                 <Diamond size={12} fill="currentColor" /> Premium
               </div>
             )}
             
             {progress.user ? (
               <div className="flex items-center gap-4">
                  <div className="hidden md:flex flex-col items-end mr-2">
                    <span className="text-xs font-black text-slate-900 leading-none mb-1">{progress.user.name}</span>
                    <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Active Scholar</span>
                  </div>
                  <button 
                    onClick={() => setView(view === 'PROFILE' ? 'HOME' : 'PROFILE')}
                    className={`w-12 h-12 rounded-2xl p-0.5 border-2 transition-all ${view === 'PROFILE' ? 'border-indigo-600' : 'border-slate-100 hover:border-indigo-100'}`}
                  >
                    <img src={progress.user.avatar} className="w-full h-full object-cover rounded-[0.9rem]" />
                  </button>
               </div>
             ) : (
               <button 
                onClick={() => setShowAuthModal(true)}
                className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-500 transition-all flex items-center gap-2"
               >
                 <UserIcon size={14} /> Join Academy
               </button>
             )}

             <button 
                onClick={resetProgress}
                className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300 group"
                title="Reset Academy Progress"
              >
                <RotateCcw size={18} className="group-hover:-rotate-45 transition-transform" />
              </button>
          </div>
        </div>
      </header>

      {view === 'PROFILE' && progress.user ? (
        <main className="flex-grow">
          <ProfileView 
            user={progress.user} 
            progress={progress} 
            onLogout={handleLogout}
            onNavigateToCourse={(id) => {
              setCurrentCourseId(id);
              setCurrentLessonId(COURSES.find(c => c.id === id)?.lessons[0].id || null);
              setView('HOME');
            }}
          />
        </main>
      ) : (
        <main className="flex-grow max-w-7xl mx-auto px-6 pt-8 pb-20">
          {/* Main Hero Section */}
          <section className="mb-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-[2.5rem] p-10 md:p-14 text-white overflow-hidden relative shadow-2xl shadow-indigo-100">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full text-indigo-200 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-white/10 shadow-inner">
                <Sparkles size={12} className="text-amber-400" />
                Academic Excellence 2024
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                Master the Science of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Human Connection.</span>
              </h1>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium max-w-lg">
                Enroll in Socios Academy to decode organizational complexity and build resilient social structures.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={resumeLesson}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-indigo-500 hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-indigo-900/40 group"
                >
                  <PlayCircle size={20} className="group-hover:translate-x-1 transition-transform" />
                  {Object.keys(progress).filter(k => k !== 'isPremium' && k !== 'bookedSessions' && k !== 'user').length > 0 ? "Continue Program" : "Enroll Now"}
                </button>
                
                {!progress.isPremium && (
                  <button 
                    onClick={() => setShowSubModal(true)}
                    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-white/10 transition-all shadow-xl"
                  >
                    <Diamond size={18} className="text-amber-400" />
                    Upgrade to Premium
                  </button>
                )}
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-[radial-gradient(circle_at_60%_40%,#4f46e5,transparent)] pointer-events-none"></div>
            <div className="hidden lg:block absolute -right-10 -bottom-10 opacity-10">
              <GraduationCap size={300} />
            </div>
          </section>

          {/* Premium Banner logic for Free users */}
          {!progress.isPremium && (
            <div className="mb-12 p-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 rounded-[2rem] shadow-xl animate-fade-up">
              <div className="bg-white rounded-[1.9rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                    <Diamond size={120} />
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shadow-inner">
                      <Zap size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">Unlock Academy Prime</h3>
                      <p className="text-slate-400 text-sm font-medium">Get expert mentors & the complete reading library for $19.99/mo</p>
                    </div>
                </div>
                <button 
                  onClick={() => setShowSubModal(true)}
                  className="px-10 py-4 bg-amber-500 text-white rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-amber-200 hover:scale-105 active:scale-95 transition-all"
                >
                  Go Premium
                </button>
              </div>
            </div>
          )}

          {/* Premium Hub - ONLY rendered for Premium Users */}
          {progress.isPremium && (
            <div className="mb-16 scroll-mt-24 animate-fade-in">
              <PremiumHub 
                onBookSession={handleBookSession}
                bookedSessions={progress.bookedSessions || []}
              />
            </div>
          )}

          {/* Syllabus Section (FREE for everyone) */}
          <div ref={syllabusRef} className="mb-24 scroll-mt-24">
            <div className="flex items-center justify-between mb-8 animate-fade-up">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Standard Curriculum</h2>
                  <p className="text-slate-400 text-[10px] font-black mt-1 uppercase tracking-widest">Free Core Modules</p>
                </div>
              </div>
              <BookOpen className="text-indigo-100 hidden sm:block" size={28} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.map((course, idx) => (
                <div key={course.id} className={`animate-fade-up stagger-${(idx % 3) + 1}`}>
                  <CourseCard 
                    course={course} 
                    progress={getCourseProgress(course)}
                    progressStore={progress}
                    onClick={() => {
                      setCurrentCourseId(course.id);
                      setCurrentLessonId(course.lessons[0].id);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      <Footer />

      {/* Modals */}
      {showSubModal && (
        <SubscriptionModal onClose={() => setShowSubModal(false)} onSubscribe={handleSubscribe} />
      )}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} onLogin={handleLogin} />
      )}

      {/* Persona-aware Chatbot - Only if selectedMentor is set, which we might use later for post-booking chat */}
      <Chatbot 
        activeLesson={currentLesson} 
        mentor={selectedMentor} 
        onMentorClear={() => setSelectedMentor(null)} 
        isPremium={progress.isPremium}
        onRequestUpgrade={() => setShowSubModal(true)}
      />
    </div>
  );
};

export default App;