import { useState, useEffect } from 'react';
import { 
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { Github as GitHub, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Project1 from './components/project1';
import Project2 from './components/project2';
import Project3 from './components/project3';
import { i18n } from './translation/i18n.ts';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <Routes>
        {/* Rota Principal */}
        <Route path="/" element={
          <main>
            <Hero />
            <Projects />
            <Experience />
            <About />
            <Footer />
          </main>
        } />

        {/* Rota dos Projetos */}
        <Route path="/projects" element={
          <main>
            <Project1 />
            <Project2 />
            <Project3 />
            <Footer />
          </main>
        } />
      </Routes>
    </div>
  );
}

const Footer = () => (
  <footer className="bg-gray-50 py-8">
    <div className="container mx-auto px-4 text-center md:grid-rows-2 gap-4">
      <div className="flex justify-center space-x-6 mb-1">
        <h2 className="text-3xl font-bold mb-4">{i18n.t('titles.contact')}</h2>
      </div>
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
)

export default App;