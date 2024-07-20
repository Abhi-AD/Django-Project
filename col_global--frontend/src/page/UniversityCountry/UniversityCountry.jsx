import { Service } from "../../components/import"
import Destination_Filter from "../../context/Destinations/Destination_Filter"
import { Scholarship, StudyDestination, TopUniversity } from "../../context/import"

const University_Country = () => {
     return (
          <div>
               <Destination_Filter />
               <TopUniversity />
               <Scholarship />
               <StudyDestination />
               <Service />
          </div>
     )
}

export default University_Country;