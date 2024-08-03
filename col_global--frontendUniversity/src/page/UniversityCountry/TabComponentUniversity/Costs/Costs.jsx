import { FaChartBar, FaMoneyBillWave } from "react-icons/fa"
import CostsList from "./CostsList"
import { TbAward } from "react-icons/tb";
import { IoInformation } from "react-icons/io5";

const Costs = () => {

     return (
          <div className="max-w-screen-xl">
               <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                         <div className="flex flex-col gap-2">
                              <h2 className="text-2xl font-bold mb-4">Costs</h2>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                   <div className="flex items-start">
                                        <IoInformation
                                             className="bg-blue-400 p-1 rounded-full text-white mr-2 "
                                             size={30}
                                        />
                                        <div className='flex flex-col gap-1'>
                                             <div>Average Per Year After Aid</div>
                                             <div className="font-semibold">  $4,500</div>
                                        </div>
                                   </div>
                                   <div className="flex items-start">
                                        <TbAward className="bg-blue-400 p-1 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Students Receiving Financial Aid</div>
                                             <div className="font-semibold">68%</div>
                                        </div>
                                   </div>
                                   <div className="flex items-start">
                                        <FaMoneyBillWave className="bg-blue-400 p-1 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Average Aid Package</div>
                                             <div className="font-semibold">$6,626</div>
                                        </div>
                                   </div>
                                   <div className="flex items-start">
                                        <FaChartBar className="bg-blue-400 p-1 rounded-full text-white mr-2" size={30} />
                                        <div className='flex flex-col gap-1'>
                                             <div>Financial Aid Application Due</div>
                                             <div className="font-semibold">March 2</div>
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











               </div>
               <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          </div>
     )
}

export default Costs