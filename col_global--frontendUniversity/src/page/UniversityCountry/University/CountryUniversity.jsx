import UniversityCountryDetailsGallery from "./UniversityCountryDetailsGallery"
import { UniversityScholarship } from "../../../container/import"
import UniversityCountryDetailsHero from "./UniversityCountryDetailsHero"
import UniversityCountryDetails from "./UniversityCountryDetails"

import UniversityCourseList from "./UniversityCourseList";
const CountryUniversity = () => {
  return (
    <div className=" paddingcontainer ">
      <UniversityCountryDetailsHero />
      <UniversityCountryDetails />
      <UniversityCountryDetailsGallery />
      <UniversityCourseList />
      <UniversityScholarship />
    </div>
  )
}

export default CountryUniversity