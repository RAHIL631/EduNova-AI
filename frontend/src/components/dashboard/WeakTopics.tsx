import React from 'react';
import { AlertTriangle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { WeakTopic } from '../../data/demoData';

interface WeakTopicsProps {
  topics: WeakTopic[];
}

export const WeakTopics: React.FC<WeakTopicsProps> = ({ topics }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Knowledge Gaps</h3>
            <p className="text-xs text-slate-500">Topics with lowest quiz accuracy</p>
          </div>
        </div>
        <Link
          href="/quiz"
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          <span>Practice All</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-3">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between gap-4"
          >
            <div className="min-w-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {topic.subject}
              </span>
              <h4 className="text-sm font-semibold text-slate-800 truncate">{topic.topic}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{topic.recommendedAction}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <span className="text-xs font-bold text-amber-600">{topic.accuracy}%</span>
                <span className="block text-[10px] text-slate-400">accuracy</span>
              </div>
              <Link
                href="/tutor"
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-2xs"
              >
                Learn
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeakTopics;