import './App.css'

import Navbar from './components/Navbar/Navbar'
import FeaturedBox from '../src/components/pages/Featured-box/FeaturedBox'
import AboutBox from '../src/components/pages/AboutBox/AboutBox'
import ProjectBox from '../src/components/pages/ProjectBox/ProjectBox'
import ContactBox from '../src/components/pages/ContactBox/ContactBox'
function App() {

  const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/CV Abu Mohammad Younus.pdf';
        link.download = 'CV Abu Mohammad Younus.pdf';
        link.click();
  }
  return (
    
      <div className="container">
        <Navbar handleDownloadCV={handleDownloadCV}></Navbar>
        <FeaturedBox handleDownloadCV={handleDownloadCV}/>
        <AboutBox/>
        <ProjectBox/>
        <ContactBox/>

      </div>

  )
}

export default App
