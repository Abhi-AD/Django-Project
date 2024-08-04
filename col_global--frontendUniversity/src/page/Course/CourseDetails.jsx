
import TabComponentCourseDetails from "./TabComponentCourse/TabComponentCourseDetails"
import UniversityCourseDetails from "./UniversityCourseDetails"

const CourseDetails = () => {
  return (
    <div className="container mx-auto py-6 px-4 flex  flex-col gap-3">
      <UniversityCourseDetails />
      <TabComponentCourseDetails />
    </div>
  )
}

export default CourseDetails