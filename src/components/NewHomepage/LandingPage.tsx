import Navbar from './Navbar'
import Hero from './Hero/Hero'
import Artical from './Articals/artical'
import "./styles.scss"
const LandingPage = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Artical/>
    </main>
  )
}

export default LandingPage