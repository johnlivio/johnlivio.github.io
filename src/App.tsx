import React, { useState } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Dribbble, ChevronDown, Mail, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>

      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.linkedin.com/in/johnliviomedeiros/" className="text-gray-600 hover:text-gray-900" target="_blank"
              rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://wa.me/5511993614389" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="https://github.com/johnlivio" className="text-gray-600 hover:text-gray-900" target="_blank"
              rel="noopener noreferrer">
              <GitHub className="w-6 h-6" />
            </a>
            <a
              href="mailto:johnlheviu@gmail.com"
              className="text-gray-600 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-6 h-6" />
            </a>

          </div>
          <p className="text-gray-600">© 2025 John Medeiros. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;