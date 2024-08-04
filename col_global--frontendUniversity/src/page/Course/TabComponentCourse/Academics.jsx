import { FaFileInvoice, FaGraduationCap } from "react-icons/fa"
import TableWithSeeMoreCourse from "./TableWithSeeMoreCourse";
import { MdCurrencyExchange, MdOutlineDataExploration } from "react-icons/md";

const Academics = () => {
     const programs = [
          "Accelerated Study",
          "Cross-Registration",
          "Distance Learning",
          "Double Major",
          "Dual Enrollment of High School Students",
          "External Degree Program",
          "Honors Program",
          "Independent Study",
          "Internships",
          "ROTC, Army",
          "Student-Designed Major",
          "Study Abroad",
          "Teacher Certification",
          "Undergraduate Research",
          "Weekend College",
     ];
     return (
          <div className="max-w-screen-xl">
               <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                         <div className="flex flex-col gap-2">
                              <h2 className="text-2xl font-bold mb-4">Academics</h2>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                   <div className="flex items-start">
                                        <FaGraduationCap className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Graduation Rate</div>
                                             <div className="font-semibold">53%</div>
                                        </div>
                                   </div>
                                   <div className="flex items-start">
                                        <FaFileInvoice className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Majors Available</div>
                                             <div className="font-semibold">79</div>
                                        </div>
                                   </div>
                                   <div className="flex items-start">
                                        <MdOutlineDataExploration className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Student-to-Faculty Ratio</div>
                                             <div className="font-semibold">25:1</div>
                                        </div>
                                   </div>
                                   <div className="flex items-start">
                                        <MdCurrencyExchange className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Retention Rate</div>
                                             <div className="font-semibold">71%</div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
               <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">AP Credit Policy</h1>
                    <div className="flex flex-col gap-2">
                         <p className="text-lg">The University grants credit toward the undergraduate degree for the successful passage of the examinations of the Advanced Placement Program (AP). Students who present scores of 3, 4 or 5 on one or more AP examination will be awarded university credit. Students who have taken AP Examinations should request that official scores be sent to the Office of Admissions.</p>
                         <p className="text-lg">For more information, <a href=""><span className="underline text-blue-600 cursor-pointer">view the credit policy on the college&apos;s website.</span></a> </p>

                    </div>
                    <div className="flex flex-col gap-1">
                         <p className="font-bold">Offers credits</p>
                         <p className="font-medium">Yes</p>
                    </div>
                    <div className="flex flex-col gap-1">
                         <p className="font-bold">Offers placement into advanced courses</p>
                         <p className="font-medium">Yes</p>
                    </div>
                    <TableWithSeeMoreCourse />








                    <div className="flex flex-col gap-2 p-4">
                         <h2 className="text-2xl font-bold mb-4">Special Academics Program</h2>
                         <div className="grid grid-cols-1 lg:grid-cols-2">
                              {programs.map((program, index) => (
                                   <div key={index} className="text-lg">
                                        <li>{program}</li>
                                   </div>
                              ))}
                         </div>
                    </div>


               </div>
               <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          </div>
     )
}

export default Academics