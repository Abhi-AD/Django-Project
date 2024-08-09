import { useState } from 'react';
import PropTypes from 'prop-types';
import filteringdata from '../../data/filterdata/filteringdata';
import { Link } from 'react-router-dom';
import { Pagination } from '../import';
import useDarkMode from '../../hooks/useDarkMode';
import VideoAd from './VideoAd';

const ITEMS_PER_PAGE = 4; // Adjust as needed

const Searchdata = ({ filter, handleFilterChange, location, studyLevel, course, university }) => {
    const [viewType, setViewType] = useState('grid');
    const [filters, setFilters] = useState({ location, studyLevel, course, university, filter });
    const [currentPage, setCurrentPage] = useState(1);
    const { DarkMode } = useDarkMode();

    const handleViewChange = (view) => {
        setViewType(view);
    };

    const clearFilter = (filterKey) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterKey]: '',
        }));
        handleFilterChange(filterKey, '');
    };

    const filteredData = filteringdata.filter((item) => {
        return (
            (!filters.location || (item.location && item.location.includes(filters.location))) &&
            (!filters.studyLevel || (item.studyLevel && item.studyLevel.includes(filters.studyLevel))) &&
            (!filters.course || (item.course && item.course.includes(filters.course))) &&
            (!filters.university || (item.university && item.university.includes(filters.university))) &&
            (!filters.search || item.title.toLowerCase().includes(filters.search.toLowerCase()))
        );
    });



    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const paginatedData = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={`p-4 min-h-screen flex flex-col gap-3 ${DarkMode ? '' : 'bg-white text-black'}`}>
            <VideoAd />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">{filteredData.length} results for your criteria</h1>
                <div className="flex flex-col md:flex-row justify-end items-start md:items-center  space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex gap-3">
                        <button
                            onClick={() => handleViewChange('grid')}
                            className={`p-2 rounded ${viewType === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'} ${DarkMode ? 'text-black' : ''}`}
                        >
                            Grid
                        </button>
                        <button
                            onClick={() => handleViewChange('list')}
                            className={`p-2 rounded ${viewType === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'} ${DarkMode ? 'text-black' : ''}`}
                        >
                            List
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-2">
                {filter.search && (
                    <div className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}>
                        <span className="mr-2">{filter.search}</span>
                        <button
                            onClick={() => handleFilterChange('search', '')}
                            className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                        >
                            &times;
                        </button>
                    </div>
                )}
                {filter.course && (
                    <div className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}>
                        <span className="mr-2">{filter.course}</span>
                        <button
                            onClick={() => handleFilterChange('course', '')}
                            className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                        >
                            &times;
                        </button>
                    </div>
                )}
                {filter.mode && (
                    <div className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}>
                        <span className="mr-2">{filter.mode}</span>
                        <button
                            onClick={() => handleFilterChange('mode', '')}
                            className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                        >
                            &times;
                        </button>
                    </div>
                )}

                {filter.intake && (
                    <div className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}>
                        <span className="mr-2">{filter.intake}</span>
                        <button
                            onClick={() => handleFilterChange('intake', '')}
                            className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                        >
                            &times;
                        </button>
                    </div>
                )}
                {filter.field && (
                    filter.field.map((field, index) => (
                        <div
                            key={index}
                            className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}
                        >
                            <span className="mr-2">{field}</span>
                            <button
                                onClick={() => handleFilterChange('field', field)}
                                className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                            >
                                &times;
                            </button>
                        </div>
                    ))
                )}
                {filter.language && (
                    filter.language.map((language, index) => (
                        <div
                            key={index}
                            className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}
                        >
                            <span className="mr-2">{language}</span>
                            <button
                                onClick={() => handleFilterChange('language', language)}
                                className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                            >
                                &times;
                            </button>
                        </div>
                    ))
                )}
                {filter.location && (
                    filter.location.map((location, index) => (
                        <div
                            key={index}
                            className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}
                        >
                            <span className="mr-2">{location}</span>
                            <button
                                onClick={() => handleFilterChange('location', location)}
                                className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                            >
                                &times;
                            </button>
                        </div>
                    ))
                )}
                {filter.department && (
                    filter.department.map((department, index) => (
                        <div
                            key={index}
                            className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}
                        >
                            <span className="mr-2">{department}</span>
                            <button
                                onClick={() => handleFilterChange('department', department)}
                                className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                            >
                                &times;
                            </button>
                        </div>
                    ))
                )}
                {filters.location && (
                    <div className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}>
                        <span className="mr-2">{filters.location}</span>
                        <button
                            onClick={() => clearFilter('location')}
                            className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                        >
                            &times;
                        </button>
                    </div>
                )}
                {filters.studyLevel && (
                    <div className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}>
                        <span className="mr-2">{filters.studyLevel}</span>
                        <button
                            onClick={() => clearFilter('studyLevel')}
                            className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                        >
                            &times;
                        </button>
                    </div>
                )}
                {filters.course && (
                    <div className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}>
                        <span className="mr-2">{filters.course}</span>
                        <button
                            onClick={() => clearFilter('course')}
                            className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                        >
                            &times;
                        </button>
                    </div>
                )}
                {filters.university && (
                    <div className={`flex items-center ${DarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-full capitalize`}>
                        <span className="mr-2">{filters.university}</span>
                        <button
                            onClick={() => clearFilter('university')}
                            className={`text-gray-500 hover:text-gray-700 ${DarkMode ? 'text-gray-400 hover:text-gray-300' : ''}`}
                        >
                            &times;
                        </button>
                    </div>
                )}

            </div>


            {viewType === 'grid' ? (
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4 ${DarkMode ? '' : ''}`}>
                    {paginatedData.map((course, index) => (
                        <Link
                            to={`/country/course/?${course.id}?title=${course.title}&costs=${course.costs}&university=${course.university}`}
                            key={index}
                            className={`flex flex-col  shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ${DarkMode ? 'bg-gray-900' : ''}`}
                        >
                            <div className="w-full h-60 sm:h-60 relative overflow-hidden rounded-t-2xl">
                                <img className="absolute inset-0 w-full h-full object-cover" src={course.image} alt={course.title} />
                            </div>
                            <div className="p-6 flex-1">
                                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                                <p className="text-gray-600 mb-1">
                                    <strong>Universities:</strong> {course.university.join(' , ')}
                                </p>
                                <p className="text-gray-600 mb-1"><strong>Language:</strong> {course.language}</p>
                                <p className="text-gray-600 mb-1"><strong>Costs:</strong> {course.costs}</p>
                                <p className="text-blue-500 hover:underline cursor-pointer">View more</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className={`space-y-4 ${DarkMode ? 'bg-gray-800' : ''}`}>
                    {paginatedData.map((course, index) => (
                        <Link
                            to={`/country/course/?${course.id}?title=${course.title}&costs=${course.costs}&university=${course.university}`}
                            key={index}
                            className={`p-4 flex  border-b border-gray-300 ${DarkMode ? 'bg-gray-900 border-gray-700' : ''}`}
                        >
                            <div className="flex-1">
                                <h2 className="text-lg font-bold">{course.title}</h2>
                                <p className="text-gray-600">{course.university}</p>
                                <p className="mt-2"><strong>Subject:</strong> {course.subject}</p>
                                <p><strong>Language:</strong> {course.language}</p>
                                <p><strong>Language level:</strong> {course.languageLevel}</p>
                                <p><strong>Costs:</strong> {course.costs}</p>
                                <p><strong>Date(s):</strong> {course.dates}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

Searchdata.propTypes = {
    location: PropTypes.string,
    studyLevel: PropTypes.string,
    course: PropTypes.string,
    university: PropTypes.string,
    filter: PropTypes.shape({
        search: PropTypes.string,
        course: PropTypes.string,
        mode: PropTypes.string,
        duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        fee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        intake: PropTypes.string,
        field: PropTypes.arrayOf(PropTypes.string),
        language: PropTypes.arrayOf(PropTypes.string),
        location: PropTypes.arrayOf(PropTypes.string),
        department: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    handleFilterChange: PropTypes.func.isRequired,
};

export default Searchdata;