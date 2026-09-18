import React from 'react';
import { SubjectPerformance } from '../../data/demoData';

interface SubjectCardProps {
  subject: SubjectPerformance;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  // Determine color badge based on score
  const getBadgeStyle = (score: number) => {
    if (score >= 80) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (score >= 65) return 'bg-blue-50 text-blue-700 border-blue-200';
    return 'bg-amber-50 text-amber-700 border-amber-200';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 65) return 'bg-blue-500';
    return 'bg-amber-500';
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
            {subject.code}
          </span>
          <h4 className="text-base font-bold text-slate-900 mt-0.5">{subject.name}</h4>
        </div>
        <span
          className={`text-sm font-bold px-2.5 py-1 rounded-xl border ${getBadgeStyle(
            subject.score
          )}`}
        >
          {subject.score}%
        </span>
      </div>

      {/* Progress track */}
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden mb-3">
        <div
          className={`h-2.5 rounded-full transition-all duration-700 ease-out ${getProgressColor(
            subject.score
          )}`}
          style={{ width: `${subject.score}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{subject.totalQuizzes} Quizzes Completed</span>
        <span className="font-medium text-slate-700">
          {subject.score >= 80 ? 'Mastered' : subject.score >= 65 ? 'Proficient' : 'Needs Focus'}
        </span>
      </div>
    </div>
  );
};

export default SubjectCard;