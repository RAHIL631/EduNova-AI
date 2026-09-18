'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Bot, Sparkles, Send, BookOpen, HelpCircle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import LoadingState from '../../components/common/LoadingState';

export default function TutorPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <LoadingState message="Connecting to AI Tutor workspace..." />;
  }

  if (!isAuthenticated) return null;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Module Placeholder</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">AI Tutor</h1>
        <p className="text-sm text-slate-500 mt-1">
          Ask questions and get personalized explanations based on your learning level.
        </p>
      </div>

      {/* Professional AI Tutor Preview Shell */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col h-[520px]">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">EduNova AI Tutor Bot</h3>
              <p className="text-xs text-slate-400">FastAPI AI integration connected in Phase 2</p>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            Pending AI Service
          </span>
        </div>

        {/* Chat Area / Empty State */}
        <div className="flex-1 p-6 flex flex-col items-center justify-center text-center bg-slate-50/30">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 shadow-xs">
            <Bot className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">Interactive AI Tutor Coming in Phase 2</h4>
          <p className="text-sm text-slate-500 max-w-md leading-relaxed mb-6">
            The AI Tutor interface is ready. In the upcoming phase, this module will connect to Rihan&apos;s
            FastAPI AI backend to provide contextual explanations for your subjects (DBMS, Computer Networks, NLP, and Java).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg w-full text-left text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-slate-600 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
              <span>&ldquo;Explain BCNF decomposition step by step&rdquo;</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-slate-600 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>&ldquo;How does TCP Reno handle packet loss?&rdquo;</span>
            </div>
          </div>
        </div>

        {/* Input Bar Placeholder */}
        <div className="p-4 border-t border-slate-100 bg-white">
          <div className="flex items-center gap-3">
            <input
              type="text"
              disabled
              placeholder="AI Tutor will be active once FastAPI service is connected..."
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-400 cursor-not-allowed"
            />
            <button
              disabled
              className="px-4 py-2.5 bg-slate-200 text-slate-400 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-not-allowed"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}