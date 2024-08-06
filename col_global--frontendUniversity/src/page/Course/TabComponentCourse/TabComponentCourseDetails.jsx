import { useState } from 'react';
import Overview from './Overview';
import Admission from './Admission';
import Costs from './Costs/Costs';
import Academics from './Academics';
import CampusLife from './CampusLife/CampusLife';
import useDarkMode from '../../../hooks/useDarkMode';

const TabComponentCourseDetails = () => {
     const [activeTab, setActiveTab] = useState('overview');
     const { DarkMode } = useDarkMode();
     const tabs = [
          { id: 'overview', label: 'Overview' },
          { id: 'admissions', label: 'Admissions' },
          { id: 'academics', label: 'Academics' },
          { id: 'costs', label: 'Costs' },
          { id: 'campus-life', label: 'Campus Life' },
     ];

     return (
          <div>
               <div className={`sticky top-16 mb-4 border-gray-200 dark:border-gray-700 ${DarkMode ? "bg-black" : "bg-white"}  dark:bg-gray-900 z-50`}>
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                         {tabs.map((tab) => (
                              <li key={tab.id} className="me-2" role="presentation">
                                   <button
                                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.id
                                             ? ' dark:text-white border-blue-500'
                                             : 'hover:text-gray-600 hover:border-blue-300'
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
     );
};

export default TabComponentCourseDetails;
