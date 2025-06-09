'use client'
import React from 'react';
import { useSession } from 'next-auth/react';
import { Settings, Star, MessageCircle, Clock, LogOut } from 'lucide-react';
import Link from "next/link";
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const Profile = () => {
  const [Feedback, setFeedback] = React.useState("");
  const router = useRouter();
  const { data: session } = useSession();
  const handlelogout = () => {
    signOut()
    router.replace("/")
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
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


            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">

              <p className="text-white mb-4 text-sm">
                <i> &quot;Struggling to find study resources? We've gathered the best from the internet—so you don't have to.&quot;</i>
              </p>


              <div className="flex items-center gap-3">
                {/* Feedback Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Feedback
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700">
                    <DialogHeader>
                      <DialogTitle className="text-cyan-400">Share Feedback</DialogTitle>
                      <DialogDescription className="text-slate-400">
                        We'd love to hear your thoughts!
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Textarea
                        placeholder="What do you like or what can we improve?"
                        className="min-h-[120px] bg-slate-800 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500/50"
                      />
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                      >
                        Submit Feedback
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Recommendation Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Recommend Resource
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg bg-slate-900 border-slate-700">
                    <DialogHeader>
                      <DialogTitle className="text-amber-400">Suggest a Resource</DialogTitle>
                      <DialogDescription className="text-slate-400">
                        Share helpful links with the community
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="title" className="text-slate-300">
                          Title
                        </Label>
                        <Input
                          id="title"
                          placeholder="Resource name"
                          className="bg-slate-800 border-slate-700 text-white focus:border-amber-500 focus:ring-amber-500/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="url" className="text-slate-300">
                          URL
                        </Label>
                        <Input
                          id="url"
                          placeholder="https://example.com"
                          className="bg-slate-800 border-slate-700 text-white focus:border-amber-500 focus:ring-amber-500/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-slate-300">
                          Notes (optional)
                        </Label>
                        <Textarea
                          id="notes"
                          placeholder="Why do you recommend this?"
                          className="bg-slate-800 border-slate-700 text-white focus:border-amber-500 focus:ring-amber-500/50"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 mt-2"
                      >
                        Submit Recommendation
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;