'use client';

import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowLeft } from 'lucide-react';

export default function QuizDetailPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
        <HelpCircle className="w-7 h-7" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900">Quiz Session</h2>
      <p className="text-sm text-slate-500 mt-2">
        Interactive question-by-question evaluation engine will be connected with Rihan&apos;s AI Quiz service in Phase 2.
      </p>
      <div className="mt-6">
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Quizzes</span>
        </Link>
      </div>
    </div>
  );
}