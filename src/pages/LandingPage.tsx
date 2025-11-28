import { NavBar } from '../components/NavBar'
import { About } from '../sections/About'
import { Experience } from '../sections/Experience'
import { TechStack } from '../sections/TechStack'
import { FeaturedProjects } from '../sections/FeaturedProjects'
import { Contact } from '../sections/Contact'
import { Footer } from '../components/Footer'

export const LandingPage = () => {
  return (
   <>
        <NavBar/>
        <About/>
        <Experience/>
        <TechStack/>
        <FeaturedProjects/>
        <Contact/>
        <Footer/>

   </>
  )
}
