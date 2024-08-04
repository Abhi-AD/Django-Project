import { FaChartBar, FaDollarSign, FaGraduationCap, FaInfo, FaUniversity } from "react-icons/fa"
const Overview = () => {
     return (
          <div className="max-w-screen-xl">
               <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold mb-4">OverView</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         <div className="flex items-start  gap-2">
                              <FaInfo className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                              <div className='flex flex-col gap-1'>
                                   <div>Type</div>
                                   <div className="font-semibold">4-year • Public</div>
                              </div>
                         </div>
                         <div className="flex items-start  gap-2">
                              <FaUniversity className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                              <div className='flex flex-col gap-1'>
                                   <div>Campus Life</div>
                                   <div className="font-semibold">Large • Suburban</div>
                              </div>
                         </div>
                         <div className="flex items-start  gap-2">
                              <FaDollarSign className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                              <div className='flex flex-col gap-1'>
                                   <div>Average Per Year After Aid</div>
                                   <div className="font-semibold">$5K</div>
                              </div>
                         </div>
                         <div className="flex items-start  gap-2">
                              <FaChartBar className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                              <div className='flex flex-col gap-1'>
                                   <div>SAT Range</div>
                                   <div className="font-semibold">790–930</div>
                              </div>
                         </div>
                         <div className="flex items-start  gap-2">
                              <FaGraduationCap className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                              <div className='flex flex-col gap-1'>
                                   <div>Graduation Rate</div>
                                   <div className="font-semibold">53%</div>
                              </div>
                         </div>
                    </div>
               </div>

               <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
               <div>
                    <p className="mt-2 text-gray-500  border-gray-300">
                         California State University: Dominguez Hills is a large, 4-year, public technical college. This coed college is located in a suburban setting and is primarily a commuter campus. It offers bachelor&apos;s, certificate, and master&apos;s degrees.
                    </p>
               </div>


          </div>
     )
}

export default Overview