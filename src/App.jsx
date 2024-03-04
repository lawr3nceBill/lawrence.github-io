import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

import ThemeSwitcher from "./components/ThemeSwitcher.jsx";

function App() {
  return (
    <>
      <div className="m-20">
      <section id="header">
        {/* Your header content */}
      </section>

      <div className=" flex flex-col sm:flex-row items-center justify-between text-xl font-mono">
        <h1 className="hidden sm:block">lawrence.dev</h1>
        <div className="flex gap-5 items-center ">
          <a href="#Home" className="hover:text-green-400 ">home</a>
          <a href="#About" className="hover:text-green-400 ">about</a>
          <a href="#Projects" className="hover:text-green-400 ">project</a>
          <a href="#Contacts" className="hover:text-green-400 ">contacts</a>
          <div class="w-10 h-10"> 
  <ThemeSwitcher />
</div>

          
        </div>
      </div>
    </div>
  


      {/* contents */}
      <div className="text-center text-3xl">
        <section id="Home" className="h-screen">
          <Hero />
        </section>
     
        <section id="About" className="h-screen">
          <About />
        </section>
     
        <section id="Projects" className="h-screen">
        <Projects />
        </section>
        <section id="Contacts" className="h-screen ">
        <Contacts />
        </section>
       
      </div>
    
      <Footer/>
     
    </>
  );
}

export default App;
