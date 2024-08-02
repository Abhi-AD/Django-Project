import { useState } from 'react';

const courses = [
     {
          title: "Short course • 14th Current Literature – Here's What Germany Reads",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language and Literature (German, Germanic Languages except English)",
          language: "German",
          languageLevel: "German: B2, C1, C2",
          costs: "EUR 770",
          dates: "29 June - 24 July, 2025 (Registration Deadline 16 May, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Language course • 29th International Summer Academy",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language Course (including Literature and Culture Studies)",
          language: "German",
          languageLevel: "German: A2, B1, B2, C1, C2",
          costs: "EUR 770",
          dates: "1 June - 26 June, 2025 (Registration Deadline 18 April, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Language course • 29th International Summer Academy",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language Course (including Literature and Culture Studies)",
          language: "German",
          languageLevel: "German: A2, B1, B2, C1, C2",
          costs: "EUR 770",
          dates: "1 June - 26 June, 2025 (Registration Deadline 18 April, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Short course • 14th Current Literature – Here's What Germany Reads",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language and Literature (German, Germanic Languages except English)",
          language: "German",
          languageLevel: "German: B2, C1, C2",
          costs: "EUR 770",
          dates: "29 June - 24 July, 2025 (Registration Deadline 16 May, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Language course • 29th International Summer Academy",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language Course (including Literature and Culture Studies)",
          language: "German",
          languageLevel: "German: A2, B1, B2, C1, C2",
          costs: "EUR 770",
          dates: "1 June - 26 June, 2025 (Registration Deadline 18 April, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Language course • 29th International Summer Academy",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language Course (including Literature and Culture Studies)",
          language: "German",
          languageLevel: "German: A2, B1, B2, C1, C2",
          costs: "EUR 770",
          dates: "1 June - 26 June, 2025 (Registration Deadline 18 April, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Short course • 14th Current Literature – Here's What Germany Reads",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language and Literature (German, Germanic Languages except English)",
          language: "German",
          languageLevel: "German: B2, C1, C2",
          costs: "EUR 770",
          dates: "29 June - 24 July, 2025 (Registration Deadline 16 May, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Language course • 29th International Summer Academy",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language Course (including Literature and Culture Studies)",
          language: "German",
          languageLevel: "German: A2, B1, B2, C1, C2",
          costs: "EUR 770",
          dates: "1 June - 26 June, 2025 (Registration Deadline 18 April, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Language course • 29th International Summer Academy",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language Course (including Literature and Culture Studies)",
          language: "German",
          languageLevel: "German: A2, B1, B2, C1, C2",
          costs: "EUR 770",
          dates: "1 June - 26 June, 2025 (Registration Deadline 18 April, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Short course • 14th Current Literature – Here's What Germany Reads",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language and Literature (German, Germanic Languages except English)",
          language: "German",
          languageLevel: "German: B2, C1, C2",
          costs: "EUR 770",
          dates: "29 June - 24 July, 2025 (Registration Deadline 16 May, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Language course • 29th International Summer Academy",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language Course (including Literature and Culture Studies)",
          language: "German",
          languageLevel: "German: A2, B1, B2, C1, C2",
          costs: "EUR 770",
          dates: "1 June - 26 June, 2025 (Registration Deadline 18 April, 2025)",
          image: "https://via.placeholder.com/150"
     },
     {
          title: "Language course • 29th International Summer Academy",
          university: "Martin Luther University Halle-Wittenberg • Lutherstadt Wittenberg",
          subject: "German Language Course (including Literature and Culture Studies)",
          language: "German",
          languageLevel: "German: A2, B1, B2, C1, C2",
          costs: "EUR 770",
          dates: "1 June - 26 June, 2025 (Registration Deadline 18 April, 2025)",
          image: "https://via.placeholder.com/150"
     },
];

const App = () => {
     const [viewType, setViewType] = useState('grid');

     const handleViewChange = (view) => {
          setViewType(view);
     };

     return (
          <div className="p-4 min-h-screen">
               <h1 className="text-xl font-bold mb-4">100000 results for your criteria</h1>
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
                         {courses.map((course, index) => (
                              <div key={index} className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                   <img className=" w-full h-40  object-cover" src={course.image} alt={course.title} />
                                   <div className="p-6 flex-1">
                                        <h2 className="text-xl font-semibold mb-2 text-black">{course.title}</h2>
                                        <p className="text-gray-700 mb-1"><strong>University:</strong> {course.university}</p>
                                        <p className="text-gray-600 mb-1"><strong>Language:</strong> {course.language}</p>
                                        <p className="text-gray-600 mb-1"><strong>Language Level:</strong> {course.languageLevel}</p>
                                        <p className="text-gray-600 mb-1"><strong>Costs:</strong> {course.costs}</p>
                                        <p className="text-gray-600"><strong>Date(s):</strong> {course.dates}</p>
                                        <p className="text-blue-500 hover:underline cursor-pointer">View more</p>


                                   </div>
                              </div>
                         ))}
                    </div>
               )
                    : (
                         <div className="space-y-4">
                              {courses.map((course, index) => (
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

export default App;
