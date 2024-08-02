import { useState } from 'react';
import PropTypes from 'prop-types';
import filteringdata from '../../data/filterdata/filteringdata';

const Searchdata = ({ location, studyLevel, course, university }) => {
    const [viewType, setViewType] = useState('grid');
    const [filters, setFilters] = useState({ location, studyLevel, course, university });

    const handleViewChange = (view) => {
        setViewType(view);
    };

    const clearFilter = (filterKey) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterKey]: '',
        }));
    };

    return (
        <div className="p-4 min-h-screen flex flex-col gap-3">
            <h1 className="text-xl font-bold mb-4">100000 results for your criteria</h1>
            <div className="flex space-x-2">
                {filters.location && (
                    <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full capitalize">
                        <span className="mr-2">{filters.location}</span>
                        <button
                            onClick={() => clearFilter('location')}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                    </div>
                )}
                {filters.studyLevel && (
                    <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full capitalize">
                        <span className="mr-2">{filters.studyLevel}</span>
                        <button
                            onClick={() => clearFilter('studyLevel')}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                    </div>
                )}
                {filters.course && (
                    <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full capitalize">
                        <span className="mr-2">{filters.course}</span>
                        <button
                            onClick={() => clearFilter('course')}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                    </div>
                )}
                {filters.university && (
                    <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full capitalize">
                        <span className="mr-2">{filters.university}</span>
                        <button
                            onClick={() => clearFilter('university')}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                    </div>
                )}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                <div className="border border-gray-300 rounded-lg shadow-sm flex-shrink-0">
                    <select
                        id="sortOptions"
                        className="bg-white text-gray-700 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-colors duration-300"
                    >
                        <option value="">Standard sorting</option>
                        <option value="name">Sort by name</option>
                        <option value="city">Sort by city</option>
                        <option value="institution">Sort by institution</option>
                    </select>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => handleViewChange('grid')}
                        className={`p-2 rounded ${viewType === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        Grid
                    </button>
                    <button
                        onClick={() => handleViewChange('list')}
                        className={`p-2 rounded ${viewType === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        List
                    </button>
                </div>
            </div>

            {viewType === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
                    {filteringdata.map((course, index) => (
                        <div key={index} className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <div className="w-full h-60 sm:h-60 relative overflow-hidden rounded-t-2xl">
                                <img className="absolute inset-0 w-full h-full object-cover" src={course.image} alt={course.title} />
                            </div>
                            <div className="p-6 flex-1">
                                <h2 className="text-xl font-semibold mb-2 text-black">{course.title}</h2>
                                <p className="text-gray-600 mb-1">
                                    <strong>Universities:</strong> {course.university.join(' , ')}
                                </p>
                                <p className="text-gray-600 mb-1"><strong>Language:</strong> {course.language}</p>
                                <p className="text-gray-600 mb-1"><strong>Costs:</strong> {course.costs}</p>
                                <p className="text-blue-500 hover:underline cursor-pointer">View more</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    {filteringdata.map((course, index) => (
                        <div key={index} className="p-4 flex bg-white border-b border-gray-300">
                            <div className="flex-1">
                                <h2 className="text-lg font-bold text-black">{course.title}</h2>
                                <p className="text-gray-600">{course.university}</p>
                                <p className="mt-2"><strong>Subject:</strong> {course.subject}</p>
                                <p><strong>Language:</strong> {course.language}</p>
                                <p><strong>Language level:</strong> {course.languageLevel}</p>
                                <p><strong>Costs:</strong> {course.costs}</p>
                                <p><strong>Date(s):</strong> {course.dates}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

Searchdata.propTypes = {
    location: PropTypes.string,
    studyLevel: PropTypes.string,
    course: PropTypes.string,
    university: PropTypes.string,
};



export default Searchdata;
