import { useEffect, useState } from "react";
import { About, Contact, FAQs, FloatingNav, Footer, Gallery, Hero, Nav, Services, Testimonial, WhyUs } from "./components";

const App = () => {

  const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  }


  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <Nav theme = {theme} toggleTheme = {toggleTheme}/>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonial />
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
    </div>
  )
}

export default App