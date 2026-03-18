'use client'

import EnhancedJellyfish from '@/components/EnhancedJellyfish'
// import ThreeDText from '@/components/ThreeDText'
// import ParticleEffects from '@/components/ParticleEffects'
// import ParallaxContainer from '@/components/ParallaxContainer'
import { useState } from 'react'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0">
        <EnhancedJellyfish />
        {/* <ParticleEffects /> */}
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-cyan-400 text-2xl font-bold">Portfolio</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-cyan-300 hover:text-cyan-100 transition-colors">About</a>
          <a href="#skills" className="text-cyan-300 hover:text-cyan-100 transition-colors">Skills</a>
          <a href="#projects" className="text-cyan-300 hover:text-cyan-100 transition-colors">Projects</a>
          <a href="#experience" className="text-cyan-300 hover:text-cyan-100 transition-colors">Experience</a>
          <a href="#education" className="text-cyan-300 hover:text-cyan-100 transition-colors">Education</a>
          <a href="#contact" className="text-cyan-300 hover:text-cyan-100 transition-colors">Contact</a>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center space-y-8 px-4">
          {/* 3D Text Title - temporarily using regular text */}
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-cyan-400 tracking-wider glow-cyan float-animation">
              Gaurav Rathore
            </h1>
            <div className="mt-4 text-2xl md:text-3xl font-semibold text-cyan-300">
              MERN Full Stack Developer
            </div>
            <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-cyan-200 max-w-2xl mx-auto glow-cyan">
            MongoDB • Express.js • React • Node.js • 2+ Years Experience
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:scale-110 glow-blue shadow-lg shadow-cyan-500/30"
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg animate-bounce">▶</span>
                <span>View Projects</span>
              </span>
              <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
            </button>
            <div className="text-cyan-300 text-lg font-mono bg-blue-900/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-500/20 animate-pulse shadow-lg shadow-cyan-500/20">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Available for Hire</span>
              </span>
            </div>
          </div>
          
          {/* Add some floating elements for extra visual appeal */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-ping animation-delay-2000"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-cyan-300 rounded-full opacity-50 animate-ping animation-delay-4000"></div>
        </div>
      </main>
      
      {/* About Section */}
      <section id="about" className="relative z-10 min-h-screen flex items-center justify-center px-8 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-950">
        <div className="max-w-4xl text-center space-y-6 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 glow-cyan">About Me</h2>
          <p className="text-lg md:text-xl text-cyan-200 leading-relaxed">
            Passionate MERN Full Stack Developer with 2+ years of professional experience building scalable web applications. 
            Specialized in MongoDB, Express.js, React, and Node.js with strong foundations in RESTful APIs and database management. 
            I love creating efficient, user-friendly solutions that solve real-world problems and leading development teams to deliver high-quality projects.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="group bg-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 transform transition-all duration-300 hover:scale-105 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">MERN Stack Expert</h3>
              <p className="text-cyan-100">MongoDB, Express.js, React, Node.js, RESTful APIs</p>
            </div>
            <div className="group bg-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 transform transition-all duration-300 hover:scale-105 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">Team Leadership</h3>
              <p className="text-cyan-100">Project Management, Code Quality, System Architecture</p>
            </div>
            <div className="group bg-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 transform transition-all duration-300 hover:scale-105 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">Full Cycle Dev</h3>
              <p className="text-cyan-100">Authentication, Database Design, Performance Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-b from-blue-950 via-blue-900/50 to-blue-950">
        <div className="max-w-4xl text-center space-y-6 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 glow-cyan">Technical Skills</h2>
          <p className="text-lg md:text-xl text-cyan-200 leading-relaxed">
            Comprehensive skill set covering modern MERN stack development and related technologies.
          </p>
          <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mt-12 transform transition-all duration-300 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Programming Languages</h3>
                <ul className="text-cyan-100 space-y-2">
                  <li className="transform transition-all duration-300 hover:translate-x-2">• JavaScript (Advanced)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• Python (Proficient)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• Java (Intermediate)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• C++ (Intermediate)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• PHP (Proficient)</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Frontend Technologies</h3>
                <ul className="text-cyan-100 space-y-2">
                  <li className="transform transition-all duration-300 hover:translate-x-2">• React.js (Expert)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• Next.js (Advanced)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• HTML/CSS (Expert)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• Tailwind CSS (Advanced)</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Backend & Database</h3>
                <ul className="text-cyan-100 space-y-2">
                  <li className="transform transition-all duration-300 hover:translate-x-2">• Node.js (Advanced)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• Express.js (Advanced)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• MongoDB (Advanced)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• MySQL (Proficient)</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Technologies & Tools</h3>
                <ul className="text-cyan-100 space-y-2">
                  <li className="transform transition-all duration-300 hover:translate-x-2">• REST APIs (Expert)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• JWT Authentication (Advanced)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• Microservices (Proficient)</li>
                  <li className="transform transition-all duration-300 hover:translate-x-2">• Git & GitHub (Advanced)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-b from-blue-950 via-blue-900/50 to-black">
        <div className="max-w-4xl text-center space-y-6 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 glow-cyan">Featured Projects</h2>
          <p className="text-lg md:text-xl text-cyan-200 leading-relaxed">
            Showcase of my work including full-stack applications and automation scripts.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="group bg-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 transform transition-all duration-300 hover:scale-105 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">Admission Campus</h3>
              <p className="text-cyan-100 mb-4">Built "Admission Campus" using Next.js for managing student admissions with responsive UI and integrated APIs</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">Next.js</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">API Integration</span>
              </div>
            </div>
            <div className="group bg-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 transform transition-all duration-300 hover:scale-105 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">CommonIntern</h3>
              <p className="text-cyan-100 mb-4">Python script to automatically apply to jobs on Glassdoor using BeautifulSoup and Selenium - 500+ GitHub stars</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">Python</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">Selenium</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">BeautifulSoup</span>
              </div>
            </div>
            <div className="group bg-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 transform transition-all duration-300 hover:scale-105 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">E-Commerce Platform</h3>
              <p className="text-cyan-100 mb-4">Full-stack e-commerce solution with MERN stack and secure payment integration</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">MongoDB</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">Express.js</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">React</span>
              </div>
            </div>
            <div className="group bg-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 transform transition-all duration-300 hover:scale-105 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">Task Management System</h3>
              <p className="text-cyan-100 mb-4">Collaborative project management tool with real-time updates and team features</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">Node.js</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">Socket.io</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">JWT Auth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-b from-black via-blue-900/50 to-blue-950">
        <div className="max-w-4xl text-center space-y-6 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 glow-cyan">Professional Experience</h2>
          <p className="text-lg md:text-xl text-cyan-200 leading-relaxed">
            2+ years of professional experience delivering high-quality MERN stack solutions and leading development teams.
          </p>
          <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mt-12 transform transition-all duration-300 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="space-y-8">
              <div className="text-left border-l-4 border-cyan-500 pl-6">
                <h3 className="text-2xl font-semibold text-cyan-300">Senior Developer, Team Lead</h3>
                <p className="text-cyan-200">RytClick | May 2025 – Present</p>
                <ul className="text-cyan-100 mt-2 space-y-1">
                  <li>• Led a team of developers to deliver scalable solutions, ensuring high code quality and timely project delivery</li>
                  <li>• Architected and deployed features impacting thousands of users, improving system performance and user experience</li>
                  <li>• Designed and implemented robust backend services and guided frontend development for seamless integration</li>
                </ul>
              </div>
              <div className="text-left border-l-4 border-cyan-500 pl-6">
                <h3 className="text-2xl font-semibold text-cyan-300">MERN Full Stack Developer</h3>
                <p className="text-cyan-200">Kliff Technologies | Feb 2025</p>
                <ul className="text-cyan-100 mt-2 space-y-1">
                  <li>• Developed full-stack applications using MongoDB, Express.js, React, and Node.js</li>
                  <li>• Built responsive front-end interfaces and integrated RESTful APIs</li>
                  <li>• Designed scalable backend services and managed database operations</li>
                  <li>• Implemented authentication and ensured secure, efficient application performance</li>
                </ul>
              </div>
              <div className="text-left border-l-4 border-cyan-500 pl-6">
                <h3 className="text-2xl font-semibold text-cyan-300">Junior Web Developer</h3>
                <p className="text-cyan-200">DoitCreation | Apr 2025 – Apr 2026</p>
                <ul className="text-cyan-100 mt-2 space-y-1">
                  <li>• Worked on real client projects to gain hands-on development experience</li>
                  <li>• Collaborated with senior developers to fix bugs and maintain applications</li>
                  <li>• Assisted in backend development, documentation, and support tasks</li>
                  <li>• Learned professional workflows including Git, APIs, and deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-b from-blue-950 via-blue-900/50 to-black">
        <div className="max-w-4xl text-center space-y-6 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 glow-cyan">Education</h2>
          <p className="text-lg md:text-xl text-cyan-200 leading-relaxed">
            Academic foundation in Computer Science with focus on relevant coursework.
          </p>
          <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mt-12 transform transition-all duration-300 hover:bg-blue-800/40 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="text-left border-l-4 border-cyan-500 pl-6">
              <h3 className="text-2xl font-semibold text-cyan-300">B.Sc Computer Science</h3>
              <p className="text-cyan-200">Indira Gandhi National Open University | 2023 – 2026</p>
              <p className="text-cyan-100 mt-2">Relevant Coursework: Data Structure Algorithms, NoSQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-b from-blue-950 to-black">
        <div className="max-w-4xl text-center space-y-6 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 glow-cyan">Get In Touch</h2>
          <p className="text-lg md:text-xl text-cyan-200 leading-relaxed">
            Let's collaborate on your next project! I'm always open to discussing new opportunities.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mt-12">
            <a href="mailto:vimlashrathor1984@gmail.com" className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Send Email
            </a>
            <a href="tel:7827721365" className="group bg-blue-900/30 backdrop-blur-sm border border-cyan-500/20 text-cyan-300 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-blue-800/40 hover:scale-105">
              Call Me
            </a>
            <a href="https://github.com/Gaurav-rathore77" className="group bg-blue-900/30 backdrop-blur-sm border border-cyan-500/20 text-cyan-300 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-blue-800/40 hover:scale-105">
              GitHub
            </a>
          </div>
        </div>
      </section>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden relative z-10 fixed top-6 right-6 text-cyan-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}
