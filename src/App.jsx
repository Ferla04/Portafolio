import { AboutMe, Contact, Home, Navbar, Projects } from './components'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
