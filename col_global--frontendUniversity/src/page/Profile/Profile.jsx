import { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';

const Profile = () => {
     const [dropdownVisible, setDropdownVisible] = useState(false);

     const toggleDropdown = () => {
          setDropdownVisible(!dropdownVisible);
     };

     return (
          <div className="relative max-w-sm bg-white border-0 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               <div className="relative flex flex-col items-end px-4 pt-4">
                    <button
                         id="dropdownButton"
                         onClick={toggleDropdown}
                         className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                         type="button"
                    >
                         <span className="sr-only">Open dropdown</span>
                         <FaEllipsisH />
                    </button>
                    <div
                         id="dropdown"
                         className={`absolute right-0 top-full mt-2 z-10 ${dropdownVisible ? 'block' : 'hidden'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                    >
                         <ul className="py-2" aria-labelledby="dropdownButton">
                              <li>
                                   <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                   >
                                        Edit
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                   >
                                        Export Data
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                   >
                                        Delete
                                   </a>
                              </li>
                         </ul>
                    </div>
               </div>
               <div className="flex flex-col items-center pb-10 z-10">
                    <img
                         className="w-24 h-24 mb-3 rounded-full shadow-lg"
                         src="https://img.freepik.com/free-photo/woman-portrait-walking-street_1328-3258.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_user-customized"
                         alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <div className="flex mt-4 md:mt-6">
                         <a
                              href="#"
                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                         >
                              Add friend
                         </a>
                         <a
                              href="#"
                              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                         >
                              Message
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default Profile;
