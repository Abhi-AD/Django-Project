import { CourseLessonHeader, CourseLessons, CourseShorExplain, ProgressReport } from '../../../import'
const CourseLesson = () => {
     return (
          <div className="flex flex-col gap-2 mb-5">
               <CourseLessonHeader />
               <div className='flex flex-col'>
                    <CourseLessons />
                    <div className=''>
                         <CourseShorExplain />
                         <ProgressReport />
                    </div>
               </div>
          </div>
     )
}

export default CourseLesson