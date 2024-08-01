import { FilterForm, Searchdata } from '../import';

const SearchView = () => {
     return (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 max-w-screen-2xl mx-auto p-4">
               <div className="w-full lg:w-1/4">
                    <FilterForm />
               </div>
               <div className="w-full lg:w-3/4">
                    <Searchdata />
               </div>
          </div>
     );
}

export default SearchView;
