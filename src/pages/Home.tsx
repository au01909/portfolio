import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import TrustworthyAI from '../components/TrustworthyAI'
import ProductCases from '../components/ProductCases'
import DeepDives from '../components/DeepDives'
import Experience from '../components/Experience'
import SupportingProjects from '../components/SupportingProjects'
import Skills from '../components/Skills'
import Leadership from '../components/Leadership'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useTitle } from '../useTitle'

export default function Home() {
  useTitle('Aryan Uppuganti — Software Engineer | AI-Native Product Builder')
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <TrustworthyAI />
        <ProductCases />
        <DeepDives />
        <Experience />
        <SupportingProjects />
        <Skills />
        <Leadership />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
