import { CourseLessonHeader, CourseLessonQuiz, CourseLessons, CourseShorExplain, ProgressReport } from '../../../import'
const CourseLesson = () => {
     return (
          <div className="flex flex-col gap-2 mb-5">
               <CourseLessonHeader />
               <div className='flex flex-col'>
                    <CourseLessons />
                    <CourseShorExplain />
                    <div className="max-w-screen-2xl mx-auto flex justify-between">
                         {/* <div className=''> */}
                         <CourseLessonQuiz />
                         <ProgressReport />
                         {/* </div> */}
                    </div>
               </div>
          </div>
     )
}

export default CourseLesson