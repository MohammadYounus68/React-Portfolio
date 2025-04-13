import './App.css'

import Navbar from './components/Navbar/Navbar'
import FeaturedBox from '../src/components/pages/Featured-box/FeaturedBox'
import AboutBox from '../src/components/pages/AboutBox/AboutBox'
import ProjectBox from '../src/components/pages/ProjectBox/ProjectBox'
import ContactBox from '../src/components/pages/ContactBox/ContactBox'



function App() {
  return (
    
      <div className="container">
        <Navbar></Navbar>
        <FeaturedBox/>
        <AboutBox/>
        <ProjectBox/>
        <ContactBox/>

      </div>

  )
}

export default App
