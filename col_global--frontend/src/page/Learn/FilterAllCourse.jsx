import { useState } from "react";

const FilterAllCourse = () => {
     const [showMoreSubject, setShowMoreSubject] = useState(false);
     const [showMoreLanguage, setShowMoreLanguage] = useState(false);

     return (
          <div className="p-4 max-w-xs">
               <h2 className="text-lg font-semibold mb-4">Filter by</h2>
               <div className="mb-4">
                    <h3 className="text-md font-medium mb-2">Subject</h3>
                    <div>
                         <label className="block">
                              <input type="checkbox" className="mr-2" /> Business (2,179)
                         </label>
                         <label className="block">
                              <input type="checkbox" className="mr-2" /> Computer Science (1,397)
                         </label>
                         <label className="block">
                              <input type="checkbox" className="mr-2" /> Data Science (993)
                         </label>
                         <label className="block">
                              <input type="checkbox" className="mr-2" /> Information Technology (763)
                         </label>
                         {showMoreSubject && (
                              <>
                                   <label className="block">
                                        <input type="checkbox" className="mr-2" /> Marketing (600)
                                   </label>
                                   <label className="block">
                                        <input type="checkbox" className="mr-2" /> Finance (450)
                                   </label>
                              </>
                         )}
                    </div>
                    <button
                         className="text-blue-500 mt-2"
                         onClick={() => setShowMoreSubject(!showMoreSubject)}
                    >
                         {showMoreSubject ? 'Show less' : 'Show more'}
                    </button>
               </div>
               <div>
                    <h3 className="text-md font-medium mb-2">Language</h3>
                    <div>
                         <label className="block">
                              <input type="checkbox" className="mr-2" /> English (6,642)
                         </label>
                         <label className="block">
                              <input type="checkbox" className="mr-2" /> French (5,525)
                         </label>
                         <label className="block">
                              <input type="checkbox" className="mr-2" /> Spanish (5,485)
                         </label>
                         <label className="block">
                              <input type="checkbox" className="mr-2" /> Portuguese (Brazil) (5,185)
                         </label>
                         {showMoreLanguage && (
                              <>
                                   <label className="block">
                                        <input type="checkbox" className="mr-2" /> German (3,200)
                                   </label>
                                   <label className="block">
                                        <input type="checkbox" className="mr-2" /> Italian (2,900)
                                   </label>
                              </>
                         )}
                    </div>
                    <button
                         className="text-blue-500 mt-2"
                         onClick={() => setShowMoreLanguage(!showMoreLanguage)}
                    >
                         {showMoreLanguage ? 'Show less' : 'Show more'}
                    </button>
               </div>
          </div>
     );
};

export default FilterAllCourse;
