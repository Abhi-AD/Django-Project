import FAQSection from "./FAQSection"
import UniversityCourseHero from "./UniversityCourseHero"



const CourseDetails = () => {
  return (
    <div className="paddingcontainer paddingbuttom flex  flex-col gap-3">
      <UniversityCourseHero />
      <FAQSection />
    </div>
  )
}

export default CourseDetails