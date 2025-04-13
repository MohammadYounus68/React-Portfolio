import './App.css'
import FeaturedBox from './components/Featured-box/FeaturedBox'
import Navbar from './components/Navbar/Navbar'
import AboutBox from './components/AboutBox/AboutBox';
import ProjectBox from './components/ProjectBox/ProjectBox';
import ContactBox from './components/ContactBox/ContactBox';

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
