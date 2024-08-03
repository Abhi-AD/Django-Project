import { UniversityScholarship } from "../../container/import"
import TabComponentUniversityDetails from "./TabComponentUniversity/TabComponentUniversityDetails"
import UniversityCountryDetails from "./UniversityCountryDetails"
import UniversityCountryDetailsGallery from "./UniversityCountryDetailsGallery"

const UniversityDetails = () => {
  return (
    <div className="container mx-auto py-6 px-4 flex  flex-col gap-3">
      <UniversityCountryDetails />
      <TabComponentUniversityDetails />
      <UniversityScholarship />
      <UniversityCountryDetailsGallery />
    </div>
  )
}

export default UniversityDetails