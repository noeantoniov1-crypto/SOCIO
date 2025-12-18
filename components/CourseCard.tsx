import React from 'react';
import { Course, ProgressStore } from '../types';
import { PlayCircle, CheckCircle, ArrowRight, Lock } from 'lucide-react';

interface Props {
  course: Course;
  progress: number;
  progressStore: ProgressStore;
  onClick: () => void;
}

const CourseCard: React.FC<Props> = ({ course, progress, progressStore, onClick }) => {
  // Configuration for Circular Progress Gauge
  const size = 48;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  const isComplete = progress === 100;

  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col h-full"
    >
      {/* Decorative Blob - slightly toned down to not interfere with the gauge */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-12 -mt-12 opacity-50 transition-transform"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon Left, Circular Progress Right */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <span className="text-xl font-bold">{course.title.charAt(0)}</span>
          </div>

          {/* Circular Progress Gauge */}
          <div className="relative flex items-center justify-center" title={`${progress}% Completed`}>
            <svg width={size} height={size} className="transform -rotate-90">
              {/* Background Circle */}
              <circle 
                cx={size / 2} 
                cy={size / 2} 
                r={radius} 
                stroke="#f1f5f9" 
                strokeWidth={strokeWidth} 
                fill="transparent" 
              />
              {/* Progress Circle */}
              <circle 
                cx={size / 2} 
                cy={size / 2} 
                r={radius} 
                stroke={isComplete ? "#10b981" : "#4f46e5"} 
                strokeWidth={strokeWidth} 
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <span className={`absolute text-[10px] font-black ${isComplete ? 'text-emerald-600' : 'text-indigo-600'}`}>
              {isComplete ? <CheckCircle size={14} /> : `${progress}%`}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight pr-2">{course.title}</h3>
          <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">{course.description}</p>
        </div>
        
        {/* Footer Action */}
        <div className="mt-auto pt-4 border-t border-slate-50">
           <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
             {progress === 0 ? 'Start Module' : (isComplete ? 'Review Module' : 'Continue Learning')}
             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;