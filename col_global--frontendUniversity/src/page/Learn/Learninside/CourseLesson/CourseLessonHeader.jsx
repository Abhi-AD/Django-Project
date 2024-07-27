import { Link } from "react-router-dom"
import useDarkMode from "../../../../hooks/useDarkMode";

const CourseLessonHeader = () => {
     const { DarkMode } = useDarkMode();
     return (
          <div className={`${DarkMode ? 'bg-gray-800' : 'bg-blue-500'} text-white py-20`}>
               <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-8 lg:flex-row items-center">
                         <div className="lg:w-1/2">
                              <h1 className="text-4xl font-bold leading-tight mb-4">Tailwind CSS!</h1>
                              <div className="flex flex-col gap-3 mb-10">
                                   <p className="text-xl">Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.</p>

                              </div>
                              <Link to={``} className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">Let&apos;s Start</Link>
                         </div>
                         <div className="lg:w-1/2 lg:ml-12">
                              <img
                                   src="https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png"
                                   alt="Tailwind CSS"
                                   className="rounded-lg shadow-lg hover:shadow-xl transition duration-200"
                              />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default CourseLessonHeader