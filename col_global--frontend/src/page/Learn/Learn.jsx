import { Link } from 'react-router-dom'
import { PopularLearn, TrendingLearn } from '../import'
import useDarkMode from '../../hooks/useDarkMode';
const Learn = () => {
     const { DarkMode } = useDarkMode();
     return (
          <div className="max-w-screen-2xl mt-5 mx-4 mb-2 md:mx-auto md:mb-5">
               <Link to={'/learn/all-course'} className={`inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center ${DarkMode ? ' bg-gray-700 ' : 'text-white bg-blue-500 '}  mb-5 shadow-md`}>All Course</Link>
               <PopularLearn />
               <TrendingLearn />
          </div>
     )
}

export default Learn