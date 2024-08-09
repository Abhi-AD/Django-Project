import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FilterForm, Searchdata } from '../import';
import { FiFilter, FiX } from 'react-icons/fi'; // Import icons from React Icons

const SearchView = () => {
     const defaultValue = {
          search: "",
          course: "",
          field: [],
          language: [],
          mode: "",
          duration: 6,
          fee: 1200,
          city: [],
          department: [],
          intake: "",
     };
     const [filter, setFilter] = useState(defaultValue);
     const [isSidebarOpen, setSidebarOpen] = useState(false);

     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const locationParam = searchParams.get('location') || '';
     const studyLevelParam = searchParams.get('studyLevel') || '';
     const courseParam = searchParams.get('course') || '';
     const universityParam = searchParams.get('university') || '';

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
               if (option === "duration" || option === "fee") {
                    value = Number(value);
               }
               return {
                    ...prev,
                    [option]: value
               };
          });
     };

     const toggleSidebar = () => {
          setSidebarOpen(prev => !prev);
     };

     return (
          <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-20 paddingcontainer paddingbuttom">
               {/* Sidebar Button for Mobile */}
               <button
                    onClick={toggleSidebar}
                    className="lg:hidden absolute top-4 left-4 z-10 bg-blue-600 text-white p-3 rounded-full shadow-lg"
               >
                    {isSidebarOpen ? <FiX size={24} /> : <FiFilter size={24} />}
               </button>

               {/* Sidebar */}
               <div
                    className={`fixed z-50  top-25 right-0 w-4/5 md:w-1/4 h-auto bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
               >
                    <FilterForm
                         filter={filter}
                         handleFilterChange={handleFilterChange}
                         location={locationParam}
                         studyLevel={studyLevelParam}
                         course={courseParam}
                         university={universityParam}
                    />
               </div>

               {/* Main Content */}
               <div className={`w-full lg:w-3/4 ${isSidebarOpen ? 'lg:ml-1/4' : ''}`}>
                    <Searchdata
                         filter={filter}
                         handleFilterChange={handleFilterChange}
                         location={locationParam}
                         studyLevel={studyLevelParam}
                         course={courseParam}
                         university={universityParam}
                    />
               </div>
          </div>
     );
};

export default SearchView;
