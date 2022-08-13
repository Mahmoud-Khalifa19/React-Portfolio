import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
