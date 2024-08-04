import { FaCheck } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md"
import { RiEditBoxLine } from "react-icons/ri";
import { SiSpeedtest } from "react-icons/si";
const Admission = () => {
     return (
          <div className="max-w-screen-xl">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                         <h2 className="text-2xl font-bold mb-4">Admissions</h2>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex items-start">
                                   <FaCheck className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                   <div className='flex flex-col'>
                                        <div>Type</div>
                                        <div className="font-semibold">4-year • Public</div>
                                   </div>
                              </div>
                              <div className="flex items-start">
                                   <MdOutlineDateRange className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                   <div className='flex flex-col gap-1'>
                                        <div>Regular Application Due</div>
                                        <div className="font-semibold">Not available</div>
                                   </div>
                              </div>
                              <div className="flex items-start">
                                   <SiSpeedtest className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                   <div className='flex flex-col gap-1'>
                                        <div>SAT Range</div>
                                        <div className="font-semibold">790–930*</div>
                                   </div >
                              </div >

                              <div className="flex items-start">
                                   <RiEditBoxLine className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                   <div className='flex flex-col gap-1'>
                                        <div>ACT Range</div>
                                        <div className="font-semibold">15–15*</div>
                                   </div >
                              </div >
                         </div >
                    </div >
               </div >
               <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

               <div className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
                    <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">Application Requirements</h1>
                    <div>
                         <div className="flex flex-col gap-4">
                              <div>
                                   <div className="flex flex-col sm:flex-row items-center justify-between">
                                        <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                                             <p className="font-bold">High School GPA</p>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                             <p>Considered but not required</p>
                                        </div>
                                   </div>
                                   <hr className="my-2 border-gray-200 dark:border-gray-700" />
                              </div>
                              <div>
                                   <div className="flex flex-col sm:flex-row items-center justify-between">
                                        <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                                             <p className="font-bold">High School Rank</p>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                             <p>Neither required nor recommended</p>
                                        </div>
                                   </div>
                                   <hr className="my-2 border-gray-200 dark:border-gray-700" />
                              </div>
                              <div>
                                   <div className="flex flex-col sm:flex-row items-center justify-between">
                                        <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                                             <p className="font-bold">College Prep Courses</p>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                             <p>Recommended</p>
                                        </div>
                                   </div>
                                   <hr className="my-2 border-gray-200 dark:border-gray-700" />
                              </div>
                              <div>
                                   <div className="flex flex-col sm:flex-row items-center justify-between">
                                        <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                                             <p className="font-bold">SAT/ACT Scores</p>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                             <p>Not available</p>
                                        </div>
                                   </div>
                                   <hr className="my-2 border-gray-200 dark:border-gray-700" />
                              </div>
                         </div>
                    </div>
               </div>


          </div >
     )
}

export default Admission