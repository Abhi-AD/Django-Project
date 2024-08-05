import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { Slider } from '@mui/material';
import {
     study,
     language,
     study_mode,
     location, // Added location import
     institution,
     intake,
     course
} from './../../data/searchform';

const FilterForm = () => {
     const [isOpen, setIsOpen] = useState(null);
     const [selectedOptions, setSelectedOptions] = useState([]);
     const [searchQuery, setSearchQuery] = useState('');
     const [studySearchQuery, setStudySearchQuery] = useState('');
     const [languageSearchQuery, setLanguageSearchQuery] = useState('');
     const [locationSearchQuery, setLocationSearchQuery] = useState('');
     const [institutionSearchQuery, setInstitutionSearchQuery] = useState('');
     const [feeValue, setFeeValue] = useState(2000);

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
          option.toLowerCase().includes(locationSearchQuery.toLowerCase())
     );
     const filteredstudy = study.filter(option =>
          option.toLowerCase().includes(studySearchQuery.toLowerCase())
     );

     const filteredinstitution = institution.filter(option =>
          option.toLowerCase().includes(institutionSearchQuery.toLowerCase())
     );
     const filteredlanguage = language.filter(option =>
          option.toLowerCase().includes(languageSearchQuery.toLowerCase())
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
     const convertMonthsToSemesters = (months) => {
          return Math.floor(months / 6);
     };


     const valueduration = (value) => {
          return `${value} month${value === 1 ? '' : 's'} (${convertMonthsToSemesters(value)} semester${convertMonthsToSemesters(value) === 1 ? '' : 's'})`;
     };


     return (
          <div className="mx-auto bg-blue-50 rounded-lg shadow-md p-4 flex flex-col gap-4 max-w-lg text-black">
               {/* search */}
               <div className="w-full flex items-center border rounded-md bg-gray-200 px-3">
                    <input
                         type="text"
                         placeholder="Search item"
                         className="w-full p-2 border-none rounded-md bg-gray-200 focus:outline-none"
                         value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="ml-2 text-gray-500 bg-gray-200" />
               </div>
               {/* course type  */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Course type</legend>
                         {course.map(option => (
                              <div key={option}>
                                   <label className="flex items-center p-2 cursor-pointer">
                                        <input
                                             type="radio"
                                             name="date" // Ensure all radio buttons have the same name attribute
                                             checked={selectedOptions.includes(option)}
                                             onChange={() => handleOptionChange(option)}
                                             className="mr-2"
                                        />
                                        {option}
                                   </label>
                              </div>
                         ))}
                    </fieldset>
               </div>

               {/* Field of Study */}
               <div className="w-full">
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
                                   <input
                                        type="text"
                                        placeholder="Search..."
                                        value={studySearchQuery}
                                        onChange={(e) => setStudySearchQuery(e.target.value)}
                                        className="w-full p-2 border-b border-gray-300"
                                   />

                                   {filteredstudy.length > 0 ? (
                                        filteredstudy.map(option => (
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

               {/* Course Language */}
               <div className="w-full">
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
                                   ref={el => dropdownRefs.current[1] = el}
                                   className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                              >
                                   <input
                                        type="text"
                                        placeholder="Search..."
                                        value={languageSearchQuery}
                                        onChange={(e) => setLanguageSearchQuery(e.target.value)}
                                        className="w-full p-2 border-b border-gray-300"
                                   />

                                   {filteredlanguage.length > 0 ? (
                                        filteredlanguage.map(option => (
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

               {/* mode of study  */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Mode of study</legend>
                         {study_mode.map(option => (
                              <div key={option}>
                                   <label className="flex items-center p-2 cursor-pointer">
                                        <input
                                             type="radio"
                                             name="date" // Ensure all radio buttons have the same name attribute
                                             checked={selectedOptions.includes(option)}
                                             onChange={() => handleOptionChange(option)}
                                             className="mr-2"
                                        />
                                        {option}
                                   </label>
                              </div>
                         ))}
                    </fieldset>
               </div>


               {/* Duration */}
               <div className="w-full">
                    <label className="block mb-1">Duration</label>
                    <Slider
                         aria-label="Duration"
                         defaultValue={6}
                         getAriaValueText={valueduration}
                         step={6}
                         marks
                         min={6}
                         max={36}
                         value={duration}
                         onChange={handleDurationChange}
                         className="w-full"
                    />

                    <div className="flex justify-between text-xs mt-1">
                         <span>{valueduration(duration)}</span>
                         <span>More than 4 years</span>
                    </div>
               </div>

               {/* Location */}
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
                                        value={locationSearchQuery}
                                        onChange={(e) => setLocationSearchQuery(e.target.value)}
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

               {/* institution */}
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
                                        value={institutionSearchQuery}
                                        onChange={(e) => setInstitutionSearchQuery(e.target.value)}
                                        className="w-full p-2 border-b border-gray-300"
                                   />

                                   {filteredinstitution.length > 0 ? (
                                        filteredinstitution.map(option => (
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

               {/** Course type specific */}
               <div className="w-full mt-3 mb-3">
                    <h2 className="font-bold mb-2 text-lg flex gap-2 items-center"> <SiCoursera size={30} /> COURSE TYPE SPECIFIC</h2>
                    {/* Fees Slider */}
                    <label className="block mb-1">Fee Range</label>
                    <Slider
                         aria-label="Fees"
                         value={feeValue}
                         onChange={(event, newValue) => setFeeValue(newValue)}
                         getAriaValueText={(value) => `${value}`}
                         step={1200}
                         marks
                         min={1200}
                         max={10000}
                         className="w-full"
                    />
                    <div className="flex justify-between text-xs mt-1">
                         <span>${feeValue}</span>
                         <span>More than $10000</span>
                    </div>
               </div>


               {/* intake */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Intake</legend>
                         {intake.map(option => (
                              <div key={option} className="flex">
                                   <label className="flex  items-center p-2 cursor-pointer">
                                        <input
                                             type="radio"
                                             name="date" // Ensure all radio buttons have the same name attribute
                                             checked={selectedOptions.includes(option)}
                                             onChange={() => handleOptionChange(option)}
                                             className="mr-2"
                                        />
                                        {option}
                                   </label>
                              </div>
                         ))}
                    </fieldset>
               </div>

          </div >
     );
};

export default FilterForm;
