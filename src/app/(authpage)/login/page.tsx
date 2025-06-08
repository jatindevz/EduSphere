'use client'
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginSignupPages = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    agreeTerms: false,
    rememberMe : false
  });

  const router = useRouter();

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission here
    if(currentPage === 'login') {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email : formData.email,
          password : formData.password
        })

        if (res?.ok) {
          router.replace("/dashboard")
        }
      } catch (error) {
        console.log(" login failed",error);
      }
    } else if (currentPage === 'signup') {
      const payload = {
        username: formData.fullName,
        email: formData.email,
        password: formData.password,
      };
      try {
        const res = await axios.post("/api/register", payload)

        if (res.status === 201) {
          console.log(" signup success",res.data);
          // router.replace("/dashboard")
        }
      } catch (error) {
        console.log(" signup failed",error);
      }
    }
    console.log(`${currentPage} form submitted:`, formData);
  };


  const switchPage = (page : string) => {
    setCurrentPage(page);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      agreeTerms: false,
      rememberMe : false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation Pills */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
          <button
            onClick={() => switchPage('login')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              currentPage === 'login' 
                ? 'bg-cyan-500 text-white shadow-lg' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => switchPage('signup')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              currentPage === 'signup' 
                ? 'bg-cyan-500 text-white shadow-lg' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              EduSphere
            </h1>
          </div>
          <p className="text-white/70">
            {currentPage === 'login' 
              ? 'Welcome back! Sign in to your account' 
              : 'Create your account to get started'
            }
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="space-y-6">
            {/* Full Name (Signup only) */}
            {currentPage === 'signup' && (
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password (Signup only) */}
            {currentPage === 'signup' && (
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors duration-300"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            )}

            {/* Remember Me / Forgot Password (Login) or Terms Agreement (Signup) */}
            <div className="flex items-center justify-between">
              {currentPage === 'login' ? (
                <>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe ?? false}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-cyan-600 bg-white/10 border-white/30 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-white/70">Remember me</span>
                  </label>
                  <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    Forgot password?
                  </button>
                </>
              ) : (
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms ?? false}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-cyan-600 bg-white/10 border-white/30 rounded focus:ring-cyan-500 focus:ring-2 mt-0.5"
                  />
                  <span className="ml-2 text-sm text-white/70">
                    I agree to the{' '}
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline">
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline">
                      Privacy Policy
                    </button>
                  </span>
                </label>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center group"
            >
              {currentPage === 'login' ? 'Sign In' : 'Create Account'}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Switch Form Link */}
          <div className="mt-6 text-center">
            <p className="text-white/70">
              {currentPage === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => switchPage(currentPage === 'login' ? 'signup' : 'login')}
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
              >
                {currentPage === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <button
            onClick={() => console.log('Navigate to home')}
            className="text-white/50 hover:text-white/80 transition-colors duration-300 flex items-center justify-center mx-auto"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPages;