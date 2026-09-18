import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

interface RecommendationCardProps {
  headline: string;
  details: string;
  actionLabel?: string;
  actionHref?: string;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  headline,
  details,
  actionLabel = 'Start Recommended Plan',
  actionHref = '/planner',
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-700 text-white p-6 shadow-md shadow-blue-600/10">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-blue-100 mb-3 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI Recommendation</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">{headline}</h3>
          <p className="text-sm text-blue-100/90 mt-1.5 leading-relaxed">{details}</p>
        </div>

        <Link
          href={actionHref}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm transition-all shadow-sm shrink-0 active:scale-95"
        >
          <span>{actionLabel}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default RecommendationCard;