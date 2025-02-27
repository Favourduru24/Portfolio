import About from "./components/About"
import Client from "./components/Client"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar" 
import Project from "./components/Project"
 const App = () => {
   return (
     <main className='max-w-7xl mx-auto'>
     <Navbar/>
     <Hero/>
     <About/>
     <Project/>
     <Client/>
     <Contact/>
     </main>
   )
 }
 
 export default App