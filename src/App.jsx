import About from "./components/About"
import Client from "./components/Client"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar" 
import Progress from "./components/Progress"
import Project from "./components/Project"
 const App = () => {
   return (
     <main className='max-w-7xl mx-auto'>
     <Navbar/>
     <Hero/>
     <About/>
     <Project/>
     <Progress/>
     <Client/>
      <Experience/>
     <Contact/>
      <Footer/>
     </main>
   )
 }
 
 export default App