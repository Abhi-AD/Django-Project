import ReviewArticle from "./ReviewArticle"
import UniversityCountryDetails from "./UniversityCountryDetails"
import UniversityCountryDetailsGallery from "./UniversityCountryDetailsGallery"

const UniversityDetails = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <UniversityCountryDetails />
      <UniversityCountryDetailsGallery />
      <ReviewArticle />
    </div>
  )
}

export default UniversityDetails