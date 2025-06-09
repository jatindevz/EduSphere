'use client'
import React from 'react';
import { useSession } from 'next-auth/react';
import { Settings, BookOpen, Clock, LogOut } from 'lucide-react';
import Link from "next/link";
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Profile = () => {
  const router = useRouter();
  const { data: session } = useSession();
    const handlelogout = () => {
      signOut()
      router.replace("/")
    }

  // Mock data for additional sections
  const courses = [
    { id: 1, title: 'Advanced React Development', progress: 85 },
    { id: 2, title: 'Tailwind CSS Mastery', progress: 65 },
    { id: 3, title: 'Next.js Fundamentals', progress: 42 }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Image
                    width={128}
                    height={128}
                    src={session?.user?.image || '/default-avatar.jpg'}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500/30"
                  />
                  <button className="absolute bottom-2 right-2 bg-cyan-500 hover:bg-cyan-600 p-2 rounded-full shadow-md transition-colors duration-300">
                    <Settings className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-center mb-1">{session?.user?.name || session?.user?.username || 'User'}</h2>
                <p className="text-white/70 mb-6">{session?.user?.email}</p>

                <div className="w-full space-y-4">


                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Member Since</p>
                      <p className="font-medium">Jan 2023</p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300" onClick={handlelogout}>
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Profile Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Welcome back, {session?.user?.username || 'User'}!</h2>
              <p className="text-white/80 mb-4">You&apos;re making great progress in your learning journey. Keep it up!</p>
              <Link href="/dashboard">
                <button className="px-6 py-2 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-all duration-300">
                  Go to Dashboard
                </button>

              </Link>
            </div>

            {/* Courses Progress */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-cyan-400" />
                  <span>Your Courses</span>
                </h3>
                <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{course.title}</h4>
                      <span className="text-sm text-cyan-400">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;