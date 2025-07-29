import { useEffect } from 'react'
import './App.css'
import Contacts from './components/Contacts'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset:200,
    });
  }, []);

  return (
    <main className='container'>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  )
}

export default App
