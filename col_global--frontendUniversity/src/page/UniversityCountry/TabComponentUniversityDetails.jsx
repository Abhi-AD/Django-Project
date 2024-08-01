import { useState } from 'react';
import { FaInfoCircle, FaUniversity, FaMoneyBillWave, FaGraduationCap, FaChartBar } from 'react-icons/fa';

const TabComponentUniversityDetails = () => {
     const [activeTab, setActiveTab] = useState('overview');

     const tabs = [
          { id: 'overview', label: 'Overview' },
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'settings', label: 'Settings' },
          { id: 'contacts', label: 'Contacts' }
     ];

     return (
          <div>
               <div className="mb-4  border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist" >
                         {tabs.map((tab) => (
                              <li key={tab.id} className="me-2" role="presentation">
                                   <button className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.id
                                        ? 'text-gray-800 dark:text-white border-blue-500'
                                        : 'hover:text-gray-600 hover:border-blue-300 dark:hover:text-gray-300'
                                        }`}
                                        id={`${tab.id}-tab`} type="button" role="tab" aria-controls={tab.id} aria-selected={activeTab === tab.id}
                                        onClick={() => setActiveTab(tab.id)}  >
                                        {tab.label}
                                   </button>
                              </li>
                         ))}
                    </ul>
               </div>
               <div id="default-tab-content">
                    <div className={`${activeTab === 'overview' ? 'block' : 'hidden'} p-4 rounded-lg  dark:bg-gray-800`} id="overview" role="tabpanel" aria-labelledby="overview-tab" >
                         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                              <div className="p-6 bg-white rounded-lg">
                                   <h2 className="text-2xl font-bold mb-4">Overview</h2>
                                   <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center">
                                             <FaInfoCircle className="text-blue-500 mr-2" size={24} />
                                             <div className='flex flex-col gap-1'>
                                                  <div>Type</div>
                                                  <div className="font-semibold">4-year • Public</div>
                                             </div>
                                        </div>
                                        <div className="flex items-center">
                                             <FaUniversity className="text-blue-500 mr-2" size={24} />
                                             <div className='flex flex-col gap-1'>
                                                  <div>Campus Life</div>
                                                  <div className="font-semibold">Large • Suburban</div>
                                             </div>
                                        </div>
                                        <div className="flex items-center">
                                             <FaMoneyBillWave className="text-blue-500 mr-2" size={24} />
                                             <div className='flex flex-col gap-1'>
                                                  <div>Average Per Year After Aid</div>
                                                  <div className="font-semibold">$5K</div>
                                             </div>
                                        </div>

                                        <div className="flex items-center">
                                             <FaChartBar className="text-blue-500 mr-2" size={24} />
                                             <div className='flex flex-col gap-1'>
                                                  <div>SAT Range</div>
                                                  <div className="font-semibold">790–930</div>
                                             </div>
                                        </div>
                                        <div className="flex items-center">
                                             <FaGraduationCap className="text-blue-500 mr-2" size={24} />
                                             <div className='flex flex-col gap-1'>
                                                  <div>Graduation Rate</div>
                                                  <div className="font-semibold">53%</div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                         </div>

                    </div>
                    <div className={`${activeTab === 'dashboard' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab"  >
                         <p className="text-sm text-gray-500 dark:text-gray-400">
                              This is some placeholder content the{' '}
                              <strong className="font-medium text-gray-800 dark:text-white">
                                   Dashboard tab&apos;s associated content
                              </strong>
                              . Clicking another tab will toggle the visibility of this one for
                              the next. The tab JavaScript swaps classes to control the content
                              visibility and styling.
                         </p>
                    </div>
                    <div
                         className={`${activeTab === 'settings' ? 'block' : 'hidden'
                              } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
                         id="settings"
                         role="tabpanel"
                         aria-labelledby="settings-tab"
                    >
                         <p className="text-sm text-gray-500 dark:text-gray-400">
                              This is some placeholder content the{' '}
                              <strong className="font-medium text-gray-800 dark:text-white">
                                   Settings tab&apos;s associated content
                              </strong>
                              . Clicking another tab will toggle the visibility of this one for
                              the next. The tab JavaScript swaps classes to control the content
                              visibility and styling.
                         </p>
                    </div>
                    <div
                         className={`${activeTab === 'contacts' ? 'block' : 'hidden'
                              } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
                         id="contacts"
                         role="tabpanel"
                         aria-labelledby="contacts-tab"
                    >
                         <p className="text-sm text-gray-500 dark:text-gray-400">
                              This is some placeholder content the{' '}
                              <strong className="font-medium text-gray-800 dark:text-white">
                                   Contacts tab&apos;s associated content
                              </strong>
                              . Clicking another tab will toggle the visibility of this one for
                              the next. The tab JavaScript swaps classes to control the content
                              visibility and styling.
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default TabComponentUniversityDetails;
