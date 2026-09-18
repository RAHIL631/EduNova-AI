import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading your learning dashboard...',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mb-4 shadow-sm border border-blue-100">
        <Loader2 className="w-7 h-7 animate-spin" />
      </div>
      <p className="text-slate-700 font-medium text-base">{message}</p>
      <p className="text-slate-400 text-sm mt-1">Preparing your personalized content...</p>
    </div>
  );
};

export default LoadingState;