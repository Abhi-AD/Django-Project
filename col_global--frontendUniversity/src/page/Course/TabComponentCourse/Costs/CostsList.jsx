import { useState } from 'react';

const CostsList = () => {
     const [visibleRows, setVisibleRows] = useState(3);

     const rows = [
          { costs: "In-State Tuition", fee: "$2603 per year" },
          { costs: "Out-of-State Tuition", fee: "$5000 per year" },
          { costs: "Books and Supplies", fee: "$1200 per year" },
          { costs: "Room and Board", fee: "$8000 per year" },
          { costs: "Transportation", fee: "$1000 per year" },
          { costs: "Personal Expenses", fee: "$2000 per year" },
          { costs: "Health Insurance", fee: "$1500 per year" },
          { costs: "Lab Fees", fee: "$500 per year" },
          { costs: "Activity Fees", fee: "$300 per year" },
          { costs: "Miscellaneous", fee: "$700 per year" }
     ];

     const handleSeeMoreClick = () => {
          setVisibleRows((prevVisibleRows) => Math.min(prevVisibleRows + 5, rows.length));
     };

     const handleSeeLessClick = () => {
          setVisibleRows((prevVisibleRows) => Math.max(prevVisibleRows - 5, 3));
     };

     return (
          <div className='flex flex-col gap-2'>
               <p className='font-bold text-lg'>Average Net Price by Household Income</p>
               <div>
                    <table className="min-w-full text-left">
                         <thead>
                              <tr>
                                   <th className="w-1/2">List</th>
                                   <th className="w-1/2">Average Costs ($)</th>
                              </tr>
                         </thead>
                         <tbody>
                              {rows.slice(0, visibleRows).map((row, index) => (
                                   <tr key={index}>
                                        <td className="font-bold">{row.costs}</td>
                                        <td className="">{row.fee}</td>
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

export default CostsList;
