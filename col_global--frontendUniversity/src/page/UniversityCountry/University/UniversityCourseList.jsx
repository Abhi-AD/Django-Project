import { useState } from 'react';
import { Link } from 'react-router-dom';

const UniversityCourseList = () => {
     const [visibleRows, setVisibleRows] = useState(4);
     const [isExpanded, setIsExpanded] = useState(false);

     const rows = [
          { program: "Certificate in Data Science", fee: "1020", duration: "4 Years" },
          { program: "Associate Degree in Computer Science", fee: "$800", duration: "4 Years" },
          { program: "Bachelor of Science in Mathematics", fee: "$15000", duration: "4 Years" },
          { program: "Master of Business Administration", fee: "$2000", duration: "4 Years" },
          { program: "Master of Science in Engineering", fee: "$2500", duration: "4 Years" },
          { program: "PhD in Physics", fee: "1000", duration: "4 Years" },
          { program: "PhD in Economics", fee: "10200", duration: "4 Years" },
          { program: "Doctorate in Psychology", fee: "10400", duration: "4 Years" },
          { program: "Doctorate in Chemistry", fee: "10600", duration: "4 Years" },
          { program: "Doctorate in Political Science", fee: "10800", duration: "4 Years" },
          { program: "Postgraduate Diploma in Management", fee: "$4000000", duration: "4 Years" },
          { program: "Postgraduate Certificate in Education", fee: "$4200200", duration: "4 Years" },
          { program: "Executive MBA", fee: "$1234", duration: "4 Years" },
          { program: "Master of Fine Arts", fee: "$47700", duration: "4 Years" },
          { program: "Master of Public Health", fee: "$4900", duration: "4 Years" },
          { program: "Master of Architecture", fee: "$5100100", duration: "4 Years" },
          { program: "Master of International Relations", fee: "$5300300", duration: "4 Years" },
          { program: "Doctorate in Engineering", fee: "$5500500", duration: "4 Years" },
          { program: "Doctorate in History", fee: "$5700700", duration: "4 Years" },
          { program: "Doctorate in Sociology", fee: "$5900900", duration: "4 Years" },
     ];

     const handleSeeMoreClick = () => {
          if (isExpanded) {
               setVisibleRows(4);
               setIsExpanded(false);
          } else {
               setVisibleRows(rows.length);
               setIsExpanded(true);
          }
     };

     return (
          <div className="paddingbuttom">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {rows.slice(0, visibleRows).map((row, index) => (
                         <div key={index} className="rounded-lg border p-4 flex flex-col gap-4">
                              <Link to={`/country/course`} className="block hover:underline text-lg font-medium text-blue-600">
                                   {row.program}
                              </Link>
                              <div className='flex justify-between text-sm md:text-base'>
                                   <p className="text-gray-500">Duration: {row.duration}</p>
                                   <p className="text-gray-700">{row.fee}</p>
                              </div>
                         </div>
                    ))}
               </div>

               <button
                    onClick={handleSeeMoreClick}
                    className=" px-4 py-2 text-blue-500  rounded-lg hover:underline text-sm md:text-base"
               >
                    {isExpanded ? "See Less" : "See More"}
               </button>
          </div>
     );
};

export default UniversityCourseList;
