import './App.css'
import { AboutMe, Home, Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  )
}

export default App
