'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { User, Mail, Image, BookOpen, Crown, ChevronDown, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const Nav = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const handlelogout = () => {
    signOut()
    router.replace("/")
  }
  const [isPremium, setIsPremium] = useState(false);

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>

      {/* Navigation Bar */}
      <header className="relative z-50 py-4 px-6 sm:px-8 flex justify-between items-center border-b border-white/10 backdrop-blur-sm bg-slate-900/80">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            EduSphere
          </h1>
        </Link>

        {/* Navigation Links */}
        {session?.user ? (
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link 
              href="/dashboard" 
              className="hidden sm:flex items-center space-x-1 text-white/80 hover:text-cyan-400 transition-colors duration-300 group"
            >
              <BookOpen className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Dashboard</span>
            </Link>
            {
              isPremium && (
                <Link 
                  href="/premium" 
                  className="hidden sm:flex items-center space-x-1 text-white/80 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <Crown className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-medium">
                    Premium
                  </span>
                </Link>
              )
            }
            

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                  {session.user.name?.charAt(0) || session.user.email?.charAt(0) || 'U'}
                </div>
                <ChevronDown className={`h-4 w-4 text-white/70 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-sm font-medium text-white">{session.user.name || 'User'}</p>
                    <p className="text-sm text-white/60 truncate">{session.user.email}</p>
                  </div>
                  <div className="py-1">
                    <Link 
                      href="/userprofile" 
                      className="flex items-center px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200"
                    >
                      <User className="h-4 w-4 mr-3" />
                      Your Profile
                    </Link>
                    <Link 
                      href="/settings" 
                      className="flex items-center px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200"
                    >
                      {/* <Settings className="h-4 w-4 mr-3" /> */}
                      Settings
                    </Link>
                  </div>
                  <div className="py-1 border-t border-white/10">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200"
                    onClick={handlelogout}
                     >
                      <LogOut className="h-4 w-4 mr-3" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <Link 
              href="/features" 
              className="hidden sm:inline text-white/80 hover:text-cyan-400 transition-colors duration-300 hover:-translate-y-0.5"
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="hidden sm:inline text-white/80 hover:text-cyan-400 transition-colors duration-300 hover:-translate-y-0.5"
            >
              Pricing
            </Link>
            <Link 
              href="/login" 
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-300 border border-white/20"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
            >
              Register
            </Link>
          </nav>
        )}
      </header>

      {/* Mobile Menu Button (would need additional state and menu component) */}
      <button className="sm:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg flex items-center justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  )
}

export default Nav