'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Menu, X } from 'lucide-react';

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // App routes that use the dashboard sidebar layout
  const isAppRoute = [
    '/dashboard',
    '/tutor',
    '/quiz',
    '/assignments',
    '/planner',
    '/progress',
    '/profile',
  ].some((route) => pathname.startsWith(route));

  // Auth pages (login, register) that don't need sidebar or full footer
  const isAuthPage = pathname === '/login' || pathname === '/register';

  if (isAppRoute) {
    return (
      <div className="flex h-screen bg-slate-50 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex md:shrink-0">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white z-10 shadow-xl">
              <div className="absolute top-3 right-3">
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <Sidebar />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* Mobile Top Bar */}
          <div className="md:hidden flex items-center justify-between h-16 px-4 bg-white border-b border-slate-200">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Open sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="font-bold text-slate-800 text-sm">EduNova AI</span>
            <div className="w-8" />
          </div>

          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>
        </div>
      </div>
    );
  }

  // Public Landing / Marketing layout
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default AppShell;
