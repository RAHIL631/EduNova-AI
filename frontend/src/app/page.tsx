'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Bot,
  HelpCircle,
  CalendarDays,
  LineChart,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Lightbulb,
  GraduationCap,
  Layers,
  BarChart3,
  Cpu,
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function LandingPage() {
  const { isAuthenticated } = useAuth();

  const workflowSteps = [
    {
      step: '01',
      title: 'LEARN',
      description: 'Engage with intelligent tutoring tailored precisely to your syllabus and comprehension level.',
      icon: BookOpen,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      step: '02',
      title: 'PRACTICE',
      description: 'Solve targeted exercises, problem sets, and interactive concept demonstrations.',
      icon: Cpu,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      step: '03',
      title: 'ASSESS',
      description: 'Take adaptive diagnostic quizzes that adjust question difficulty to match your mastery.',
      icon: HelpCircle,
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
    },
    {
      step: '04',
      title: 'ANALYZE',
      description: 'Identify exact weak topics, knowledge gaps, and revision priorities automatically.',
      icon: BarChart3,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      step: '05',
      title: 'PERSONALIZE',
      description: 'Receive custom study schedules, focused review tasks, and smart recommendations.',
      icon: Sparkles,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    },
  ];

  const features = [
    {
      icon: Bot,
      title: 'AI Tutor',
      description:
        'Ask questions anytime and receive clear, step-by-step conceptual explanations adapted to your learning tier.',
      tag: 'Core Foundation',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: HelpCircle,
      title: 'Adaptive Quiz',
      description:
        'Quizzes dynamically calibrate question difficulty based on historical performance to challenge you effectively.',
      tag: 'Diagnostics',
      color: 'from-indigo-500 to-violet-600',
    },
    {
      icon: CalendarDays,
      title: 'Smart Study Planner',
      description:
        'Intelligent schedules allocate time blocks around your upcoming deadlines, exams, and weakest subjects.',
      tag: 'Productivity',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: LineChart,
      title: 'Progress Intelligence',
      description:
        'Visual mastery curves and granularity tracking across DBMS, Networks, NLP, and programming languages.',
      tag: 'Analytics',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Lightbulb,
      title: 'Personalized Recommendations',
      description:
        'Actionable remediation suggestions guide your next 3 study sessions to maximize academic outcomes.',
      tag: 'Optimization',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Layers,
      title: 'Multi-Disciplinary Curriculum',
      description:
        'Engineered for computer science, engineering, and STEM coursework across School, PUC, Diploma, and Undergrad.',
      tag: 'Curriculum',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <div className="space-y-24 py-8 md:py-16">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>EduNova AI • Track 4 Education Platform</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none">
          Learn Smarter. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Improve Faster.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          An AI-powered personalized learning platform that adapts to your performance,
          helps you learn difficult concepts, and recommends what to study next.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={isAuthenticated ? '/dashboard' : '/register'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/tutor"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-base transition-all hover:border-slate-300"
          >
            <Bot className="w-4 h-4 text-blue-600" />
            <span>Explore AI Tutor</span>
          </Link>
        </div>

        {/* Preview Dashboard Snapshot Card */}
        <div className="mt-16 max-w-5xl mx-auto rounded-3xl p-3 bg-gradient-to-b from-slate-200 to-slate-100 border border-slate-200 shadow-xl">
          <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-100 text-left">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Student Performance Snapshot</h3>
                  <p className="text-xs text-slate-500">Alex Student • Computer Science & Engineering</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  78% Overall Mastery
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                  7-Day Streak 🔥
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-medium">DBMS</span>
                <p className="text-2xl font-bold text-slate-900 mt-1">85%</p>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-medium">Networks</span>
                <p className="text-2xl font-bold text-slate-900 mt-1">72%</p>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '72%' }} />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-medium">NLP</span>
                <p className="text-2xl font-bold text-amber-600 mt-1">54%</p>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '54%' }} />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-medium">Java</span>
                <p className="text-2xl font-bold text-slate-900 mt-1">91%</p>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '91%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW EDUNOVA WORKS (Workflow Loop) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Continuous Learning Loop</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">How EduNova Works</h2>
          <p className="text-slate-600 text-base mt-3">
            A scientifically designed adaptive loop ensuring no concept is left behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {workflowSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-slate-400">{s.step}</span>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.description}</p>
                </div>

                {idx < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-400 text-center text-xs leading-6 font-bold shadow-xs">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PLATFORM CORE MODULES */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Complete AI Suite</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Built for Academic Excellence
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Every module works synchronously to personalize your learning trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center text-white shadow-sm`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to elevate your learning journey?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-blue-100">
              Join EduNova AI and transform how you understand complex concepts, prepare for exams,
              and master your coursework.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={isAuthenticated ? '/dashboard' : '/register'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-700 font-bold text-base hover:bg-blue-50 transition-all shadow-md active:scale-95"
              >
                <span>Create Free Account</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/login"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-700/50 hover:bg-blue-700 text-white font-semibold text-base border border-white/20 transition-all"
              >
                <span>Student Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}