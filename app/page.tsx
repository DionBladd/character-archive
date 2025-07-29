'use client'

import React, { useRef, useEffect, useState } from 'react'
import LightRays from '@/src/blocks/Backgrounds/LightRays/LightRays'
import Footer from '@/components/footer'
import ShinyText from '@/src/blocks/TextAnimations/ShinyText/ShinyText'

export default function MainPage() {
  const contactRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-transparent text-gray-200 flex flex-col font-sans overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <LightRays
          raysOrigin="top-center"
          raysColor="#000000"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full absolute top-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/90 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(0,0%,100%,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/path/to/subtle-texture.png')] opacity-5 mix-blend-soft-light" />
      </div>

      {/* Animated Header */}
      <header 
        className={`sticky top-0 z-20 backdrop-blur-md bg-black/20 border-b border-slate-700/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 shadow-lg">
              <svg
                className="w-6 h-6 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-300 font-bold tracking-tight">
              The Archive
            </span>
          </div>
          <nav className="space-x-6 font-medium">
            <a className="text-gray-400 hover:text-white transition-colors duration-300">
              Worlds
            </a>
            <a className="text-gray-400 hover:text-white transition-colors duration-300">
              Characters
            </a>
            <a className="text-gray-400 hover:text-white transition-colors duration-300">
              Lore
            </a>
          </nav>
        </div>
      </header>

      {/* Enhanced Main Content */}
      <main 
        className={`flex-grow flex flex-col items-center justify-center text-center px-6 py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
            <div className="text-gray-300 mb-6">Summon Your Imagination</div>
            <div className="relative inline-block mt-2">
              <ShinyText
                text="Welcome to the Archive"
                disabled={false}
                speed={1}
                className="text-4xl md:text-6xl font-bold custom-class"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-transparent via-sky-500/70 to-transparent rounded-full"></div>
            </div>
          </h1>
          
          <p className="mt-10 text-xl text-gray-400 max-w-2xl mx-auto">
            A thousand worlds. Infinite possibilities. Every character has a destiny — yours is to write it.
          </p>

          <div className="mt-16 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold rounded-full shadow-xl hover:shadow-sky-900/50 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:-translate-y-1 group">
              <span className="block group-hover:scale-105 transition-transform">
                Begin Your Journey
              </span>
            </button>
            <button className="px-10 py-4 border-2 border-slate-700 text-gray-300 font-semibold rounded-full bg-slate-900/40 backdrop-blur-sm hover:border-sky-500 hover:text-white transition-colors duration-300">
              Explore Archives
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-slate-800 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-blue-500"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-300 mb-2">Realm {item}</h3>
              <p className="text-gray-500 text-sm">Unwritten stories await</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Footer contactRef={contactRef} />
      </div>
    </div>
  )
}