import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Formation from './components/Formation';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Playground from './components/Playground';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Formation />
        <Certifications />
        <Skills />
        <Projects />
        <Playground />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
