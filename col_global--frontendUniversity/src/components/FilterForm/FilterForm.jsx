import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import {
     study,
     language,
     study_mode,
     Fees,
     Beginning,
     location, // Added location import
     institution,
     intake,
     course
} from './../../data/searchform';

const FilterForm = () => {
     const [isOpen, setIsOpen] = useState(null);
     const [selectedOptions, setSelectedOptions] = useState([]);
     const [searchQuery, setSearchQuery] = useState('');
     const [duration, setDuration] = useState(1);

     const dropdownRefs = useRef([]);

     const toggleDropdown = (index) => {
          setIsOpen(prevIndex => prevIndex === index ? null : index);
     };

     const handleOptionChange = (option) => {
          setSelectedOptions(prev =>
               prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
          );
     };

     const handleClickOutside = (event) => {
          if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
               setIsOpen(null);
          }
     };

     const filteredlocation = location.filter(option =>
          option.toLowerCase().includes(searchQuery.toLowerCase())
     );
     const filteredInstitution = institution.filter(option =>
          option.toLowerCase().includes(searchQuery.toLowerCase())
     );

     useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
               document.removeEventListener('mousedown', handleClickOutside);
          };
     }, []);

     const handleDurationChange = (event) => {
          setDuration(event.target.value);
     };
     const convertWeeksToYears = (weeks) => {
          const years = weeks / 52;
          return years.toFixed(2); // To display two decimal places
     };

     return (
          <div className="mx-auto bg-blue-50 rounded-lg shadow-md p-4 flex flex-col gap-4 max-w-lg text-black">
               <div className="w-full flex items-center border rounded-md bg-gray-200">
                    <input
                         type="text"
                         placeholder="Search item"
                         className="w-full p-2 border-none rounded-md bg-gray-200 focus:outline-none"
                         value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="ml-2 text-gray-500 bg-gray-200" />
               </div>

               <fieldset className="relative w-full">
                    <legend className="block mb-1">Course type</legend>
                    <button
                         type="button"
                         onClick={() => toggleDropdown(0)}
                         aria-expanded={isOpen === 0}
                         aria-controls="dropdown-menu-1"
                         className="w-full p-2 border rounded-md flex bg-gray-200 justify-between items-center"
                    >
                         <span>Please select</span>
                         <FaChevronDown className="w-3 h-3" />
                    </button>
                    {isOpen === 0 && (
                         <div
                              id="dropdown-menu-1"
                              ref={el => dropdownRefs.current[0] = el}
                              className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                         >
                              {course.map(option => (
                                   <label
                                        key={option}
                                        className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                   >
                                        <input
                                             type="checkbox"
                                             checked={selectedOptions.includes(option)}
                                             onChange={() => handleOptionChange(option)}
                                             className="mr-2"
                                        />
                                        {option}
                                   </label>
                              ))}
                         </div>
                    )}
               </fieldset>

               <fieldset className="relative w-full">
                    <legend className="block mb-1">Field of Study</legend>
                    <button
                         type="button"
                         onClick={() => toggleDropdown(1)}
                         aria-expanded={isOpen === 1}
                         aria-controls="dropdown-menu-1"
                         className="w-full p-2 border rounded-md flex bg-gray-200 justify-between items-center"
                    >
                         <span>Please select</span>
                         <FaChevronDown className="w-3 h-3" />
                    </button>
                    {isOpen === 1 && (
                         <div
                              id="dropdown-menu-1"
                              ref={el => dropdownRefs.current[1] = el}
                              className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                         >
                              {study.map(option => (
                                   <label
                                        key={option}
                                        className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                   >
                                        <input
                                             type="checkbox"
                                             checked={selectedOptions.includes(option)}
                                             onChange={() => handleOptionChange(option)}
                                             className="mr-2"
                                        />
                                        {option}
                                   </label>
                              ))}
                         </div>
                    )}
               </fieldset>

               <fieldset className="relative w-full">
                    <legend className="block mb-1">Course Language</legend>
                    <button
                         type="button"
                         onClick={() => toggleDropdown(2)}
                         aria-expanded={isOpen === 2}
                         aria-controls="dropdown-menu-1"
                         className="w-full p-2 border rounded-md flex bg-gray-200 justify-between items-center"
                    >
                         <span>Please select</span>
                         <FaChevronDown className="w-3 h-3" />
                    </button>
                    {isOpen === 2 && (
                         <div
                              id="dropdown-menu-1"
                              ref={el => dropdownRefs.current[2] = el}
                              className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                         >
                              {language.map(option => (
                                   <label
                                        key={option}
                                        className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                   >
                                        <input
                                             type="checkbox"
                                             checked={selectedOptions.includes(option)}
                                             onChange={() => handleOptionChange(option)}
                                             className="mr-2"
                                        />
                                        {option}
                                   </label>
                              ))}
                         </div>
                    )}
               </fieldset>

               <fieldset className="relative w-full">
                    <legend className="block mb-1">Mode of study</legend>
                    <button
                         type="button"
                         onClick={() => toggleDropdown(3)}
                         aria-expanded={isOpen === 3}
                         aria-controls="dropdown-menu-1"
                         className="w-full p-2 border rounded-md flex bg-gray-200 justify-between items-center"
                    >
                         <span>Please select</span>
                         <FaChevronDown className="w-3 h-3" />
                    </button>
                    {isOpen === 3 && (
                         <div
                              id="dropdown-menu-1"
                              ref={el => dropdownRefs.current[3] = el}
                              className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                         >
                              {study_mode.map(option => (
                                   <label
                                        key={option}
                                        className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                   >
                                        <input
                                             type="checkbox"
                                             checked={selectedOptions.includes(option)}
                                             onChange={() => handleOptionChange(option)}
                                             className="mr-2"
                                        />
                                        {option}
                                   </label>
                              ))}
                         </div>
                    )}
               </fieldset>

               <div className="w-full">
                    <label className="block mb-1">Duration</label>
                    <div className="flex flex-col">
                         <input
                              type="range"
                              min="1"
                              max="208"
                              value={duration}
                              onChange={handleDurationChange}
                              className="w-full"
                         />
                         <div className="flex justify-between text-xs mt-1">
                              <span>{duration} {duration === '1' ? 'week' : 'weeks'} ({convertWeeksToYears(duration)} years)</span>
                              <span>More than 4 years</span>
                         </div>
                    </div>
               </div>


               <div className="w-full mt-3 mb-3">
                    <h2 className="font-bold mb-2 text-lg flex gap-2 items-center"> <IoLocationSharp size={30} /> Location</h2>
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">City</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(4)}
                              aria-expanded={isOpen === 4}
                              aria-controls="dropdown-menu-1"
                              className="w-full p-2 border rounded-md flex bg-gray-200 justify-between items-center"
                         >
                              <span>Please select</span>
                              <FaChevronDown className="w-3 h-3" />
                         </button>
                         {isOpen === 4 && (
                              <div
                                   id="dropdown-menu-1"
                                   ref={el => dropdownRefs.current[4] = el}
                                   className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                              >
                                   <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full p-2 border-b border-gray-300"
                                   />
                                   {filteredlocation.length > 0 ? (
                                        filteredlocation.map(option => (
                                             <label
                                                  key={option}
                                                  className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                             >
                                                  <input
                                                       type="checkbox"
                                                       checked={selectedOptions.includes(option)}
                                                       onChange={() => handleOptionChange(option)}
                                                       className="mr-2"
                                                  />
                                                  {option}
                                             </label>
                                        ))
                                   ) : (
                                        <p className="p-2 text-gray-500">No options found</p>
                                   )}
                              </div>
                         )}
                    </fieldset>
               </div>


               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Type of institution</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(5)}
                              aria-expanded={isOpen === 5}
                              aria-controls="dropdown-menu-1"
                              className="w-full p-2 border rounded-md flex bg-gray-200 justify-between items-center"
                         >
                              <span>Please select</span>
                              <FaChevronDown className="w-3 h-3" />
                         </button>
                         {isOpen === 5 && (
                              <div
                                   id="dropdown-menu-1"
                                   ref={el => dropdownRefs.current[5] = el}
                                   className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                              >
                                   <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full p-2 border-b border-gray-300"
                                   />
                                   {filteredInstitution.length > 0 ? (
                                        filteredInstitution.map(option => (
                                             <label
                                                  key={option}
                                                  className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                             >
                                                  <input
                                                       type="checkbox"
                                                       checked={selectedOptions.includes(option)}
                                                       onChange={() => handleOptionChange(option)}
                                                       className="mr-2"
                                                  />
                                                  {option}
                                             </label>
                                        ))
                                   ) : (
                                        <p className="p-2 text-gray-500">No options found</p>
                                   )}
                              </div>
                         )}
                    </fieldset>
               </div>









               <div className="w-full mt-3 mb-3">
                    <h2 className="font-bold mb-2 text-lg flex gap-2 items-center"> <SiCoursera size={30} /> COURSE TYPE SPECIFIC</h2>
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Fees</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(6)}
                              aria-expanded={isOpen === 6}
                              aria-controls="dropdown-menu-1"
                              className="w-full p-2 border rounded-md flex bg-gray-200 justify-between items-center"
                         >
                              <span>Please select</span>
                              <FaChevronDown className="w-3 h-3" />
                         </button>
                         {isOpen === 6 && (
                              <div
                                   id="dropdown-menu-1"
                                   ref={el => dropdownRefs.current[6] = el}
                                   className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                              >
                                   {Fees.map(option => (
                                        <label
                                             key={option}
                                             className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                        >
                                             <input
                                                  type="checkbox"
                                                  checked={selectedOptions.includes(option)}
                                                  onChange={() => handleOptionChange(option)}
                                                  className="mr-2"
                                             />
                                             {option}
                                        </label>
                                   ))}
                              </div>
                         )}
                    </fieldset>
               </div>




               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Beginning</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(7)}
                              aria-expanded={isOpen === 7}
                              aria-controls="dropdown-menu-1"
                              className="w-full p-2 border rounded-md flex bg-gray-200 justify-between items-center"
                         >
                              <span>Please select</span>
                              <FaChevronDown className="w-3 h-3" />
                         </button>
                         {isOpen === 7 && (
                              <div
                                   id="dropdown-menu-1"
                                   ref={el => dropdownRefs.current[7] = el}
                                   className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                              >
                                   {Beginning.map(option => (
                                        <label
                                             key={option}
                                             className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                        >
                                             <input
                                                  type="checkbox"
                                                  checked={selectedOptions.includes(option)}
                                                  onChange={() => handleOptionChange(option)}
                                                  className="mr-2"
                                             />
                                             {option}
                                        </label>
                                   ))}
                              </div>
                         )}
                    </fieldset>
               </div>

               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Date</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(8)}
                              aria-expanded={isOpen === 8}
                              aria-controls="dropdown-menu-1"
                              className="w-full p-2 border rounded-md flex bg-gray-200 justify-between items-center"
                         >
                              <span>Please select</span>
                              <FaChevronDown className="w-3 h-3" />
                         </button>
                         {isOpen === 8 && (
                              <div
                                   id="dropdown-menu-1"
                                   ref={el => dropdownRefs.current[8] = el}
                                   className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                              >
                                   {intake.map(option => (
                                        <label
                                             key={option}
                                             className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                        >
                                             <input
                                                  type="checkbox"
                                                  checked={selectedOptions.includes(option)}
                                                  onChange={() => handleOptionChange(option)}
                                                  className="mr-2"
                                             />
                                             {option}
                                        </label>
                                   ))}
                              </div>
                         )}
                    </fieldset>
               </div>
          </div>
     );
};

export default FilterForm;
