import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg text-slate-900">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>EduNova <span className="text-blue-600">AI</span></span>
            </Link>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              An AI-powered personalized learning platform that adapts to your performance,
              helps you learn difficult concepts, and recommends what to study next.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
              <span>Track 4 — Education</span>
              <span>•</span>
              <span>Hackathon Project</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 text-sm mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link></li>
              <li><Link href="/dashboard" className="hover:text-blue-600 transition-colors">Student Dashboard</Link></li>
              <li><Link href="/tutor" className="hover:text-blue-600 transition-colors">AI Tutor</Link></li>
              <li><Link href="/quiz" className="hover:text-blue-600 transition-colors">Adaptive Quizzes</Link></li>
            </ul>
          </div>

          {/* Team Col */}
          <div>
            <h4 className="font-semibold text-slate-900 text-sm mb-3">Development Team</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <span className="font-medium text-slate-700">Rahil Hassan</span>
                <span className="block text-xs text-slate-400">Full-Stack & Architecture</span>
              </li>
              <li>
                <span className="font-medium text-slate-700">Rihan A Melinamani</span>
                <span className="block text-xs text-slate-400">AI Engineering & FastAPI</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} EduNova AI. Built with precision for the Hackathon.</p>
          <p className="flex items-center gap-1">
            <span>Learn Smarter. Improve Faster.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;