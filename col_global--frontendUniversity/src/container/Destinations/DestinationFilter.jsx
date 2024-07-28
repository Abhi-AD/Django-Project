import PropTypes from "prop-types";
import { FaCaretDown } from "react-icons/fa";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Select = ({ label, options }) => (
     <div className="relative flex-1 min-w-[150px]">
          <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-md leading-tight focus:outline-none focus:shadow-outline text-black">
               <option value="">{label}</option>
               {options.map(option => (
                    <option key={option.value} value={option.value} className="text-white">
                         {option.label}
                    </option>
               ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
               <FaCaretDown className="text-lg text-white" />
          </div>
     </div>
);

Select.propTypes = {
     label: PropTypes.string.isRequired,
     options: PropTypes.arrayOf(
          PropTypes.shape({
               label: PropTypes.string.isRequired,
               value: PropTypes.string.isRequired,
          })
     ).isRequired,
};

const DestinationFilter = () => {
     const studyLevels = [
          { label: "High School", value: "highschool" },
          { label: "Undergraduate", value: "undergraduate" },
          { label: "Graduate", value: "graduate" },
          { label: "PhD", value: "phd" },
     ];
     const locations = [
          { label: "London", value: "london" },
          { label: "USA", value: "usa" },
          { label: "America", value: "america" },
          { label: "US", value: "us" },
          { label: "Nepal", value: "nepal" },
     ];
     const courses = [
          { label: "Information", value: "information" },
          { label: "Hotel Management", value: "hotelmanagement" },
          { label: "Cyber", value: "cyber" },
          { label: "Marketing", value: "marketing" },
     ];
     const university = [
          { label: "Landon", value: "landon" },
          { label: "Hotel Management", value: "hotelmanagement" },
          { label: "Cyber", value: "cyber" },
          { label: "Marketing", value: "marketing" },
     ];

     const autocompleteStyles = {
          width: 300,
          '& .MuiOutlinedInput-root': {
               '& fieldset': {
                    borderColor: 'white',
               },
               '&:hover fieldset': {
                    borderColor: 'white',
               },
               '&.Mui-focused fieldset': {
                    borderColor: 'white',
               },
               color: 'white',
          },
          '& .MuiInputLabel-root': {
               color: 'white',
          },
          '& .MuiInputLabel-root.Mui-focused': {
               color: 'white',
          },
          '& .MuiAutocomplete-popupIndicator': {
               color: 'white',
          },
     };

     return (
          <div className="flex justify-center p-4 md:p-6 text-black">
               <div className="flex max-w-screen-xl flex-wrap justify-between items-center gap-4">
                    <Autocomplete
                         disablePortal
                         id="locations-autocomplete"
                         options={locations}
                         getOptionLabel={option => option.label}
                         sx={autocompleteStyles}
                         renderInput={params => <TextField {...params} label="Destination" />}
                    />
                    <Autocomplete
                         disablePortal
                         id="study-level-autocomplete"
                         options={studyLevels}
                         getOptionLabel={option => option.label}
                         sx={autocompleteStyles}
                         renderInput={params => <TextField {...params} label="Study Level" />}
                    />
                    <Autocomplete
                         disablePortal
                         id="courses-autocomplete"
                         options={courses}
                         getOptionLabel={option => option.label}
                         sx={autocompleteStyles}
                         renderInput={params => <TextField {...params} label="Courses" />}
                    />
                    <Autocomplete
                         disablePortal
                         id="university-autocomplete"
                         options={university}
                         getOptionLabel={option => option.label}
                         sx={autocompleteStyles}
                         renderInput={params => <TextField {...params} label="University" />}
                    />

                    <div className="w-full md:w-auto flex-shrink-0">
                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full md:w-auto">
                              Let&apos;s Go
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default DestinationFilter;
