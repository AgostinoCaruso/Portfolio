import './App.css'
import Contacts from './components/Contacts'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {

  return (
    <main>
      <NavBar />
      <Home />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  )
}

export default App
