import { LifeStyle } from "../../components/import"
import { DestinationFilter, Scholarship, TopUniversity } from "../../container/import"
import Country from "../Country/Country"
import HeroSection from "./HeroSection"
import InstituteFinder from "./InstituteFinder"

const Home = () => {
     return (
          <div className="flex flex-col md:gap-24 gap-4 mb-10">
               <div className="flex flex-col gap-5">
                    <DestinationFilter />
                    <HeroSection />
                    {/* <HeroVideo /> */}
                    {/* <HeroCarousel /> */}
               </div>
               <Country />
               <InstituteFinder />
               <TopUniversity />
               <Scholarship />
               <LifeStyle />
          </div>
     )
}

export default Home