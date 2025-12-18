
export enum LessonStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'MCQ' | 'TF' | 'CLOZE';
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface ScenarioChoice {
  id: string;
  text: string;
  isBest: boolean;
  feedback: string;
}

export interface Scenario {
  id: string;
  prompt: string;
  choices: ScenarioChoice[];
  guidance: string;
}

export interface Lesson {
  id: string;
  chapter: number;
  title: string;
  youtubeUrl: string;
  duration: string;
  summaryBullets: string[];
  keyTerms: { term: string; definition: string }[];
  quiz: QuizQuestion[];
  scenarios: Scenario[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export interface ProgressData {
  watched: boolean;
  quizScore: number;
  masteryScore?: number;
  stars?: number;
  scenarioCompleted: boolean;
  completedScenarios: string[];
  lastUpdated: number;
}

export interface BookedSession {
  mentorId: string;
  date: string;
  timeSlot: string;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  streak: number;
}

export interface ProgressStore {
  // Fix: Added User to the index signature to allow the 'user' property to be correctly typed within the store
  [lessonId: string]: ProgressData | boolean | BookedSession[] | User | undefined;
  isPremium?: boolean;
  bookedSessions?: BookedSession[];
  user?: User;
}
