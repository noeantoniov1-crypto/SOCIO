import React from 'react';
import { Course, ProgressStore, ProgressData, Lesson } from '../types';
import { ChevronLeft, PlayCircle, CheckCircle, Lock, Clock, ArrowRight, BrainCircuit } from 'lucide-react';

interface Props {
  course: Course;
  progress: ProgressStore;
  onSelectLesson: (id: string) => void;
  onBack: () => void;
}

type LessonWithStatus = Lesson & {
  status: string;
};

interface LessonCardProps {
  lesson: LessonWithStatus;
  onSelectLesson: (id: string) => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onSelectLesson }) => (
  <button
    onClick={() => lesson.status !== 'LOCKED' && onSelectLesson(lesson.id)}
    disabled={lesson.status === 'LOCKED'}
    className={`w-full group text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4
      ${lesson.status === 'LOCKED' 
        ? 'bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed' 
        : 'bg-white border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:scale-[1.01]'}
    `}
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors
      ${lesson.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-600' : 
        lesson.status === 'IN_PROGRESS' ? 'bg-indigo-100 text-indigo-600' :
        lesson.status === 'LOCKED' ? 'bg-slate-200 text-slate-400' : 'bg-slate-100 text-slate-500'}
    `}>
      {lesson.status === 'COMPLETED' && <CheckCircle size={20} strokeWidth={3} />}
      {lesson.status === 'IN_PROGRESS' && <PlayCircle size={20} fill="currentColor" className="text-white" />}
      {lesson.status === 'LOCKED' && <Lock size={20} />}
      {lesson.status === 'NOT_STARTED' && <div className="font-bold text-lg">{lesson.chapter}</div>}
    </div>

    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Chapter {lesson.chapter}</span>
        {lesson.status === 'IN_PROGRESS' && (
          <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full">Continue</span>
        )}
      </div>
      <h3 className={`font-bold text-lg leading-tight ${lesson.status === 'LOCKED' ? 'text-slate-400' : 'text-slate-900'}`}>
        {lesson.title}
      </h3>
      <div className="flex items-center gap-3 mt-2 text-xs text-slate-400 font-medium">
        <span className="flex items-center gap-1"><Clock size={12} /> {lesson.duration}</span>
        {lesson.status === 'COMPLETED' && (
           <span className="flex items-center gap-1 text-emerald-600"><BrainCircuit size={12} /> Mastered</span>
        )}
      </div>
    </div>

    {lesson.status !== 'LOCKED' && (
      <div className="text-slate-300 group-hover:text-indigo-600 transition-colors">
        <ArrowRight size={20} />
      </div>
    )}
  </button>
);

const CourseOverview: React.FC<Props> = ({ course, progress, onSelectLesson, onBack }) => {
  // Helper to determine status
  const getLessonStatus = (lessonId: string, index: number) => {
    const lessonProgress = progress[lessonId] as ProgressData | undefined;
    const prevLessonId = index > 0 ? course.lessons[index - 1].id : null;
    const prevProgress = prevLessonId ? (progress[prevLessonId] as ProgressData | undefined) : null;
    
    // Check if completed
    if (lessonProgress?.watched && lessonProgress?.scenarioCompleted) return 'COMPLETED';
    
    // Check if locked (previous not finished)
    // IMPORTANT: If user is PREMIUM, we bypass the lock check. They can access any module.
    if (!progress.isPremium && index > 0 && (!prevProgress?.watched || !prevProgress?.scenarioCompleted)) return 'LOCKED';
    
    // Check if in progress (started but not finished)
    if (lessonProgress?.watched || (lessonProgress?.quizScore || 0) > 0) return 'IN_PROGRESS';
    
    return 'NOT_STARTED';
  };

  const lessonsWithStatus = course.lessons.map((lesson, index) => ({
    ...lesson,
    status: getLessonStatus(lesson.id, index)
  }));

  const inProgress = lessonsWithStatus.filter(l => l.status === 'IN_PROGRESS');
  const completed = lessonsWithStatus.filter(l => l.status === 'COMPLETED');
  const notStarted = lessonsWithStatus.filter(l => l.status === 'NOT_STARTED');
  const locked = lessonsWithStatus.filter(l => l.status === 'LOCKED');

  // Combine Not Started and Locked for the "Up Next" section
  const upNext = [...notStarted, ...locked];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold mb-8 transition-colors"
      >
        <ChevronLeft size={20} /> Back to Library
      </button>

      <div className="mb-12">
        <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200 mb-6 rotate-3">
          <span className="text-2xl font-black">{course.title.charAt(0)}</span>
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">{course.title}</h1>
        <p className="text-slate-500 text-lg leading-relaxed">{course.description}</p>
      </div>

      <div className="space-y-10">
        {/* IN PROGRESS SECTION */}
        {inProgress.length > 0 && (
          <section className="animate-fade-up">
            <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
              In Progress
            </h2>
            <div className="space-y-4">
              {inProgress.map(lesson => <LessonCard key={lesson.id} lesson={lesson} onSelectLesson={onSelectLesson} />)}
            </div>
          </section>
        )}

        {/* UP NEXT SECTION */}
        {upNext.length > 0 && (
          <section className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Up Next</h2>
            <div className="space-y-4">
              {upNext.map(lesson => <LessonCard key={lesson.id} lesson={lesson} onSelectLesson={onSelectLesson} />)}
            </div>
          </section>
        )}

        {/* COMPLETED SECTION */}
        {completed.length > 0 && (
          <section className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
              <CheckCircle size={14} /> Completed
            </h2>
            <div className="space-y-4 opacity-75 hover:opacity-100 transition-opacity">
              {completed.map(lesson => <LessonCard key={lesson.id} lesson={lesson} onSelectLesson={onSelectLesson} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CourseOverview;