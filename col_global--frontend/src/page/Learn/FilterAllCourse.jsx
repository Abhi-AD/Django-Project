import { useState } from "react";
import { cardFilterAllCourse } from "../../data/cardFilterAllCourse";

const FilterAllCourse = () => {
     const [showMore, setShowMore] = useState(false);
     const renderFilterOptions = (options) => {
          return options.slice(0, showMore ? options.length : 4).map((option, index) => (
               <label key={index} className="block">
                    <input type="checkbox" className="mr-2" /> {option.name} ({option.count})
               </label>
          ));
     };

     return (
          <div className="p-4 max-w-xs">
               <h2 className="text-lg font-semibold mb-4">Filter by</h2>

               {Object.entries(cardFilterAllCourse).map(([category, options], idx) => (
                    <div key={idx} className="mb-4">
                         <h3 className="text-md font-medium mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                         <div>{renderFilterOptions(options)}</div>
                         <button
                              className="text-blue-500 mt-2"
                              onClick={() => setShowMore(!showMore)}
                         >
                              {showMore ? 'Show less' : 'Show more'}
                         </button>
                    </div>
               ))}
          </div>
     );
};

export default FilterAllCourse;
