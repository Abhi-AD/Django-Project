import { useState } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';
import { Link } from 'react-router-dom';

const TableWithSeeMoreCourse = () => {
     const [visibleRows, setVisibleRows] = useState(3);
     const { DarkMode } = useDarkMode();

     const rows = [
          { course: "Certificate in Data Science", university: ["Harvard University", "Stanford University"], duration: "6 months", Scholarship: 'Available' },
          { course: "Associate Degree in Computer Science", university: ["Massachusetts Institute of Technology", "California Institute of Technology"], duration: "2 years", Scholarship: 'None' },
          { course: "Bachelor of Science in Mathematics", university: ["University of Pennsylvania", "Princeton University"], duration: "4 years", Scholarship: 'Available' },
          { course: "Master of Business Administration", university: ["University of Chicago", "Yale University"], duration: "2 years", Scholarship: 'Available' },
          { course: "Master of Science in Engineering", university: ["Columbia University", "University of California, Berkeley"], duration: "2 years", Scholarship: 'None' },
          { course: "PhD in Physics", university: ["University of Oxford", "University of Cambridge"], duration: "4 years", Scholarship: 'Available' },
          { course: "PhD in Economics", university: ["London Business School", "New York University"], duration: "4 years", Scholarship: 'None' },
          { course: "Doctorate in Psychology", university: ["Johns Hopkins University", "University of California, Los Angeles"], duration: "4 years", Scholarship: 'Available' },
          { course: "Doctorate in Chemistry", university: ["Georgetown University", "University of Michigan"], duration: "4 years", Scholarship: 'None' },
          { course: "Doctorate in Political Science", university: ["Harvard University", "University of California, San Diego"], duration: "4 years", Scholarship: 'Available' },
          { course: "Postgraduate Diploma in Management", university: ["Stanford University", "Princeton University"], duration: "1 year", Scholarship: 'Available' },
          { course: "Postgraduate Certificate in Education", university: ["University of Chicago", "Yale University"], duration: "1 year", Scholarship: 'Available' },
          { course: "Executive MBA", university: ["Columbia University", "University of Oxford"], duration: "1.5 years", Scholarship: 'None' },
          { course: "Master of Fine Arts", university: ["University of Cambridge", "London Business School"], duration: "2 years", Scholarship: 'Available' },
          { course: "Master of Public Health", university: ["New York University", "Johns Hopkins University"], duration: "2 years", Scholarship: 'None' },
          { course: "Master of Architecture", university: ["University of California, Los Angeles", "Georgetown University"], duration: "2 years", Scholarship: 'Available' },
          { course: "Master of International Relations", university: ["University of Michigan", "Harvard University"], duration: "2 years", Scholarship: 'None' },
          { course: "Doctorate in Engineering", university: ["University of California, San Diego", "Stanford University"], duration: "4 years", Scholarship: 'Available' },
          { course: "Doctorate in History", university: ["University of Pennsylvania", "University of Chicago"], duration: "4 years", Scholarship: 'None' },
          { course: "Doctorate in Sociology", university: ["Yale University", "Massachusetts Institute of Technology"], duration: "4 years", Scholarship: 'Available' },
     ];

     const handleSeeMoreClick = () => {
          setVisibleRows((prevVisibleRows) => Math.min(prevVisibleRows + 5, rows.length));
     };

     return (
          <div>
               <table id="course-university-table" className={`min-w-full text-left ${DarkMode ? '' : 'bg-white border border-gray-300'}`}>
                    <thead>
                         <tr>
                              <th className="px-4 py-2 border border-gray-300">S.N</th>
                              <th className="px-4 py-2 border border-gray-300">Available Course</th>
                              <th className="px-4 py-2 border border-gray-300">University</th>
                              <th className="px-4 py-2 border border-gray-300">Scholarship</th>
                         </tr>
                    </thead>
                    <tbody>
                         {rows.slice(0, visibleRows).map((row, index) => (
                              <tr key={index}>
                                   <td className={`px-4 py-2 border ${DarkMode ? 'text-white' : 'text-gray-800'} border-gray-300`}>
                                        {index + 1 + (visibleRows === rows.length ? 0 : (Math.max(visibleRows - rows.length, 0)))}
                                   </td>
                                   <td className={`px-4 py-2 border ${DarkMode ? 'text-white' : 'text-gray-800'} border-gray-300 hover:underline cursor-pointer`}>
                                        <Link to={`/country/course`}>{row.course}</Link>
                                   </td>
                                   <td className={`px-4 py-2 border ${DarkMode ? 'text-white' : 'text-gray-800'} border-gray-300`}>
                                        {row.university.join(', ')}
                                   </td>
                                   <td className={`px-4 py-2 border ${DarkMode ? 'text-white' : 'text-gray-800'} border-gray-300`}>{row.Scholarship}</td>
                              </tr>
                         ))}
                    </tbody>
               </table>

               {visibleRows < rows.length && (
                    <button
                         onClick={handleSeeMoreClick}
                         className="px-4 py-2 text-blue-500 hover:underline"
                    >
                         See More
                    </button>
               )}
          </div>
     );
};

export default TableWithSeeMoreCourse;
