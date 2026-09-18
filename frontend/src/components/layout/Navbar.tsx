'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, LogIn, UserPlus, Menu, X, LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const Navbar = () => {
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Do not render top public navbar if we are on dashboard / app pages where Sidebar handles navigation
  const isAppRoute = [
    '/dashboard',
    '/tutor',
    '/quiz',
    '/assignments',
    '/planner',
    '/progress',
    '/profile',
  ].some((route) => pathname.startsWith(route));

  if (isAppRoute) {
    // Return minimalistic topbar for app dashboard routes
    return (
      <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-8 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="flex items-center gap-2.5 font-bold text-lg text-slate-900">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <span>EduNova <span className="text-blue-600">AI</span></span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-sm font-semibold text-slate-800">{user?.name || 'Alex Student'}</span>
            <span className="text-xs text-slate-400 capitalize">{user?.educationLevel || 'Undergraduate'}</span>
          </div>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold flex items-center justify-center text-sm shadow-sm ring-2 ring-white">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : 'AS'}
          </div>

          <button
            onClick={() => logout()}
            title="Logout"
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>
    );
  }

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-slate-900 tracking-tight">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <span>EduNova <span className="text-blue-600">AI</span></span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/#features" className="hover:text-blue-600 transition-colors">Features</Link>
            <Link href="/#features" className="hover:text-blue-600 transition-colors">Subjects</Link>
          </div>

          {/* Auth Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-sm transition-all"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Go to Dashboard</span>
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 text-sm font-medium transition-all"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Log in</span>
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-sm shadow-blue-500/20 transition-all active:scale-95"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Start Learning</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 border-t border-slate-100 bg-white space-y-3">
          <div className="flex flex-col space-y-2 py-2 text-base font-medium text-slate-700">
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              How It Works
            </Link>
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Features
            </Link>
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Subjects
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center rounded-xl bg-blue-600 text-white font-medium text-sm"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center rounded-xl border border-slate-200 text-slate-700 font-medium text-sm"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center rounded-xl bg-blue-600 text-white font-medium text-sm"
                >
                  Start Learning
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;