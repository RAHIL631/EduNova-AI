export interface SubjectPerformance {
  id: string;
  name: string;
  code: string;
  score: number;
  totalQuizzes: number;
  color: string;
}

export interface WeakTopic {
  id: string;
  subject: string;
  topic: string;
  accuracy: number;
  recommendedAction: string;
}

export interface RecentActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  score?: number;
  type: 'quiz' | 'assignment' | 'plan';
}

export interface UpcomingTaskItem {
  id: string;
  subject: string;
  topic: string;
  durationMinutes: number;
  dueToday: boolean;
}

export interface PerformanceHistoryPoint {
  week: string;
  score: number;
  quizzes: number;
}

export const demoDashboardData = {
  student: {
    name: 'Alex',
    fullName: 'Alex Student',
    email: 'alex.student@edunova.ai',
    educationLevel: 'Undergraduate',
  },
  metrics: {
    overallProgress: 78,
    averageQuizScore: 82,
    studyStreakDays: 7,
    quizzesCompleted: 24,
  },
  subjects: [
    { id: 'sub-1', name: 'DBMS', code: 'CS301', score: 85, totalQuizzes: 8, color: '#3b82f6' },
    { id: 'sub-2', name: 'Computer Networks', code: 'CS302', score: 72, totalQuizzes: 6, color: '#06b6d4' },
    { id: 'sub-3', name: 'NLP', code: 'AI401', score: 54, totalQuizzes: 5, color: '#f59e0b' },
    { id: 'sub-4', name: 'Java', code: 'CS202', score: 91, totalQuizzes: 5, color: '#10b981' },
  ] as SubjectPerformance[],
  weakTopics: [
    {
      id: 'wt-1',
      subject: 'NLP',
      topic: 'Word2Vec & Embeddings',
      accuracy: 42,
      recommendedAction: 'Practice Vector Mathematics',
    },
    {
      id: 'wt-2',
      subject: 'NLP',
      topic: 'TF-IDF Vectorization',
      accuracy: 50,
      recommendedAction: 'Review Term Frequency Equations',
    },
    {
      id: 'wt-3',
      subject: 'Computer Networks',
      topic: 'Congestion Control Algorithms',
      accuracy: 58,
      recommendedAction: 'Review TCP Reno vs Tahoe State Machines',
    },
  ] as WeakTopic[],
  recommendation: {
    headline: 'Focus on NLP for your next 3 study sessions.',
    details: 'Your accuracy in NLP (54%) is 28% below your target. Dedicated practice on Word2Vec representations will boost your overall mastery.',
    actionLabel: 'Start NLP Study Plan',
    actionHref: '/planner',
  },
  recentActivities: [
    {
      id: 'act-1',
      title: 'Completed DBMS Quiz',
      description: 'Scored 85% on Normalization & BCNF',
      timestamp: '2 hours ago',
      score: 85,
      type: 'quiz',
    },
    {
      id: 'act-2',
      title: 'Completed Java Assignment',
      description: 'Submitted Multithreading & Concurrency Tasks',
      timestamp: 'Yesterday at 4:30 PM',
      score: 95,
      type: 'assignment',
    },
    {
      id: 'act-3',
      title: 'Started NLP Study Plan',
      description: 'Scheduled 3 sessions on Vector Space Models',
      timestamp: '2 days ago',
      type: 'plan',
    },
  ] as RecentActivityItem[],
  upcomingTasks: [
    {
      id: 'task-1',
      subject: 'NLP',
      topic: 'Word2Vec & Skip-gram Intuition',
      durationMinutes: 45,
      dueToday: true,
    },
    {
      id: 'task-2',
      subject: 'Computer Networks',
      topic: 'TCP Congestion Window Analysis',
      durationMinutes: 30,
      dueToday: false,
    },
    {
      id: 'task-3',
      subject: 'DBMS',
      topic: 'Index Optimization & B+ Trees',
      durationMinutes: 40,
      dueToday: false,
    },
  ] as UpcomingTaskItem[],
  performanceHistory: [
    { week: 'Week 1', score: 68, quizzes: 3 },
    { week: 'Week 2', score: 72, quizzes: 5 },
    { week: 'Week 3', score: 75, quizzes: 6 },
    { week: 'Week 4', score: 82, quizzes: 10 },
  ] as PerformanceHistoryPoint[],
};