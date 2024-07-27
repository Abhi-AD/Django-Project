import SanboxCourse from "./SanboxCourse"
import SanboxHeader from "./SanboxHeader"
import SanboxProgram from "./SanboxProgram"
import SanboxSubmenu from "./SanboxSubmenu"
import SanboxSucessInterView from "./SanboxSucessInterView"

const Sanbox = () => {
     return (
          <div className=" border-gray-200 dark:bg-white-900 top-0">
               <div className='max-w-screen-2xl flex flex-col items-left justify-between mx-auto p-4'>
                    <SanboxSubmenu />
                    <SanboxHeader />
                    <SanboxSucessInterView />
                    <SanboxCourse />
                    <SanboxProgram />
               </div>
          </div>
     )
}

export default Sanbox