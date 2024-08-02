import { useLocation } from 'react-router-dom';
import { FilterForm, Searchdata } from '../import';

const SearchView = () => {
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);

     const locationParam = searchParams.get('location');
     const studyLevelParam = searchParams.get('studyLevel');
     const courseParam = searchParams.get('course');
     const universityParam = searchParams.get('university');
     return (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 max-w-screen-2xl mx-auto p-4">
               <div className="w-full lg:w-1/4">
                    <FilterForm
                         location={locationParam}
                         studyLevel={studyLevelParam}
                         course={courseParam}
                         university={universityParam}
                    />
               </div>
               <div className="w-full lg:w-3/4">
                    <Searchdata
                         location={locationParam}
                         studyLevel={studyLevelParam}
                         course={courseParam}
                         university={universityParam}
                    />
               </div>
          </div>
     );
}

export default SearchView;
