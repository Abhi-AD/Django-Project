import { LifeStyle } from "../../components/import";
import { Scholarship, StudyDestination, TopUniversity } from "../../container/import"

const University_Country = () => {
     return (
          <div className="p-4">
               <TopUniversity />
               <Scholarship />
               <StudyDestination />
               <LifeStyle />
          </div>
     )
}

export default University_Country;