import { Link } from 'react-router-dom'
import { PopularLearn, TrendingLearn } from '../import'
const Learn = () => {
     return (
          <div className="max-w-screen-2xl mx-4 mb-2 md:mx-auto md:mb-5">
               <Link to={''} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500  border-blue-500">All Course</Link>
               <PopularLearn />
               <TrendingLearn />
          </div>
     )
}

export default Learn