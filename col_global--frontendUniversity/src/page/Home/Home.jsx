import { Scholarship, TopUniversity } from "../../container/import"
import Country from "../Country/Country"
import HeroSection from "./HeroSection"
import InstituteFinder from "./InstituteFinder"

const Home = () => {
     return (
          <div className="">
               <HeroSection />
               {/* <HeroVideo /> */}
               {/* <HeroCarousel /> */}
               <Country />
               <TopUniversity />
               <Scholarship />
               <InstituteFinder />
          </div>
     )
}

export default Home