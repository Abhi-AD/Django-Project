import { useState } from 'react';

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
                              <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row hover:bg-gray-100">
                                   <div className="p-4 rounded-lg flex-1 md:flex-grow-0 md:flex-shrink-0 md:basis-1/4">
                                        <h2 className="font-semibold">Degree</h2>
                                   </div>
                                   <div className="p-4 rounded-lg flex flex-wrap gap-4">
                                        <p className="whitespace-nowrap">MSc</p>
                                        <p className="whitespace-nowrap">MBA</p>
                                        <p className="whitespace-nowrap">PhD</p>
                                   </div>

                              </div>


                              <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row hover:bg-gray-100">
                                   <div className="p-4 rounded-lg flex-1 md:flex-grow-0 md:flex-shrink-0 md:basis-1/4">
                                        <h2 className="font-semibold">Teaching language</h2>
                                   </div>
                                   <div className="p-4 rounded-lg flex flex-wrap gap-4">
                                        <p className="whitespace-nowrap">English</p>
                                        <p className="whitespace-nowrap">Germany</p>
                                        <p className="whitespace-nowrap">PhD</p>
                                   </div>
                              </div>

                              <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row hover:bg-gray-100">
                                   <div className="p-4 rounded-lg flex-1 md:flex-grow-0 md:flex-shrink-0 md:basis-1/4">
                                        <h2 className="font-semibold">Languages</h2>
                                   </div>
                                   <div className="p-4 rounded-lg flex-3 md:flex-grow-0 md:flex-shrink-0 md:basis-3/4">
                                        <p>
                                             The programme is completely in English. Additional courses taught in German are available. Interested students can practice their German language skills.</p>
                                   </div>
                              </div>
                              <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row hover:bg-gray-100">
                                   <div className="p-4 rounded-lg flex-1 md:flex-grow-0 md:flex-shrink-0 md:basis-1/4">
                                        <h2 className="font-semibold">Programme duration</h2>
                                   </div>
                                   <div className="p-4 rounded-lg flex flex-wrap gap-4">
                                        <p className="whitespace-nowrap">4 semester</p>
                                        <p className="whitespace-nowrap">8 semester</p>
                                        <p className="whitespace-nowrap">3years</p>
                                   </div>
                              </div>
                              <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row hover:bg-gray-100">
                                   <div className="p-4 rounded-lg flex-1 md:flex-grow-0 md:flex-shrink-0 md:basis-1/4">
                                        <h2 className="font-semibold">Beginning</h2>
                                   </div>
                                   <div className="p-4 rounded-lg flex-3 md:flex-grow-0 md:flex-shrink-0 md:basis-3/4">
                                        <p> Winter and summer semester</p>
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
