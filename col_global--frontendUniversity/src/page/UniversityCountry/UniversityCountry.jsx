import { Service } from "../../components/import"
import { Scholarship, StudyDestination, TopUniversity, DestinationFilter } from "../../container/import"

const University_Country = () => {
     return (
          <div className="">
               {/* <FilterForm /> */}
               <DestinationFilter />
               <TopUniversity />
               <Scholarship />
               <StudyDestination />
               <Service />
          </div>
     )
}

export default University_Country;