import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Playground from './components/Playground';
import Formation from './components/Formation';
import Certifications from './components/Certifications';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 selection:bg-sky-500/20 selection:text-sky-300 antialiased flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Playground />
        <Formation />
        <Certifications />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
