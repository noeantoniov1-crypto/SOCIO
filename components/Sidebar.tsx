import React from 'react';
import { Course, ProgressStore, ProgressData } from '../types';
import { ChevronLeft, Play, Check, Lock } from 'lucide-react';

interface Props {
  course: Course;
  currentLessonId: string | null;
  progress: ProgressStore;
  onSelectLesson: (id: string) => void;
  onBack: () => void;
}

const Sidebar: React.FC<Props> = ({ course, currentLessonId, progress, onSelectLesson, onBack }) => {
  return (
    <div className="w-80 h-full bg-white border-r border-slate-100 flex flex-col shrink-0 z-20">
      <div className="p-6 border-b border-slate-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-900 text-xs font-bold uppercase tracking-widest mb-6 transition-colors"
        >
          <ChevronLeft size={14} /> Back to Hub
        </button>
        <h2 className="text-xl font-black text-slate-900 leading-tight">{course.title}</h2>
        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
           <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md">{course.lessons.length} Modules</span>
           <span>•</span>
           <span>Sociology</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto hide-scrollbar p-4 space-y-3">
        {course.lessons.map((lesson, idx) => {
          const lessonProgress = progress[lesson.id] as ProgressData | undefined;
          
          // Logic: Locked if NOT Premium AND previous lesson not completed
          const isLocked = !progress.isPremium && idx > 0 && !((progress[course.lessons[idx - 1].id] as ProgressData)?.scenarioCompleted);
          
          const isActive = currentLessonId === lesson.id;
          const isCompleted = lessonProgress?.scenarioCompleted;

          return (
            <button
              key={lesson.id}
              disabled={isLocked}
              onClick={() => onSelectLesson(lesson.id)}
              className={`w-full text-left p-4 rounded-2xl transition-all duration-300 relative group
                ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-[1.02]' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-100 hover:border-slate-200'}
                ${isLocked ? 'opacity-60 cursor-not-allowed grayscale' : ''}
              `}
            >
              {/* Petit cercle en haut à droite (Status Indicator) */}
              <div className={`
                absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold border transition-colors
                ${isActive 
                   ? 'bg-white text-indigo-600 border-white' 
                   : isCompleted 
                     ? 'bg-emerald-500 text-white border-emerald-500' 
                     : 'bg-slate-100 text-slate-400 border-slate-200'}
              `}>
                {isCompleted ? <Check size={10} strokeWidth={3} /> : (isLocked ? <Lock size={10} /> : idx + 1)}
              </div>

              <div className="pr-6"> {/* Padding right pour éviter de chevaucher le cercle */}
                <div className={`text-[9px] font-bold uppercase tracking-wider mb-1.5 ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                  Chapter {lesson.chapter}
                </div>
                <div className={`font-bold text-sm leading-snug ${isActive ? 'text-white' : 'text-slate-800'}`}>
                  {lesson.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="p-6 border-t border-slate-50 bg-slate-50/50">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse"></div>
            <div className="flex-1">
                <div className="h-3 w-20 bg-slate-200 rounded animate-pulse mb-1"></div>
                <div className="h-2 w-12 bg-slate-200 rounded animate-pulse"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;