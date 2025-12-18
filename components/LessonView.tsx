import React, { useState, useEffect } from 'react';
import { Lesson, ProgressData, QuizQuestion } from '../types';
import { CheckCircle, Play, FileText, BrainCircuit, ArrowRight, RefreshCw, XCircle, AlertCircle, Lock, Star } from 'lucide-react';

interface Props {
  lesson: Lesson;
  progress?: ProgressData;
  onUpdateProgress: (data: Partial<ProgressData>) => void;
  onNext: () => void;
}

const LessonView: React.FC<Props> = ({ lesson, progress, onUpdateProgress, onNext }) => {
  const [activeTab, setActiveTab] = useState<'WATCH' | 'QUIZ' | 'SCENARIO'>('WATCH');

  // --- QUIZ STATE ---
  const [quizQueue, setQuizQueue] = useState<QuizQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  
  // Track missed questions for the "Retry" queue
  const [missedQuestions, setMissedQuestions] = useState<QuizQuestion[]>([]);
  
  // Track UNIQUE questions missed to calculate the final score (First Attempt Accuracy)
  const [initialMistakes, setInitialMistakes] = useState<Set<string>>(new Set());

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizPhase, setQuizPhase] = useState<'ACTIVE' | 'REVIEW_INTRO' | 'COMPLETE'>('ACTIVE');

  // --- SCENARIO STATE ---
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [scenarioFeedback, setScenarioFeedback] = useState<{ isBest: boolean; text: string } | null>(null);

  // Reset state when lesson changes
  useEffect(() => {
    setActiveTab('WATCH');
    resetQuiz();
    resetScenario();
  }, [lesson.id]);

  const resetQuiz = () => {
    setQuizQueue(lesson.quiz);
    setCurrentQIndex(0);
    setMissedQuestions([]);
    setInitialMistakes(new Set());
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizPhase('ACTIVE');
  };

  const resetScenario = () => {
    setCurrentScenarioIndex(0);
    setScenarioFeedback(null);
  };

  // --- QUIZ LOGIC ---
  const currentQuestion = quizQueue[currentQIndex];

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === currentQuestion.correctAnswer;
    
    // If wrong...
    if (!isCorrect) {
       // 1. Add to retry queue if not already there
       setMissedQuestions(prev => {
         if (prev.find(q => q.id === currentQuestion.id)) return prev;
         return [...prev, currentQuestion];
       });

       // 2. Mark as a mistake for final score calculation (persists across retries)
       setInitialMistakes(prev => {
         const next = new Set(prev);
         next.add(currentQuestion.id);
         return next;
       });
    }
  };

  const handleNextQuestion = () => {
    // If there are more questions in the current queue
    if (currentQIndex < quizQueue.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // End of current queue
      if (missedQuestions.length > 0) {
        // Enter Review Mode
        setQuizPhase('REVIEW_INTRO');
      } else {
        // Complete
        setQuizPhase('COMPLETE');
        
        // Calculate Score & Stars based on INITIAL mistakes (First Try Accuracy)
        const total = lesson.quiz.length;
        const mistakes = initialMistakes.size;
        const score = Math.max(0, Math.round(((total - mistakes) / total) * 100));
        
        let stars = 1;
        if (score === 100) stars = 3;
        else if (score >= 50) stars = 2;

        onUpdateProgress({ watched: true, quizScore: score, stars: stars }); 
      }
    }
  };

  const startReview = () => {
    setQuizQueue([...missedQuestions]); // Create a new queue with only missed questions
    setMissedQuestions([]); // Clear missed list for the new attempt
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizPhase('ACTIVE');
  };

  // --- SCENARIO LOGIC ---
  const handleScenarioChoice = (choiceId: string) => {
    const scenario = lesson.scenarios[currentScenarioIndex];
    const choice = scenario.choices.find(c => c.id === choiceId);
    
    if (choice) {
      setScenarioFeedback({ isBest: choice.isBest, text: choice.feedback });
      
      if (choice.isBest) {
        // If it's the last scenario
        if (currentScenarioIndex === lesson.scenarios.length - 1) {
             onUpdateProgress({ 
                scenarioCompleted: true,
                completedScenarios: [...(progress?.completedScenarios || []), scenario.id]
             });
        }
      }
    }
  };

  const handleNextScenarioStep = () => {
    if (currentScenarioIndex < lesson.scenarios.length - 1) {
        setCurrentScenarioIndex(prev => prev + 1);
        setScenarioFeedback(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 mb-2">{lesson.title}</h1>
        <p className="text-slate-500 font-medium">Chapter {lesson.chapter} • {lesson.duration}</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-8 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm w-fit overflow-x-auto">
        {[
          { id: 'WATCH', icon: Play, label: 'Lecture', disabled: false },
          { id: 'QUIZ', icon: FileText, label: 'Quiz', disabled: false },
          { id: 'SCENARIO', icon: BrainCircuit, label: 'Simulation', disabled: quizPhase !== 'COMPLETE' }
        ].map(tab => (
          <button
            key={tab.id}
            disabled={tab.disabled}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === tab.id 
              ? 'bg-indigo-600 text-white shadow-md' 
              : tab.disabled
                ? 'text-slate-300 cursor-not-allowed bg-slate-50/50'
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            {tab.disabled ? <Lock size={16} /> : <tab.icon size={16} />}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="animate-fade-in min-h-[400px]">
        {/* === WATCH TAB === */}
        {activeTab === 'WATCH' && (
          <div className="space-y-8">
            <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl ring-4 ring-slate-100">
              <iframe 
                width="100%" 
                height="100%" 
                src={lesson.youtubeUrl} 
                title="Lesson Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-amber-400 rounded-full"></span> Key Concepts
                </h3>
                <ul className="space-y-3">
                  {lesson.summaryBullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 shrink-0"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
                <h3 className="text-lg font-black text-indigo-900 mb-4">Vocabulary</h3>
                <div className="space-y-4">
                  {lesson.keyTerms.map((term, i) => (
                    <div key={i}>
                      <span className="font-bold text-indigo-700 block mb-1">{term.term}</span>
                      <span className="text-indigo-900/70 text-sm leading-relaxed block">{term.definition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                 onUpdateProgress({ watched: true });
                 setActiveTab('QUIZ');
              }}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
            >
              Mark as Watched & Start Quiz <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* === QUIZ TAB === */}
        {activeTab === 'QUIZ' && (
          <div className="max-w-2xl mx-auto">
            
            {/* Phase 1: Active Question */}
            {quizPhase === 'ACTIVE' && currentQuestion && (
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl animate-scale-in">
                <div className="flex justify-between items-center mb-6">
                   <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
                     Question {currentQIndex + 1} of {quizQueue.length}
                   </div>
                   {missedQuestions.length > 0 && (
                     <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-full">
                       <RefreshCw size={12} /> {missedQuestions.length} to retry
                     </div>
                   )}
                </div>

                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-8 leading-tight">
                  {currentQuestion.question}
                </h3>
                
                <div className="space-y-3 mb-8">
                  {currentQuestion.options?.map((opt, idx) => {
                    const isSelected = selectedOption === opt;
                    const isCorrect = opt === currentQuestion.correctAnswer;
                    
                    let style = "border-slate-200 hover:border-indigo-300 hover:bg-slate-50";
                    let icon = null;

                    if (isAnswered) {
                      if (isCorrect) {
                        style = "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500";
                        icon = <CheckCircle size={20} className="text-emerald-500" />;
                      } else if (isSelected) {
                        style = "border-red-500 bg-red-50 text-red-800 ring-1 ring-red-500";
                        icon = <XCircle size={20} className="text-red-500" />;
                      } else {
                        style = "opacity-50 border-slate-100 grayscale";
                      }
                    } else if (isSelected) {
                       style = "border-indigo-600 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-600";
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleOptionSelect(opt)}
                        className={`w-full text-left p-5 rounded-2xl border-2 font-bold transition-all flex items-center justify-between ${style}`}
                      >
                        {opt}
                        {icon}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {isAnswered && (
                  <div className="animate-fade-up">
                    <div className={`p-6 rounded-2xl text-sm leading-relaxed mb-6 ${
                      selectedOption === currentQuestion.correctAnswer 
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-200' 
                        : 'bg-red-50 text-red-900 border border-red-200'
                    }`}>
                      <div className="flex items-center gap-2 mb-2 font-black uppercase tracking-widest text-xs">
                         {selectedOption === currentQuestion.correctAnswer 
                           ? <><CheckCircle size={14} /> Correct</> 
                           : <><AlertCircle size={14} /> Incorrect</>}
                      </div>
                      <strong>Explanation:</strong> {currentQuestion.explanation}
                    </div>

                    <button 
                      onClick={handleNextQuestion}
                      className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-200/50"
                    >
                      {currentQIndex < quizQueue.length - 1 ? 'Next Question' : 'Finish Quiz'} <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Phase 2: Review Intro */}
            {quizPhase === 'REVIEW_INTRO' && (
               <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl text-center animate-fade-in">
                 <div className="w-24 h-24 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                   <RefreshCw size={40} />
                 </div>
                 <h2 className="text-2xl font-black text-slate-900 mb-4">Mastery Check</h2>
                 <p className="text-slate-500 mb-8">You missed {missedQuestions.length} questions. To pass this module, you need to understand every concept. Let's review them now.</p>
                 <button 
                   onClick={startReview}
                   className="px-10 py-4 bg-amber-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-amber-600 transition-colors shadow-lg shadow-amber-200"
                 >
                   Retry Missed Questions
                 </button>
               </div>
            )}

            {/* Phase 3: Complete */}
            {quizPhase === 'COMPLETE' && (() => {
               // Safe calculation for render
               const total = lesson.quiz.length;
               const mistakes = initialMistakes.size;
               const score = Math.max(0, Math.round(((total - mistakes) / total) * 100));
               let stars = 1;
               if (score === 100) stars = 3;
               else if (score >= 50) stars = 2;

               return (
                 <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl text-center animate-scale-in">
                   <div className="flex items-center justify-center gap-2 mb-6">
                     {[1, 2, 3].map(s => (
                       <Star 
                         key={s} 
                         size={48} 
                         className={`${s <= stars ? 'fill-amber-400 text-amber-400' : 'text-slate-200'} drop-shadow-sm`} 
                         strokeWidth={3}
                       />
                     ))}
                   </div>
                   
                   <div className="text-5xl font-black text-slate-900 mb-2">{score}%</div>
                   <h2 className="text-xl font-bold text-slate-500 mb-8 uppercase tracking-widest">
                     {score === 100 ? 'Perfect Score!' : (score >= 50 ? 'Great Job!' : 'Module Passed')}
                   </h2>
                   
                   <p className="text-slate-500 mb-8 text-sm">You've demonstrated understanding of all key concepts.</p>
                   
                   <button 
                     onClick={() => setActiveTab('SCENARIO')}
                     className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
                   >
                     Start Simulation <ArrowRight size={18} />
                   </button>
                 </div>
               );
            })()}
          </div>
        )}

        {/* === SCENARIO TAB === */}
        {activeTab === 'SCENARIO' && lesson.scenarios.length > 0 && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-fade-up">
               <div className="absolute top-0 right-0 p-12 opacity-10"><BrainCircuit size={140} /></div>
               <div className="relative z-10">
                 <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6">Scenario Step {currentScenarioIndex + 1}</div>
                 <h3 className="text-2xl font-bold leading-tight mb-4">{lesson.scenarios[currentScenarioIndex].prompt}</h3>
                 <p className="text-indigo-200 italic border-l-2 border-indigo-500 pl-4 text-sm">{lesson.scenarios[currentScenarioIndex].guidance}</p>
               </div>
            </div>

            <div className="grid gap-4">
              {lesson.scenarios[currentScenarioIndex].choices.map(choice => {
                const isSelected = false; // We don't keep selection state for buttons, we show feedback directly
                
                return (
                  <button
                    key={choice.id}
                    disabled={!!scenarioFeedback && scenarioFeedback.isBest} // Disable all if correct answer found
                    onClick={() => handleScenarioChoice(choice.id)}
                    className={`group relative p-6 bg-white rounded-2xl border-2 text-left transition-all hover:shadow-xl
                      ${scenarioFeedback && scenarioFeedback.isBest // If solved
                         ? 'opacity-50 border-slate-100 cursor-not-allowed' // dim others
                         : 'border-slate-100 hover:border-indigo-600'} 
                    `}
                  >
                     <div className="flex items-start gap-4">
                       <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0 font-bold">
                         {choice.id.replace(/^[a-z]+/, '')}
                       </div>
                       <div className="font-bold text-slate-900 text-lg">{choice.text}</div>
                     </div>
                  </button>
                );
              })}
            </div>

            {/* Scenario Feedback Area */}
            {scenarioFeedback && (
              <div className={`p-6 rounded-2xl border animate-scale-in ${
                scenarioFeedback.isBest 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                  : 'bg-red-50 border-red-200 text-red-900'
              }`}>
                <div className="flex items-center gap-2 mb-2 font-black uppercase tracking-widest text-xs">
                  {scenarioFeedback.isBest 
                    ? <><CheckCircle size={16} /> Excellent Choice</> 
                    : <><AlertCircle size={16} /> Try Again</>}
                </div>
                <p className="mb-4 font-medium">{scenarioFeedback.text}</p>
                
                {scenarioFeedback.isBest ? (
                  currentScenarioIndex < lesson.scenarios.length - 1 ? (
                    <button 
                      onClick={handleNextScenarioStep}
                      className="px-6 py-2 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors"
                    >
                      Next Situation
                    </button>
                  ) : (
                    <div className="flex flex-col gap-4">
                        <div className="h-px bg-emerald-200 w-full"></div>
                        <div className="flex items-center justify-between">
                            <span className="font-black text-emerald-800">Module Completed!</span>
                            <button 
                            onClick={onNext}
                            className="px-6 py-3 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition-colors shadow-lg"
                            >
                            Next Lesson
                            </button>
                        </div>
                    </div>
                  )
                ) : (
                  <button 
                    onClick={() => setScenarioFeedback(null)}
                    className="px-6 py-2 bg-white border border-red-200 text-red-700 rounded-xl font-bold text-sm hover:bg-red-100 transition-colors"
                  >
                    Try Another Option
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonView;