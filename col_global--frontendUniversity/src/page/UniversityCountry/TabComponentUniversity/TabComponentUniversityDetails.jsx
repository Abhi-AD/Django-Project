import { useState } from 'react';
import Overview from './Overview';
import Admission from './Admission';
import Costs from './Costs/Costs';
import Academics from './Academics';
import CampusLife from './CampusLife/CampusLife';
import { CiLocationOn, CiMobile1 } from 'react-icons/ci';
import { MdComputer } from 'react-icons/md';


const TabComponentUniversityDetails = () => {
     const [activeTab, setActiveTab] = useState('overview');

     const tabs = [
          { id: 'overview', label: 'Overview' },
          { id: 'admissions', label: 'Admissions' },
          { id: 'academics', label: 'Academics' },
          { id: 'costs', label: 'Costs' },
          { id: 'campus-life', label: 'Campus Life' },
     ];

     return (
          <div>
               <div className="sticky top-16 mb-4 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 z-10">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                         {tabs.map((tab) => (
                              <li key={tab.id} className="me-2" role="presentation">
                                   <button
                                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.id
                                             ? 'text-gray-800 dark:text-white border-blue-500'
                                             : 'hover:text-gray-600 hover:border-blue-300 dark:hover:text-gray-300'
                                             }`}
                                        id={`${tab.id}-tab`}
                                        type="button"
                                        role="tab"
                                        aria-controls={tab.id}
                                        aria-selected={activeTab === tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                   >
                                        {tab.label}
                                   </button>
                              </li>
                         ))}
                    </ul>
               </div>
               <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/3">
                         <div id="default-tab-content">
                              <div
                                   className={`${activeTab === 'overview' ? 'block' : 'hidden'} p-4 rounded-lg dark:bg-gray-800 md:p-6 lg:p-8`}
                                   id="overview"
                                   role="tabpanel"
                                   aria-labelledby="overview-tab"
                              >
                                   <Overview />
                              </div>
                              <div
                                   className={`${activeTab === 'admissions' ? 'block' : 'hidden'} p-4 rounded-lg dark:bg-gray-800 md:p-6 lg:p-8`}
                                   id="admissions"
                                   role="tabpanel"
                                   aria-labelledby="campus-life-tab"
                              >
                                   <Admission />
                              </div>
                              <div
                                   className={`${activeTab === 'academics' ? 'block' : 'hidden'} p-4 rounded-lg dark:bg-gray-800 md:p-6 lg:p-8`}
                                   id="academics"
                                   role="tabpanel"
                                   aria-labelledby="academics-tab"
                              >
                                   <Academics />
                              </div>
                              <div
                                   className={`${activeTab === 'costs' ? 'block' : 'hidden'} p-4 rounded-lg dark:bg-gray-800 md:p-6 lg:p-8`}
                                   id="costs"
                                   role="tabpanel"
                                   aria-labelledby="costs-tab"
                              >
                                   <Costs />
                              </div>
                              <div
                                   className={`${activeTab === 'campus-life' ? 'block' : 'hidden'} p-4 rounded-lg dark:bg-gray-800 md:p-6 lg:p-8`}
                                   id="campus-life"
                                   role="tabpanel"
                                   aria-labelledby="campus-life-tab"
                              >
                                   <CampusLife />
                              </div>
                         </div>

                    </div>
                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                         <div className="flex flex-col gap-2">
                              <h1 className="font-bold text-2xl">Contact Information</h1>
                              <div className="flex gap-2 items-center">
                                   <CiLocationOn size={24} />
                                   <p className='underline'>1000 E Victoria St, Carson, CA 90747</p>
                              </div>
                              <div className="flex gap-2 items-center">
                                   <CiMobile1 size={24} />
                                   <p>(310) 243-3645</p>
                              </div>
                              <div className="flex gap-2 items-center">
                                   <MdComputer size={24} />
                                   <p className='underline text-blue-500'>csudh.edu</p>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default TabComponentUniversityDetails;
