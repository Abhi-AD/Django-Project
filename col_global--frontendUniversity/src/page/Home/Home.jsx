
import { DestinationFilter, Scholarship, TopUniversity } from "../../container/import"
import Country from "../Country/Country"
import HeroSection from "./HeroSection"
import InstituteFinder from "./InstituteFinder"

const Home = () => {
     return (
          <div className="">
               <DestinationFilter />
               <HeroSection />
               {/* <HeroVideo /> */}
               {/* <HeroCarousel /> */}
               <Country />
               <InstituteFinder />
               <TopUniversity />
               <Scholarship />
          </div>
     )
}

export default Home