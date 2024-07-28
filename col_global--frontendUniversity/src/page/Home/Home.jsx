import { Service } from "../../components/import"
import { HeroVideo, Scholarship, StudyDestination, TopUniversity } from "../../container/import"

const Home = () => {
     return (
          <div className="md:flex md:flex-col md:gap-10">
               <HeroVideo />
               <TopUniversity />
               <Scholarship />
               <StudyDestination />
               <Service />
          </div>
     )
}

export default Home