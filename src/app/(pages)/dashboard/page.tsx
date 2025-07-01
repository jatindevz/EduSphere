import React from 'react'
import { BookOpen} from 'lucide-react'
import DrawerDemo from '@/components/Drawer'
import { gate_subjects, otherdata } from '@/data/data'
import DrawerDialogDemo from '@/components/Dilogbox'
const Dashboard = () => {
  const branches = [
    { name: "Computer Science (CSE)", id: 1, courses: 12, students: 240 },
    { name: "AI/DS/ML", id: 2, courses: 8, students: 180 },
    { name: "Electronics (ECE)", id: 3, courses: 10, students: 210 },
    { name: "Mechanical", id: 4, courses: 6, students: 150 },
  ]
  const Others = [
    { name: "Wev Development", id: 1, courses: 12, students: 240 },
  ]

  return (
    <div className="min-h-[88.13vh] bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
            <p className="text-white/70">Welcome back!</p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Branches Section */}
          <div className="w-full lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-cyan-400" />
                <span>Branches</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {branches.map((branch, idx) => (
                <div key={branch.id} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                      {branch.name}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">
                      ID: {branch.id}
                    </span>
                  </div>
                
                    <DrawerDemo branchname = {branch.name} subject={gate_subjects[idx].subjects} />
                </div>
              ))}
            </div>

          </div>
          {/* Other Courses */}

          <div className="w-full lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-cyan-400" />
                <span>Others</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Others .map((branch, idx) => (
                <div key={branch.id} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                      {branch.name}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">
                      ID: {branch.id}
                    </span>
                  </div>
                <DrawerDialogDemo code={"1"} />
                  {/* <DrawerDemo branchname={branch.name} subject={otherdata[idx].subjects} /> */}
                </div>
              ))}
            </div>

          </div>

        </div>



        <footer className="mt-11 flex items-center justify-center">
          <p className="text-xs text-white/50">
            &copy; 2023 Your Company. All rights reserved. <span className="text-cyan-400 text-[10px]">Note : Resorces are genarated by ChatGPT so it may not be 100% accurate</span>
          </p>

        </footer>
      </div>
    </div>
  )
}

export default Dashboard  