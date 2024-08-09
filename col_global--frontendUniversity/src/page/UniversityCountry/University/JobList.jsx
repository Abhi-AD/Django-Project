import { useState } from 'react';

const JobList = () => {
     const [visibleRows, setVisibleRows] = useState(3);

     const rows = [
          { jobs: "Barista (Part-Time)", salary: "$15,000 per year" },
          { jobs: "Library Assistant (Part-Time)", salary: "$12,000 per year" },
          { jobs: "Retail Associate (Part-Time)", salary: "$18,000 per year" },
          { jobs: "Tutor (Part-Time)", salary: "$20,000 per year" },
          { jobs: "Delivery Driver (Part-Time)", salary: "$25,000 per year" },
          { jobs: "Research Assistant (Full-Time)", salary: "$35,000 per year" },
          { jobs: "Teaching Assistant (Full-Time)", salary: "$30,000 per year" },
          { jobs: "Internship (Full-Time)", salary: "$28,000 per year" },
          { jobs: "Freelance Writer (Full-Time)", salary: "$40,000 per year" },
          { jobs: "Customer Service Representative (Full-Time)", salary: "$32,000 per year" }
     ];

     const handleSeeMoreClick = () => {
          setVisibleRows((prevVisibleRows) => Math.min(prevVisibleRows + 5, rows.length));
     };

     const handleSeeLessClick = () => {
          setVisibleRows((prevVisibleRows) => Math.max(prevVisibleRows - 5, 3));
     };

     return (
          <div className='flex flex-col gap-2'>
               <p className='font-bold text-lg'>Part-Time and Full-Time Jobs for Students</p>
               <div>
                    <table className="min-w-full text-left">
                         <thead>
                              <tr>
                                   <th className="w-1/2">Job Title</th>
                                   <th className="w-1/2">Average Salary ($)</th>
                              </tr>
                         </thead>
                         <tbody>
                              {rows.slice(0, visibleRows).map((row, index) => (
                                   <tr key={index}>
                                        <td className="font-bold">{row.jobs}</td>
                                        <td className="">{row.salary}</td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>

                    <div className="mt-4">
                         {visibleRows < rows.length && (
                              <button
                                   onClick={handleSeeMoreClick}
                                   className="text-blue-500 hover:underline mr-4"
                              >
                                   See More
                              </button>
                         )}
                         {visibleRows > 3 && (
                              <button
                                   onClick={handleSeeLessClick}
                                   className="text-blue-500 hover:underline"
                              >
                                   See Less
                              </button>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default JobList;
