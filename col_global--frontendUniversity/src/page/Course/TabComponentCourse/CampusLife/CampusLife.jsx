import CostsList from "./CostsList"
import { GiTrophyCup } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";
import { GrUser } from "react-icons/gr";
import { RiSettingsFill } from "react-icons/ri";
const CampusLife = () => {
     const activities = [
          "Army ROTC",
          "Choral Groups",
          "Concert Band",
          "Dance",
          "Drama/Theater",
          "International Student Organization",
          "Jazz Band",
          "Literary Magazine",
          "Music Ensembles",
          "Musical Theater",
          "Pep Band",
          "Radio Station",
          "Student Government",
          "Student Newspaper",
          "Television Station"
     ];

     return (
          <div className="max-w-screen-xl">
               <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                         <div className="flex flex-col gap-2">
                              <h2 className="text-2xl font-bold mb-4">Campus Life</h2>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                   <div className="flex items-start">
                                        <RiSettingsFill className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Setting</div>
                                             <div className="font-semibold">Suburban</div>
                                        </div>
                                   </div>
                                   <div className="flex items-start">
                                        <GrUser className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Undergraduate Students</div>
                                             <div className="font-semibold"> 13,318</div>
                                        </div>
                                   </div>
                                   <div className="flex items-start">
                                        <FaSackDollar className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Average Per Year for Campus Housing</div>
                                             <div className="font-semibold">$16,200</div>
                                        </div>
                                   </div>
                                   <div className="flex items-start">
                                        <GiTrophyCup className="bg-blue-400 p-2 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Sports</div>
                                             <div className="font-semibold">Club, Intercollegiate, Intramural and NCAA Division II
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
               <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">Tuition</h1>
                    <div className="flex justify-between">
                         <div className="w-1/2">
                              <p>Average Net Price</p>
                         </div>
                         <div className="w-1/2">
                              <p>$4,500 per year</p>
                         </div>
                    </div>
                    <div className="flex flex-col gap-2">
                         <p className="text-lg">TYour net price is a college’s cost of attendance minus the grants and scholarships you receive. The net price you pay for a particular college is specific to you because it’s based on your personal circumstances and the college’s financial aid policies. Use the college’s Net Price calculator for the most accurate estimate of your net price.</p>
                    </div>

                    <CostsList />





                    <div className="flex flex-col gap-2 ">
                         <h2 className="text-2xl font-bold mb-4">Special Academics Program</h2>
                         <div className="grid grid-cols-1 lg:grid-cols-2">
                              {activities.map((program, index) => (
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

export default CampusLife