import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { Slider } from '@mui/material';
import useDarkMode from '../../hooks/useDarkMode';
import {
     study,
     study_mode,
     intake,
     course,
     language,
     location,
     department
} from './../../data/searchform';

const FilterForm = () => {
     const { DarkMode } = useDarkMode();
     const [isOpen, setIsOpen] = useState(null);

     const defaultValue = {
          search: "",
          course: "",
          field: [],
          language: [],
          mode: "",
          duration: 6,
          fee: 120,
          location: [],
          department: [],
          intake: "",
     };

     const [filter, setFilter] = useState(defaultValue);
     const [studySearchQuery, setStudySearchQuery] = useState('');
     const [languageSearchQuery, setLanguageSearchQuery] = useState('');
     const [locationSearchQuery, setLocationSearchQuery] = useState('');
     const [departmentSearchQuery, setDepartmentSearchQuery] = useState('');
     const dropdownRefs = useRef([]);

     const toggleDropdown = (index) => {
          setIsOpen(prevIndex => prevIndex === index ? null : index);
     };

     const handleFilterChange = (option, value) => {
          setFilter(prev => {
               if (Array.isArray(prev[option])) {
                    const newArray = prev[option].includes(value)
                         ? prev[option].filter(item => item !== value)
                         : [...prev[option], value];
                    return {
                         ...prev,
                         [option]: newArray
                    };
               }
               // Ensure duration and fee are numbers
               if (option === "duration" || option === "fee") {
                    value = Number(value);
               }
               return {
                    ...prev,
                    [option]: value
               };
          });
     };

     const handleDurationChange = (event, newValue) => {
          handleFilterChange("duration", Number(newValue));
     };

     const handleFeeChange = (event, newValue) => {
          handleFilterChange("fee", Number(newValue));
     };

     const valuefee = (value) => {
          return `$${value}`;
     };

     const handleClickOutside = (event) => {
          if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
               setIsOpen(null);
          }
     };

     const filteredstudy = study.filter(option =>
          option.toLowerCase().includes(studySearchQuery.toLowerCase())
     );

     const filteredLanguage = language.filter(option =>
          option.toLowerCase().includes(languageSearchQuery.toLowerCase())
     );

     const filteredLocation = location.filter(option =>
          option.toLowerCase().includes(locationSearchQuery.toLowerCase())
     );

     const filteredDepartment = department.filter(option =>
          option.toLowerCase().includes(departmentSearchQuery.toLowerCase())
     );

     useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
               document.removeEventListener('mousedown', handleClickOutside);
          };
     }, []);

     const convertMonthsToSemesters = (months) => {
          return Math.floor(months / 6);
     };

     const valueduration = (value) => {
          return `${value} month${value === 1 ? '' : 's'} (${convertMonthsToSemesters(value)} semester${convertMonthsToSemesters(value) === 1 ? '' : 's'})`;
     };

     useEffect(() => {
          console.log(filter);
     }, [filter]);

     return (
          <div className={`mx-auto ${DarkMode ? '' : 'bg-blue-50 text-black'} rounded-2xl p-4 flex flex-col gap-4 max-w-lg`}>

               {/* Search */}
               <div className={`w-full flex items-center border rounded-md ${DarkMode ? '' : 'bg-gray-200 text-black'} px-3`}>
                    <input
                         type="text"
                         placeholder="Search item"
                         className={`w-full p-2 border-none rounded-md ${DarkMode ? 'bg-transparent text-white placeholder:text-white' : 'bg-gray-200 text-black placeholder:text-black'} focus:outline-none`}
                         value={filter.search}
                         onChange={(e) => handleFilterChange("search", e.target.value)}
                    />
                    <FaSearch className={`ml-2 text-gray-500`} />
               </div>

               {/* Course type */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Course type</legend>
                         {course.map(option => (
                              <div key={option}>
                                   <label className="flex items-center p-2 cursor-pointer">
                                        <input
                                             type="radio"
                                             name="course"
                                             checked={filter.course === option}
                                             onChange={() => handleFilterChange("course", option)}
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
                              className={`w-full p-2 border rounded-md flex ${DarkMode ? "" : "bg-gray-200 text-black"} justify-between items-center`}
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
                                                       checked={filter.field.includes(option)}
                                                       onChange={() => handleFilterChange('field', option)}
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

               {/* Language */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Language</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(2)}
                              aria-expanded={isOpen === 2}
                              aria-controls="dropdown-menu-2"
                              className={`w-full p-2 border rounded-md flex ${DarkMode ? "" : "bg-gray-200 text-black"} justify-between items-center`}
                         >
                              <span>Please select</span>
                              <FaChevronDown className="w-3 h-3" />
                         </button>
                         {isOpen === 2 && (
                              <div
                                   id="dropdown-menu-2"
                                   ref={el => dropdownRefs.current[2] = el}
                                   className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                              >
                                   <input
                                        type="text"
                                        placeholder="Search..."
                                        value={languageSearchQuery}
                                        onChange={(e) => setLanguageSearchQuery(e.target.value)}
                                        className="w-full p-2 border-b border-gray-300"
                                   />
                                   {filteredLanguage.length > 0 ? (
                                        filteredLanguage.map(option => (
                                             <label
                                                  key={option}
                                                  className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                             >
                                                  <input
                                                       type="checkbox"
                                                       checked={filter.language.includes(option)}
                                                       onChange={() => handleFilterChange('language', option)}
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

               {/* Location */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Location</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(3)}
                              aria-expanded={isOpen === 3}
                              aria-controls="dropdown-menu-3"
                              className={`w-full p-2 border rounded-md flex ${DarkMode ? "" : "bg-gray-200 text-black"} justify-between items-center`}
                         >
                              <span>Please select</span>
                              <FaChevronDown className="w-3 h-3" />
                         </button>
                         {isOpen === 3 && (
                              <div
                                   id="dropdown-menu-3"
                                   ref={el => dropdownRefs.current[3] = el}
                                   className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                              >
                                   <input
                                        type="text"
                                        placeholder="Search..."
                                        value={locationSearchQuery}
                                        onChange={(e) => setLocationSearchQuery(e.target.value)}
                                        className="w-full p-2 border-b border-gray-300"
                                   />
                                   {filteredLocation.length > 0 ? (
                                        filteredLocation.map(option => (
                                             <label
                                                  key={option}
                                                  className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                             >
                                                  <input
                                                       type="checkbox"
                                                       checked={filter.location.includes(option)}
                                                       onChange={() => handleFilterChange('location', option)}
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

               {/* Department */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Department</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(4)}
                              aria-expanded={isOpen === 4}
                              aria-controls="dropdown-menu-4"
                              className={`w-full p-2 border rounded-md flex ${DarkMode ? "" : "bg-gray-200 text-black"} justify-between items-center`}
                         >
                              <span>Please select</span>
                              <FaChevronDown className="w-3 h-3" />
                         </button>
                         {isOpen === 4 && (
                              <div
                                   id="dropdown-menu-4"
                                   ref={el => dropdownRefs.current[4] = el}
                                   className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
                              >
                                   <input
                                        type="text"
                                        placeholder="Search..."
                                        value={departmentSearchQuery}
                                        onChange={(e) => setDepartmentSearchQuery(e.target.value)}
                                        className="w-full p-2 border-b border-gray-300"
                                   />
                                   {filteredDepartment.length > 0 ? (
                                        filteredDepartment.map(option => (
                                             <label
                                                  key={option}
                                                  className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                             >
                                                  <input
                                                       type="checkbox"
                                                       checked={filter.department.includes(option)}
                                                       onChange={() => handleFilterChange('department', option)}
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

               {/* Duration */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Duration</legend>
                         <Slider
                              value={filter.duration}
                              onChange={handleDurationChange}
                              min={1}
                              max={24}
                              step={1}
                              valueLabelDisplay="auto"
                              valueLabelFormat={valueduration}
                              aria-labelledby="duration-slider"
                         />
                         <div className="flex justify-between text-xs mt-1">
                              <span>{valueduration(filter.duration)}</span>
                              <span>More than 4 years</span>
                         </div>

                    </fieldset>
               </div>

               {/* Fee */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Fee</legend>
                         <Slider
                              value={filter.fee}
                              onChange={handleFeeChange}
                              min={0}
                              max={10000}
                              step={100}
                              valueLabelDisplay="auto"
                              valueLabelFormat={valuefee}
                              aria-labelledby="fee-slider"
                         />
                         <div className="flex justify-between text-xs mt-1">
                              <span>{valueduration(filter.duration)}</span>
                              <span>More than 4 years</span>
                         </div>
                    </fieldset>
               </div>

               {/* Intake */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Intake</legend>
                         <select
                              value={filter.intake}
                              onChange={(e) => handleFilterChange("intake", e.target.value)}
                              className={`w-full p-2 border rounded-md ${DarkMode ? '' : 'bg-gray-200 text-black'}`}
                         >
                              <option value="">Select intake</option>
                              {intake.map(option => (
                                   <option key={option} value={option}>
                                        {option}
                                   </option>
                              ))}
                         </select>
                    </fieldset>
               </div>


               {/* Mode */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1">Mode</legend>
                         <select
                              value={filter.mode}
                              onChange={(e) => handleFilterChange("mode", e.target.value)}
                              className={`w-full p-2 border rounded-md ${DarkMode ? '' : 'bg-gray-200 text-black'}`}
                         >
                              <option value="">Select mode</option>
                              {study_mode.map(option => (
                                   <option key={option} value={option}>
                                        {option}
                                   </option>
                              ))}
                         </select>
                    </fieldset>
               </div>
          </div>
     );
};

export default FilterForm;
