import { FaChartBar, FaDollarSign, FaGraduationCap, FaInfo, FaUniversity } from "react-icons/fa"
import { CiLocationOn, CiMobile1 } from "react-icons/ci";
import { MdComputer } from "react-icons/md";
const Overview = () => {
     return (
          <div className="max-w-screen-xl">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                         <h2 className="text-2xl font-bold mb-4">Academics</h2>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex items-start">
                                   <FaInfo className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                   <div className='flex flex-col gap-1'>
                                        <div>Type</div>
                                        <div className="font-semibold">4-year • Public</div>
                                   </div>
                              </div>
                              <div className="flex items-start">
                                   <FaUniversity className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                   <div className='flex flex-col gap-1'>
                                        <div>Campus Life</div>
                                        <div className="font-semibold">Large • Suburban</div>
                                   </div>
                              </div>
                              <div className="flex items-start">
                                   <FaDollarSign className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                   <div className='flex flex-col gap-1'>
                                        <div>Average Per Year After Aid</div>
                                        <div className="font-semibold">$5K</div>
                                   </div>
                              </div>
                              <div className="flex items-start">
                                   <FaChartBar className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                   <div className='flex flex-col gap-1'>
                                        <div>SAT Range</div>
                                        <div className="font-semibold">790–930</div>
                                   </div>
                              </div>
                              <div className="flex items-start">
                                   <FaGraduationCap className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                   <div className='flex flex-col gap-1'>
                                        <div>Graduation Rate</div>
                                        <div className="font-semibold">53%</div>
                                   </div>
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
               <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

               <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">Contact Information</h1>
                    <div className="flex gap-2 items-center">
                         <CiLocationOn size={24} />
                         <p>1000 E Victoria St, Carson, CA 90747</p>
                    </div>
                    <div className="flex gap-2 items-center">
                         <CiMobile1 size={24} />
                         <p>(310) 243-3645</p>
                    </div>
                    <div className="flex gap-2 items-center">
                         <MdComputer size={24} />
                         <p>csudh.edu</p>
                    </div>
               </div>

          </div>
     )
}

export default Overview