import { LifeStyle } from "../../components/import"
import HeroCarousel from "../../container/Hero/HeroCarousel"
import { HeroVideo, Scholarship, StudyDestination, TopUniversity } from "../../container/import"
import Country from "../Country/Country"

const Home = () => {
     return (
          <div className="md:flex md:flex-col md:gap-10 mb-10">
               <HeroVideo />
               <HeroCarousel />
               <Country />
               <TopUniversity />
               <Scholarship />
               <StudyDestination />
               <LifeStyle />
          </div>
     )
}

export default Home