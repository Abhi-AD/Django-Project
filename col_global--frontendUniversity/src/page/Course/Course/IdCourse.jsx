import { LifeStyle } from "../../../components/import";
import { SelectEventsSilder, SilderSelectUniversity } from "../../../container/import"
import CourseHero from "./CourseHero";

const IdCourse = () => {
     return (
          <div className="flex flex-col gap-10 mb-2">
               <CourseHero />
               <SilderSelectUniversity />

               <SelectEventsSilder />
               <LifeStyle />
          </div>
     )
}

export default IdCourse;