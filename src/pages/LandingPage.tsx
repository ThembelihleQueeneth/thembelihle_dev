import { NavBar } from '../components/NavBar'
import { About } from '../sections/About'
import { Experience } from '../sections/Experience'
import { TechStack } from '../sections/TechStack'

export const LandingPage = () => {
  return (
   <>
        <NavBar/>
        <About/>
        <Experience/>
        <TechStack/>
   </>
  )
}
