import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { Slider } from '@mui/material';
import PropTypes from 'prop-types';
import useDarkMode from '../../hooks/useDarkMode';
import {
     study,
     study_mode,
     intake,
     course,
     language,
     city,
} from './../../data/searchform';

const FilterForm = ({ filter, handleFilterChange }) => {
     const { DarkMode } = useDarkMode();
     const [isOpen, setIsOpen] = useState(null);

     const [studySearchQuery, setStudySearchQuery] = useState('');
     const [languageSearchQuery, setLanguageSearchQuery] = useState('');
     const [citySearchQuery, setcitySearchQuery] = useState('');
     const dropdownRefs = useRef([]);

     const toggleDropdown = (index) => {
          setIsOpen(prevIndex => prevIndex === index ? null : index);
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

     const filteredcity = city.filter(option =>
          option.toLowerCase().includes(citySearchQuery.toLowerCase())
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
                         <legend className="block mb-1 capitalize">Course type</legend>
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
                         <legend className="block mb-1 capitalize">Field of Study</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(1)}
                              aria-expanded={isOpen === 1}
                              aria-controls="dropdown-menu-1"
                              className={`w-full p-2 border rounded-md flex ${DarkMode ? "" : "bg-gray-200 text-black"} justify-between items-center`}
                         >
                              <span>
                                   {filter.field.length > 0
                                        ? `${filter.field.length} ${filter.field.length === 1 ? '' : ''} selected`
                                        : 'Please select'}
                              </span>
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
                         <legend className="block mb-1 capitalize">Language</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(2)}
                              aria-expanded={isOpen === 2}
                              aria-controls="dropdown-menu-2"
                              className={`w-full p-2 border rounded-md flex ${DarkMode ? "" : "bg-gray-200 text-black"} justify-between items-center`}
                         >
                              <span>
                                   {filter.language.length > 0
                                        ? `${filter.language.length} ${filter.language.length === 1 ? '' : ''} selected`
                                        : 'Please select'}
                              </span>
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

               {/* city */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1 capitalize">city</legend>
                         <button
                              type="button"
                              onClick={() => toggleDropdown(3)}
                              aria-expanded={isOpen === 3}
                              aria-controls="dropdown-menu-3"
                              className={`w-full p-2 border rounded-md flex ${DarkMode ? "" : "bg-gray-200 text-black"} justify-between items-center`}
                         >
                              <span>
                                   {filter.city.length > 0
                                        ? `${filter.city.length} ${filter.city.length === 1 ? '' : ''} selected`
                                        : 'Please select'}</span>
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
                                        value={citySearchQuery}
                                        onChange={(e) => setcitySearchQuery(e.target.value)}
                                        className="w-full p-2 border-b border-gray-300"
                                   />
                                   {filteredcity.length > 0 ? (
                                        filteredcity.map(option => (
                                             <label
                                                  key={option}
                                                  className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                             >
                                                  <input
                                                       type="checkbox"
                                                       checked={filter.city.includes(option)}
                                                       onChange={() => handleFilterChange('city', option)}
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



               {/* Intake */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1 capitalize">Intake</legend>
                         {intake.map(option => (
                              <div key={option}>
                                   <label className="flex items-center p-2 cursor-pointer">
                                        <input
                                             type="radio"
                                             name="intake"
                                             checked={filter.intake === option}
                                             onChange={() => handleFilterChange("intake", option)}
                                             className="mr-2"
                                        />
                                        {option}
                                   </label>
                              </div>
                         ))}
                    </fieldset>
               </div>
               {/* Study Mode */}
               <div className="w-full">
                    <fieldset className="relative w-full">
                         <legend className="block mb-1 capitalize">Study Mode</legend>
                         {study_mode.map(option => (
                              <div key={option}>
                                   <label className="flex items-center p-2 cursor-pointer">
                                        <input
                                             type="radio"
                                             name="mode"
                                             checked={filter.mode === option}
                                             onChange={() => handleFilterChange("mode", option)}
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
                    <fieldset className="relative w-full">
                         <legend className="block mb-1 capitalize">Duration</legend>
                         <Slider
                              value={filter.duration}
                              min={0}
                              max={24}
                              step={1}
                              onChange={handleDurationChange}
                              valueLabelFormat={valueduration}
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
                         <legend className="block mb-1 capitalize">Fee</legend>
                         <Slider
                              value={filter.fee}
                              min={0}
                              max={10000}
                              step={100}
                              onChange={handleFeeChange}
                              valueLabelFormat={valuefee}
                         />
                         <div className="flex justify-between text-xs mt-1">
                              <span>{valuefee(filter.fee)}</span>
                              <span>$1000 more than</span>
                         </div>
                    </fieldset>
               </div>
          </div>
     );
};
FilterForm.propTypes = {
     filter: PropTypes.shape({
          search: PropTypes.string,
          course: PropTypes.string,
          field: PropTypes.arrayOf(PropTypes.string),
          language: PropTypes.arrayOf(PropTypes.string),
          city: PropTypes.arrayOf(PropTypes.string),
          intake: PropTypes.string,
          mode: PropTypes.string,
          duration: PropTypes.number,
          fee: PropTypes.number,
     }).isRequired,
     handleFilterChange: PropTypes.func.isRequired,
};

export default FilterForm;
