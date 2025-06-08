'use client'
import React from 'react';
import { useSession } from 'next-auth/react';
import { Settings, BookOpen, Clock, LogOut } from 'lucide-react';
import Link from "next/link";
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';

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

  const achievements = [
    { id: 1, title: 'Fast Learner', icon: '🏅', description: 'Completed 3 courses in one month' },
    { id: 2, title: 'Perfect Score', icon: '⭐', description: 'Scored 100% on 5 quizzes' },
    { id: 3, title: 'Early Bird', icon: '🌅', description: 'Logged in 10 days in a row before 8am' }
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
                  <img
                    src={session?.user?.image || '/default-avatar.png'}
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
              <p className="text-white/80 mb-4">You're making great progress in your learning journey. Keep it up!</p>
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

            {/* Achievements */}
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold flex items-center space-x-2">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <span>Your Achievements</span>
                </h3>
                <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  View All
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map(achievement => (
                  <div key={achievement.id} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 text-center">
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <h4 className="font-medium mb-1">{achievement.title}</h4>
                    <p className="text-sm text-white/70">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Recent Activity */}
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <Clock className="h-6 w-6 text-purple-400" />
                <span>Recent Activity</span>
              </h3>
              
              <div className="space-y-4">
                {[
                  { id: 1, action: 'Completed quiz', course: 'Advanced React', time: '2 hours ago', icon: '✅' },
                  { id: 2, action: 'Submitted assignment', course: 'Tailwind CSS', time: '1 day ago', icon: '📝' },
                  { id: 3, action: 'Started new course', course: 'Next.js Fundamentals', time: '3 days ago', icon: '🎯' }
                ].map(activity => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="text-xl mt-1">{activity.icon}</div>
                    <div>
                      <p className="font-medium">{activity.action} in {activity.course}</p>
                      <p className="text-sm text-white/60">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;