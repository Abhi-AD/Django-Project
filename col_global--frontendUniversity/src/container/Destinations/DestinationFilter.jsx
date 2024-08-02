import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCaretDown } from 'react-icons/fa';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { studyLevels, locations, courses, university } from '../../data/filterdata/autocomplete';

const Select = ({ label, options }) => (
    <div className="relative flex-1 min-w-[150px]">
        <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-md leading-tight focus:outline-none focus:shadow-outline text-black">
            <option value="">{label}</option>
            {options.map(option => (
                <option key={option.value} value={option.value} className="text-black">
                    {option.label}
                </option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <FaCaretDown className="text-lg text-black" />
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
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedStudyLevel, setSelectedStudyLevel] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const navigate = useNavigate();

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (selectedLocation) params.append('location', selectedLocation.value);
        if (selectedStudyLevel) params.append('studyLevel', selectedStudyLevel.value);
        if (selectedCourse) params.append('course', selectedCourse.value);
        if (selectedUniversity) params.append('university', selectedUniversity.value);

        navigate(`/search-data?${params.toString()}`);

    };

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
        '& .MuiAutocomplete-clearIndicator': {
            color: 'white'
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-center p-4 md:p-6 text-black">
            <div className="flex flex-wrap max-w-screen-xl justify-between items-center gap-4 w-full">
                <Autocomplete
                    disablePortal
                    id="locations-autocomplete"
                    options={locations}
                    getOptionLabel={option => option.label}
                    sx={autocompleteStyles}
                    onChange={(event, newValue) => setSelectedLocation(newValue)}
                    renderInput={params => <TextField {...params} label="Destination" />}
                    className="w-full md:w-[250px]"
                />
                <Autocomplete
                    disablePortal
                    id="study-level-autocomplete"
                    options={studyLevels}
                    getOptionLabel={option => option.label}
                    sx={autocompleteStyles}
                    onChange={(event, newValue) => setSelectedStudyLevel(newValue)}
                    renderInput={params => <TextField {...params} label="Study Level" />}
                    className="w-full md:w-[250px]"
                />
                <Autocomplete
                    disablePortal
                    id="courses-autocomplete"
                    options={courses}
                    getOptionLabel={option => option.label}
                    sx={autocompleteStyles}
                    onChange={(event, newValue) => setSelectedCourse(newValue)}
                    renderInput={params => <TextField {...params} label="Courses" />}
                    className="w-full md:w-[250px]"
                />
                <Autocomplete
                    disablePortal
                    id="university-autocomplete"
                    options={university}
                    getOptionLabel={option => option.label}
                    sx={autocompleteStyles}
                    onChange={(event, newValue) => setSelectedUniversity(newValue)}
                    renderInput={params => <TextField {...params} label="University" />}
                    className="w-full md:w-[250px]"
                />

                <div className="w-full md:w-auto flex-shrink-0 flex justify-end mt-4 md:mt-0">
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full md:w-auto"
                    >
                        Let&apos;s Go
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DestinationFilter;
