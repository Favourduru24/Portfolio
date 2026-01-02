import About from "./components/About"
import Card from "./components/Card"
import Client from "./components/Client"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LogoSection from "./components/LogoSection"
import Navbar from "./components/Navbar" 
import Frontend from "./components/Frontend"
import Project from "./components/Project"
import TechStack from "./components/TechStack"
import Backend from "./components/Backend"

 const App = () => {
   return (
     <main className='max-w-7xl mx-auto'>
     <Navbar/>
     <Hero/>
     <About/>
     <Project/>
     <Backend/>
     <Frontend/>
      <LogoSection/>
      <Card />
      <Client/>
      <Experience/>
      <TechStack/>
      <Contact/>
      <Footer/>
     </main>
   )
 }
 
 export default App