import { About, Contact, FAQs, FloatingNav, Footer, Gallery, Hero, Nav, Services, Testimonial, WhyUs } from "./components"

const App = () => {
  return (
    <div className="app">
      <Nav />
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