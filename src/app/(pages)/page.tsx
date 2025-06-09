// src/app/page.jsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[89.3vh] bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl animate-blob"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium text-cyan-400">
              Resources for Learners
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Get All Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Learning
            </span>{" "}
            Needs Here
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Designed to Provide resources for B.Tech Students.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/login">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 flex items-center">
                Get Started for Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className=" border-white/10 text-center text-white/50 text-sm">
            <p>
              © {new Date().getFullYear()} EduSphere. All rights reserved. <br /> Built
              with 💙 for the future of education.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
