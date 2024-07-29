import { LifeStyle } from "../../components/import"
import HeroCarousel from "../../container/Hero/HeroCarousel"
import { HeroVideo, Scholarship, StudyDestination, TopUniversity } from "../../container/import"

const Home = () => {
     return (
          <div className="md:flex md:flex-col md:gap-10 mb-10">
               <HeroVideo />
               <HeroCarousel />
               <TopUniversity />
               <Scholarship />
               <StudyDestination />
               <LifeStyle />
          </div>
     )
}

export default Home