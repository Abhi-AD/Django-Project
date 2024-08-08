import { useLocation } from 'react-router-dom';
import { FilterForm, Searchdata } from '../import';
import { useState } from 'react';

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


     return (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 max-w-screen-2xl mx-auto p-4">
               <div className="w-full lg:w-1/4">
                    <FilterForm
                         filter={filter}
                         handleFilterChange={handleFilterChange}
                         location={locationParam}
                         studyLevel={studyLevelParam}
                         course={courseParam}
                         university={universityParam}
                    />
               </div>
               <div className="w-full lg:w-3/4">
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
