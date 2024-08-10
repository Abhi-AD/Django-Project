import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCaretDown } from 'react-icons/fa';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { studyLevels, locations } from '../../data/filterdata/autocomplete';
import { CiSearch } from 'react-icons/ci';
import { Input } from '@mui/material';

const Select = ({ label, options }) => (
    <div className="relative flex-1 min-w-[50px]">
        <select className="block appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-md leading-tight focus:outline-none focus:shadow-outline text-black">
            <option value="">{label}</option>
            {options.map(option => (
                <option key={option.value} value={option.value} className="text-black">
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
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedStudyLevel, setSelectedStudyLevel] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (selectedLocation) params.append('location', selectedLocation.label);
        if (selectedStudyLevel) params.append('studyLevel', selectedStudyLevel.label);
        if (selectedCourse) params.append('course', selectedCourse);
        if (selectedUniversity) params.append('university', selectedUniversity);

        navigate(`/all-course?${params.toString()}`);
    };

    const autocompleteStyles = {
        width: 220,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'none'
            },
            '&.Mui-focused fieldset': {
                borderColor: "white",
            },
            color: "white",
        },
        '& .MuiInputLabel-root': {
            color: "white",
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: "white",
        },
        '& .MuiAutocomplete-popupIndicator': {
            color: "white",
        },
        '& .MuiOutlinedInput-notchedOutline': {
            color: 'white',
        },
        '& .MuiAutocomplete-clearIndicator': {
            color: "white"
        },
        '& .MuiInputBase-input::placeholder': {
            color: 'white',
            opacity: 1,
        },
    };

    return (
        <div>
            <div className="flex justify-center paddingcontainer paddingbuttom mx-auto">
                <div className="border rounded-full md:flex items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-4 gap-1 rounded-full justify-between items-center">
                        <div className="after:border after:border-slate-50/20 flex justify-center items-center after:h-6 cursor-pointer rounded-full">
                            <Autocomplete
                                disablePortal
                                id="locations-autocomplete"
                                options={locations}
                                popupIcon={null}
                                getOptionLabel={(option) => option.label}
                                sx={autocompleteStyles}
                                onChange={(event, newValue) => setSelectedLocation(newValue)}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Country" sx={{
                                        '& .MuiInputBase-input': { color: 'white' },
                                        '& .MuiInputBase-input::placeholder': { color: 'white' }
                                    }} />
                                )}
                            />
                        </div>
                        <div className="after:border after:border-slate-50/20 flex justify-center items-center after:h-6 cursor-pointer rounded-full">
                            <Autocomplete
                                disablePortal
                                id="study-level-autocomplete"
                                options={studyLevels}
                                popupIcon={null}
                                getOptionLabel={(option) => option.label}
                                sx={autocompleteStyles}
                                onChange={(event, newValue) => setSelectedStudyLevel(newValue)}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Study Level" sx={{
                                        '& .MuiInputBase-input': { color: 'white' },
                                        '& .MuiInputBase-input::placeholder': { color: 'white' }
                                    }} />
                                )}
                            />
                        </div>
                        <div className="after:border after:border-slate-50/20 flex justify-center items-center after:h-6 cursor-pointer rounded-full">
                            <Input
                                placeholder="Course"
                                fullWidth
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                                sx={{
                                    padding: '20px',
                                    color: '#ffffff', // Set text color here
                                    '& .MuiInputBase-input::placeholder': {
                                        color: '#ffffff', // Set placeholder color here
                                        opacity: 1
                                    },
                                    '&:before, &:after': {
                                        borderBottom: 'none',
                                    },
                                    '&:hover:not(.Mui-disabled):before': {
                                        borderBottom: 'none',
                                    },
                                }}
                            />
                        </div>
                        <div className="flex justify-center items-center after:h-6 cursor-pointer rounded-full">
                            <Input
                                placeholder="University"
                                fullWidth
                                value={selectedUniversity}
                                onChange={(e) => setSelectedUniversity(e.target.value)}
                                sx={{
                                    padding: '20px',
                                    color: 'white',
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'white',
                                        opacity: 1
                                    },
                                    '&:before, &:after': {
                                        borderBottom: 'none',
                                    },
                                    '&:hover:not(.Mui-disabled):before': {
                                        borderBottom: 'none',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleSearch}
                        type="submit"
                        className="rounded-full p-4 items-center text-white">
                        <CiSearch size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DestinationFilter;
