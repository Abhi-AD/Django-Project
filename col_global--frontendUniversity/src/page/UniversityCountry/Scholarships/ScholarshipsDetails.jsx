
import { UniversityScholarship } from "../../../container/import"
import FAQSection from "./FAQSection"
import ScholarshipOverview from "./ScholarshipOverview"
import ScholarshipsDetailsHero from "./ScholarshipsDetailsHero"

const ScholarshipsDetails = () => {
     return (
          <div className="">
               <ScholarshipsDetailsHero />
               <ScholarshipOverview />
               <FAQSection />
               <UniversityScholarship />

          </div>
     )
}

export default ScholarshipsDetails
