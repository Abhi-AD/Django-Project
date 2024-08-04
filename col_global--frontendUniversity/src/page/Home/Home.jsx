import { LifeStyle } from "../../components/import"
import { DestinationFilter, Scholarship, TopUniversity } from "../../container/import"
import Country from "../Country/Country"
import HeroSection from "./HeroSection"
import InstituteFinder from "./InstituteFinder"

const Home = () => {
     return (
          <div className="md:flex md:flex-col md:gap-10 mb-10 gap-1">
               <DestinationFilter />
               <HeroSection />
               {/* <HeroVideo /> */}
               {/* <HeroCarousel /> */}
               <Country />
               <InstituteFinder />
               <TopUniversity />
               <Scholarship />
               <LifeStyle />
          </div>
     )
}

export default Home