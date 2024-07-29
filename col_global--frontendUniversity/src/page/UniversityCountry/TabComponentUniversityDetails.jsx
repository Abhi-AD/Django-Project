import { useState } from 'react';

const TabComponentUniversityDetails = () => {
     const [activeTab, setActiveTab] = useState('profile');

     const tabs = [
          { id: 'overview', label: 'OverView' },
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'settings', label: 'Settings' },
          { id: 'contacts', label: 'Contacts' }
     ];

     return (
          <div>
               <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                    <ul
                         className="flex flex-wrap -mb-px text-sm font-medium text-center"
                         id="default-tab"
                         role="tablist"
                    >
                         {tabs.map((tab) => (
                              <li key={tab.id} className="me-2" role="presentation">
                                   <button
                                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.id
                                             ? 'text-gray-800 dark:text-white border-blue-500'
                                             : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
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
                         className={`${activeTab === 'overview' ? 'block' : 'hidden'
                              } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
                         id="overview"
                         role="tabpanel"
                         aria-labelledby="overview-tab"
                    >
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-gray-100 p-4 rounded-lg shadow">
                                   <h2 className="font-semibold">Degree</h2>
                                   <p>MSc</p>
                              </div>
                              <div className="bg-gray-100 p-4 rounded-lg shadow">
                                   <h2 className="font-semibold">Teaching language</h2>
                                   <p>English</p>
                              </div>
                              <div className="bg-gray-100 p-4 rounded-lg shadow">
                                   <h2 className="font-semibold">Languages</h2>
                                   <p>The programme is completely in English. Additional courses taught in German are available. Interested students can practice their German language skills.</p>
                              </div>
                              <div className="bg-gray-100 p-4 rounded-lg shadow">
                                   <h2 className="font-semibold">Programme duration</h2>
                                   <p>4 semesters</p>
                              </div>
                              <div className="bg-gray-100 p-4 rounded-lg shadow">
                                   <h2 className="font-semibold">Beginning</h2>
                                   <p>Winter and summer semester</p>
                              </div>
                              <div className="bg-gray-100 p-4 rounded-lg shadow">
                                   <h2 className="font-semibold">Application deadline</h2>
                                   <p>Winter semester: 30 April<br /> (Early bird admission: 15 November)<br /> Summer semester: 31 October</p>
                              </div>
                              <div className="bg-gray-100 p-4 rounded-lg shadow">
                                   <h2 className="font-semibold">Tuition fees per semester in EUR</h2>
                                   <p>None</p>
                              </div>
                              <div className="bg-gray-100 p-4 rounded-lg shadow">
                                   <h2 className="font-semibold">Combined Master's degree / PhD programme</h2>
                                   <p>Yes</p>
                              </div>
                              <div className="bg-gray-100 p-4 rounded-lg shadow">
                                   <h2 className="font-semibold">Joint degree / double degree programme</h2>
                                   <p>No</p>
                              </div>
                         </div>
                         <div className="bg-gray-100 p-4 rounded-lg shadow mt-4">
                              <h2 className="font-semibold">Description/content</h2>
                              <p>Within the field of mathematics, the study programme focuses on financial mathematics, actuarial sciences, statistics, and computational methods. Lectures in the mentioned fields are accompanied by seminars, reading courses, and project seminars. In addition, the participants take modules like Insurance Economics, Economics of Banking, Dynamics of Financial Markets.</p>
                         </div>
                    </div>
                    <div
                         className={`${activeTab === 'dashboard' ? 'block' : 'hidden'
                              } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
                         id="dashboard"
                         role="tabpanel"
                         aria-labelledby="dashboard-tab"
                    >
                         <p className="text-sm text-gray-500 dark:text-gray-400">
                              This is some placeholder content the{' '}
                              <strong className="font-medium text-gray-800 dark:text-white">
                                   Dashboard tab's associated content
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
                                   Settings tab's associated content
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
                                   Contacts tab's associated content
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
