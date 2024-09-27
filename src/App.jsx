import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";
import ThemeSwitcher from "./components/ThemeSwitcher.jsx";
import Hamburger from "./components/Hamburger.jsx";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="space-mono-regular sticky top-0 bg-green-100 dark:bg-neutral-900 rounded-3xl flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
          aria-label="Global"
        >
          <a
            className="sm:order-1 flex-none text-xl font-semibold text-green-800 dark:text-green-500"
            href="#"
          >
            @lawrence.dev
          </a>

          <div className="sm:order-3 flex items-center gap-x-2">
            <button
              className="md:hidden"
              type="button"
              onClick={handleMenuToggle}
            >
              <Hamburger />
            </button>
            <div className="w-8">
              <ThemeSwitcher />
            </div>
          </div>
          <div
            className={`hs-collapse overflow-hidden transition-all duration-300 ease-in-out origin-top-right basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2 ${isMenuOpen ? "block" : "hidden"}`}
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a
                className="font-bold text-green-800 hover:text-green-500 dark:text-white dark:hover:text-green-500"
                href="#Hero"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="font-bold text-green-800 hover:text-green-500 dark:text-white dark:hover:text-green-500"
                href="#About"
              >
                About
              </a>
              <a
                className="font-bold text-green-800 hover:text-green-500 dark:text-white dark:hover:text-green-500"
                href="#Projects"
              >
                Projects
              </a>
              <a
                className="font-bold text-green-800 hover:text-green-500 dark:text-white dark:hover:text-green-500"
                href="#Contacts"
              >
                Contacts
              </a>
            </div>
          </div>
        </nav>
      </nav>
      {/* contents */}
      <div>
        
        <section id="Hero" className="h-screen sm:h-96 md:h-3/5 lg:h-2/5">
          <Hero />
        </section>
        
        <section id="About" className="h-screen sm:h-96 md:h-3/5 lg:h-2/5">
          <About />
        </section>
        <section id="Projects" className="h-screen">
          <Projects />
        </section>
        <section id="Contacts" className="h-screen ">
          <Contacts />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
