import PropTypes from "prop-types";
import { FaCaretDown } from "react-icons/fa";

const Select = ({ label, options }) => {
     return (
          <div className="relative inline-block w-full">
               <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>{label}</option>
                    {options.map((option, index) => (
                         <option key={index} value={option.value}>{option.label}</option>
                    ))}
               </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FaCaretDown className="text-lg" />
               </div>
          </div>
     );
};

Select.propTypes = {
     label: PropTypes.string.isRequired,
     options: PropTypes.arrayOf(PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
     })).isRequired
};

const DestinationFilter = () => {
     const studyLevels = [
          { label: 'High School', value: 'highschool' },
          { label: 'Undergraduate', value: 'undergraduate' },
          { label: 'Graduate', value: 'graduate' },
          { label: 'PhD', value: 'phd' },
     ];

     const fees = [
          { label: '$1000', value: '1000' },
          { label: '$900', value: '900' },
          { label: '$1029', value: '1029' },
          { label: '$1050', value: '1050' },
     ];

     const locations = [
          { label: 'London', value: 'london' },
          { label: 'USA', value: 'usa' },
          { label: 'America', value: 'america' },
          { label: 'US', value: 'us' },
     ];

     const courses = [
          { label: 'Information', value: 'information' },
          { label: 'Hotel Management', value: 'hotelmanagement' },
          { label: 'Cyber', value: 'cyber' },
          { label: 'Marketing', value: 'marketing' },
     ];

     return (
          <div className="flex justify-center items-center md:mb-4 mb-2">
               <div className="max-w-screen-xl">
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-4 gap-2">
                         <Select label="Study Level" options={studyLevels} />
                         <Select label="Fee" options={fees} />
                         <Select label="Location" options={locations} />
                         <Select label="Course" options={courses} />
                         <div className="relative inline-block w-50">
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                   Lets Go
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DestinationFilter;
